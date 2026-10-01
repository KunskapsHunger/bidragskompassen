/* Bidragskompassen – fördjupning: generic calculator renderer. Fields (falt.js) feed a registered
 * module SB.calc[<modul>].berakna(values); the result panel shows amount, filled-in formula, parts
 * bar, breakdown rows, extra blocks and warnings. Examples, reset, notes and a table follow. The
 * result is announced politely after the values settle (never per keystroke). */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  SB.fd = SB.fd || {};
  var ANNOUNCE_MS = 900;

  function notes(list) {
    return (list || []).map(function (n) {
      return typeof n === 'string' ? h('p', { text: n }) : h('p', null, [h('strong', { text: n.rubrik + ': ' }), n.text]);
    });
  }

  function table(t) {
    if (!t) return null;
    return h('div', { class: 'fd-table' }, [
      h('table', null, [
        h('caption', { text: t.rubrik }),
        h('thead', null, h('tr', null, t.kolumner.map(function (c) { return h('th', { scope: 'col', text: c }); }))),
        h('tbody', null, t.rader.map(function (r) {
          return h('tr', null, r.map(function (c, i) { return i === 0 ? h('th', { scope: 'row', text: c }) : h('td', { text: c }); }));
        }))
      ]),
      t.fotnot ? h('p', { class: 'small soft fd-table__note', text: t.fotnot }) : null
    ]);
  }

  /** Result panel – rebuilt from the module's answer each time (textContent only). */
  function paintResult(panel, k, r) {
    var unit = r.enhet || 'kr';
    var ok = !r.fel;
    dom.append(dom.clear(panel.amount), [
      h('span', { class: 'fd-amount__num', text: ok ? core.formatNumber(r.resultat, 0) : '—' }),
      ok ? h('span', { class: 'fd-amount__unit', text: ' ' + unit }) : null
    ]);
    panel.summary.textContent = ok ? (r.sammanfattning || '') : 'Kontrollera de angivna värdena.';
    panel.error.hidden = ok;
    panel.error.textContent = r.fel || '';
    var body = panel.body;
    dom.clear(body);
    if (!ok) return;
    if (r.formel) {
      body.appendChild(h('div', { class: 'fd-formula' }, [
        h('span', { class: 'label-caps fd-formula__label', text: 'Så räknar vi' }),
        h('p', { class: 'fd-formula__text', text: r.formel }),
        r.forklaring ? h('p', { class: 'small fd-formula__more', text: r.forklaring }) : null
      ]));
    } else if (r.forklaring) {
      body.appendChild(h('p', { class: 'small fd-formula__more', text: r.forklaring }));
    }
    var delar = (r.delar || []).filter(function (d) { return typeof d.varde === 'number'; });
    if (delar.length > 1) {
      var sum = delar.reduce(function (s, d) { return s + d.varde; }, 0);
      body.appendChild(h('div', { class: 'fd-bar', 'aria-hidden': 'true' }, delar.map(function (d, i) {
        return h('span', { class: 'fd-bar__part fd-bar__part--' + (i % 3), style: { width: (sum > 0 ? d.varde / sum * 100 : 0).toFixed(2) + '%' } });
      })));
      body.appendChild(h('p', { class: 'fd-bar__legend small' }, delar.map(function (d) {
        return h('span', { text: d.etikett + ': ' + core.formatKr(d.varde) });
      })));
    }
    if (r.rader && r.rader.length) {
      body.appendChild(h('dl', { class: 'fd-rows' }, r.rader.map(function (x) {
        return h('div', null, [h('dt', { text: x.etikett }), h('dd', { text: x.varde })]);
      })));
    }
    (r.extra || []).forEach(function (x) {
      body.appendChild(h('div', { class: 'fd-extra' }, [
        h('p', { class: 'label-caps fd-extra__label', text: x.rubrik }),
        h('p', { class: 'fd-extra__value', text: x.varde }),
        x.text ? h('p', { class: 'small', text: x.text }) : null
      ]));
    });
    if (r.varningar && r.varningar.length) {
      body.appendChild(h('ul', { class: 'fd-warnings' }, r.varningar.map(function (w) { return h('li', { text: w }); })));
    }
  }

  function render(host, guide, k) {
    var mod = SB.calc && SB.calc[k.modul];
    if (!mod || typeof mod.berakna !== 'function') {
      host.appendChild(h('p', { class: 'note', text: 'Räknaren kunde inte laddas. Ladda om sidan, eller använd formeln och tabellen nedan.' }));
      dom.append(host, [h('div', { class: 'fd-notes' }, notes(k.forbehall)), table(k.tabell)]);
      return;
    }
    var fields = (k.falt || []).map(function (f) { return SB.fd.falt.build(k.id, f); });
    var form = h('form', { class: 'fd-calc__form', novalidate: true, 'aria-label': 'Värden för ' + (k.flik || k.rubrik) },
      [h('div', { class: 'fd-fields' }, fields.map(function (x) { return x.el; }))]);
    var reset = h('button', { type: 'button', class: 'link-btn fd-calc__reset', text: 'Återställ värden' });
    form.appendChild(reset);

    var panel = {
      amount: h('p', { class: 'fd-amount' }),
      summary: h('p', { class: 'fd-result__summary' }),
      error: h('p', { class: 'fd-result__error', hidden: true }),
      body: h('div', { class: 'fd-result__body' })
    };
    var live = h('p', { class: 'sr-only', 'aria-live': 'polite', 'aria-atomic': 'true' });
    var result = h('div', { class: 'fd-calc__result on-dark' }, [
      h('p', { class: 'label-caps fd-result__kicker', text: k.resultatRubrik || 'Resultat' }),
      panel.amount, panel.summary, panel.error, panel.body,
      k.resultatNotis ? h('p', { class: 'fd-result__note small', text: k.resultatNotis }) : null
    ]);

    var timer = null;
    var lastSaid = '';
    function announce(r) {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        var text = r.fel ? 'Kontrollera värdena. ' + r.fel
          : 'Resultat: ' + core.formatKr(r.resultat).replace(/kr$/, r.enhet || 'kr') + '. ' + (r.sammanfattning || '');
        if (text !== lastSaid) { lastSaid = text; live.textContent = text; }
      }, ANNOUNCE_MS);
    }

    function update(say) {
      var raw = {};
      fields.forEach(function (x) { raw[x.field.id] = core.parseFieldValue(x.field, x.read()); });
      var values = Object.freeze(raw);
      var errors = core.validateFields(k.falt, values);
      fields.forEach(function (x) {
        x.setVisible(core.isFieldVisible(x.field, values));
        var e = errors.filter(function (er) { return er.id === x.field.id; })[0];
        x.setError(e ? e.text : '');
        if (x.after) x.after(values);
      });
      var r;
      try { r = errors.length ? { fel: errors.map(function (e) { return e.text; }).join(' ') } : mod.berakna(values); }
      catch (err) { r = { fel: 'Räknaren kunde inte räkna på de här värdena.' }; }
      paintResult(panel, k, r || { fel: 'Inget resultat.' });
      if (say) announce(r || {});
    }

    function load(values) {
      fields.forEach(function (x) { x.write(values[x.field.id]); });
      update(true);
    }

    form.addEventListener('input', function () { update(true); });
    form.addEventListener('change', function () { update(true); });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    reset.addEventListener('click', function () { load(core.fieldDefaults(k.falt)); dom.announce('Värdena är återställda.'); });

    var examples = (k.exempel || []).length ? h('div', { class: 'fd-examples', role: 'group', 'aria-label': 'Prova räkneexempel' },
      k.exempel.map(function (ex) {
        var b = h('button', { type: 'button', class: 'chip fd-example', text: 'Exempel: ' + ex.etikett.charAt(0).toLowerCase() + ex.etikett.slice(1) });
        b.addEventListener('click', function () { load(core.applyExample(k.falt, ex)); });
        return b;
      })) : null;

    dom.append(host, [
      k.formel ? h('div', { class: 'fd-formelbox' }, [h('span', { class: 'label-caps', text: k.formel.rubrik || 'Formeln' }), h('p', { text: k.formel.text })]) : null,
      h('div', { class: 'fd-calc' }, [form, result]),
      live,
      examples,
      (k.forbehall || []).length ? h('div', { class: 'fd-notes' }, notes(k.forbehall)) : null,
      table(k.tabell)
    ]);
    fields.forEach(function (x) { x.write(k.falt.filter(function (f) { return f.id === x.field.id; })[0].standard); });
    update(false);
  }

  SB.fd.kalkylator = { render: render, paintResult: paintResult };
})();

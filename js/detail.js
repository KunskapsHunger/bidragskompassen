/* Bidragskompassen – detail drawer (native <dialog>), deep link #bidrag/<id>, copy link, print. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var GILTIGHET = { ny: 'Nytt bidrag', upphor: 'Sista omgången är utlyst', pausad: 'Pausat just nu', upphort: 'Har upphört' };

  var app = null;
  var dialog = null;
  var body = null;
  var currentId = null;
  var trigger = null;
  var cameFromHash = false;
  var closeTimer = null;

  function section(title, children, cls) {
    if (!children || (Array.isArray(children) && !children.filter(Boolean).length)) return null;
    return h('section', { class: 'dsec' + (cls ? ' ' + cls : '') }, [h('h3', { class: 'dsec__title', text: title })].concat(children));
  }
  function para(text, cls) { return text ? h('p', { class: cls || null, text: text }) : null; }
  function bullets(items, cls) {
    return items && items.length ? h('ul', { class: 'dlist ' + (cls || '') }, items.map(function (t) { return h('li', { text: t }); })) : null;
  }

  function eligTable(g, organiser) {
    var org = core.findById(core.ORGANISERS, organiser);
    return h('table', { class: 'elig-table' }, [
      h('caption', { class: 'sr-only', text: 'Vem kan söka bidraget' }),
      h('thead', null, h('tr', null, [h('th', { scope: 'col', text: 'Huvudman' }), h('th', { scope: 'col', text: 'Kan söka?' })])),
      h('tbody', null, core.SOKANDE.map(function (s) {
        var v = g.sokande[s.id];
        var mine = org && org.keys.indexOf(s.id) !== -1;
        return h('tr', { class: mine ? 'is-mine' : null }, [
          h('th', { scope: 'row' }, [s.label, mine ? h('span', { class: 'elig-table__you', text: ' (ni)' }) : null]),
          h('td', null, [h('span', { class: 'elig-table__sym', 'aria-hidden': 'true', text: core.ELIG[v].symbol + ' ' }), core.ELIG[v].label])
        ]);
      }))
    ]);
  }

  function statusBlock(g) {
    var st = core.grantStatus(g, app.today);
    var dl = core.nextDeadline(g, app.today);
    var org = core.findById(core.ORGANISERS, app.get().organiser);
    var cannot = app.get().organiser !== 'alla' && !core.canApply(g, app.get().organiser);
    return h('div', { class: 'dstatus' }, [
      dom.statusTag(st),
      h('span', { class: 'dstatus__text', text: core.statusText(st) + (dl && st.code !== 'open' ? ' · nästa sista dag ' + core.formatDate(dl) : '') }),
      cannot ? h('p', { class: 'dstatus__cannot' }, [h('span', { 'aria-hidden': 'true', text: '⊘ ' }), org.cannot + '.']) : null
    ]);
  }

  function render(g) {
    dom.clear(body);
    var org = app.get().organiser;
    var steps = g.hurDuGor.length ? h('ol', { class: 'dsteps' }, g.hurDuGor.map(function (t, i) {
      return h('li', null, [h('span', { class: 'dsteps__num', 'aria-hidden': 'true', text: dom.pad2(i + 1) }), h('span', { text: t })]);
    })) : null;
    var sources = g.kallor.length ? h('ul', { class: 'dsources' }, g.kallor.map(function (k) {
      return h('li', null, [dom.safeLink(k.url, k.titel), k.url ? null : h('span', { class: 'small soft', text: ' (länk saknas)' })]);
    })) : null;

    dom.append(body, [
      h('header', { class: 'dhead' }, [
        h('p', { class: 'dhead__meta label-caps' }, [g.myndighet + ' · ' + core.labelOf(core.TYPER, g.typ),
          GILTIGHET[g.giltighet] ? h('span', { class: 'card__badge', text: GILTIGHET[g.giltighet] }) : null]),
        h('h2', { class: 'dhead__title', id: 'detail-title', tabindex: '-1', text: g.kortnamn }),
        g.namn !== g.kortnamn ? h('p', { class: 'dhead__official small' }, [h('span', { class: 'soft', text: 'Officiellt namn: ' }), g.namn]) : null,
        statusBlock(g)
      ]),
      para(g.sammanfattning, 'ingress dsum'),
      section('Varför finns bidraget?', [para(g.syfte)]),
      section('Vem kan söka?', [eligTable(g, org), para(g.sokandeNot, 'dnote-text')]),
      section('Skolformer', [h('ul', { class: 'dtags' }, g.skolformer.map(function (s) { return h('li', { text: core.labelOf(core.SKOLFORMER, s) }); }))]),
      section('Områden', [h('ul', { class: 'dtags' }, g.omraden.map(function (s) { return h('li', { text: core.labelOf(core.OMRADEN, s) }); }))]),
      section('Hur mycket pengar?', [para(g.belopp)]),
      section('Viktiga datum', g.perioder.length ? [SB.timeline.render(g, app.today)] : [para('Datum är inte kända än.')]),
      section('Så gör ni', [steps], 'dsec--steps'),
      section('Villkor', [bullets(g.villkor)]),
      section('Redovisning', [para(g.redovisning)]),
      section('Vanliga fallgropar', [bullets(g.fallgropar, 'dlist--warn')]),
      g.osakerhet ? h('aside', { class: 'note dosak', 'aria-label': 'Bra att veta' }, [h('p', { class: 'label-caps', text: 'Bra att veta' }), para(g.osakerhet)]) : null,
      section('Källor', [sources]),
      h('p', { class: 'dchecked small' }, [h('span', { class: 'label-caps', text: 'Senast kontrollerad ' }),
        g.senastKontrollerad ? h('time', { datetime: g.senastKontrollerad, text: core.formatDate(g.senastKontrollerad, { long: true }) }) : 'Okänt'])
    ]);
  }

  function isOpen() { return !!(dialog && dialog.open); }

  function open(id, opts) {
    var g = app.byId[id];
    if (!g) return;
    var o = opts || {};
    clearTimeout(closeTimer);
    dialog.classList.remove('is-closing');
    if (!isOpen()) {
      trigger = o.trigger || (document.activeElement !== document.body ? document.activeElement : null);
      cameFromHash = !!o.fromHash;
    }
    currentId = id;
    render(g);
    if (!isOpen()) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      document.documentElement.classList.add('has-drawer');
    }
    body.scrollTop = 0;
    if (!o.fromHash) app.replaceHash(core.grantHash(id));
    var title = document.getElementById('detail-title');
    if (title) title.focus({ preventScroll: true });
  }

  function restoreHash() {
    var cat = app.get().catalog;
    app.replaceHash(core.isDefaultState(cat) ? '' : core.encodeCatalogState(cat));
  }

  function close(opts) {
    if (!isOpen()) return;
    var o = opts || {};
    if (!o.keepHash) restoreHash();
    dialog.classList.add('is-closing');
    var finish = function () {
      dialog.classList.remove('is-closing');
      if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
      document.documentElement.classList.remove('has-drawer');
      currentId = null;
      if (trigger && document.contains(trigger) && typeof trigger.focus === 'function') trigger.focus();
      else document.getElementById('main').focus({ preventScroll: true });
      trigger = null;
    };
    closeTimer = window.setTimeout(finish, SB.motion.isReduced() ? 0 : 260);
  }

  function copyLink(btn) {
    var url = window.location.href.split('#')[0] + core.grantHash(currentId);
    var done = function () {
      btn.textContent = 'Länken är kopierad ✓';
      dom.announce('Länken är kopierad.');
      window.setTimeout(function () { btn.textContent = 'Kopiera länk'; }, 2200);
    };
    var fallback = function () {
      var ta = h('textarea', { class: 'sr-only', 'aria-hidden': 'true' });
      ta.value = url;
      dialog.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      dialog.removeChild(ta);
      if (ok) done(); else window.prompt('Kopiera länken:', url);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fallback);
    else fallback();
  }

  function init(a) {
    app = a;
    dialog = document.getElementById('detail');
    body = document.getElementById('detail-body');
    document.getElementById('detail-close').addEventListener('click', function () { close(); });
    document.getElementById('detail-print').addEventListener('click', function () { window.print(); });
    var copyBtn = document.getElementById('detail-copy');
    copyBtn.addEventListener('click', function () { copyLink(copyBtn); });
    dialog.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) close(); });

    /* Any in-page link to a grant opens the drawer (modifier-clicks keep native behaviour). */
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a[href^="#bidrag/"]') : null;
      if (!a) return;
      var r = core.decodeHash(a.getAttribute('href'));
      if (r.route !== 'grant' || !app.byId[r.id]) return;
      e.preventDefault();
      open(r.id, { trigger: a });
    });

    app.subscribe(function (next, prev) {
      if (isOpen() && currentId && next.organiser !== prev.organiser) render(app.byId[currentId]);
    });
  }

  SB.detail = { init: init, open: open, close: close, isOpen: isOpen };
})();

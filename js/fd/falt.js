/* Bidragskompassen – fördjupning: calculator fields. Types: val (select), tal (number), reglage
 * (range + number kept in sync), segment (radio group), kryss (checkbox). Each field exposes
 * read/write/setVisible/setError so the calculator stays generic. Labels on every input. */
(function () {
  'use strict';
  var SB = window.SB;
  var dom = SB.dom;
  var h = dom.h;
  SB.fd = SB.fd || {};

  var UNIT_WORDS = { '%': 'procent', 'mån': 'månader', kr: 'kronor' };
  var seq = 0;

  function uid(calcId, f) { seq += 1; return 'f-' + calcId + '-' + f.id + '-' + seq; }

  function helpEl(id, text) { return h('small', { class: 'fd-field__help', id: id, text: text || '' }); }

  function numberInput(id, f, labelText) {
    return h('input', {
      id: id, type: 'number', class: 'fd-input', min: f.min, max: f.max,
      step: f.steg === 'any' ? 'any' : (f.steg || 1),
      inputmode: f.steg === 'any' ? 'decimal' : 'numeric',
      'aria-label': labelText || null
    });
  }

  function build(calcId, f) {
    var id = uid(calcId, f);
    var helpId = id + '-help';
    var errId = id + '-err';
    var err = h('p', { class: 'fd-field__error', id: errId, hidden: true });
    var help = helpEl(helpId, f.hjalp);
    var describe = [f.hjalp || f.typ === 'segment' ? helpId : null, errId].filter(Boolean).join(' ');
    var wrap;
    var api = { field: f };

    if (f.typ === 'val') {
      var sel = h('select', { id: id, class: 'fd-input', 'aria-describedby': describe },
        f.alternativ.map(function (a) { return h('option', { value: a.varde, text: a.etikett }); }));
      wrap = h('div', { class: 'fd-field' }, [h('label', { class: 'fd-field__label', for: id, text: f.etikett }), sel, help, err]);
      api.inputs = [sel];
      api.read = function () { return sel.value; };
      api.write = function (v) { sel.value = v; };
    } else if (f.typ === 'tal') {
      var inp = numberInput(id, f, null);
      inp.setAttribute('aria-describedby', describe);
      wrap = h('div', { class: 'fd-field' }, [
        h('label', { class: 'fd-field__label', for: id, text: f.etikett }),
        h('div', { class: 'fd-unit' }, [inp, f.enhet ? h('span', { class: 'fd-unit__text', 'aria-hidden': 'true', text: f.enhet }) : null]),
        help, err
      ]);
      api.inputs = [inp];
      api.read = function () { return inp.value; };
      api.write = function (v) { inp.value = v; };
    } else if (f.typ === 'reglage') {
      var range = h('input', { id: id, type: 'range', class: 'fd-range__slider', min: f.min, max: f.max, step: f.steg || 1, 'aria-describedby': describe });
      var num = numberInput(id + '-n', f, f.etikett + (f.enhet ? ', i ' + (UNIT_WORDS[f.enhet] || f.enhet) : ''));
      num.setAttribute('aria-describedby', describe);
      var split = f.delning ? h('p', { class: 'fd-split small', 'aria-hidden': 'true' }) : null;
      range.addEventListener('input', function () { num.value = range.value; });
      num.addEventListener('input', function () { if (num.validity.valid && num.value !== '') range.value = num.value; });
      wrap = h('div', { class: 'fd-field fd-field--wide' }, [
        h('label', { class: 'fd-field__label', for: id, text: f.etikett }),
        h('div', { class: 'fd-range' }, [range, h('div', { class: 'fd-unit' }, [num, f.enhet ? h('span', { class: 'fd-unit__text', 'aria-hidden': 'true', text: f.enhet }) : null])]),
        split, help, err
      ]);
      api.inputs = [range, num];
      api.read = function () { return num.value; };
      api.write = function (v) { num.value = v; range.value = v; };
      api.after = function (values) {
        if (!split) return;
        var v = Number(values[f.id]);
        if (!isFinite(v)) { split.textContent = ''; return; }
        split.textContent = f.delning[0] + ': ' + Math.round(f.max - v) + ' ' + (f.enhet || '') + ' · ' + f.delning[1] + ': ' + v + ' ' + (f.enhet || '');
      };
    } else if (f.typ === 'segment') {
      var name = id + '-r';
      var radios = f.alternativ.map(function (a) {
        return h('input', { type: 'radio', name: name, value: a.varde, class: 'fd-seg__input' });
      });
      wrap = h('fieldset', { class: 'fd-field fd-field--wide', 'aria-describedby': describe }, [
        h('legend', { class: 'fd-field__label', text: f.etikett }),
        h('div', { class: 'fd-seg' }, f.alternativ.map(function (a, i) {
          return h('label', { class: 'fd-seg__opt' }, [radios[i], h('span', { text: a.etikett })]);
        })),
        help, err
      ]);
      api.inputs = radios;
      api.read = function () { var r = radios.filter(function (x) { return x.checked; })[0]; return r ? r.value : ''; };
      api.write = function (v) { radios.forEach(function (r) { r.checked = r.value === v; }); };
      api.after = function (values) {
        var a = f.alternativ.filter(function (x) { return x.varde === values[f.id]; })[0];
        help.textContent = (a && a.hjalp) || f.hjalp || '';
      };
    } else {
      var box = h('input', { id: id, type: 'checkbox', class: 'fd-check__input', 'aria-describedby': describe });
      wrap = h('div', { class: 'fd-field fd-field--wide' }, [
        h('label', { class: 'fd-check', for: id }, [box, h('span', { text: f.etikett })]), f.hjalp ? help : null, err
      ]);
      api.inputs = [box];
      api.read = function () { return box.checked; };
      api.write = function (v) { box.checked = v === true; };
    }

    api.el = wrap;
    api.setVisible = function (on) { wrap.hidden = !on; };
    api.setError = function (text) {
      err.hidden = !text;
      err.textContent = text || '';
      api.inputs.forEach(function (i) { if (i.type !== 'radio') i.setAttribute('aria-invalid', String(!!text)); });
    };
    return api;
  }

  SB.fd.falt = { build: build };
})();

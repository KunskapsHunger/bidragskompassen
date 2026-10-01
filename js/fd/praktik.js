/* Bidragskompassen – fördjupning: process timeline, underlag checklist (in memory only, with a
 * progress count) and the sources & version block with the collected caveat. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  SB.fd = SB.fd || {};

  function process(steps) {
    return h('ol', { class: 'fd-process' }, (steps || []).map(function (s, i) {
      return h('li', { class: 'fd-process__step', 'data-reveal': true, style: { '--i': String(i) } }, [
        h('span', { class: 'fd-process__num', 'aria-hidden': 'true', text: dom.pad2(i + 1) }),
        h('h3', { class: 'fd-process__title' }, [h('span', { class: 'sr-only', text: 'Steg ' + (i + 1) + ': ' }), s.rubrik]),
        h('p', { text: s.text }),
        s.ref ? h('p', { class: 'fd-process__ref small', text: s.ref }) : null
      ]);
    }));
  }

  function checklist(guide) {
    var list = guide.underlag || [];
    if (!list.length) return null;
    var count = h('p', { class: 'fd-check__count', role: 'status', text: core.checklistText(0, list.length) });
    var boxes = list.map(function (text, i) {
      var id = 'underlag-' + i;
      var box = h('input', { type: 'checkbox', id: id, class: 'fd-check__input' });
      box.addEventListener('change', function () {
        var done = boxes.filter(function (b) { return b.box.checked; }).length;
        count.textContent = core.checklistText(done, list.length);
      });
      return { box: box, el: h('li', null, h('label', { class: 'fd-check', for: id }, [box, h('span', { text: text })])) };
    });
    return h('div', { class: 'fd-underlag' }, [
      h('div', null, [
        h('h3', { class: 'fd-underlag__title', text: guide.underlagRubrik || 'Underlag att ha till hands' }),
        h('p', { class: 'small', text: guide.underlagIngress || 'Använd listan när ni förbereder arbetet. Markeringarna sparas inte.' }),
        count
      ]),
      h('ul', { class: 'fd-underlag__list', 'aria-label': guide.underlagRubrik || 'Underlag' }, boxes.map(function (b) { return b.el; }))
    ]);
  }

  function render(host, guide) {
    dom.append(host, [process(guide.process), checklist(guide)]);
  }

  /** Sources, version stamp and the collected caveat. */
  function sources(guide) {
    var f = guide.forordning || {};
    return h('section', { class: 'fd-sources', id: 'kallor', 'aria-labelledby': 'kallor-title' }, h('div', { class: 'wrap fd-sources__grid' }, [
      h('div', null, [
        h('p', { class: 'label-caps fd-eyebrow', text: 'Källor och version' }),
        h('h2', { class: 'fd-sources__title', id: 'kallor-title' }, ['Gå vidare ', h('em', { text: 'till originalet.' })]),
        h('p', { class: 'fd-stamp small' }, [
          'Kontrollerad ' + core.formatDate(guide.kontrollerad, { long: true }) + '.',
          f.lydelse ? h('br') : null,
          f.lydelse ? (f.sfs || !f.etikett ? 'Förordningen ' : f.etikett + ': ') + f.lydelse + '.' : ''
        ])
      ]),
      h('div', null, [
        h('ul', { class: 'fd-sources__list' }, (guide.kallor || []).map(function (k) {
          return h('li', { class: 'fd-source' }, [dom.safeLink(k.url, k.titel, 'fd-source__link'), k.beskrivning ? h('p', { class: 'small', text: k.beskrivning }) : null]);
        })),
        guide.forbehall ? h('p', { class: 'note fd-sources__caveat' }, [h('strong', { text: 'Bra att veta: ' }), guide.forbehall]) : null
      ])
    ]));
  }

  SB.fd.praktik = { render: render, sources: sources };
})();

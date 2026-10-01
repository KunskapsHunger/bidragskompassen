/* Bidragskompassen – fördjupning: paragraph reader. Accordions are real buttons with aria-expanded;
 * search is diacritic-tolerant with <mark> highlights and a "no match" state; "Öppna alla"; deep links
 * via #p-<ref>; everything opens for printing and is restored afterwards. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  SB.fd = SB.fd || {};

  var items = [];      // [{ p, slug, el, btn, title, panel, open, hidden }]
  var guideRef = null;
  var ui = {};
  var preSearch = null;

  function setOpen(it, open) {
    it.open = open;
    it.btn.setAttribute('aria-expanded', String(open));
    it.panel.hidden = !open;
    it.el.classList.toggle('is-open', open);
  }

  function panelContent(it, q) {
    var p = it.p;
    var pr = core.praktikOf(p);
    var parts = (p.text || []).map(function (t) { return h('p', null, dom.highlight(t, q)); });
    if (p.lista && p.lista.length) parts.push(h('ul', { class: 'para__list' }, p.lista.map(function (t) { return h('li', null, dom.highlight(t, q)); })));
    if (pr) parts.push(h('div', { class: 'para__praktik' }, [h('strong', null, dom.highlight(pr.rubrik + ': ', q)), dom.highlight(pr.text, q)]));
    var f = guideRef.forordning || {};
    parts.push(h('p', { class: 'para__links small' }, [
      f.url ? dom.safeLink(f.url, 'Läs ' + p.ref + ' ' + (f.iText || 'i förordningen'), 'para__source') : null,
      h('a', { class: 'para__anchor', href: '#' + it.slug, 'aria-label': 'Länk direkt till ' + p.ref + ', ' + p.rubrik, text: 'Länk till avsnittet' })
    ]));
    return parts;
  }

  function paint(it, q) {
    dom.append(dom.clear(it.title), dom.highlight(it.p.rubrik, q));
    dom.append(dom.clear(it.panel), panelContent(it, q));
  }

  function updateToggle() {
    var shown = items.filter(function (it) { return !it.hidden; });
    ui.toggle.textContent = shown.length && shown.every(function (it) { return it.open; }) ? 'Stäng alla' : 'Öppna alla';
    ui.toggle.disabled = shown.length === 0;
  }

  function search() {
    var q = ui.input.value;
    var res = core.searchParagraphs(items.map(function (it) { return it.p; }), q);
    var active = res.tokens.length > 0;
    if (active && !preSearch) preSearch = items.map(function (it) { return it.open; });
    items.forEach(function (it, i) {
      it.hidden = !res.matches[i];
      it.el.hidden = it.hidden;
      if (active) setOpen(it, res.matches[i]);
      else if (preSearch) setOpen(it, preSearch[i]);
      paint(it, active ? q : '');
    });
    if (!active) preSearch = null;
    ui.count.textContent = active
      ? res.count + ' av ' + items.length + ' avsnitt matchar'
      : items.length + ' avsnitt · öppna en rubrik för att läsa';
    ui.none.hidden = res.count !== 0;
    updateToggle();
  }

  function item(p, slug) {
    var title = h('span', { class: 'para__title', text: p.rubrik });
    var btn = h('button', { type: 'button', class: 'para__btn', id: slug + '-btn', 'aria-expanded': 'false', 'aria-controls': slug + '-panel' }, [
      h('span', { class: 'para__ref', text: p.ref }), title, h('span', { class: 'para__icon', 'aria-hidden': 'true' })
    ]);
    var panel = h('div', { class: 'para__panel', id: slug + '-panel', hidden: true });
    var el = h('div', { class: 'para', id: slug }, [h('h3', { class: 'para__h' }, btn), panel]);
    var it = { p: p, slug: slug, el: el, btn: btn, title: title, panel: panel, open: false, hidden: false };
    btn.addEventListener('click', function () { setOpen(it, !it.open); updateToggle(); });
    return it;
  }

  function sidebar(guide) {
    var f = guide.forordning || {};
    return h('aside', { class: 'fd-read__side', 'aria-label': 'Ord och version' }, [
      (guide.begrepp || []).length ? h('h3', { class: 'fd-read__side-title', text: guide.begreppRubrik || 'Ord som återkommer' }) : null,
      (guide.begrepp || []).length ? h('dl', { class: 'fd-terms' }, guide.begrepp.map(function (b) {
        return h('div', null, [h('dt', { text: b.term }), h('dd', { text: b.forklaring })]);
      })) : null,
      h('p', { class: 'fd-stamp small' }, [
        f.lydelse ? 'Lydelse: ' + f.lydelse + '.' : '', f.lydelse ? h('br') : null,
        'Kontrollerad ' + core.formatDate(guide.kontrollerad, { long: true }) + '.'
      ]),
      h('a', { class: 'small', href: '#kallor' }, ['Källor och förbehåll', h('span', { 'aria-hidden': 'true', text: ' ↓' })])
    ]);
  }

  function render(host, guide) {
    guideRef = guide;
    var slugs = core.paragraphSlugs(guide.paragrafer);
    items = (guide.paragrafer || []).map(function (p, i) { return item(p, slugs[i]); });
    ui.input = h('input', { id: 'fd-search', type: 'search', class: 'fd-search__input', autocomplete: 'off', spellcheck: 'false',
      placeholder: 'Till exempel legitimation, lön eller återkrav', 'aria-describedby': 'fd-search-hint' });
    ui.toggle = h('button', { type: 'button', class: 'link-btn fd-search__toggle', text: 'Öppna alla' });
    ui.count = h('p', { class: 'fd-search__count small', role: 'status' });
    ui.none = h('div', { class: 'fd-search__none', hidden: true }, [
      h('p', { class: 'fd-search__none-title', text: 'Inga avsnitt matchar.' }),
      h('p', { text: 'Prova ett kortare ord eller ett annat ord för samma sak, till exempel ”lön” i stället för ”lönepåslag”.' })
    ]);
    ui.input.addEventListener('input', dom.debounce(search, 120));
    ui.input.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ui.input.value) { ui.input.value = ''; search(); } });
    ui.toggle.addEventListener('click', function () {
      var shown = items.filter(function (it) { return !it.hidden; });
      var open = !shown.every(function (it) { return it.open; });
      shown.forEach(function (it) { setOpen(it, open); });
      updateToggle();
    });

    host.appendChild(h('div', { class: 'fd-read' }, [
      sidebar(guide),
      h('div', { class: 'fd-read__main' }, [
        h('label', { class: 'label-caps fd-search__label', for: 'fd-search', text: 'Sök bland rubriker och förklaringar' }),
        h('div', { class: 'fd-search' }, [h('span', { class: 'fd-search__icon', 'aria-hidden': 'true', text: '⌕' }), ui.input]),
        h('p', { class: 'sr-only', id: 'fd-search-hint', text: 'Listan filtreras medan du skriver. Stavningen behöver inte vara exakt.' }),
        h('div', { class: 'fd-search__bar' }, [ui.count, ui.toggle]),
        ui.none,
        h('div', { class: 'fd-paras' }, items.map(function (it) { return it.el; }))
      ])
    ]));
    if (items[0]) setOpen(items[0], true);
    search();
    window.addEventListener('hashchange', followHash);
    window.addEventListener('beforeprint', openForPrint);
    window.addEventListener('afterprint', restoreAfterPrint);
  }

  /** "#p-9" → open that paragraph (clearing a search that hides it), scroll to it and focus its button. */
  function followHash() {
    var slug = window.location.hash.replace(/^#/, '');
    var it = items.filter(function (x) { return x.slug === slug; })[0];
    if (!it) return;
    if (it.hidden) { ui.input.value = ''; search(); }
    setOpen(it, true);
    updateToggle();
    window.setTimeout(function () {
      it.el.scrollIntoView({ behavior: SB.motion.isReduced() ? 'auto' : 'smooth', block: 'start' });
      it.btn.focus({ preventScroll: true });
    }, 60);
  }

  var printState = null;
  function openForPrint() {
    if (printState) return;
    printState = items.map(function (it) { return { open: it.open, hidden: it.hidden }; });
    items.forEach(function (it) { it.el.hidden = false; setOpen(it, true); paint(it, ''); });
  }
  function restoreAfterPrint() {
    if (!printState) return;
    var saved = printState;
    printState = null;
    items.forEach(function (it, i) { it.hidden = saved[i].hidden; it.el.hidden = it.hidden; setOpen(it, saved[i].open); });
    search();
  }

  SB.fd.paragrafer = { render: render, followHash: followHash, openForPrint: openForPrint, restoreAfterPrint: restoreAfterPrint };
})();

/* Bidragskompassen – catalog: search field, sort, view toggle, result cards with FLIP, empty state. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var POPULAR = ['lasning', 'lon-karriar', 'stod', 'utokad-tid'];

  function deadlineText(it, today) {
    var st = it.status;
    var ca = function (p) { return p && p.ungefar ? 'ca ' : ''; };
    switch (st.code) {
      case 'open':
        return st.closes
          ? 'Sista dag ' + ca(st.period) + core.formatDate(st.closes) + ' (' + core.relativeDays(st.daysLeft) + ')'
          : 'Löpande ansökan';
      case 'soon': return 'Öppnar ' + ca(st.period) + core.formatDate(st.opens) + ' (' + core.relativeDays(st.daysUntil) + ')';
      case 'closed': return st.next ? 'Nästa omgång ' + ca(st.next) + core.formatDate(st.next.fran) : 'Ingen ny omgång känd än';
      case 'auto': return 'Pengarna betalas ut utan ansökan';
      case 'ended': return 'Bidraget har upphört';
      default: return it.deadline ? 'Sista dag ' + core.formatDate(it.deadline) : 'Datum inte kända än';
    }
  }

  function countText(n) {
    if (n === 0) return 'Inga bidrag matchar';
    return n === 1 ? '1 bidrag matchar' : n + ' bidrag matchar';
  }

  function buildSkeleton(host) {
    var input = h('input', { id: 'cat-q', type: 'search', class: 'catalog__input', autocomplete: 'off', spellcheck: 'false',
      placeholder: 'Skriv ett ord, till exempel lärarlön eller skolbibliotek', 'aria-describedby': 'cat-q-hint' });
    var sort = h('select', { id: 'cat-sort', class: 'catalog__select' },
      core.SORTS.map(function (s) { return h('option', { value: s.id, text: s.label }); }));
    var gridBtn = h('button', { type: 'button', class: 'viewtoggle__btn', 'aria-pressed': 'true', 'data-view': 'grid' }, [h('span', { 'aria-hidden': 'true', text: '▦ ' }), 'Rutnät']);
    var listBtn = h('button', { type: 'button', class: 'viewtoggle__btn', 'aria-pressed': 'false', 'data-view': 'lista' }, [h('span', { 'aria-hidden': 'true', text: '☰ ' }), 'Lista']);
    var parts = {
      input: input, sort: sort, viewBtns: [gridBtn, listBtn],
      filters: h('div', { class: 'catalog__filters', id: 'cat-filters' }),
      count: h('p', { class: 'catalog__count', id: 'cat-count', role: 'status', 'aria-live': 'polite' }),
      active: h('div', { class: 'catalog__active', id: 'cat-active' }),
      notices: h('div', { class: 'catalog__notices' }),
      smart: h('div', { class: 'smartbar', id: 'cat-smart', hidden: true }),
      list: h('ol', { class: 'results results--grid', id: 'cat-list', 'aria-labelledby': 'cat-count' }),
      empty: h('div', { class: 'empty', id: 'cat-empty', hidden: true })
    };
    host.appendChild(h('div', { class: 'catalog__bar' }, [
      h('div', { class: 'catalog__search' }, [
        h('label', { class: 'label-caps', for: 'cat-q', text: 'Sök i registret' }),
        h('div', { class: 'catalog__field' }, [h('span', { class: 'catalog__icon', 'aria-hidden': 'true', text: '⌕' }), input]),
        h('p', { class: 'sr-only', id: 'cat-q-hint', text: 'Listan uppdateras medan du skriver. Stavningen behöver inte vara exakt, till exempel hittar lararlon lärarlön.' })
      ]),
      h('div', { class: 'catalog__tools' }, [
        h('div', { class: 'catalog__sort' }, [h('label', { class: 'label-caps', for: 'cat-sort', text: 'Sortera' }), sort]),
        h('div', { class: 'viewtoggle', role: 'group', 'aria-label': 'Visning' }, [gridBtn, listBtn])
      ])
    ]));
    host.appendChild(h('div', { class: 'catalog__layout' }, [
      parts.filters,
      h('div', { class: 'catalog__main' }, [
        h('div', { class: 'catalog__summary' }, [parts.count, parts.active]),
        parts.smart, parts.notices,
        h('p', { class: 'catalog__legend' }, [h('strong', { text: 'Vem kan söka: ' }), '✓ Ja · ◐ Med villkor · ↻ Via kommunen · — Nej. Understruket = ert val i ”Jag söker för”.']),
        parts.list, parts.empty
      ])
    ]));
    return parts;
  }

  function card(it, idx, query, app, view) {
    var g = it.grant;
    var q = it.smartOnly ? '' : query; // smart-only hits matched on meaning, not words – no partial highlights
    var org = core.findById(core.ORGANISERS, app.get().organiser);
    var typ = core.labelOf(core.TYPER, g.typ);
    var kwHits = q ? g.nyckelord.filter(function (k) { return core.highlightRanges(k, q).length; }) : [];
    var badge = g.giltighet === 'ny' ? 'Nytt' : g.giltighet === 'upphor' ? 'Sista omgången' : g.giltighet === 'pausad' ? 'Pausat' : null;
    return [
      h('span', { class: 'card__num', 'aria-hidden': 'true', text: dom.pad2(idx + 1) }),
      h('div', { class: 'card__body' }, [
        h('p', { class: 'card__meta label-caps' }, [
          h('span', { text: g.myndighet }), h('span', { 'aria-hidden': 'true', text: ' · ' }), h('span', { text: typ }),
          badge ? h('span', { class: 'card__badge', text: badge }) : null,
          dom.fordjupningBadge(g.id)
        ]),
        h('h3', { class: 'card__title' }, dom.grantLink(g, { class: 'card__link' }, dom.highlight(g.kortnamn, q))),
        h('p', { class: 'card__sum' }, dom.highlight(g.sammanfattning, q)),
        kwHits.length ? h('p', { class: 'card__hits small' }, ['Sökord: ', dom.highlight(kwHits.slice(0, 4).join(', '), q)]) : null,
        dom.eligList(g, app.get().organiser, view === 'lista'),
        h('div', { class: 'card__foot' }, [dom.statusTag(it.status), h('span', { class: 'card__deadline', text: deadlineText(it, app.today) })]),
        it.smartOnly ? h('p', { class: 'card__smart small', text: 'Föreslagen utifrån din fråga' }) : null,
        it.dim ? h('p', { class: 'card__cannot' }, [h('span', { 'aria-hidden': 'true', text: '⊘ ' }), org.cannot]) : null
      ])
    ];
  }

  function init(app) {
    var host = document.getElementById('catalog');
    var parts = buildSkeleton(host);
    var cache = {};
    var lastKey = '';
    SB.filters.mount(app, parts.filters, parts.active);

    var pushQuery = dom.debounce(function () {
      var cat = app.get().catalog;
      if (parts.input.value !== cat.q) app.set({ catalog: Object.assign({}, cat, { q: parts.input.value.slice(0, 100) }) }, { url: true });
    }, 180);
    parts.input.addEventListener('input', pushQuery);
    parts.input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && parts.input.value) { parts.input.value = ''; pushQuery(); }
      if (e.key === 'Enter') {
        var cat = app.get().catalog;
        var q = parts.input.value.slice(0, 100);
        if (q !== cat.q) app.set({ catalog: Object.assign({}, cat, { q: q }) }, { url: true });
        if (SB.smart) SB.smart.now();
      }
    });
    parts.sort.addEventListener('change', function () {
      app.set({ catalog: Object.assign({}, app.get().catalog, { sort: parts.sort.value }) }, { url: true });
    });
    parts.viewBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        app.set({ catalog: Object.assign({}, app.get().catalog, { view: btn.getAttribute('data-view') }) }, { url: true });
      });
    });

    function notice(text, label, onClick) {
      var btn = h('button', { type: 'button', class: 'link-btn', text: label });
      btn.addEventListener('click', onClick);
      return h('p', { class: 'catalog__notice' }, [text + ' ', btn]);
    }

    function renderNotices(st, res) {
      dom.clear(parts.notices);
      var org = core.findById(core.ORGANISERS, st.organiser);
      if (res.hiddenIneligible > 0) {
        parts.notices.appendChild(notice(dom.plural(res.hiddenIneligible, 'bidrag', 'bidrag') + ' till visas inte eftersom de ' +
          org.cannot.replace('Kan inte', 'inte kan').toLowerCase() + '.', 'Visa dem också', function () { app.set({ showIneligible: true }); }));
      } else if (st.showIneligible && st.organiser !== 'alla' && res.items.some(function (i) { return i.dim; })) {
        parts.notices.appendChild(notice('Bidrag som ni inte kan söka visas nedtonade.', 'Dölj dem', function () { app.set({ showIneligible: false }); }));
      }
      if (res.hiddenEnded > 0) {
        parts.notices.appendChild(notice(dom.plural(res.hiddenEnded, 'avslutat bidrag', 'avslutade bidrag') + ' är dolda.', 'Visa avslutade', function () { app.set({ showEnded: true }); }));
      }
    }

    function renderEmpty(st, res) {
      dom.clear(parts.empty);
      parts.empty.hidden = res.items.length > 0;
      if (res.items.length) return;
      var tips = [];
      if (st.catalog.q) tips.push(h('li', { text: 'Prova ett kortare ord eller ett annat ord för samma sak, till exempel ”lön” i stället för ”lönetillägg”.' }));
      function action(label, fn) {
        var b = h('button', { type: 'button', class: 'link-btn', text: label });
        b.addEventListener('click', fn);
        return h('li', null, b);
      }
      if (SB.filters.activeCount(st.catalog)) tips.push(action('Ta bort alla filter', function () {
        app.set({ catalog: Object.assign({}, st.catalog, { filters: core.emptyFilters() }) }, { url: true });
      }));
      if (res.hiddenIneligible) tips.push(action('Visa även ' + res.hiddenIneligible + ' bidrag som ni inte kan söka', function () { app.set({ showIneligible: true }); }));
      if (res.hiddenEnded) tips.push(action('Visa ' + res.hiddenEnded + ' avslutade bidrag', function () { app.set({ showEnded: true }); }));
      parts.empty.appendChild(h('p', { class: 'empty__title', text: 'Inget här – än.' }));
      parts.empty.appendChild(h('ul', { class: 'empty__tips' }, tips));
      parts.empty.appendChild(h('p', { class: 'label-caps empty__label', text: 'Eller börja med ett område' }));
      parts.empty.appendChild(h('div', { class: 'empty__chips' }, POPULAR.map(function (id) {
        var b = h('button', { type: 'button', class: 'chip', text: core.labelOf(core.OMRADEN, id) });
        b.addEventListener('click', function () {
          var f = Object.assign(core.emptyFilters(), { omrade: [id] });
          app.set({ catalog: Object.assign({}, st.catalog, { q: '', filters: f }) }, { url: true });
        });
        return b;
      })));
    }

    function render(st) {
      var c = st.catalog;
      var key = JSON.stringify([c, st.organiser, st.showIneligible, st.showEnded, SB.smart ? SB.smart.version() : 0]);
      if (key === lastKey) return;
      lastKey = key;
      if (document.activeElement !== parts.input && parts.input.value !== c.q) parts.input.value = c.q;
      parts.sort.value = c.sort;
      parts.viewBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-view') === c.view)); });
      parts.list.className = 'results results--' + c.view;

      var local = core.runCatalog(app.grants, app.index, c, app.ctx());
      var smart = SB.smart ? SB.smart.apply(local, st, function () {
        return core.runCatalog(app.grants, app.index, Object.assign({}, c, { q: '' }), app.ctx()).items;
      }) : { items: local.items, info: { status: 'off' } };
      var res = Object.assign({}, local, { items: smart.items });
      var play = SB.motion.flip(parts.list, '.card');
      var keep = {};
      res.items.forEach(function (it, idx) {
        var li = cache[it.grant.id] || h('li', { class: 'card', 'data-key': it.grant.id });
        cache[it.grant.id] = li;
        li.className = 'card' + (it.dim ? ' is-dim' : '') + (it.status.code === 'ended' ? ' is-ended' : '');
        dom.append(dom.clear(li), card(it, idx, c.q, app, c.view));
        parts.list.appendChild(li);
        keep[it.grant.id] = true;
      });
      Object.keys(cache).forEach(function (id) {
        if (!keep[id] && cache[id].parentNode) cache[id].parentNode.removeChild(cache[id]);
      });
      play();
      parts.count.textContent = countText(res.items.length);
      renderNotices(st, res);
      renderEmpty(st, res);
      if (SB.smart) SB.smart.renderBar(parts.smart, smart.info);
      var meta = document.getElementById('catalog-total-meta');
      if (meta) meta.textContent = app.grants.length + ' bidrag i registret';
    }

    app.index = core.buildIndex(app.grants);
    render(app.get());
    app.subscribe(render);
    if (SB.smart) SB.smart.onUpdate(function () { render(app.get()); });
  }

  SB.catalog = { init: init, deadlineText: deadlineText };
})();

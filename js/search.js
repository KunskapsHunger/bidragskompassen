/* Bidragskompassen – hero search: ARIA 1.2 combobox with live suggestions. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var LIMIT = 6;

  function init(app) {
    var form = document.getElementById('hero-search');
    var input = document.getElementById('hero-q');
    var list = document.getElementById('hero-list');
    var status = document.getElementById('hero-status');
    var index = core.buildIndex(app.grants);
    var options = [];   // [{ el, action }]
    var active = -1;

    function setExpanded(open) {
      list.hidden = !open;
      input.setAttribute('aria-expanded', String(open));
      if (!open) setActive(-1);
    }

    function setActive(i) {
      options.forEach(function (o, idx) {
        o.el.setAttribute('aria-selected', String(idx === i));
        o.el.classList.toggle('is-active', idx === i);
      });
      active = i;
      if (i >= 0 && options[i]) {
        input.setAttribute('aria-activedescendant', options[i].el.id);
        options[i].el.scrollIntoView({ block: 'nearest' });
      } else {
        input.removeAttribute('aria-activedescendant');
      }
    }

    function option(id, children, action, extraClass) {
      var el = h('li', { id: id, role: 'option', 'aria-selected': 'false', class: 'combo__opt' + (extraClass ? ' ' + extraClass : '') }, children);
      el.addEventListener('mousedown', function (e) { e.preventDefault(); });
      el.addEventListener('click', function () { run(action); });
      return { el: el, action: action };
    }

    function render(keepActive) {
      var q = input.value.trim();
      var activeId = keepActive && active >= 0 && options[active] ? options[active].el.id : null;
      dom.clear(list);
      options = [];
      if (core.tokenize(q).length === 0) { setExpanded(false); status.textContent = ''; if (SB.smart) SB.smart.cancelHero(); return; }
      var res = core.suggest(app.grants, index, q, app.ctx(), LIMIT);
      var org = core.findById(core.ORGANISERS, app.get().organiser);
      res.items.forEach(function (it, i) {
        var g = it.grant;
        var meta = [g.myndighet, core.statusText(it.status)];
        options.push(option('hero-opt-' + i, [
          h('span', { class: 'combo__name' }, dom.highlight(g.kortnamn, q)),
          h('span', { class: 'combo__meta' }, [
            meta.join(' · '),
            it.dim ? h('span', { class: 'combo__cannot', text: ' · ' + org.cannot }) : null
          ])
        ], { type: 'grant', id: g.id }, it.dim ? 'is-dim' : ''));
      });
      var extras = SB.smart ? SB.smart.heroExtras(q, res.items.map(function (it) { return it.grant.id; }), function (forQ) {
        if (!list.hidden && input.value.trim() === forQ) render(true);
      }) : [];
      extras.forEach(function (g, i) {
        options.push(option('hero-opt-s' + i, [
          h('span', { class: 'combo__name', text: g.kortnamn }),
          h('span', { class: 'combo__meta' }, [h('span', { class: 'combo__smart', text: 'Föreslagen utifrån din fråga' }), ' · ' + g.myndighet])
        ], { type: 'grant', id: g.id }, 'combo__opt--smart'));
      });
      var allLabel = res.total > 0
        ? 'Visa alla ' + res.total + ' träffar i registret'
        : (extras.length ? 'Sök i registret' : 'Inga förslag – sök i registret ändå');
      options.push(option('hero-opt-all', [h('span', { class: 'combo__all', text: allLabel }), h('span', { 'aria-hidden': 'true', text: ' →' })],
        { type: 'all', q: q }, 'combo__opt--all'));
      options.forEach(function (o) { list.appendChild(o.el); });
      setExpanded(true);
      var keep = activeId ? options.map(function (o) { return o.el.id; }).indexOf(activeId) : -1;
      setActive(keep);
      announce(res, extras.length);
    }

    var announce = dom.debounce(function (res, extra) {
      var smartText = extra ? ' ' + dom.plural(extra, 'förslag', 'förslag') + ' till utifrån din fråga.' : '';
      status.textContent = (res.total === 0 && !extra)
        ? 'Inga förslag.'
        : (res.total ? dom.plural(res.items.length, 'förslag', 'förslag') + ' av ' + dom.plural(res.total, 'träff', 'träffar') + '.' : '') + smartText;
    }, 400);

    function run(action) {
      setExpanded(false);
      if (action.type === 'grant') {
        SB.detail.open(action.id, { trigger: input });
      } else {
        app.goToCatalog({ q: action.q });
      }
    }

    var update = dom.debounce(render, 90);
    input.addEventListener('input', update);
    input.addEventListener('focus', function () { if (input.value.trim()) render(); });
    input.addEventListener('blur', function () { window.setTimeout(function () { setExpanded(false); }, 120); });

    input.addEventListener('keydown', function (e) {
      var open = !list.hidden;
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (!open) { render(); if (options.length) setActive(0); return; }
          setActive(active + 1 >= options.length ? 0 : active + 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (!open) { render(); if (options.length) setActive(options.length - 1); return; }
          setActive(active <= 0 ? options.length - 1 : active - 1);
          break;
        case 'Enter':
          if (open && active >= 0) { e.preventDefault(); run(options[active].action); }
          break;
        case 'Escape':
          if (open) { e.preventDefault(); setExpanded(false); }
          else if (input.value) { e.preventDefault(); input.value = ''; status.textContent = ''; }
          break;
        case 'Home': case 'End':
          if (open && active >= 0) setActive(-1);
          break;
        default: break;
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      setExpanded(false);
      app.goToCatalog({ q: input.value.trim() });
    });

    app.subscribe(function (next, prev) {
      if (next.organiser !== prev.organiser && !list.hidden) render();
    });
  }

  SB.search = { init: init };
})();

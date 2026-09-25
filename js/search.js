/* Bidragskompassen – hero search: ARIA 1.2 combobox. Local suggestions appear instantly; a settled
 * query (≥ 3 characters) is also sent to the smart ranking, which re-ranks or appends when it answers. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var LIMIT = 6;
  var MAX_WITH_APPENDED = 9;
  var ANNOUNCE_MS = 450;

  function init(app) {
    var form = document.getElementById('hero-search');
    var input = document.getElementById('hero-q');
    var list = document.getElementById('hero-list');
    var status = document.getElementById('hero-status');
    var index = core.buildIndex(app.grants);
    var options = [];   // [{ el, action, key }] – option ids are stable per grant: hero-opt-<id>
    var active = -1;
    var shownQ = null;
    var announcedQ = null;
    var announceTimer = null;

    function counters(q) { if (SB.counters) SB.counters.update(q); }

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

    function option(id, key, children, action, extraClass) {
      var el = h('li', { id: id, role: 'option', 'aria-selected': 'false', 'data-key': key,
        class: 'combo__opt' + (extraClass ? ' ' + extraClass : '') }, children);
      el.addEventListener('mousedown', function (e) { e.preventDefault(); });
      el.addEventListener('click', function () { run(action); });
      return { el: el, action: action, key: key };
    }

    function grantOption(it, q, org) {
      var g = it.grant;
      var meta = it.smartOnly
        ? [h('span', { class: 'combo__smart', text: 'Föreslagen utifrån din fråga' }), ' · ' + g.myndighet]
        : [[g.myndighet, core.statusText(it.status)].join(' · '),
          it.dim ? h('span', { class: 'combo__cannot', text: ' · ' + org.cannot }) : null];
      var cls = [it.dim ? 'is-dim' : '', it.smartOnly ? 'combo__opt--smart' : ''].join(' ').trim();
      return option('hero-opt-' + g.id, g.id, [
        h('span', { class: 'combo__name' }, it.smartOnly ? g.kortnamn : dom.highlight(g.kortnamn, q)),
        h('span', { class: 'combo__meta' }, meta)
      ], { type: 'grant', id: g.id }, cls);
    }

    function allLabel(res) {
      return res.total > 0 ? 'Visa alla ' + res.total + ' träffar i registret' : 'Inga förslag – sök i registret ändå';
    }
    function allOption(res, q) {
      return option('hero-opt-all', '__all', [h('span', { class: 'combo__all', text: allLabel(res) }), h('span', { 'aria-hidden': 'true', text: ' →' })],
        { type: 'all', q: q }, 'combo__opt--all');
    }
    function hint() {
      return h('li', { class: 'combo__hint', role: 'presentation', 'aria-hidden': 'true' }, [
        h('span', { class: 'combo__hint-dot' }), 'Letar efter fler träffar …'
      ]);
    }

    /** Full rebuild; FLIP when a smart answer re-ranks an untouched list. */
    function rebuild(res, q, org, loading, animate) {
      var activeId = active >= 0 && options[active] ? options[active].el.id : null;
      var play = animate ? SB.motion.flip(list, '.combo__opt') : null;
      dom.clear(list);
      options = res.items.map(function (it) { return grantOption(it, q, org); }).concat([allOption(res, q)]);
      options.forEach(function (o, i) {
        if (loading && i === options.length - 1) list.appendChild(hint());
        list.appendChild(o.el);
      });
      setExpanded(true);
      setActive(activeId ? options.map(function (o) { return o.el.id; }).indexOf(activeId) : -1);
      if (play) play();
    }

    /** Keyboard-stable update: keep every existing option and the active id; only append new hits. */
    function append(res, q, org) {
      var activeId = options[active].el.id;
      var have = {};
      options.forEach(function (o) { have[o.key] = true; });
      var allIdx = options.length - 1;
      var fresh = res.items.filter(function (it) { return !have[it.grant.id]; })
        .slice(0, Math.max(0, MAX_WITH_APPENDED - allIdx))
        .map(function (it) { return grantOption(it, q, org); });
      var allOpt = options[allIdx];
      fresh.forEach(function (o) { list.insertBefore(o.el, allOpt.el); });
      options = options.slice(0, allIdx).concat(fresh, [allOpt]);
      dom.$$('.combo__hint', list).forEach(function (el) { el.parentNode.removeChild(el); });
      dom.clear(allOpt.el.firstChild).appendChild(document.createTextNode(allLabel(res)));
      setActive(options.map(function (o) { return o.el.id; }).indexOf(activeId));
    }

    function announce(q, res, loading) {
      window.clearTimeout(announceTimer);
      if (loading || announcedQ === q) return; // one announcement per settled query
      announceTimer = window.setTimeout(function () {
        if (input.value.trim() !== q || list.hidden) return;
        announcedQ = q;
        var n = res.items.length;
        status.textContent = n === 0 ? 'Inga förslag.'
          : dom.plural(n, 'förslag', 'förslag') + (res.total > n ? ' av ' + dom.plural(res.total, 'träff', 'träffar') : '') + '.';
      }, ANNOUNCE_MS);
    }

    function onSmartDone(q) {
      if (input.value.trim() !== q) return;
      if (list.hidden) { counters(q); return; }
      render('smart');
    }

    /** reason: 'input' | 'smart' | 'organiser' | 'focus' */
    function render(reason) {
      var q = input.value.trim();
      if (core.tokenize(q).length === 0) {
        dom.clear(list); options = []; setExpanded(false);
        status.textContent = ''; shownQ = null;
        if (SB.smart) SB.smart.cancelHero();
        counters('');
        return;
      }
      var smartState = SB.smart ? SB.smart.heroRequest(q, false, onSmartDone) : 'off';
      var res = core.heroSuggest(app.grants, index, q, app.ctx(), SB.smart ? SB.smart.peek(q) : null, LIMIT);
      var org = core.findById(core.ORGANISERS, app.get().organiser);
      var loading = smartState === 'loading';
      if (reason === 'smart' && active >= 0 && !list.hidden && shownQ === q) append(res, q, org);
      else rebuild(res, q, org, loading, reason === 'smart' && !SB.motion.isReduced());
      shownQ = q;
      counters(q);
      announce(q, res, loading);
    }

    function run(action) {
      setExpanded(false);
      if (action.type === 'grant') SB.detail.open(action.id, { trigger: input });
      else app.goToCatalog({ q: action.q }); // the catalog shares the smart cache: no second call
    }

    var update = dom.debounce(function () { render('input'); }, 90);
    input.addEventListener('input', update);
    input.addEventListener('focus', function () { if (input.value.trim()) render('focus'); });
    input.addEventListener('blur', function () { window.setTimeout(function () { setExpanded(false); }, 120); });

    input.addEventListener('keydown', function (e) {
      var open = !list.hidden;
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (!open) { render('focus'); if (options.length) setActive(0); return; }
          setActive(active + 1 >= options.length ? 0 : active + 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (!open) { render('focus'); if (options.length) setActive(options.length - 1); return; }
          setActive(active <= 0 ? options.length - 1 : active - 1);
          break;
        case 'Enter':
          if (open && active >= 0) { e.preventDefault(); run(options[active].action); }
          break;
        case 'Escape':
          if (open) { e.preventDefault(); setExpanded(false); }
          else if (input.value) { e.preventDefault(); input.value = ''; render('input'); }
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
      app.goToCatalog({ q: input.value.trim() }); // asks the smart ranking immediately
    });

    app.subscribe(function (next, prev) {
      if (next.organiser === prev.organiser) return;
      if (!list.hidden) render('organiser');
      else if (input.value.trim()) SB.smart && SB.smart.heroRequest(input.value.trim(), false, onSmartDone);
    });
  }

  SB.search = { init: init };
})();

/* Bidragskompassen – catalog filters: chip groups, visibility switches, active-filter chips. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;

  var GROUP_LABELS = { skolform: 'Skolform', omrade: 'Område', myndighet: 'Myndighet', typ: 'Typ av bidrag', status: 'Status' };

  function optionsFor(key, grants) {
    switch (key) {
      case 'skolform': return core.SKOLFORMER;
      case 'omrade': return core.OMRADEN;
      case 'typ': return core.TYPER.map(function (t) { return { id: t.id, label: t.label, hint: t.hint }; });
      case 'status': return core.STATUS.map(function (s) { return { id: s.id, label: s.filterLabel, symbol: s.symbol }; });
      default: return core.uniqueMyndigheter(grants).map(function (m) { return { id: m, label: m }; });
    }
  }

  function valueLabel(key, value, grants) {
    var opt = core.findById(optionsFor(key, grants), value);
    return opt ? opt.label : value;
  }

  /** Returns a new catalog state with `value` toggled in filters[key]. */
  function toggled(catalog, key, value) {
    var list = catalog.filters[key];
    var nextList = list.indexOf(value) === -1 ? list.concat([value]) : list.filter(function (v) { return v !== value; });
    var filters = Object.assign({}, catalog.filters);
    filters[key] = nextList;
    return Object.assign({}, catalog, { filters: filters });
  }

  function activeCount(catalog) {
    return core.FILTER_KEYS.reduce(function (n, k) { return n + catalog.filters[k].length; }, 0);
  }

  function mount(app, panelHost, activeHost) {
    var chipButtons = [];
    var countEl = h('span', { class: 'filters__count' });
    var details = h('details', { class: 'filters__panel' });
    var body = h('div', { class: 'filters__body' });
    details.appendChild(h('summary', { class: 'filters__summary' }, [h('span', { class: 'label-caps', text: 'Filtrera' }), countEl]));
    details.appendChild(body);

    core.FILTER_KEYS.forEach(function (key) {
      var headId = 'fg-' + key;
      var chips = optionsFor(key, app.grants).map(function (opt) {
        var btn = h('button', { type: 'button', class: 'chip', 'aria-pressed': 'false', 'data-key': key, 'data-value': opt.id, title: opt.hint || null }, [
          opt.symbol ? h('span', { 'aria-hidden': 'true', class: 'chip__sym', text: opt.symbol }) : null,
          opt.label
        ]);
        btn.addEventListener('click', function () {
          app.set({ catalog: toggled(app.get().catalog, key, opt.id) }, { url: true });
        });
        chipButtons.push(btn);
        return btn;
      });
      body.appendChild(h('div', { class: 'fgroup', role: 'group', 'aria-labelledby': headId }, [
        h('h3', { class: 'fgroup__title label-caps', id: headId, text: GROUP_LABELS[key] }),
        h('div', { class: 'fgroup__chips' }, chips)
      ]));
    });

    function switchRow(label, stateKey) {
      var input = h('input', { type: 'checkbox' });
      input.addEventListener('change', function () {
        var patch = {};
        patch[stateKey] = input.checked;
        app.set(patch);
      });
      return { input: input, el: h('label', { class: 'switch' }, [input, h('span', { class: 'switch__track', 'aria-hidden': 'true' }), h('span', { text: label })]) };
    }
    var inelig = switchRow('Visa även bidrag vi inte kan söka', 'showIneligible');
    var ended = switchRow('Visa avslutade bidrag', 'showEnded');
    body.appendChild(h('div', { class: 'fgroup fgroup--switches', role: 'group', 'aria-labelledby': 'fg-visa' }, [
      h('h3', { class: 'fgroup__title label-caps', id: 'fg-visa', text: 'Visa också' }), inelig.el, ended.el
    ]));
    panelHost.appendChild(details);

    /* Desktop: panel always open (summary hidden via CSS). Mobile: collapsible. */
    var mq = window.matchMedia ? window.matchMedia('(min-width: 960px)') : null;
    function syncOpen() { if (mq && mq.matches) details.open = true; }
    syncOpen();
    if (mq && mq.addEventListener) mq.addEventListener('change', syncOpen);

    function renderActive(st) {
      var c = st.catalog;
      dom.clear(activeHost);
      var chips = [];
      if (c.q) chips.push({ label: 'Sökord: ”' + c.q + '”', remove: function (cat) { return Object.assign({}, cat, { q: '' }); } });
      core.FILTER_KEYS.forEach(function (key) {
        c.filters[key].forEach(function (v) {
          chips.push({ label: GROUP_LABELS[key] + ': ' + valueLabel(key, v, app.grants), remove: function (cat) { return toggled(cat, key, v); } });
        });
      });
      if (!chips.length) return;
      var list = h('ul', { class: 'active-chips', 'aria-label': 'Valda filter' });
      chips.forEach(function (chip, i) {
        var btn = h('button', { type: 'button', class: 'chip chip--remove', 'aria-label': 'Ta bort ' + chip.label }, [
          chip.label, h('span', { 'aria-hidden': 'true', class: 'chip__x', text: '×' })
        ]);
        btn.addEventListener('click', function () {
          app.set({ catalog: chip.remove(app.get().catalog) }, { url: true });
          var remaining = dom.$$('.chip--remove', activeHost);
          var target = remaining[Math.min(i, remaining.length - 1)] || document.getElementById('cat-q');
          if (target) target.focus();
        });
        list.appendChild(h('li', null, btn));
      });
      var clearBtn = h('button', { type: 'button', class: 'link-btn', text: 'Rensa allt' });
      clearBtn.addEventListener('click', function () {
        app.set({ catalog: Object.assign({}, core.defaultCatalogState(), { sort: app.get().catalog.sort, view: app.get().catalog.view }) }, { url: true });
        var q = document.getElementById('cat-q');
        if (q) q.focus();
        dom.announce('Alla filter är borttagna.');
      });
      list.appendChild(h('li', null, clearBtn));
      activeHost.appendChild(list);
    }

    function sync(st) {
      chipButtons.forEach(function (btn) {
        var on = st.catalog.filters[btn.getAttribute('data-key')].indexOf(btn.getAttribute('data-value')) !== -1;
        btn.setAttribute('aria-pressed', String(on));
      });
      inelig.input.checked = st.showIneligible;
      ended.input.checked = st.showEnded;
      inelig.el.hidden = st.organiser === 'alla';
      var n = activeCount(st.catalog);
      countEl.textContent = n ? ' (' + n + ' valda)' : '';
      renderActive(st);
    }

    sync(app.get());
    app.subscribe(function (next) { sync(next); });
  }

  SB.filters = { init: function () {}, mount: mount, toggled: toggled, activeCount: activeCount };
})();

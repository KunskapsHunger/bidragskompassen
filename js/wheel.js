/* Bidragskompassen – Årshjulet: radial läsår calendar (SVG) + accessible month list. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var s = dom.s;
  var C = 400;             // centre of the 800×800 viewBox
  var R_MONTH_OUT = 392;
  var R_MONTH_IN = 352;
  var R_RING_OUT = 338;
  var R_RING_IN = 104;

  function visibleGrants(app) {
    var st = app.get();
    return app.grants.filter(function (g) {
      if (core.isEnded(g) && !st.showEnded) return false;
      return st.organiser === 'alla' || st.showIneligible || core.canApply(g, st.organiser);
    });
  }

  function firstAngle(row) { return Math.min.apply(null, row.periods.map(function (p) { return p.a0; })); }

  function periodLine(p) {
    return core.PERIOD_TYPER[p.typ] + ': ' + SB.timeline.rangeText(p) + (p.ungefar ? ' (ungefär)' : '');
  }

  function init(app) {
    var host = document.getElementById('wheel');
    var offset = 0;
    var listMode = false;
    var pinned = null;
    var revealed = false;
    var rowsById = {};

    var svgTitle = s('title', { id: 'wheel-svg-title' });
    var svgDesc = s('desc', { id: 'wheel-svg-desc' });
    var svg = s('svg', { class: 'wheel__svg', viewBox: '0 0 800 800', role: 'img', 'aria-labelledby': 'wheel-svg-title wheel-svg-desc' }, [svgTitle, svgDesc]);
    var layer = s('g', { 'aria-hidden': 'true' });
    svg.appendChild(layer);

    var prevBtn = h('button', { type: 'button', class: 'wheel__nav', 'aria-label': 'Föregående läsår' }, h('span', { 'aria-hidden': 'true', text: '‹' }));
    var nextBtn = h('button', { type: 'button', class: 'wheel__nav', 'aria-label': 'Nästa läsår' }, h('span', { 'aria-hidden': 'true', text: '›' }));
    var yearLabel = h('p', { class: 'wheel__yearlabel', 'aria-live': 'polite' });
    var modeBtn = h('button', { type: 'button', class: 'btn btn--light wheel__mode', 'aria-pressed': 'false', 'aria-controls': 'wheel-list' });
    var info = h('div', { class: 'wheel__info', id: 'wheel-info' });
    var stage = h('div', { class: 'wheel__stage' }, svg);
    var list = h('div', { class: 'wlist', id: 'wheel-list', hidden: true });
    var figure = h('figure', { class: 'wheel__figure' }, [stage, h('figcaption', { class: 'wheel__legend' }, legend())]);

    dom.append(host, [
      h('div', { class: 'wheel__layout' }, [
        figure,
        h('div', { class: 'wheel__side' }, [
          h('div', { class: 'wheel__controls' }, [h('div', { class: 'wheel__year' }, [prevBtn, yearLabel, nextBtn]), modeBtn]),
          h('p', { class: 'wheel__a11y small', text: 'Använder du tangentbord eller skärmläsare? Välj ”Visa som lista” – där finns samma uppgifter, månad för månad.' }),
          info
        ])
      ]),
      list
    ]);

    function legend() {
      var item = function (cls, label) {
        return h('li', null, [h('span', { class: 'wheel__key ' + cls, 'aria-hidden': 'true' }), label]);
      };
      return h('ul', { class: 'wheel__keys' }, [
        item('wheel__key--window', 'Ansökan eller rekvisition'),
        item('wheel__key--open', 'Öppen i dag'),
        item('wheel__key--report', 'Redovisning'),
        item('wheel__key--event', 'Beslut eller utbetalning'),
        item('wheel__key--approx', 'Ungefärligt datum')
      ]);
    }

    function yearBounds() {
      var years = [];
      app.grants.forEach(function (g) { g.perioder.forEach(function (p) { [p.fran, p.till].forEach(function (d) { if (d) years.push(+d.slice(0, 4)); }); }); });
      var base = core.schoolYearWindow(app.today).startYear;
      if (!years.length) return { min: 0, max: 0 };
      return { min: Math.max(-2, Math.min.apply(null, years) - 1 - base), max: Math.min(3, Math.max.apply(null, years) - base) };
    }

    function drawMonths(win) {
      core.monthSegments(win).forEach(function (m, i) {
        layer.appendChild(s('path', { class: 'wm__seg' + (i % 2 ? ' is-alt' : ''), d: core.arcPath(C, C, (R_MONTH_OUT + R_MONTH_IN) / 2, m.a0 + 0.4, m.a1 - 0.4), 'stroke-width': String(R_MONTH_OUT - R_MONTH_IN) }));
        var p0 = core.polar(C, C, R_MONTH_IN, m.a0);
        var p1 = core.polar(C, C, R_RING_IN - 8, m.a0);
        layer.appendChild(s('line', { class: 'wm__tick', x1: p0.x, y1: p0.y, x2: p1.x, y2: p1.y }));
        var mid = core.polar(C, C, (R_MONTH_OUT + R_MONTH_IN) / 2, (m.a0 + m.a1) / 2);
        layer.appendChild(s('text', { class: 'wm__label', x: mid.x, y: mid.y, 'text-anchor': 'middle', 'dominant-baseline': 'central', text: m.label.toUpperCase() }));
      });
    }

    function drawRows(rows, today) {
      var n = Math.max(rows.length, 1);
      var step = (R_RING_OUT - R_RING_IN) / n;
      rows.forEach(function (row, i) {
        var r = R_RING_OUT - step * (i + 0.5);
        var st = core.grantStatus(row.grant, today);
        var g = s('g', { class: 'wr', 'data-id': row.grant.id });
        g.appendChild(s('circle', { class: 'wr__track', cx: C, cy: C, r: r.toFixed(2) }));
        row.periods.forEach(function (p) {
          var cls = 'wr__arc wr__arc--' + p.kind + (p.period.ungefar ? ' is-approx' : '');
          var isOpen = p.kind === 'window' && st.code === 'open' && st.period === p.period;
          if (isOpen) cls += ' is-open';
          if (p.kind === 'event' || p.point) {
            var pt = core.polar(C, C, r, (p.a0 + p.a1) / 2);
            g.appendChild(s('circle', { class: cls + ' wr__dot', cx: pt.x, cy: pt.y, r: Math.max(2.4, Math.min(step * 0.42, 6)).toFixed(2) }));
          } else {
            var w = p.kind === 'report' ? Math.max(1.5, step * 0.32) : Math.max(2.5, step * 0.72);
            g.appendChild(s('path', { class: cls, d: core.arcPath(C, C, r, p.a0, p.a1), 'stroke-width': Math.min(w, 16).toFixed(2) }));
          }
        });
        g.appendChild(s('circle', { class: 'wr__hit', cx: C, cy: C, r: r.toFixed(2), 'stroke-width': Math.max(step, 6).toFixed(2) }));
        g.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') select(row.grant.id, false); });
        g.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') select(pinned, false); });
        g.addEventListener('click', function () { pinned = pinned === row.grant.id ? null : row.grant.id; select(pinned, true); });
        layer.appendChild(g);
      });
    }

    function drawCentre(win, today) {
      layer.appendChild(s('circle', { class: 'wc__disc', cx: C, cy: C, r: R_RING_IN - 12 }));
      layer.appendChild(s('text', { class: 'wc__year', x: C, y: C - 6, 'text-anchor': 'middle', text: win.label }));
      layer.appendChild(s('text', { class: 'wc__caption', x: C, y: C + 26, 'text-anchor': 'middle', text: 'LÄSÅRET' }));
      if (!core.inWindow(today, win)) return;
      var angle = core.angleFor(today, win);
      var needle = s('g', { class: 'wn' }, [
        s('line', { class: 'wn__line', x1: C, y1: C - (R_RING_IN - 12), x2: C, y2: C - R_MONTH_OUT - 4 }),
        s('circle', { class: 'wn__tip', cx: C, cy: C - R_MONTH_OUT - 4, r: 5 }),
        s('text', { class: 'wn__label', x: C + 10, y: C - R_MONTH_OUT + 22, text: 'I DAG' })
      ]);
      needle.style.transform = 'rotate(' + (revealed || SB.motion.isReduced() ? angle : 0) + 'deg)';
      needle.setAttribute('data-angle', String(angle));
      layer.appendChild(needle);
    }

    function defaultInfo(rows) {
      var today = app.today;
      var withStatus = rows.map(function (r) { return { g: r.grant, st: core.grantStatus(r.grant, today) }; });
      var open = withStatus.filter(function (x) { return x.st.code === 'open'; })
        .sort(function (a, b) { return (a.st.closes || '9999').localeCompare(b.st.closes || '9999'); });
      var soon = withStatus.filter(function (x) { return x.st.code === 'soon'; })
        .sort(function (a, b) { return a.st.opens.localeCompare(b.st.opens); });
      var block = function (title, items, fmt) {
        if (!items.length) return null;
        return h('div', { class: 'winfo__block' }, [
          h('h3', { class: 'label-caps winfo__h', text: title }),
          h('ul', { class: 'winfo__list' }, items.slice(0, 5).map(function (x) {
            return h('li', null, [dom.grantLink(x.g, null, x.g.kortnamn), h('span', { class: 'winfo__date', text: fmt(x.st) })]);
          }))
        ]);
      };
      return [
        h('p', { class: 'winfo__intro', text: 'Peka på en ring för att se bidraget. På mobil trycker du på ringen.' }),
        block('Öppet i dag', open, function (st) { return st.closes ? 'stänger ' + core.formatDate(st.closes, { noYear: true }) : 'löpande'; }),
        block('Öppnar snart', soon, function (st) { return (st.ungefar ? 'ca ' : '') + core.formatDate(st.opens, { noYear: true }); })
      ];
    }

    function grantInfo(row) {
      var g = row.grant;
      var st = core.grantStatus(g, app.today);
      return [
        h('p', { class: 'label-caps winfo__meta', text: g.myndighet + ' · ' + core.labelOf(core.TYPER, g.typ) }),
        h('h3', { class: 'winfo__title', text: g.kortnamn }),
        h('div', { class: 'winfo__status' }, [dom.statusTag(st), h('span', { text: core.statusText(st) })]),
        app.get().organiser !== 'alla' && !core.canApply(g, app.get().organiser)
          ? h('p', { class: 'winfo__cannot' }, [h('span', { 'aria-hidden': 'true', text: '⊘ ' }), core.findById(core.ORGANISERS, app.get().organiser).cannot])
          : null,
        h('ul', { class: 'winfo__periods' }, row.periods.map(function (p) {
          return h('li', { class: p.period.ungefar ? 'is-approx' : null, text: periodLine(p.period) });
        })),
        dom.grantLink(g, { class: 'btn btn--light winfo__cta' }, ['Läs mer om bidraget', h('span', { class: 'arrow', 'aria-hidden': 'true', text: ' →' })])
      ];
    }

    var currentRows = [];
    function select(id, fromClick) {
      dom.$$('.wr', layer).forEach(function (g) { g.classList.toggle('is-active', g.getAttribute('data-id') === id); });
      svg.classList.toggle('has-active', !!id);
      dom.clear(info);
      dom.append(info, id && rowsById[id] ? grantInfo(rowsById[id]) : defaultInfo(currentRows));
      if (fromClick && id) info.classList.add('is-pinned'); else if (!id) info.classList.remove('is-pinned');
    }

    function renderList(win) {
      dom.clear(list);
      var groups = core.periodsByMonth(visibleGrants(app), win).filter(function (gr) { return gr.items.length; });
      if (!groups.length) { list.appendChild(h('p', { text: 'Inga kända datum under läsåret ' + win.label + '.' })); return; }
      groups.forEach(function (gr) {
        list.appendChild(h('section', { class: 'wlist__month' }, [
          h('h3', { class: 'wlist__title' }, [gr.month.longLabel.charAt(0).toUpperCase() + gr.month.longLabel.slice(1) + ' ', h('span', { class: 'wlist__year', text: String(gr.month.year) })]),
          h('ul', { class: 'wlist__items' }, gr.items.map(function (it) {
            return h('li', { class: 'wlist__item wlist__item--' + it.kind }, [
              h('span', { class: 'wlist__date', text: SB.timeline.rangeText(it.period) }),
              h('span', { class: 'wlist__typ label-caps', text: core.PERIOD_TYPER[it.period.typ] }),
              dom.grantLink(it.grant, { class: 'wlist__name' }, it.grant.kortnamn),
              it.period.ungefar ? h('span', { class: 'wlist__approx', text: 'ungefär' }) : null
            ]);
          }))
        ]));
      });
    }

    function render() {
      var win = core.schoolYearWindow(app.today, offset);
      var bounds = yearBounds();
      var rows = core.wheelRows(visibleGrants(app), win).slice().sort(function (a, b) {
        return (firstAngle(a) - firstAngle(b)) || a.grant.kortnamn.localeCompare(b.grant.kortnamn, 'sv');
      });
      currentRows = rows;
      rowsById = {};
      rows.forEach(function (r) { rowsById[r.grant.id] = r; });
      if (pinned && !rowsById[pinned]) pinned = null;

      yearLabel.textContent = 'Läsåret ' + win.label;
      document.getElementById('wheel-year-meta').textContent = 'Juli ' + win.startYear + ' – juni ' + (win.startYear + 1);
      prevBtn.disabled = offset <= bounds.min;
      nextBtn.disabled = offset >= bounds.max;
      dom.clear(modeBtn);
      modeBtn.appendChild(document.createTextNode(listMode ? 'Visa som hjul' : 'Visa som lista'));
      modeBtn.setAttribute('aria-pressed', String(listMode));
      figure.hidden = listMode;
      list.hidden = !listMode;

      var openNames = rows.filter(function (r) { return core.grantStatus(r.grant, app.today).code === 'open'; })
        .map(function (r) { return r.grant.kortnamn; });
      svgTitle.textContent = 'Årshjul för läsåret ' + win.label;
      svgDesc.textContent = dom.plural(rows.length, 'bidrag', 'bidrag') + ' har datum under läsåret. ' +
        (core.inWindow(app.today, win) ? 'I dag är det ' + core.formatDate(app.today, { long: true }) + '. ' : '') +
        (openNames.length ? 'Öppna för ansökan i dag: ' + openNames.join(', ') + '. ' : '') +
        'Samma uppgifter finns i listvyn.';

      dom.clear(layer);
      drawMonths(win);
      drawRows(rows, app.today);
      drawCentre(win, app.today);
      select(pinned, false);
      if (listMode) renderList(win);
    }

    function sweep() {
      revealed = true;
      var n = dom.$('.wn', layer);
      if (n) n.style.transform = 'rotate(' + n.getAttribute('data-angle') + 'deg)';
    }

    prevBtn.addEventListener('click', function () { offset -= 1; render(); });
    nextBtn.addEventListener('click', function () { offset += 1; render(); });
    modeBtn.addEventListener('click', function () {
      listMode = !listMode;
      render();
      if (listMode) { var first = dom.$('.wlist__title', list); if (first) { first.setAttribute('tabindex', '-1'); first.focus(); } }
    });

    render();
    if ('IntersectionObserver' in window && !SB.motion.isReduced()) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) { window.setTimeout(sweep, 250); io.disconnect(); }
      }, { threshold: 0.35 });
      io.observe(stage);
    } else {
      sweep();
    }
    app.subscribe(function (next, prev) {
      if (next.organiser !== prev.organiser || next.showIneligible !== prev.showIneligible || next.showEnded !== prev.showEnded) render();
    });
  }

  SB.wheel = { init: init };
})();

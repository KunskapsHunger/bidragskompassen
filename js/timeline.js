/* Bidragskompassen – horizontal mini-timeline of a grant's perioder (visual) + an accessible list. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;

  function sortedPeriods(g) {
    return g.perioder.filter(function (p) { return p.fran || p.till; }).slice().sort(function (a, b) {
      return core.dayNumber(a.fran || a.till) - core.dayNumber(b.fran || b.till);
    });
  }

  function rangeText(p) {
    var ca = p.ungefar ? 'ca ' : '';
    if (p.fran && p.till && p.fran !== p.till) return ca + core.formatDate(p.fran) + ' – ' + core.formatDate(p.till);
    if (p.fran && !p.till) return 'från ' + ca + core.formatDate(p.fran);
    if (!p.fran && p.till) return 'senast ' + ca + core.formatDate(p.till);
    return ca + core.formatDate(p.fran);
  }

  function visual(periods, today) {
    var days = [];
    periods.forEach(function (p) { [p.fran, p.till].forEach(function (d) { if (d) days.push(core.dayNumber(d)); }); });
    var min = Math.min.apply(null, days) - 14;
    var max = Math.max.apply(null, days) + 14;
    var t = core.dayNumber(today);
    if (t >= min - 60 && t < min) min = t - 7;
    if (t <= max + 60 && t > max) max = t + 7;
    var span = Math.max(1, max - min);
    var pct = function (d) { return ((d - min) / span * 100).toFixed(2) + '%'; };

    var years = [];
    var y0 = +core.isoFromDay(min).slice(0, 4);
    var y1 = +core.isoFromDay(max).slice(0, 4);
    for (var y = y0 + 1; y <= y1; y++) years.push(y);

    var rows = periods.map(function (p) {
      var from = core.dayNumber(p.fran || p.till);
      var to = core.dayNumber(p.till || p.fran);
      var point = !p.fran || !p.till || from === to;
      var kind = SB.core.periodKind(p);
      return h('div', { class: 'tl__row' }, [
        h('span', { class: 'tl__label', text: core.PERIOD_TYPER[p.typ] }),
        h('span', { class: 'tl__track' }, [
          h('span', {
            class: 'tl__bar tl__bar--' + kind + (point ? ' is-point' : '') + (p.ungefar ? ' is-approx' : ''),
            style: { left: pct(from), width: point ? '10px' : 'calc(' + pct(to + 1) + ' - ' + pct(from) + ')' }
          })
        ])
      ]);
    });

    return h('div', { class: 'tl', 'aria-hidden': 'true' }, [
      h('div', { class: 'tl__rows' }, rows),
      h('div', { class: 'tl__axis' }, [
        h('span', { class: 'tl__axis-start', text: core.formatDate(core.isoFromDay(min + 14)) }),
        h('span', { class: 'tl__axis-end', text: core.formatDate(core.isoFromDay(max - 14)) })
      ]),
      h('div', { class: 'tl__overlay' }, years.map(function (yr) {
        return h('span', { class: 'tl__year', style: { left: pct(core.dayNumber(yr + '-01-01')) }, text: String(yr) });
      }).concat(t >= min && t <= max ? [h('span', { class: 'tl__today', style: { left: pct(t) } }, h('span', { text: 'I dag' }))] : []))
    ]);
  }

  function render(g, today) {
    var periods = sortedPeriods(g);
    if (!periods.length) return h('p', { text: 'Datum är inte kända än.' });
    var list = h('ol', { class: 'tl-list' }, periods.map(function (p) {
      return h('li', { class: p.ungefar ? 'is-approx' : null }, [
        h('span', { class: 'tl-list__typ label-caps', text: core.PERIOD_TYPER[p.typ] }),
        h('span', { class: 'tl-list__date', text: rangeText(p) }),
        p.ungefar ? h('span', { class: 'tl-list__approx', text: 'ungefär' }) : null,
        p.text ? h('span', { class: 'tl-list__text', text: p.text }) : null
      ]);
    }));
    var hasApprox = periods.some(function (p) { return p.ungefar; });
    return h('div', { class: 'timeline' }, [
      visual(periods, today),
      list,
      hasApprox ? h('p', { class: 'small soft', text: 'Datum märkta ”ungefär” (streckade i tidslinjen) är uppskattade utifrån tidigare år.' }) : null
    ]);
  }

  SB.timeline = { render: render, rangeText: rangeText };
})();

/* Bidragskompassen – core: year-wheel geometry and month grouping (läsår July–June). Pure. */
(function (root) {
  'use strict';
  var core = (typeof module !== 'undefined' && module.exports) ? require('./core.js') : root.SB.core;

  var START_MONTH = 7; // July at 12 o'clock – the wheel shows one läsår

  /** The läsår (Jul 1 – Jun 30) containing `today`, shifted by `offset` years. */
  function schoolYearWindow(today, offset) {
    var y = +today.slice(0, 4);
    var m = +today.slice(5, 7);
    var startYear = (m >= START_MONTH ? y : y - 1) + (offset || 0);
    return {
      start: startYear + '-07-01',
      end: (startYear + 1) + '-06-30',
      startYear: startYear,
      label: startYear + '/' + String(startYear + 1).slice(2)
    };
  }

  function windowDays(win) { return core.dayNumber(win.end) - core.dayNumber(win.start) + 1; }

  function inWindow(iso, win) {
    var d = core.dayNumber(iso);
    return d !== null && d >= core.dayNumber(win.start) && d <= core.dayNumber(win.end);
  }

  /** Degrees clockwise from 12 o'clock for the START of the given day. */
  function angleFor(iso, win) {
    return (core.dayNumber(iso) - core.dayNumber(win.start)) / windowDays(win) * 360;
  }
  /** Degrees for the END of the given day (inclusive ranges). */
  function angleForEnd(iso, win) { return angleFor(iso, win) + 360 / windowDays(win); }

  /** Clip a period to the window. Returns null when outside. */
  function clipPeriod(p, win) {
    var from = p.fran || p.till;
    var to = p.till || p.fran;
    if (!from) return null;
    if (core.dayNumber(to) < core.dayNumber(from)) { var tmp = from; from = to; to = tmp; }
    var s = core.dayNumber(win.start);
    var e = core.dayNumber(win.end);
    if (core.dayNumber(to) < s || core.dayNumber(from) > e) return null;
    var cf = core.dayNumber(from) < s ? win.start : from;
    var ct = core.dayNumber(to) > e ? win.end : to;
    return {
      from: cf, to: ct,
      clippedStart: cf !== from, clippedEnd: ct !== to,
      point: !p.fran || !p.till,
      a0: angleFor(cf, win), a1: angleForEnd(ct, win)
    };
  }

  function round(n) { return Math.round(n * 100) / 100; }

  function polar(cx, cy, r, deg) {
    var rad = (deg - 90) * Math.PI / 180;
    return { x: round(cx + r * Math.cos(rad)), y: round(cy + r * Math.sin(rad)) };
  }

  /** SVG path for a circular arc (stroke-drawn), clockwise from a0 to a1 degrees. */
  function arcPath(cx, cy, r, a0, a1) {
    var span = Math.max(0, Math.min(360, a1 - a0));
    if (span >= 359.99) {
      var top = polar(cx, cy, r, 0);
      var bottom = polar(cx, cy, r, 180);
      return 'M ' + top.x + ' ' + top.y + ' A ' + r + ' ' + r + ' 0 1 1 ' + bottom.x + ' ' + bottom.y +
        ' A ' + r + ' ' + r + ' 0 1 1 ' + top.x + ' ' + top.y;
    }
    var p0 = polar(cx, cy, r, a0);
    var p1 = polar(cx, cy, r, a0 + span);
    return 'M ' + p0.x + ' ' + p0.y + ' A ' + r + ' ' + r + ' 0 ' + (span > 180 ? 1 : 0) + ' 1 ' + p1.x + ' ' + p1.y;
  }

  /** 12 month segments for the window. */
  function monthSegments(win) {
    var out = [];
    for (var i = 0; i < 12; i++) {
      var mIdx = (START_MONTH - 1 + i) % 12;
      var year = win.startYear + (START_MONTH - 1 + i >= 12 ? 1 : 0);
      var first = year + '-' + (mIdx < 9 ? '0' : '') + (mIdx + 1) + '-01';
      var nextMonth = (mIdx + 1) % 12;
      var nextYear = nextMonth === 0 ? year + 1 : year;
      var nextFirst = nextYear + '-' + (nextMonth < 9 ? '0' : '') + (nextMonth + 1) + '-01';
      var last = core.addDays(nextFirst, -1);
      out.push({
        index: i, month: mIdx, year: year, first: first, last: last,
        label: core.MONTHS_SHORT[mIdx], longLabel: core.MONTHS[mIdx],
        a0: angleFor(first, win), a1: angleForEnd(last, win)
      });
    }
    return out;
  }

  function periodKind(p) {
    if (p.typ === 'ansokan' || p.typ === 'rekvisition') return 'window';
    if (p.typ === 'redovisning') return 'report';
    return 'event';
  }

  /** Rows for the wheel: one per grant that has at least one period inside the window. */
  function wheelRows(grants, win) {
    return grants.map(function (g) {
      var periods = g.perioder.map(function (p) {
        var c = clipPeriod(p, win);
        return c ? Object.assign({ period: p, kind: periodKind(p) }, c) : null;
      }).filter(Boolean);
      return { grant: g, periods: periods };
    }).filter(function (r) { return r.periods.length > 0; });
  }

  /** Accessible list view: periods grouped by the month they start in (within the window). */
  function periodsByMonth(grants, win) {
    var segs = monthSegments(win);
    var groups = segs.map(function (s) { return { month: s, items: [] }; });
    grants.forEach(function (g) {
      g.perioder.forEach(function (p) {
        var c = clipPeriod(p, win);
        if (!c) return;
        var idx = Math.min(11, Math.floor(c.a0 / 30.0001));
        for (var i = 0; i < segs.length; i++) {
          if (core.dayNumber(c.from) >= core.dayNumber(segs[i].first) && core.dayNumber(c.from) <= core.dayNumber(segs[i].last)) { idx = i; break; }
        }
        groups[idx] = Object.assign({}, groups[idx], {
          items: groups[idx].items.concat([{ grant: g, period: p, clip: c, kind: periodKind(p) }])
        });
      });
    });
    return groups.map(function (gr) {
      return Object.assign({}, gr, {
        items: gr.items.slice().sort(function (a, b) {
          return (core.dayNumber(a.clip.from) - core.dayNumber(b.clip.from)) ||
            a.grant.kortnamn.localeCompare(b.grant.kortnamn, 'sv');
        })
      });
    });
  }

  var api = {
    schoolYearWindow: schoolYearWindow, inWindow: inWindow, angleFor: angleFor, angleForEnd: angleForEnd,
    clipPeriod: clipPeriod, polar: polar, arcPath: arcPath, monthSegments: monthSegments,
    periodKind: periodKind, wheelRows: wheelRows, periodsByMonth: periodsByMonth
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);

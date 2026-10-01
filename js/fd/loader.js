/* Bidragskompassen – fördjupning: loads data/fordjupning/<id>.js and its calculator modules with
 * classic <script> injection (works from file://, no fetch), then hands over to SB.fd.page. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;

  function inject(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () { resolve(src); };
      s.onerror = function () { reject(new Error('Kunde inte ladda ' + src)); };
      document.body.appendChild(s);
    });
  }

  function modulesOf(guide) {
    var seen = {};
    return (guide.kalkylatorer || []).map(function (k) { return k && k.modul; }).filter(function (m) {
      if (!core.isSafeId(m) || seen[m]) return false;
      seen[m] = true;
      return true;
    });
  }

  function boot() {
    try { SB.motion.init(); } catch (e) { /* motion is optional */ }
    var id = core.parseFordjupningId(window.location.search);
    if (!id || !core.hasFordjupning(window.SB_FORDJUPNING_INDEX, id)) {
      SB.fd.page.error(id, 'okand');
      SB.booted = true;
      return;
    }
    inject('data/fordjupning/' + id + '.js').then(function () {
      var guide = window.SB_FORDJUPNING && window.SB_FORDJUPNING[id];
      if (!guide || guide.id !== id) throw new Error('Fördjupningen ' + id + ' saknar innehåll.');
      // A calculator whose module fails to load shows its own message; the rest of the page still works.
      return Promise.all(modulesOf(guide).map(function (m) {
        return inject('js/calc/' + m + '.js').catch(function (err) { if (window.console) console.error(err); });
      })).then(function () { return guide; });
    }).then(function (guide) {
      SB.fd.page.render(guide);
      SB.booted = true;
    }).catch(function (err) {
      if (window.console) console.error('[Fördjupning]', err);
      SB.fd.page.error(id, 'laddning');
      SB.booted = true;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

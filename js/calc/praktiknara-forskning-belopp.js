/* Räknare: bidrag för praktiknära forskning enligt 7 och 9 §§ förordning (2021:237). Ren funktion – ingen DOM.
 * 9 §: högst 15 % av lönen när läraren forskar minst 30 % av arbetstiden; lägre forskningstid minskar ersättningen
 * i samma proportion. Bidraget är alltså halva lönekostnaden för forskningstiden, och huvudmannen betalar minst
 * lika mycket själv (7 §).
 * Skolverkets sida 2026/27: bidraget beräknas på påbörjade månader med forskning och betalas ut terminsvis i
 * proportion till antalet månader per termin. Räknaren antar att bidragsåret är tolv månader (1 juli–30 juni),
 * sex på hösten och sex på våren, och att varje månad är en tolftedel av årslönekostnaden. */
(function (root) {
  'use strict';

  var MAX_TID = 30;          // procent av arbetstiden som ger fullt bidrag (9 §)
  var ANDEL_BIDRAG = 0.5;    // bidraget är hälften av kostnaden för forskningstiden (9 § + 7 §)
  var MAN_PER_TERMIN = 6;
  var MAN_PER_AR = 12;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }
  function heltal(v, min, max) { return tal(v, min, max) && Math.floor(v) === v; }

  function berakna(v) {
    if (!heltal(v.arslon, 1, 5000000)) return { fel: 'Ange årslönekostnaden i hela kronor, högst 5 000 000 kr.' };
    if (!tal(v.tid, 1, MAX_TID)) return { fel: 'Ange forskningstiden mellan 1 och 30 % av arbetstiden.' };
    if (!heltal(v.host, 0, MAN_PER_TERMIN) || !heltal(v.varen, 0, MAN_PER_TERMIN)) {
      return { fel: 'Ange antal månader med forskning som hela tal, 0–6 på hösten och 0–6 på våren.' };
    }
    var manader = v.host + v.varen;
    if (manader === 0) return { fel: 'Ange minst en månad då läraren forskar.' };

    var perManad = v.arslon / MAN_PER_AR * (v.tid / 100) * ANDEL_BIDRAG;
    var host = Math.round(perManad * v.host);
    var varen = Math.round(perManad * v.varen);
    var total = host + varen;
    var kostnad = Math.round(v.arslon / MAN_PER_AR * (v.tid / 100) * manader);

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.tid) + ' % forskningstid · ' + fmt(manader) + ' ' + (manader === 1 ? 'månad' : 'månader'),
      formel: fmt(v.arslon) + ' × ' + fmt(v.tid / 100) + ' × 0,5 × ' + fmt(manader) + '/12 = ' + kr(total),
      forklaring: 'Bidraget är halva lönekostnaden för forskningstiden. Vid 30 % forskning under hela året blir det 15 % av årslönen.',
      rader: [
        { etikett: 'Begäran om utbetalning 1, hösten (' + fmt(v.host) + ' mån)', varde: kr(host) },
        { etikett: 'Begäran om utbetalning 2, våren (' + fmt(v.varen) + ' mån)', varde: kr(varen) },
        { etikett: 'Lönekostnad för forskningstiden', varde: kr(kostnad) },
        { etikett: 'Huvudmannens egen del, minst', varde: kr(kostnad - total) }
      ],
      delar: [{ etikett: 'Hösten', varde: host }, { etikett: 'Våren', varde: varen }],
      extra: [{
        rubrik: 'Andel av årslönen',
        varde: fmt(Math.round(total / v.arslon * 10000) / 100) + ' %',
        text: 'Högst 15 %, vid 30 % forskningstid under hela bidragsåret (9 §).'
      }],
      varningar: v.tid < MAX_TID
        ? ['Under 30 % forskningstid minskas bidraget i samma proportion. Med ' + fmt(v.tid) + ' % blir det ' + fmt(v.tid / 2) + ' % av lönen för de månader läraren forskar.']
        : []
    };
  }

  var mod = { id: 'praktiknara-forskning-belopp', berakna: berakna, MAX_TID: MAX_TID, ANDEL_BIDRAG: ANDEL_BIDRAG };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

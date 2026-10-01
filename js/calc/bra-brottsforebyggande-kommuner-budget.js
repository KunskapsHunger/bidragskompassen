/* Räknare: projektbudget inom Brås tak för lönebikostnader och allmänna omkostnader.
 * Källa: Brå, "Ansökan om ekonomiskt stöd till kommuner för brottsförebyggande åtgärder 2027 – översikt":
 *   - lönebikostnader högst 40,66 procent av beviljad utgift för arbetskraft,
 *   - allmänna omkostnader högst 10 procent av total utgift för arbetskraft.
 * Brå säger inte uttryckligen om "total utgift för arbetskraft" omfattar lönebikostnaderna. Räknaren låter
 * användaren välja underlag; standard är det försiktigare (bara löner). Taken avrundas nedåt till hela kronor.
 * Ren funktion – ingen DOM. */
(function (root) {
  'use strict';

  var BIKOST_ANDEL = 0.4066;   // högst 40,66 % av utgift för arbetskraft (lön)
  var OMK_ANDEL = 0.10;        // högst 10 % av total utgift för arbetskraft
  var MAX = 1e10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function kr(n) { return nf.format(n) + ' kr'; }
  function heltal(v) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= 0 && v <= MAX; }

  function berakna(v) {
    var falt = ['lon', 'bikost', 'omkostnader', 'externa', 'ovriga'];
    var ok = falt.every(function (k) { return heltal(v[k]); }) && (v.underlag === 'lon' || v.underlag === 'total');
    if (!ok) {
      return { fel: 'Ange alla belopp i hela kronor, från 0 och uppåt, och välj underlag för omkostnadstaket.' };
    }
    var bikostTak = Math.floor(v.lon * 4066 / 10000);   // heltalsräkning undviker flyttalsfel
    var bikost = Math.min(v.bikost, bikostTak);
    var omkUnderlag = v.underlag === 'total' ? v.lon + bikost : v.lon;
    var omkTak = Math.floor(omkUnderlag / 10);
    var omk = Math.min(v.omkostnader, omkTak);
    var total = v.lon + bikost + omk + v.externa + v.ovriga;
    var planerat = v.lon + v.bikost + v.omkostnader + v.externa + v.ovriga;

    var varningar = [];
    if (v.bikost > bikostTak) varningar.push('Lönebikostnaderna är ' + kr(v.bikost - bikostTak) + ' över taket på 40,66 procent. Den delen räknas inte med.');
    if (v.omkostnader > omkTak) varningar.push('De allmänna omkostnaderna är ' + kr(v.omkostnader - omkTak) + ' över taket på 10 procent. Den delen räknas inte med.');
    if (v.lon === 0 && (v.bikost > 0 || v.omkostnader > 0)) varningar.push('Utan löner i projektet blir taken för lönebikostnader och omkostnader 0 kr.');

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Löner ' + kr(v.lon) + ' · externa tjänster ' + kr(v.externa) + ' · övrigt ' + kr(v.ovriga),
      formel: kr(v.lon) + ' + ' + kr(bikost) + ' + ' + kr(omk) + ' + ' + kr(v.externa) + ' + ' + kr(v.ovriga) + ' = ' + kr(total),
      forklaring: planerat > total
        ? 'Er planerade budget är ' + kr(planerat) + '. ' + kr(planerat - total) + ' ligger över taken och räknas inte med.'
        : 'Hela den planerade budgeten ryms inom taken. Taken är avrundade nedåt till hela kronor.',
      delar: [
        { etikett: 'Löner', varde: v.lon },
        { etikett: 'Lönebikostnader', varde: bikost },
        { etikett: 'Allmänna omkostnader', varde: omk },
        { etikett: 'Externa tjänster', varde: v.externa },
        { etikett: 'Övriga utgifter', varde: v.ovriga }
      ],
      rader: [
        { etikett: 'Tak för lönebikostnader (40,66 % av lönerna)', varde: kr(bikostTak) },
        { etikett: 'Tak för allmänna omkostnader (10 %)', varde: kr(omkTak) },
        { etikett: 'Underlag för omkostnadstaket', varde: kr(omkUnderlag) + (v.underlag === 'total' ? ' (löner + lönebikostnader)' : ' (bara löner)') }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'bra-brottsforebyggande-kommuner-budget', berakna: berakna, BIKOST_ANDEL: BIKOST_ANDEL, OMK_ANDEL: OMK_ANDEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

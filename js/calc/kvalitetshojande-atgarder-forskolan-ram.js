/* Räknare: illustrerad bidragsram enligt 6 § förordning (2021:848). Ren funktion – ingen DOM.
 * 6 § tredje stycket: tillgängliga medel ÷ antalet invånare i landet den 30 juni året före bidragsåret = bidrag per
 * invånare. Kommunens belopp = bidrag per invånare × kommunens index × kommunens invånare samma dag × korrigeringsfaktor.
 * Korrigeringsfaktorn bestäms så att summan för alla kommuner blir den totala bidragsramen; den går inte att räkna fram
 * för en enskild kommun och är därför ett eget fält (1 = ingen korrigering).
 * Indexet (6 § första och andra stycket) bygger på kommunens standardkostnad för förskola, fritidshem och annan
 * pedagogisk verksamhet i den kommunalekonomiska utjämningen, justerad för socioekonomi, delad med landets genomsnitt.
 * SCB räknar fram det. Förordningen anger ingen lägsta nivå och ingen avrundning; resultatet visas i hela kronor. */
(function (root) {
  'use strict';

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf0 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return nf0.format(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  function berakna(v) {
    var ok = heltal(v.medel, 1, 1e12) && heltal(v.landetsInvanare, 1, 1e8) && heltal(v.kommunensInvanare, 1, 1e7) &&
      tal(v.index, 0.01, 10) && tal(v.korrigering, 0.5, 2);
    if (!ok) {
      return { fel: 'Ange pengar i hela kronor, invånare i hela tal, ett index mellan 0,01 och 10 och en korrigeringsfaktor mellan 0,5 och 2.' };
    }
    if (v.kommunensInvanare > v.landetsInvanare) {
      return { fel: 'Kommunen kan inte ha fler invånare än hela landet.' };
    }
    var perInvanare = v.medel / v.landetsInvanare;
    var ram = perInvanare * v.index * v.kommunensInvanare * v.korrigering;
    var total = Math.round(ram);
    var perKommuninvanare = perInvanare * v.index * v.korrigering;

    var varningar = [];
    if (v.korrigering !== 1) {
      varningar.push('Korrigeringsfaktorn bestäms av SCB för alla kommuner samtidigt. Värdet här är ett antagande.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Exempel med ' + nf0.format(v.kommunensInvanare) + ' invånare och index ' + fmt(v.index) + '.',
      formel: kr(v.medel) + ' ÷ ' + nf0.format(v.landetsInvanare) + ' × ' + fmt(v.index) + ' × ' + nf0.format(v.kommunensInvanare) +
        ' × ' + fmt(v.korrigering) + ' = ' + kr(total),
      forklaring: 'Bidrag per invånare i landet: ' + fmt(perInvanare) + ' kr. Beloppet är avrundat till hela kronor.',
      rader: [
        { etikett: 'Bidrag per invånare i landet', varde: fmt(perInvanare) + ' kr' },
        { etikett: 'Bidrag per invånare i kommunen', varde: fmt(perKommuninvanare) + ' kr' },
        { etikett: 'Kommunens andel av pengarna', varde: nf4.format(ram / v.medel * 100) + ' %' },
        { etikett: 'Kommunens andel av invånarna', varde: nf4.format(v.kommunensInvanare / v.landetsInvanare * 100) + ' %' }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'kvalitetshojande-atgarder-forskolan-ram', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

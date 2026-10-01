/* Räknare: hur stor del av en anställds lön som bidraget för språkfrukost får gå till.
 * Ren funktion – ingen DOM. Formeln: månadslön × andel av tjänsten för språkfrukost × antal månader.
 * Källa: Skolverkets sida "Statsbidrag för språkfrukost 2026", frågan "Vad menas med befintliga kostnader?":
 * 30 000 kr i heltidslön och 25 procent språkfrukost ger 7 500 kr med bidraget och 22 500 kr befintliga kostnader.
 * Antal månader är ett tillägg för att räkna på flera månader; Skolverkets exempel gäller en månadslön. */
(function (root) {
  'use strict';

  var MAX_LON = 200000;
  var MAX_MANADER = 6;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.lon, 1, MAX_LON)) return { fel: 'Ange månadslönen i hela kronor från 1 till 200 000.' };
    if (!heltal(v.andel, 1, 100)) return { fel: 'Ange andelen av tjänsten som ett heltal från 1 till 100 procent.' };
    if (!heltal(v.manader, 1, MAX_MANADER)) return { fel: 'Ange antal månader som ett heltal från 1 till 6.' };

    var perManad = Math.round(v.lon * v.andel / 100);
    var bidrag = perManad * v.manader;
    var befintlig = (v.lon - perManad) * v.manader;

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: kr(v.lon) + ' i månadslön · ' + v.andel + ' % språkfrukost · ' + fmt(v.manader) + ' ' + (v.manader === 1 ? 'månad' : 'månader'),
      formel: fmt(v.lon) + ' × ' + v.andel + ' %' + (v.manader > 1 ? ' × ' + fmt(v.manader) : '') + ' = ' + kr(bidrag),
      rader: [
        { etikett: 'Per månad med bidraget', varde: kr(perManad) },
        { etikett: 'Per månad befintlig kostnad', varde: kr(v.lon - perManad) },
        { etikett: 'Befintlig kostnad, hela perioden', varde: kr(befintlig) }
      ],
      delar: [{ etikett: 'Språkfrukost', varde: bidrag }, { etikett: 'Befintlig kostnad', varde: befintlig }],
      varningar: []
    };
  }

  var mod = { id: 'sprakfrukost-personal', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

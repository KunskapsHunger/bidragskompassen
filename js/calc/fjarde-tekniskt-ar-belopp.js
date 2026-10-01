/* Räknare: bidrag för fjärde tekniskt år, förordning (2014:854) 11 kap. 6 §.
 * Ren funktion – ingen DOM. Bidrag lämnas med ett belopp per elev som deltar i utbildningen den 15 oktober.
 * Högsta belopp per elev och läsår enligt Skolverkets sida "Statsbidrag för fjärde tekniskt år"
 * (senast uppdaterad 3 augusti 2026): 138 350 kr för 2026/27 och 166 150 kr för 2027/28.
 * Skolverkets beslutslistor (begäran om utbetalning 2025/26, ansökan 2026/27) visar att beviljat belopp är
 * det lägsta av begärt belopp och antal elever (platser) × maxbelopp. Exempel: 13 elever och begärt
 * 4 700 000 kr gav 1 798 550 kr; 11 elever och begärt 1 195 000 kr gav 1 195 000 kr. */
(function (root) {
  'use strict';

  var MAXBELOPP = { '2627': 138350, '2728': 166150 };
  var LASAR = { '2627': '2026/27', '2728': '2027/28' };
  var MAX_ELEVER = 10000;
  var MAX_KR = 1e10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function elevord(n) { return n === 1 ? 'elev' : 'elever'; }

  function berakna(v) {
    var max = MAXBELOPP[v.lasar];
    if (!max) return { fel: 'Välj läsår.' };
    if (!heltal(v.elever, 1, MAX_ELEVER)) return { fel: 'Ange antal elever som ett heltal mellan 1 och 10 000.' };
    if (typeof v.begart !== 'number' || !isFinite(v.begart) || v.begart < 0 || v.begart > MAX_KR) {
      return { fel: 'Ange det belopp ni begär som ett tal från 0 kr och uppåt.' };
    }

    var tak = max * v.elever;
    var begart = Math.round(v.begart);
    var kostnadStyr = begart < tak;
    var resultat = kostnadStyr ? begart : tak;

    var varningar = [];
    if (begart === 0) varningar.push('Ni har angett 0 kr. Bidraget ska täcka kostnader för utbildningen, så utan kostnader blir det inget bidrag.');

    return {
      resultat: resultat,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + elevord(v.elever) + ' den 15 oktober · läsåret ' + LASAR[v.lasar],
      formel: 'Lägsta av ' + kr(begart) + ' och ' + fmt(max) + ' × ' + fmt(v.elever) + ' = ' + kr(resultat),
      forklaring: kostnadStyr
        ? 'Det belopp ni begär är lägre än taket för antalet elever. Då är det ert begärda belopp som gäller.'
        : 'Taket per elev begränsar bidraget. Kostnader över taket får ni stå för själva.',
      rader: [
        { etikett: 'Tak: ' + fmt(max) + ' kr × ' + fmt(v.elever) + ' ' + elevord(v.elever), varde: kr(tak) },
        { etikett: 'Begärt belopp', varde: kr(begart) },
        { etikett: 'Det som inte täcks av bidraget', varde: kr(Math.max(0, begart - tak)) }
      ],
      extra: [{
        rubrik: 'Bidrag per elev',
        varde: kr(Math.round(resultat / v.elever)),
        text: 'Högst ' + kr(max) + ' per elev och läsår ' + LASAR[v.lasar] + '.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'fjarde-tekniskt-ar-belopp', berakna: berakna, MAXBELOPP: MAXBELOPP };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

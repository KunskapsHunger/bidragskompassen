/* Räknare (illustrativ): statsbidrag för riksrekryterande spetsutbildningar enligt 16 § förordning (2024:675)
 * och 5 § förordning (2024:677): ett belopp för varje elev som deltar i spetsutbildningen den 15 oktober.
 * Ren funktion – ingen DOM. Formeln: elever × belopp per elev.
 * Förordningarna och Skolverket anger inget belopp per elev i förväg. Standardbeloppet 24 617 kr är vår uträkning ur
 * Skolverkets fyra beslut för 2025/26 (sammanlagt 44 803 064 kr för 1 820 elever; varje huvudmans belopp är ett jämnt
 * antal elever × cirka 24 617 kr, t.ex. 738 512 kr för 30 elever). För 2026/27 fördelas totalt 45 miljoner kr. */
(function (root) {
  'use strict';

  var RAM_2026_27 = 45000000;     // Skolverkets sida för 2026/27
  var BELOPP_2025_26 = 24617;     // härlett ur besluten för 2025/26
  var MAX_ELEVER = 10000;
  var MAX_BELOPP = 1000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.elever, 1, MAX_ELEVER)) {
      return { fel: 'Ange antal elever som ett heltal mellan 1 och 10 000.' };
    }
    if (!heltal(v.belopp, 1, MAX_BELOPP)) {
      return { fel: 'Ange beloppet per elev som ett heltal mellan 1 och 1 000 000 kr.' };
    }

    var total = v.elever * v.belopp;
    var rackerTill = Math.floor(RAM_2026_27 / v.belopp);

    var varningar = ['Beloppet per elev är ett antagande. Skolverket bestämmer det först när alla ansökningar har kommit in.'];
    if (total > RAM_2026_27) {
      varningar.push('Beloppet är större än hela ramen för 2026/27 (45 miljoner kr), som ska räcka till alla huvudmän.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever') + ' den 15 oktober · ' + kr(v.belopp) + ' per elev',
      formel: fmt(v.elever) + ' × ' + fmt(v.belopp) + ' = ' + kr(total),
      forklaring: v.belopp === BELOPP_2025_26
        ? '24 617 kr per elev motsvarar besluten för 2025/26. Beloppet för 2026/27 kan bli ett annat.'
        : 'Räknat med ert eget antagande om belopp per elev.',
      rader: [
        { etikett: 'Elever den 15 oktober', varde: fmt(v.elever) },
        { etikett: 'Belopp per elev (antagande)', varde: kr(v.belopp) },
        { etikett: 'Ram för hela landet 2026/27', varde: kr(RAM_2026_27) }
      ],
      extra: [{
        rubrik: 'Ramen räcker till',
        varde: fmt(rackerTill) + ' elever',
        text: 'Så många elever i hela landet ryms i 45 miljoner kr med det här beloppet per elev. Är det fler sökande elever blir beloppet lägre.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'riksrekryterande-spetsutbildningar-belopp', berakna: berakna, RAM_2026_27: RAM_2026_27, BELOPP_2025_26: BELOPP_2025_26 };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

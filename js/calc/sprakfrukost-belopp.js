/* Räknare: högsta bidrag för språkfrukost hösten 2026.
 * Ren funktion – ingen DOM. Formeln: 7 500 kr × elever som erbjuds språkfrukost.
 * Källa: regleringsbrevet för 2026 avseende Statens skolverk (ändrat 2026-06-18, Finansiering): "Bidrag får lämnas
 * med högst 7 500 kronor för varje elev som erbjuds att delta i verksamheten", högst 30 000 000 kr totalt. */
(function (root) {
  'use strict';

  var PER_ELEV = 7500;          // högst per erbjuden elev (regleringsbrevet 2026)
  var RAM = 30000000;           // högst för hela landet (regleringsbrevet 2026)
  var MAX_ELEVER = 100000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf1 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 1 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.elever, 1, MAX_ELEVER)) return { fel: 'Ange antal elever som ett heltal från 1 till 100 000.' };

    var total = PER_ELEV * v.elever;
    var andelAvRam = (total / RAM) * 100;
    var varningar = [];
    if (total > RAM) {
      varningar.push('Beloppet är större än de 30 miljoner kr som finns för hela landet. Så mycket kan ingen huvudman få.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev erbjuds' : 'elever erbjuds') + ' språkfrukost',
      formel: fmt(PER_ELEV) + ' × ' + fmt(v.elever) + ' = ' + kr(total),
      rader: [
        { etikett: 'Belopp per erbjuden elev', varde: kr(PER_ELEV) },
        { etikett: 'Andel av landets 30 miljoner kr', varde: nf1.format(andelAvRam) + ' %' }
      ],
      extra: [{
        rubrik: 'Landets ram räcker till',
        varde: fmt(RAM / PER_ELEV) + ' elever',
        text: '30 miljoner kr ÷ 7 500 kr. Söker huvudmännen för fler elever prioriterar Skolverket skolenheterna med svårast förutsättningar.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'sprakfrukost-belopp', berakna: berakna, PER_ELEV: PER_ELEV, RAM: RAM };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

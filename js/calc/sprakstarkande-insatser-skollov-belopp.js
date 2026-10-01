/* Räknare: högsta bidrag för språkstärkande insatser under skollov enligt 14 § förordning (2025:49).
 * Ren funktion – ingen DOM. Formeln: elever × veckor per elev = elevveckor; elevveckor × 1 500 kr = högsta bidrag.
 * 1 500 kr per elev och vecka står i 14 §. Högst sex veckor på sommaren står i 6 §. Begreppet elevvecka
 * (elever × veckor) kommer från Skolverkets sida för 2026. Prioriteringen av förskoleklass och åk 1–3 står i 16 §. */
(function (root) {
  'use strict';

  var PER_ELEVVECKA = 1500;   // högst per elev och vecka (14 §)
  var MAX_SOMMARVECKOR = 6;   // högst sex veckor på sommaren (6 §)
  var MAX_ELEVER = 100000;
  var MAX_VECKOR = 12;
  var LOV = ['lasar', 'sommar'];
  var STADIUM = ['f3', 'a46'];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function plural(n, en, flera) { return n === 1 ? en : flera; }

  function berakna(v) {
    if (!heltal(v.elever, 1, MAX_ELEVER)) return { fel: 'Ange antal elever som ett heltal från 1 till 100 000.' };
    if (!heltal(v.veckor, 1, MAX_VECKOR)) return { fel: 'Ange veckor per elev som ett heltal från 1 till 12.' };
    if (LOV.indexOf(v.lov) === -1) return { fel: 'Välj lov under läsåret eller sommarlovet.' };
    if (STADIUM.indexOf(v.stadium) === -1) return { fel: 'Välj vilka årskurser eleverna går i.' };

    var sommar = v.lov === 'sommar';
    var bidragsveckor = sommar ? Math.min(v.veckor, MAX_SOMMARVECKOR) : v.veckor;
    var elevveckor = v.elever * bidragsveckor;
    var total = elevveckor * PER_ELEVVECKA;

    var varningar = [];
    if (sommar && v.veckor > MAX_SOMMARVECKOR) {
      varningar.push('På sommarlovet ges bidrag för högst sex veckor. Räknaren har räknat med sex veckor i stället för ' + fmt(v.veckor) + '.');
    }
    if (!sommar && v.veckor > 2) {
      varningar.push('Ett lov under läsåret är oftast en eller två veckor. Kontrollera att alla veckor ligger under lov.');
    }
    if (v.stadium === 'a46') {
      varningar.push('Räcker pengarna inte prioriterar Skolverket förskoleklass och årskurs 1–3 (16 §). Insatser för årskurs 4–6 kan då få mindre eller inget.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + plural(v.elever, 'elev', 'elever') + ' · ' + fmt(bidragsveckor) + ' ' +
        plural(bidragsveckor, 'vecka', 'veckor') + ' · ' + (sommar ? 'sommarlovet' : 'lov under läsåret'),
      formel: fmt(v.elever) + ' × ' + fmt(bidragsveckor) + ' × ' + fmt(PER_ELEVVECKA) + ' = ' + kr(total),
      forklaring: fmt(v.elever) + ' ' + plural(v.elever, 'elev', 'elever') + ' × ' + fmt(bidragsveckor) + ' ' +
        plural(bidragsveckor, 'vecka', 'veckor') + ' = ' + fmt(elevveckor) + ' ' + plural(elevveckor, 'elevvecka', 'elevveckor') + '.',
      rader: [
        { etikett: 'Elevveckor', varde: fmt(elevveckor) },
        { etikett: 'Belopp per elevvecka', varde: kr(PER_ELEVVECKA) },
        { etikett: 'Per elev', varde: kr(bidragsveckor * PER_ELEVVECKA) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'sprakstarkande-insatser-skollov-belopp', berakna: berakna, PER_ELEVVECKA: PER_ELEVVECKA, MAX_SOMMARVECKOR: MAX_SOMMARVECKOR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

/* Räknare: bidrag per lärare enligt 19 § förordning (2019:1288), med lönebelopp enligt 9–10 och 12 §§.
 * Ren funktion – ingen DOM. Formeln: årsbelopp × tjänstgöringsgrad × andel av bidragsåret × antal lärare;
 * vid arbete i båda potterna vägs årsbeloppet efter arbetstidens fördelning. */
(function (root) {
  'use strict';

  var ARSBELOPP = { forstelarare: [85000, 170000], lektor: [170000, 255000] };   // pott 1, pott 2 (19 §)
  var LONEBELOPP = { forstelarare: [5000, 10000], lektor: [10000, 15000] };      // per månad vid heltid (9–10 §§)

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function dec(n) { return nf4.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    var tjanst = v.tjanst === 'lektor' ? 'lektor' : 'forstelarare';
    var bada = v.pott === 'bada';
    var ok = heltal(v.antal, 1, 10000) && heltal(v.grad, 0, 100) && heltal(v.manader, 0, 12) && (!bada || heltal(v.andelPott2, 0, 100));
    if (!ok) {
      return { fel: 'Ange ett helt antal lärare (1–10 000), tjänstgöringsgrad och andel i pott 2 (0–100 %) och hela månader (0–12).' };
    }
    var andel = bada ? v.andelPott2 / 100 : v.pott === 'pott2' ? 1 : 0;
    var grad = v.grad / 100;
    var b = ARSBELOPP[tjanst];
    var w = LONEBELOPP[tjanst];
    var pott1 = b[0] * (1 - andel) * grad * v.manader / 12 * v.antal;
    var pott2 = b[1] * andel * grad * v.manader / 12 * v.antal;
    var total = pott1 + pott2;
    var vagt = b[0] * (1 - andel) + b[1] * andel;
    var lon = (w[0] * (1 - andel) + w[1] * andel) * grad;
    var titel = tjanst === 'forstelarare' ? 'förstelärare' : v.antal === 1 ? 'lektor' : 'lektorer';

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: v.antal + ' ' + titel + ' · ' + fmt(grad * 100) + ' % · ' + v.manader + ' ' + (v.manader === 1 ? 'månad' : 'månader'),
      formel: fmt(vagt) + ' × ' + dec(grad) + ' × ' + v.manader + '/12 × ' + v.antal + ' = ' + kr(total),
      forklaring: bada
        ? 'Vägt årsbelopp: ' + fmt(b[0]) + ' × ' + dec(1 - andel) + ' + ' + fmt(b[1]) + ' × ' + dec(andel) + ' = ' + kr(vagt) + '.'
        : '',
      delar: [{ etikett: 'Pott 1', varde: pott1 }, { etikett: 'Pott 2', varde: pott2 }],
      extra: [{
        rubrik: 'Lönebelopp per lärare och arbetad månad',
        varde: kr(lon),
        text: 'Huvudregelns löneökning för en lärare som redan är anställd, justerad för tjänstgöringsgraden.'
      }],
      varningar: bada
        ? ['En lärare som arbetar i båda potterna tar en hel tjänst i anspråk i varje pott, även vid deltid. Kontrollera antalet tjänster i ert beslut.']
        : []
    };
  }

  var mod = { id: 'karriartjanster-belopp', berakna: berakna, ARSBELOPP: ARSBELOPP, LONEBELOPP: LONEBELOPP };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

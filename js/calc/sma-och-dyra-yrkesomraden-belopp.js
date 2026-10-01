/* Räknare: bidrag för undervisning på entreprenad inom små och dyra yrkesområden, förordning (2026:1751).
 * Ren funktion – ingen DOM. Belopp per elev och läsår: 35 000 kr (11 och 13 §§) eller 75 000 kr (12 och 14 §§).
 * Räcker pengarna inte minskas bidraget proportionerligt (17 §). Skolverkets exempel: beviljas 80 procent
 * blir varje del 80 procent av maxbeloppet (sidan "Statsbidrag för små och dyra yrkesområden 2026/27"). */
(function (root) {
  'use strict';

  var LAGRE = 35000;   // kr per elev och läsår (11 och 13 §§)
  var HOGRE = 75000;   // kr per elev och läsår (12 och 14 §§)
  var MAX_ELEVER = 100000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function elevord(n) { return n === 1 ? 'elev' : 'elever'; }

  function berakna(v) {
    if (!heltal(v.elever35, 0, MAX_ELEVER) || !heltal(v.elever75, 0, MAX_ELEVER)) {
      return { fel: 'Ange antal elever som hela tal mellan 0 och 100 000.' };
    }
    var elever = v.elever35 + v.elever75;
    if (elever === 0) return { fel: 'Ange minst en elev.' };
    var egen = v.niva === 'egen';
    if (v.niva !== 'max' && !egen) return { fel: 'Välj vilken nivå ni vill räkna med.' };
    if (egen && !heltal(v.andel, 1, 100)) return { fel: 'Ange andelen som ett heltal mellan 1 och 100 procent.' };

    var andel = egen ? v.andel / 100 : 1;
    var del35 = Math.round(LAGRE * v.elever35 * andel);
    var del75 = Math.round(HOGRE * v.elever75 * andel);
    var total = del35 + del75;
    var max = LAGRE * v.elever35 + HOGRE * v.elever75;

    var formel = '(' + fmt(LAGRE) + ' × ' + fmt(v.elever35) + ' + ' + fmt(HOGRE) + ' × ' + fmt(v.elever75) + ')' +
      (egen ? ' × ' + v.andel + ' %' : '') + ' = ' + kr(total);

    var varningar = [];
    if (egen) {
      varningar.push('Andelen är ett antagande. Hur stor andel som beviljas beror på hur mycket alla huvudmän söker för läsåret.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(elever) + ' ' + elevord(elever) + ' · ' + (egen ? v.andel + ' % av maxbeloppet' : 'maxbelopp') + ' · ett läsår',
      formel: formel,
      forklaring: egen
        ? 'Alla delar minskas med samma andel, så som 17 § kräver. Utan minskning hade det blivit ' + kr(max) + '.'
        : 'Det här är förordningens fulla belopp. Räcker pengarna inte blir det mindre.',
      rader: [
        { etikett: fmt(LAGRE) + ' kr-nivån, ' + fmt(v.elever35) + ' ' + elevord(v.elever35), varde: kr(del35) },
        { etikett: fmt(HOGRE) + ' kr-nivån, ' + fmt(v.elever75) + ' ' + elevord(v.elever75), varde: kr(del75) }
      ],
      delar: [{ etikett: '35 000 kr per elev', varde: del35 }, { etikett: '75 000 kr per elev', varde: del75 }],
      extra: [{
        rubrik: 'Genomsnitt per elev',
        varde: kr(Math.round(total / elever)),
        text: 'Mellan 35 000 och 75 000 kr vid fullt belopp, beroende på vilka yrkesområden eleverna läser.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'sma-och-dyra-yrkesomraden-belopp', berakna: berakna, LAGRE: LAGRE, HOGRE: HOGRE };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

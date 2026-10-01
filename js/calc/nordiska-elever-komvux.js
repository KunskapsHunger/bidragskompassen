/* Räknare: ersättning för nordiska elever i kommunal vuxenutbildning, en termin.
 * Ren funktion – ingen DOM.
 * Rätten till ersättning: 7 kap. 6–7 §§ förordningen (2011:1108) om vuxenutbildning. Beloppet beslutas av
 * regeringen (7 kap. 8 §): 53 400 kr per 800 verksamhetspoäng enligt regleringsbrevet för Statens skolverk 2026
 * (anslag 1:8 ap.2). Skolverket: högst 800 poäng per elev och år, fritt fördelade mellan vår- och hösttermin.
 * Formeln: 53 400 ÷ 800 × verksamhetspoäng under terminen. */
(function (root) {
  'use strict';

  var BELOPP_PER_800 = 53400;   // regleringsbrevet 2026
  var MAX_POANG_PER_AR = 800;   // per elev och kalenderår (Skolverket)
  var MAX_ELEVER = 100000;
  var HUVUDMAN = { kommun: 'Kommun', region: 'Region' };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(HUVUDMAN, v.huvudman)) return { fel: 'Välj kommun eller region. Andra huvudmän kan inte få ersättningen för komvux.' };
    if (!heltal(v.elever, 1, MAX_ELEVER)) return { fel: 'Ange antalet nordiska elever som ett helt tal mellan 1 och 100 000.' };
    if (!heltal(v.poang, 1, MAX_ELEVER * MAX_POANG_PER_AR)) return { fel: 'Ange verksamhetspoängen som ett helt tal, minst 1.' };
    if (v.poang > v.elever * MAX_POANG_PER_AR) {
      return { fel: 'Högst 800 verksamhetspoäng per elev och år ger ersättning. ' + fmt(v.elever) + ' elever kan ge högst ' + fmt(v.elever * MAX_POANG_PER_AR) + ' poäng.' };
    }

    var perPoang = BELOPP_PER_800 / MAX_POANG_PER_AR;
    var total = Math.round(perPoang * v.poang);
    var snitt = v.poang / v.elever;

    var varningar = ['Taket är 800 poäng per elev för hela kalenderåret. Har eleven redan fått ersättning för poäng på vårterminen räknas de in.'];
    if (v.huvudman === 'kommun') {
      varningar.push('En kommun får bara ersättning för elever utöver antalet svenska elever från kommunen som läser vuxenutbildning på gymnasial nivå i ett annat nordiskt land. Skolverket gör avdraget med uppgifter från CSN. Räknaren gör inget avdrag.');
      varningar.push('Kommuner får ersättning för komvux på gymnasial nivå. Grundläggande nivå och sfi ger ersättning bara till regioner.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: HUVUDMAN[v.huvudman] + ' · ' + fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever') + ' · ' + fmt(v.poang) + ' poäng',
      formel: fmt(BELOPP_PER_800) + ' ÷ 800 × ' + fmt(v.poang) + ' = ' + kr(total),
      forklaring: 'Varje verksamhetspoäng ger ' + fmt(perPoang) + ' kr.',
      rader: [
        { etikett: 'Belopp per 800 poäng (2026)', varde: kr(BELOPP_PER_800) },
        { etikett: 'Belopp per poäng', varde: fmt(perPoang) + ' kr' },
        { etikett: 'Poäng i snitt per elev', varde: fmt(Math.round(snitt * 10) / 10) }
      ],
      extra: [{ rubrik: 'En elev med 800 poäng', varde: kr(BELOPP_PER_800), text: 'Det högsta beloppet per elev och kalenderår 2026.' }],
      varningar: varningar
    };
  }

  var mod = { id: 'nordiska-elever-komvux', berakna: berakna, BELOPP_PER_800: BELOPP_PER_800, MAX_POANG_PER_AR: MAX_POANG_PER_AR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

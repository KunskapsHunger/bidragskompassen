/* Räknare: illustrerad bidragsram enligt 11 § förordning (2025:718) om statsbidrag till säkerhetshöjande åtgärder.
 * Ren funktion – ingen DOM.
 * Preliminär ram = medel × huvudmannens barn och elever ÷ alla huvudmäns barn och elever. Ingen ram under 30 000 kr.
 * Huvudman för fritidshem som inte är integrerat med en skolenhet eller förskoleenhet: fast ram 30 000 kr (11 § tredje st.).
 * Förordningen anger ingen avrundning; räknaren avrundar till hela kronor. Hur Skolverket justerar fördelningen
 * när lägsta nivån lyfter små huvudmän anger förordningen inte – räknaren visar bara principen. */
(function (root) {
  'use strict';

  var LAGSTA = 30000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function fastRam() {
    return {
      resultat: LAGSTA,
      enhet: 'kr',
      sammanfattning: 'Fast ram för huvudman för fritidshem utan skolenhet eller förskoleenhet.',
      formel: 'Fast belopp enligt 11 § tredje stycket = ' + kr(LAGSTA),
      forklaring: 'Elever i fritidshem räknas inte i elevunderlaget. En huvudman för fritidshem som inte hör till en skolenhet eller förskoleenhet får i stället alltid ' + kr(LAGSTA) + '.',
      rader: [{ etikett: 'Bidragsram', varde: kr(LAGSTA) }]
    };
  }

  function berakna(v) {
    if (!heltal(v.medel, 1, 1e12)) {
      return { fel: 'Ange pengarna att fördela i hela kronor, från 1 kr till 1 000 miljarder kr.' };
    }
    if (v.huvudman === 'fritidshem') return fastRam();
    if (!heltal(v.egnaBarn, 0, 1e8) || !heltal(v.allaBarn, 1, 1e8)) {
      return { fel: 'Ange antal barn och elever som heltal. Huvudmannens antal kan vara 0, alla huvudmäns antal måste vara minst 1 (högst 100 miljoner).' };
    }
    if (v.egnaBarn > v.allaBarn) {
      return { fel: 'Huvudmannens barn och elever kan inte vara fler än alla huvudmäns barn och elever.' };
    }
    var andel = v.egnaBarn / v.allaBarn;
    var perBarn = v.medel / v.allaBarn;
    var ra = v.medel * andel;
    var avrundad = Math.round(ra);
    var total = Math.max(LAGSTA, avrundad);
    var underMin = avrundad < LAGSTA;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: underMin ? 'Exempel där lägsta nivån gäller.' : 'Exempel på en ram efter elevandel.',
      formel: fmt(v.medel) + ' × ' + fmt(v.egnaBarn) + ' ÷ ' + fmt(v.allaBarn) + ' = ' + kr(ra) + (underMin ? ' → ' + kr(total) : ''),
      forklaring: underMin
        ? 'Det uträknade beloppet ' + kr(ra) + ' är lägre än 30 000 kr. Enligt 11 § får ingen ram vara lägre, så räknaren använder ' + kr(LAGSTA) + '.'
        : 'Ramen följer huvudmannens andel av alla barn och elever' + (avrundad !== ra ? ', avrundad till hela kronor.' : '.'),
      rader: [
        { etikett: 'Huvudmannens andel av barn och elever', varde: nf4.format(andel * 100) + ' %' },
        { etikett: 'Belopp per barn eller elev i exemplet', varde: kr(Math.round(perBarn * 100) / 100) },
        { etikett: 'Ram före lägsta nivån', varde: kr(ra) },
        { etikett: 'Lägsta ram', varde: kr(LAGSTA) }
      ]
    };
  }

  var mod = { id: 'sakerhetshojande-atgarder-ram', berakna: berakna, LAGSTA: LAGSTA };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

/* Räknare (räkneexempel): fördelning av statsbidrag för införande av ämnesbetyg, förordning (2023:889) 5 §.
 * Ren funktion – ingen DOM. Bidraget lämnas med ett belopp per elev (gymnasieskolan och anpassade
 * gymnasieskolan) och per årsstudieplats (komvux på gymnasial nivå). En huvudman får minst 20 000 kr per år.
 * Skolverket publicerar inte beloppet per elev. Beloppet per elev är därför användarens antagande. */
(function (root) {
  'use strict';

  var GOLV = 20000;          // lägsta bidrag per huvudman och bidragsår (5 §)
  var MAX_ANTAL = 1000000;
  var MAX_PER_ELEV = 10000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.elever, 0, MAX_ANTAL) || !heltal(v.arsstudieplatser, 0, MAX_ANTAL)) {
      return { fel: 'Ange elever och årsstudieplatser som hela tal mellan 0 och 1 000 000.' };
    }
    var antal = v.elever + v.arsstudieplatser;
    if (antal === 0) return { fel: 'Ange minst en elev eller årsstudieplats.' };
    if (typeof v.perElev !== 'number' || !isFinite(v.perElev) || v.perElev <= 0 || v.perElev > MAX_PER_ELEV) {
      return { fel: 'Ange ett belopp per elev som är större än 0 och högst 10 000 kr.' };
    }

    var perElev = v.perElev;
    var raknat = Math.round(perElev * antal);
    var golvet = raknat < GOLV;
    var resultat = golvet ? GOLV : raknat;
    var grans = Math.ceil(GOLV / perElev);

    return {
      resultat: resultat,
      enhet: 'kr',
      sammanfattning: fmt(antal) + ' elever och årsstudieplatser · ' + nf2.format(perElev) + ' kr per elev (antagande)',
      formel: golvet
        ? nf2.format(perElev) + ' × ' + fmt(antal) + ' = ' + kr(raknat) + ' → lägsta beloppet ' + kr(GOLV)
        : nf2.format(perElev) + ' × ' + fmt(antal) + ' = ' + kr(resultat),
      forklaring: golvet
        ? 'Beloppet per elev ger mindre än 20 000 kr. Då gäller förordningens lägsta belopp: 20 000 kr för bidragsåret.'
        : 'Beloppet ligger över förordningens lägsta belopp på 20 000 kr.',
      rader: [
        { etikett: 'Elever i gymnasieskolan och anpassade gymnasieskolan', varde: fmt(v.elever) },
        { etikett: 'Årsstudieplatser i komvux på gymnasial nivå', varde: fmt(v.arsstudieplatser) },
        { etikett: 'Uträknat belopp', varde: kr(raknat) },
        { etikett: 'Lägsta belopp per huvudman', varde: kr(GOLV) }
      ],
      extra: [{
        rubrik: 'Gräns för lägsta beloppet',
        varde: fmt(grans) + ' elever',
        text: 'Med ' + nf2.format(perElev) + ' kr per elev behövs minst ' + fmt(grans) + ' elever och årsstudieplatser för att komma över 20 000 kr.'
      }],
      varningar: ['Beloppet per elev är ett antagande. Skolverket publicerar inte beloppet, och det beror på anslaget och antalet elever i hela landet.']
    };
  }

  var mod = { id: 'inforande-amnesbetyg-fordelning', berakna: berakna, GOLV: GOLV };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

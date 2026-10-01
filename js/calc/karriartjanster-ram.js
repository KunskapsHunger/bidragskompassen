/* Räknare: illustrerad bidragsram enligt 15–18 §§ förordning (2019:1288). Ren funktion – ingen DOM.
 * Preliminär ram = medel i potten × huvudmannens elever ÷ alla huvudmäns elever. Minst 85 000 kr (pott 1)
 * eller 170 000 kr (pott 2); högre belopp avrundas till närmaste multipel. Exakt mittläge → högre multipel
 * (förordningen reglerar inte det gränsfallet; samma val som förlagan). */
(function (root) {
  'use strict';

  var STEG = { pott1: 85000, pott2: 170000 };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function positivt(v, max) { return typeof v === 'number' && isFinite(v) && v >= 1 && v <= max; }

  function berakna(v) {
    var pott = v.pott === 'pott2' ? 'pott2' : 'pott1';
    var steg = STEG[pott];
    var potten = pott === 'pott1' ? 'pott 1' : 'pott 2';
    var giltiga = positivt(v.medel, 1e12) && Math.floor(v.medel) === v.medel && positivt(v.egnaElever, 1e8) && positivt(v.allaElever, 1e8);
    if (!giltiga) {
      return { fel: 'Ange positiva tal i alla fält. Pengar anges i hela kronor (högst 1 000 miljarder) och elevantal högst 100 miljoner.' };
    }
    if (v.egnaElever > v.allaElever) {
      return { fel: 'Huvudmannens elevantal kan inte vara större än alla huvudmäns elevantal i potten.' };
    }
    if (!v.forraLasaret || (pott === 'pott2' && !v.harPott2Enhet)) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Ingen ram med de här förutsättningarna.',
        forklaring: !v.forraLasaret
          ? 'Enligt 18 § bestäms ingen bidragsram om huvudmannen inte hade elever läsåret närmast före bidragsåret.'
          : 'En ram i pott 2 kräver minst en skolenhet som omfattas av 17 §.'
      };
    }
    var andel = v.egnaElever / v.allaElever;
    var ra = v.medel * andel;
    var total = Math.max(steg, Math.round(ra / steg) * steg);
    var underMin = ra < steg;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Exempel för ' + potten + ', efter avrundning.',
      formel: fmt(v.medel) + ' × ' + fmt(v.egnaElever) + ' ÷ ' + fmt(v.allaElever) + ' = ' + kr(ra) + ' → ' + kr(total),
      forklaring: underMin
        ? 'Det uträknade beloppet ' + kr(ra) + ' ligger under lägsta nivån. Räknaren använder därför ' + kr(steg) + '.'
        : kr(ra) + ' avrundas till närmaste multipel av ' + kr(steg) + ': ' + kr(total) + '.',
      rader: [
        { etikett: 'Huvudmannens andel av eleverna', varde: nf4.format(andel * 100) + ' %' },
        { etikett: 'Ram före avrundning', varde: kr(ra) },
        { etikett: 'Avrundningssteg och lägsta nivå', varde: kr(steg) },
        { etikett: 'Antal förstelärarbelopp i ramen', varde: fmt(total / steg) }
      ]
    };
  }

  var mod = { id: 'karriartjanster-ram', berakna: berakna, STEG: STEG };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

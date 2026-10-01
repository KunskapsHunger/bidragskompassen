/* Räknare: illustrerad bidragsram enligt 12–15 §§ förordning (2016:100). Ren funktion – ingen DOM.
 * 13 §: huvudman med färre än 30 elever i genomsnitt → 50 000 kr.
 * 14 §: övriga: (totalt statsbidrag − ramarna enligt 13 §) × huvudmannens elever ÷ elever hos alla huvudmän
 * med minst 30 elever, avrundat till närmaste tal jämnt delbart med 50 000. Exakt mittläge → högre tal
 * (förordningen reglerar inte det gränsfallet; samma val som i karriartjanster-ram). */
(function (root) {
  'use strict';

  var LITEN_RAM = 50000;     // 13 §
  var GRANS = 30;            // färre än 30 elever i genomsnitt
  var STEG = 50000;          // 14 § andra stycket

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n * 100) / 100) + ' kr'; }

  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  function berakna(v) {
    var giltiga = tal(v.medel, 1, 1e12) && Math.floor(v.medel) === v.medel &&
      tal(v.antalSma, 0, 1e6) && Math.floor(v.antalSma) === v.antalSma &&
      tal(v.egnaElever, 0, 1e8) && tal(v.allaElever, 1, 1e8);
    if (!giltiga) {
      return { fel: 'Ange positiva tal. Pengar i hela kronor (högst 1 000 miljarder), antal små huvudmän som heltal och elevantal högst 100 miljoner.' };
    }
    if (!v.forraLasaret) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Ingen ram med de här förutsättningarna.',
        forklaring: 'Enligt 13–14 §§ lämnas inget statsbidrag om huvudmannen inte hade några elever läsåret närmast före bidragsåret.'
      };
    }
    if (v.egnaElever === 0) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Ingen ram med de här förutsättningarna.',
        forklaring: 'Utan elever i de skolformer som räknas finns inget underlag för en ram.'
      };
    }
    if (v.egnaElever < GRANS) {
      return {
        resultat: LITEN_RAM, enhet: 'kr',
        sammanfattning: 'Huvudman med färre än 30 elever i genomsnitt.',
        formel: fmt(v.egnaElever) + ' elever < 30 → ' + kr(LITEN_RAM),
        forklaring: 'Enligt 13 § får alla huvudmän med färre än 30 elever i genomsnitt samma ram: 50 000 kr. Elevandelen spelar då ingen roll.',
        rader: [
          { etikett: 'Huvudmannens elever i genomsnitt', varde: fmt(v.egnaElever) },
          { etikett: 'Ram enligt 13 §', varde: kr(LITEN_RAM) }
        ]
      };
    }
    if (v.egnaElever > v.allaElever) {
      return { fel: 'Huvudmannens elevantal kan inte vara större än elevantalet hos alla huvudmän med minst 30 elever.' };
    }
    var avdrag = LITEN_RAM * v.antalSma;
    var kvar = v.medel - avdrag;
    if (kvar <= 0) {
      return { fel: 'Ramarna till huvudmän med färre än 30 elever (' + kr(avdrag) + ') tar hela beloppet. Sänk antalet eller höj beloppet.' };
    }
    var andel = v.egnaElever / v.allaElever;
    var ra = kvar * andel;
    var total = Math.floor(ra / STEG + 0.5) * STEG;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Exempel för en huvudman med minst 30 elever, efter avrundning.',
      formel: '(' + fmt(v.medel) + ' − ' + fmt(avdrag) + ') × ' + fmt(v.egnaElever) + ' ÷ ' + fmt(v.allaElever) + ' = ' + kr(ra) + ' → ' + kr(total),
      forklaring: kr(ra) + ' avrundas till närmaste tal som är jämnt delbart med 50 000: ' + kr(total) + '.' +
        (total === 0 ? ' Förordningen anger ingen lägsta ram för huvudmän med minst 30 elever.' : ''),
      rader: [
        { etikett: 'Avdrag för små huvudmän (' + fmt(v.antalSma) + ' × 50 000 kr)', varde: kr(avdrag) },
        { etikett: 'Belopp att fördela efter elevantal', varde: kr(kvar) },
        { etikett: 'Huvudmannens andel av eleverna', varde: nf4.format(andel * 100) + ' %' },
        { etikett: 'Ram före avrundning', varde: kr(ra) },
        { etikett: 'Högst per begäran om utbetalning (50 %)', varde: kr(total / 2) }
      ]
    };
  }

  var mod = { id: 'lararlonelyftet-ram', berakna: berakna, LITEN_RAM: LITEN_RAM, GRANS: GRANS, STEG: STEG };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

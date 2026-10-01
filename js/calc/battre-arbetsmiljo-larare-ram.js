/* Räknare: illustrerad bidragsram enligt 6–7 §§ förordning (2021:316). Ren funktion – ingen DOM.
 * Ram = tillgängliga medel × elever på huvudmannens utvalda skolenheter ÷ elever på alla utvalda skolenheter.
 * Medlen för 2026/27 (487 500 000 kr: 285 000 000 kr hösten 2026 och 202 500 000 kr våren 2027) kommer från
 * Skolverkets sida för 2026/27. Fördelningen mellan terminerna följer samma kvot; den stämmer med beloppen i
 * Skolverkets beslutsbilaga 2026-05-20 (t.ex. 1 283 820 kr → 750 541 + 533 279 kr). */
(function (root) {
  'use strict';

  var MEDEL = 487500000;
  var HOST = 285000000;
  var VAREN = 202500000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function positivt(v, max) { return typeof v === 'number' && isFinite(v) && v >= 1 && v <= max; }

  /** Delar en bidragsram mellan hösten och våren i samma proportion som 2026/27 års medel. */
  function terminer(ram) {
    return { host: Math.round(ram * HOST / MEDEL), varen: Math.round(ram * VAREN / MEDEL) };
  }

  function berakna(v) {
    if (!positivt(v.egnaElever, 1e6) || !positivt(v.allaElever, 1e7)) {
      return { fel: 'Ange elevantal som positiva tal: högst 1 000 000 för huvudmannen och 10 000 000 totalt.' };
    }
    if (v.egnaElever > v.allaElever) {
      return { fel: 'Huvudmannens elever kan inte vara fler än eleverna på alla utvalda skolenheter.' };
    }
    if (!v.forraLasaret) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Ingen ram med de här förutsättningarna.',
        forklaring: 'Enligt 7 § beslutas ingen bidragsram för en skolenhet som inte hade några elever läsåret närmast före bidragsåret.'
      };
    }
    var andel = v.egnaElever / v.allaElever;
    var exakt = MEDEL * andel;
    var t = terminer(exakt);
    var total = t.host + t.varen;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Exempel för bidragsåret 2026/27.',
      formel: fmt(MEDEL) + ' × ' + fmt(v.egnaElever) + ' ÷ ' + fmt(v.allaElever) + ' = ' + kr(total),
      forklaring: 'Ramen delas mellan terminerna i samma proportion som Skolverkets medel: 285 av 487,5 miljoner kr på hösten och 202,5 miljoner kr på våren. Beloppen är avrundade till hela kronor.',
      rader: [
        { etikett: 'Huvudmannens andel av eleverna', varde: nf4.format(andel * 100) + ' %' },
        { etikett: 'Att begära ut för hösten 2026', varde: kr(t.host) },
        { etikett: 'Att begära ut för våren 2027', varde: kr(t.varen) }
      ],
      delar: [{ etikett: 'Hösten 2026', varde: t.host }, { etikett: 'Våren 2027', varde: t.varen }],
      extra: [{
        rubrik: 'Per elev',
        varde: kr(Math.round(total / v.egnaElever)),
        text: 'Ramen räknas på antal elever, men pengarna ska gå till lärarnas arbetsmiljö på de utvalda skolenheterna.'
      }]
    };
  }

  var mod = { id: 'battre-arbetsmiljo-larare-ram', berakna: berakna, terminer: terminer, MEDEL: MEDEL, HOST: HOST, VAREN: VAREN };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

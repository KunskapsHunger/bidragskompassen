/* Räknare (räkneexempel): så fördelas bidraget för elevers kontakt med arbetslivet 2026.
 * Källor: Skolverkets regleringsbrev för 2026 (anslag 1:5 ap.3, ändringsbeslut 21 maj 2026) och Skolverkets sida
 * för bidraget (senast uppdaterad 29 juni 2026). Ren funktion – ingen DOM.
 *  - 30 miljoner kronor fördelas proportionerligt efter antalet elever som huvudmännen har begärt bidrag för.
 *  - En huvudman kan få högst 12,3 procent av anslaget, vilket Skolverket anger till 3 679 613 kr.
 * Det sammanlagda elevantalet för alla huvudmän är inte publicerat, så användaren får ange ett antagande.
 * Skolverket säger inte hur pengar över taket fördelas – räknaren gör ingen omfördelning. */
(function (root) {
  'use strict';

  var ANSLAG = 30000000;             // kr, 2026
  var TAK = 3679613;                 // kr per huvudman enligt Skolverket (12,3 % av anslaget)
  var MAX_ELEVER = 1000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function heltal(v, min) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= MAX_ELEVER; }

  function berakna(v) {
    if (!heltal(v.egna, 0) || !heltal(v.alla, 1)) {
      return { fel: 'Ange antal elever som heltal. Alla huvudmäns elever ska vara minst 1.' };
    }
    if (v.egna > v.alla) {
      return { fel: 'Era elever kan inte vara fler än alla huvudmäns elever tillsammans.' };
    }

    var perElev = ANSLAG / v.alla;
    var proportionellt = Math.round(ANSLAG * v.egna / v.alla);
    var bidrag = Math.min(proportionellt, TAK);
    var tak = proportionellt > TAK;
    var andel = v.egna / v.alla * 100;

    var varningar = ['Räkneexempel. Hur många elever alla huvudmän har begärt bidrag för är inte publicerat. Ändra antagandet och se hur beloppet påverkas.'];
    if (tak) {
      varningar.push('Beloppet har begränsats till taket på 3 679 613 kr. Skolverket har inte beskrivit hur pengar över taket fördelas.');
    }

    if (v.egna === 0) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Inga elever med insatser',
        formel: fmt(ANSLAG) + ' × 0 / ' + fmt(v.alla) + ' = 0 kr',
        forklaring: 'Bidraget fördelas efter antalet elever i årskurs 7–9 som har sao-jobb eller en annan insats för kontakt med arbetslivet. Utan sådana elever blir det inget bidrag.',
        varningar: varningar
      };
    }

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: fmt(v.egna) + ' av ' + fmt(v.alla) + ' elever · ' + fmt(Math.round(andel * 100) / 100) + ' %',
      formel: fmt(ANSLAG) + ' × ' + fmt(v.egna) + ' / ' + fmt(v.alla) + ' = ' + kr(proportionellt) + (tak ? ', högst ' + kr(TAK) : ''),
      forklaring: tak
        ? 'Er andel av eleverna skulle ge ' + kr(proportionellt) + ', men ingen huvudman kan få mer än ' + kr(TAK) + '.'
        : 'Med ' + fmt(v.alla) + ' elever sammanlagt blir det ' + kr(perElev) + ' per elev.',
      rader: [
        { etikett: 'Er andel av eleverna', varde: fmt(Math.round(andel * 100) / 100) + ' %' },
        { etikett: 'Belopp per elev', varde: kr(perElev) },
        { etikett: 'Tak per huvudman', varde: kr(TAK) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'elevers-kontakt-med-arbetslivet-fordelning', berakna: berakna, ANSLAG: ANSLAG, TAK: TAK };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

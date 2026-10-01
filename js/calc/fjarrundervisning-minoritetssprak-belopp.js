/* Räknare: bidrag för fjärrundervisning i nationella minoritetsspråk enligt 10 § förordning (2025:359).
 * Ren funktion – ingen DOM. Formeln: (28 000 kr × elever som läser individuellt + 30 800 kr × undervisningsgrupper)
 * × (1 eller ½ läsår) × andel av schablonen.
 * Källor: 10 § (schablon per elev som minskar för varje ytterligare elev; proportionell minskning om pengarna inte räcker).
 * Skolverkets sida 2026/27: högst 28 000 kr per år för en elev med individuell undervisning och 30 800 kr per år för en
 * undervisningsgrupp. Skolverkets sida 2025/26: högst 14 000 kr per elev och termin; elev 1 ger 100 %, elev 2 10 %,
 * elev 3 och fler 0 % (14 000 + 1 400 = 15 400 kr per grupp och termin). Exemplet "nivån för 2025/26" (≈ 76,8 %) är
 * vår uträkning ur Skolverkets beslutslista: 21 497 kr per individuell elev och 23 646 kr per grupp. */
(function (root) {
  'use strict';

  var INDIVIDUELL_AR = 28000;   // högst per elev med individuell undervisning och läsår (Skolverket 2026/27)
  var GRUPP_AR = 30800;         // högst per undervisningsgrupp och läsår (Skolverket 2026/27)
  var MAX_ANTAL = 10000;
  var TERMINER = { lasar: 1, termin: 0.5 };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nfp = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 3 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.individuella, 0, MAX_ANTAL) || !heltal(v.grupper, 0, MAX_ANTAL)) {
      return { fel: 'Ange elever och grupper som hela tal mellan 0 och 10 000.' };
    }
    if (v.individuella + v.grupper === 0) {
      return { fel: 'Ange minst en elev som läser individuellt eller en undervisningsgrupp.' };
    }
    if (!Object.prototype.hasOwnProperty.call(TERMINER, v.terminer)) {
      return { fel: 'Välj hela läsåret eller en termin.' };
    }
    if (typeof v.niva !== 'number' || !isFinite(v.niva) || v.niva < 1 || v.niva > 100) {
      return { fel: 'Ange andelen av schablonen som ett tal från 1 till 100 procent.' };
    }

    var faktor = TERMINER[v.terminer];
    var perIndivid = INDIVIDUELL_AR * faktor;
    var perGrupp = GRUPP_AR * faktor;
    var schablon = v.individuella * perIndivid + v.grupper * perGrupp;
    var total = Math.round(schablon * v.niva / 100);
    var minskad = v.niva < 100;
    var period = v.terminer === 'lasar' ? 'hela läsåret' : 'en termin';

    var formel = fmt(perIndivid) + ' × ' + fmt(v.individuella) + ' + ' + fmt(perGrupp) + ' × ' + fmt(v.grupper) +
      (minskad ? ' = ' + kr(schablon) + ' × ' + nfp.format(v.niva) + ' % = ' : ' = ') + kr(total);

    var rader = [
      { etikett: 'Individuell undervisning, ' + fmt(v.individuella) + ' × ' + kr(perIndivid), varde: kr(v.individuella * perIndivid) },
      { etikett: 'Undervisningsgrupper, ' + fmt(v.grupper) + ' × ' + kr(perGrupp), varde: kr(v.grupper * perGrupp) },
      { etikett: 'Högsta belopp enligt schablonen', varde: kr(schablon) }
    ];
    if (minskad) rader.push({ etikett: 'Efter minskning till ' + nfp.format(v.niva) + ' %', varde: kr(total) });

    var varningar = [];
    if (minskad) {
      varningar.push('Minskningen är ett antagande. Hur mycket bidragen minskas ett läsår vet ni först i Skolverkets beslut.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.individuella) + ' individuellt · ' + fmt(v.grupper) + ' ' + (v.grupper === 1 ? 'grupp' : 'grupper') + ' · ' + period,
      formel: formel,
      forklaring: v.terminer === 'termin' ? 'En termin ger halva årsbeloppet: 14 000 kr per elev och 15 400 kr per grupp.' : '',
      rader: rader,
      delar: [
        { etikett: 'Individuellt', varde: Math.round(v.individuella * perIndivid * v.niva / 100) },
        { etikett: 'Grupper', varde: Math.round(v.grupper * perGrupp * v.niva / 100) }
      ],
      extra: [{
        rubrik: 'Per termin',
        varde: kr(v.terminer === 'lasar' ? Math.round(total / 2) : total),
        text: 'Bidraget betalas ut en gång per termin (13 §).'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'fjarrundervisning-minoritetssprak-belopp', berakna: berakna, INDIVIDUELL_AR: INDIVIDUELL_AR, GRUPP_AR: GRUPP_AR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

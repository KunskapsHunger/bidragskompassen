/* Räknare: kontrollräkning inför redovisningen av statsbidrag för lärcentrum, förordning (2017:1303).
 * Ren funktion – ingen DOM. Enligt 8 § 3 är mottagaren återbetalningsskyldig för bidrag som inte har
 * utnyttjats. Skolverket frågar i redovisningen hur mycket som använts till varje insats.
 * Formeln: kan krävas tillbaka = beviljat − använt till insatserna (aldrig under 0). */
(function (root) {
  'use strict';

  var MAX_BELOPP = 1e10;
  var INSATSER = ['insats1', 'insats2', 'insats3'];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function kr(n) { return nf.format(n) + ' kr'; }
  function belopp(v) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= MAX_BELOPP; }

  function berakna(v) {
    if (!belopp(v.beviljat) || !INSATSER.every(function (k) { return belopp(v[k]); })) {
      return { fel: 'Ange belopp i kronor från 0 och uppåt för beviljat bidrag och för varje insats.' };
    }
    var anvant = INSATSER.reduce(function (s, k) { return s + v[k]; }, 0);
    var ejAnvant = Math.max(0, v.beviljat - anvant);
    var overskjutande = Math.max(0, anvant - v.beviljat);
    var utanAnnatBidrag = v.ingetAnnatBidrag !== false;

    var varningar = [];
    if (!utanAnnatBidrag) varningar.push('Kostnader som också får annat statsbidrag eller särskild ersättning får inte räknas in (3 § andra stycket). Dra av dem från insatserna och räkna igen.');
    if (ejAnvant > 0) varningar.push('Bidrag som inte har använts kan Skolverket kräva tillbaka. Skolverket kan avstå helt eller delvis om det finns särskilda skäl.');

    return {
      resultat: ejAnvant,
      enhet: 'kr',
      sammanfattning: 'Beviljat ' + kr(v.beviljat) + ' · använt ' + kr(anvant),
      formel: kr(v.beviljat) + ' − (' + INSATSER.map(function (k) { return nf.format(v[k]); }).join(' + ') + ') = ' + kr(v.beviljat - anvant) +
        (v.beviljat - anvant < 0 ? ' → 0 kr' : ''),
      forklaring: overskjutande > 0
        ? 'Kostnaderna är större än bidraget. Det som går utöver bidraget betalar kommunerna själva.'
        : 'Det som inte har använts till insatserna i ansökan kan krävas tillbaka enligt 8–9 §§.',
      delar: INSATSER.map(function (k, i) { return { etikett: 'Insats ' + (i + 1), varde: v[k] }; })
        .concat([{ etikett: 'Ej använt', varde: ejAnvant }]),
      rader: [
        { etikett: 'Beviljat bidrag', varde: kr(v.beviljat) },
        { etikett: 'Använt till insatserna', varde: kr(anvant) },
        { etikett: 'Ej använt', varde: kr(ejAnvant) },
        { etikett: 'Kostnader utöver bidraget', varde: kr(overskjutande) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'larcentrum-redovisning', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

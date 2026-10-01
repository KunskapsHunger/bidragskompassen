/* Räknare: transporttak och bidrag per deltagande elev för Skapande skola.
 * Källor: Kulturrådets riktlinjer för Skapande skola (2026-06-09), avsnitt 2.4 – transporter för elever och
 * lärare får vara högst 20 procent av det totala bidragsbeloppet – och Kulturrådets råd "Så ansöker du lätt
 * och rätt": dela beviljat bidrag med antalet deltagande elever för att få en uppskattning per elev.
 * Ren funktion – ingen DOM. Taket avrundas nedåt till hela kronor så att det aldrig överskrids. */
(function (root) {
  'use strict';

  var TRANSPORT_ANDEL = 0.2;      // högst 20 % av bidraget till transporter (riktlinjerna 2.4)
  var MAX_BELOPP = 1e10;
  var MAX_ELEVER = 2000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function kr(n) { return nf.format(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    var ok = heltal(v.bidrag, 1, MAX_BELOPP) && heltal(v.elever, 1, MAX_ELEVER) && heltal(v.transport, 0, MAX_BELOPP);
    if (!ok) {
      return { fel: 'Ange beviljat bidrag i hela kronor (minst 1 kr), ett helt antal deltagande elever (minst 1) och planerade transportkostnader i hela kronor (0 eller mer).' };
    }
    var tak = Math.floor(v.bidrag / 5);   // 20 %, heltalsräkning undviker flyttalsfel
    var perElev = v.bidrag / v.elever;
    var over = v.transport - tak;
    var varningar = [];
    if (over > 0) {
      varningar.push('De planerade transportkostnaderna är ' + kr(over) + ' över taket. Minska transporterna, eller betala mellanskillnaden med egna pengar.');
    }
    return {
      resultat: tak,
      enhet: 'kr',
      sammanfattning: 'Bidrag ' + kr(v.bidrag) + ' · ' + nf.format(v.elever) + ' deltagande ' + (v.elever === 1 ? 'elev' : 'elever'),
      formel: kr(v.bidrag) + ' × 20 % = ' + kr(tak),
      forklaring: 'Taket är avrundat nedåt till hela kronor. Kulturrådet kan också sätta en egen gräns i beslutet – den gäller i så fall.',
      delar: [
        { etikett: 'Planerade transporter', varde: Math.min(v.transport, tak) },
        { etikett: 'Kvar till kulturaktörer m.m.', varde: v.bidrag - Math.min(v.transport, tak) }
      ],
      rader: [
        { etikett: 'Högst till transporter', varde: kr(tak) },
        { etikett: 'Planerade transporter', varde: kr(v.transport) },
        { etikett: over > 0 ? 'Över taket' : 'Kvar under taket', varde: kr(Math.abs(over)) },
        { etikett: 'Bidrag per deltagande elev', varde: nf2.format(perElev) + ' kr' }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'skapande-skola-transport', berakna: berakna, TRANSPORT_ANDEL: TRANSPORT_ANDEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

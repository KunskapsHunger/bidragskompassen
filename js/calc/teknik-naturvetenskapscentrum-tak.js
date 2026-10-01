/* Räknare: grund för statsbidrag till teknik- och naturvetenskapscentrum. Ren funktion – ingen DOM.
 * Skolverkets beräkningsmodell (sidan för 2026): ett centrum kan inte beviljas mer än 49 procent av redovisade
 * intäkter för närmast föregående kalenderår, exklusive beviljat statsbidrag från Skolverket. Grunden för
 * beräkningen är det lägsta av sökt belopp och 49 procent av intäkterna. Vad centret faktiskt får beror sedan
 * på ramen (2026: högst 25 500 000 kr enligt regleringsbrevet) och hur många som delar på den. */
(function (root) {
  'use strict';

  var ANDEL = 0.49;
  var MAX_KR = 1e10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return nf.format(Math.floor(n)) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.intakter, 0, MAX_KR) || !heltal(v.sokt, 0, MAX_KR)) {
      return { fel: 'Ange intäkter och sökt belopp i hela kronor, från 0 till 10 miljarder.' };
    }
    if (v.sokt === 0) {
      return { fel: 'Ange hur mycket centret söker.' };
    }
    var tak = Math.floor(v.intakter * 49 / 100); // heltalsaritmetik: 0,49 × intäkter utan flyttalsfel
    var grund = Math.min(v.sokt, tak);
    var begransad = v.sokt > tak;

    var varningar = [];
    if (begransad) {
      varningar.push('Ni söker mer än 49 procent av intäkterna. Skolverket räknar då bara med ' + kr(tak) + '.');
    }
    if (v.intakter === 0) {
      varningar.push('Utan andra intäkter än statsbidraget kan centret inte få bidrag. Det ska också huvudsakligen finansieras på annat sätt.');
    }

    return {
      resultat: grund,
      enhet: 'kr',
      blockerad: v.intakter === 0,
      sammanfattning: begransad ? 'Begränsat av 49-procentsregeln' : 'Sökt belopp ryms inom 49 procent',
      formel: 'lägsta av ' + fmt(v.sokt) + ' och 0,49 × ' + fmt(v.intakter) + ' = ' + kr(grund),
      forklaring: 'Beloppet är ett tak för beräkningen. Om pengarna inte räcker till alla kan Skolverket bevilja mindre.',
      rader: [
        { etikett: 'Sökt belopp', varde: kr(v.sokt) },
        { etikett: '49 procent av intäkterna', varde: kr(tak) },
        { etikett: 'Grund för beräkningen', varde: kr(grund) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'teknik-naturvetenskapscentrum-tak', berakna: berakna, ANDEL: ANDEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

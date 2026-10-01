/* Räknare: grundbidrag och tak för en ackrediterad organisations budgetansökan inom skola (KA121-SCH).
 * Ren funktion – ingen DOM. Reglerna kommer från UHR:s "Rules of budget allocation for accredited applicants
 * under Erasmus+ Key Action 1", fält skola, ansökningsår 2026:
 *   Grundbidrag (fas 1): minst 20 000 euro; för konsortier 20 000 × antal organisationer, högst 100 000 euro.
 *     Har sökanden avslutat minst ett ackrediterat projekt: 80 % av det högsta förbrukade bidraget i de tre
 *     senast avslutade projekten, men inte lägre än beloppet ovan. Under 25 poäng i senaste kvalitets- eller
 *     Erasmusplanrapport: grundbidraget minskas med 20 %.
 *   Tak: 200 000 euro; för konsortier 200 000 × antal organisationer, högst 600 000 euro.
 *   Ingen får mer än den beräknade budgeten för de sökta aktiviteterna (programguiden 2026). */
(function (root) {
  'use strict';

  var GRUND = 20000;
  var GRUND_KONSORTIUM_MAX = 100000;
  var TAK = 200000;
  var TAK_KONSORTIUM_MAX = 600000;
  var ANDEL_AV_FORBRUKAT = 0.8;
  var AVDRAG_LAG_POANG = 0.2;
  var MAX_BELOPP = 10000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function eur(n) { return fmt(n) + ' euro'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (v.typ !== 'egen' && v.typ !== 'konsortium') return { fel: 'Välj om ni söker som egen organisation eller som konsortium.' };
    var antalOrg = v.typ === 'konsortium' ? v.organisationer : 1;
    if (v.typ === 'konsortium' && !heltal(antalOrg, 2, 500)) {
      return { fel: 'Ett konsortium består av samordnaren och minst en medlem. Ange antal organisationer som ett heltal, minst 2.' };
    }
    if (!heltal(v.behov, 0, MAX_BELOPP)) return { fel: 'Ange den beräknade budgeten för era sökta aktiviteter som ett heltal i euro.' };
    if (typeof v.tidigare !== 'boolean' || typeof v.lagPoang !== 'boolean') return { fel: 'Kryssrutorna har ogiltiga värden.' };
    if (v.tidigare && !heltal(v.hogsta, 0, MAX_BELOPP)) return { fel: 'Ange det högsta förbrukade bidraget som ett heltal i euro.' };

    var golv = v.typ === 'konsortium' ? Math.min(GRUND * antalOrg, GRUND_KONSORTIUM_MAX) : GRUND;
    var tak = v.typ === 'konsortium' ? Math.min(TAK * antalOrg, TAK_KONSORTIUM_MAX) : TAK;

    var tidigareDel = v.tidigare ? Math.round(ANDEL_AV_FORBRUKAT * v.hogsta) : 0;
    var grund = Math.max(golv, tidigareDel);
    var fore = grund;
    if (v.lagPoang) grund = Math.round(grund * (1 - AVDRAG_LAG_POANG));
    grund = Math.min(grund, tak);

    var garanterat = Math.min(grund, v.behov);
    var hogst = Math.min(tak, v.behov);

    var formel = v.tidigare
      ? 'Högst av ' + eur(golv) + ' och 80 % × ' + eur(v.hogsta) + ' = ' + eur(fore)
      : (v.typ === 'konsortium' ? eur(GRUND) + ' × ' + fmt(antalOrg) + ' organisationer, högst ' + eur(GRUND_KONSORTIUM_MAX) + ' = ' + eur(golv) : 'Grundbidrag ' + eur(golv));
    if (v.lagPoang) formel += ' − 20 % = ' + eur(Math.round(fore * (1 - AVDRAG_LAG_POANG)));

    var forklaring = 'Ingen får mer än den beräknade budgeten för de aktiviteter som söks. Därför blir första fasen ' +
      eur(garanterat) + ' när er budget är ' + eur(v.behov) + '.';

    var varningar = [];
    if (v.behov > tak) varningar.push('Er beräknade budget är större än taket. Ni kan som mest få ' + eur(tak) + '.');
    if (v.lagPoang) varningar.push('Avdraget på 20 % görs en gång per rapport. Grundbidraget kan då bli lägre än 20 000 euro.');
    if (v.tidigare && tidigareDel > golv) {
      varningar.push('Räcker pengarna i första fasen inte till alla minskas grundbidragen i samma takt, men inte under ' + eur(golv) + '.');
    }
    if (v.tidigare) varningar.push('Förbrukade ni under hälften av bidraget i ert senaste ackrediterade projekt sänks taket. Räknaren tar inte hänsyn till det.');

    return {
      resultat: garanterat,
      enhet: 'euro',
      sammanfattning: (v.typ === 'konsortium' ? 'Konsortium med ' + fmt(antalOrg) + ' organisationer' : 'Egen organisation') +
        ' · tak ' + eur(tak),
      formel: formel,
      forklaring: forklaring,
      rader: [
        { etikett: 'Grundbidrag i första fasen', varde: eur(grund) },
        { etikett: 'Er beräknade budget', varde: eur(v.behov) },
        { etikett: 'Tak för bidraget', varde: eur(tak) },
        { etikett: 'Högsta möjliga bidrag för er', varde: eur(hogst) }
      ],
      extra: [{
        rubrik: 'Utrymme efter första fasen',
        varde: eur(Math.max(0, hogst - garanterat)),
        text: 'Det här fördelas i konkurrens i nästa fas, efter poäng och prioriteringar. Det är inte säkert att ni får något av det.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'erasmus-ackreditering-ram', berakna: berakna, GRUND: GRUND, TAK: TAK };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

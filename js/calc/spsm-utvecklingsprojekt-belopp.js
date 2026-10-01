/* Räknare: högsta bidrag för ett utvecklingsprojekt (SPSM, särskilda insatser på skolområdet).
 * Ren funktion – ingen DOM. Källa: SPSM, "Information om bidraget till utvecklingsprojekt", bidragsår 2027
 * (2026-08-28, dnr 6 STA-2026/311) och bidragsår 2026:
 *   - bidrag bara för faktiska lönekostnader i projektledning och projektgrupp, högst 1,2 årsarbetare,
 *   - högst 778 000 kr per årsarbetare i genomsnitt för 2027 (672 000 kr för 2026),
 *   - alltså högst 933 600 kr per projekt för 2027 (806 400 kr för 2026), högst 12 månader.
 * Formel: lägsta av (lönekostnad för de årsarbetare som räknas) och (tak × årsarbetare som räknas).
 * Har ni fler än 1,2 årsarbetare räknas lönekostnaden ned i proportion (förenkling – se förbehållen). */
(function (root) {
  'use strict';

  var TAK = { '2027': 778000, '2026': 672000 };         // kr per årsarbetare i genomsnitt
  var LASAR = { '2027': '2027/28', '2026': '2026/27' };
  var MAX_ARSARBETARE = 1.2;
  var MAX_KOSTNAD = 100000000;
  var MAX_ARB_INMATNING = 20;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function kr(n) { return nf.format(n) + ' kr'; }
  function arb(n) { return nf2.format(n); }

  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(TAK, v.ar)) {
      return { fel: 'Välj vilket bidragsår ni räknar på.' };
    }
    if (!tal(v.arsarbetare, 0, MAX_ARB_INMATNING) || v.arsarbetare <= 0) {
      return { fel: 'Ange antal årsarbetare som ett tal större än 0, till exempel 1,2.' };
    }
    if (!tal(v.lonekostnad, 0, MAX_KOSTNAD)) {
      return { fel: 'Ange lönekostnaden i kronor, från 0 till 100 000 000 kr.' };
    }

    var tak = TAK[v.ar];
    var a = v.arsarbetare;
    var raknasArb = Math.min(a, MAX_ARSARBETARE);
    var raknasKostnad = a > MAX_ARSARBETARE ? v.lonekostnad * MAX_ARSARBETARE / a : v.lonekostnad;
    var takBelopp = Math.round(tak * raknasArb);
    var bidrag = Math.round(Math.min(raknasKostnad, takBelopp));
    var egenDel = Math.max(0, Math.round(v.lonekostnad - bidrag));
    var snitt = v.lonekostnad / a;
    var begransadAvTak = raknasKostnad > takBelopp;

    var varningar = [];
    if (a > MAX_ARSARBETARE) {
      varningar.push('Bidrag ges för högst 1,2 årsarbetare. Räknaren har tagit med lönekostnaden för 1,2 av ' + arb(a) + ' årsarbetare. Resten betalar ni själva.');
    }
    if (begransadAvTak) {
      varningar.push('Snittkostnaden per årsarbetare är högre än taket på ' + kr(tak) + '. Det som går över taket betalar ni själva.');
    }
    if (bidrag === 0) {
      varningar.push('Utan lönekostnader i projektet blir bidraget 0 kr. SPSM ger inte bidrag till andra kostnader än lön.');
    }

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: arb(raknasArb) + ' årsarbetare · läsår ' + LASAR[v.ar] + ' · tak ' + kr(tak) + ' per årsarbetare',
      formel: 'Lägsta av ' + kr(Math.round(raknasKostnad)) + ' och ' + nf.format(tak) + ' × ' + arb(raknasArb) + ' = ' + kr(takBelopp) + ' → ' + kr(bidrag),
      forklaring: begransadAvTak
        ? 'Taket avgör beloppet: ' + nf.format(tak) + ' kr per årsarbetare i genomsnitt.'
        : 'Lönekostnaden ryms under taket. Bidraget kan som mest bli den faktiska lönekostnaden.',
      blockerad: bidrag === 0,
      rader: [
        { etikett: 'Årsarbetare som räknas (högst 1,2)', varde: arb(raknasArb) },
        { etikett: 'Lönekostnad som räknas', varde: kr(Math.round(raknasKostnad)) },
        { etikett: 'Tak för de årsarbetarna', varde: kr(takBelopp) },
        { etikett: 'Högsta bidrag', varde: kr(bidrag) },
        { etikett: 'Lönekostnad som ni betalar själva', varde: kr(egenDel) }
      ],
      delar: [{ etikett: 'Bidrag', varde: bidrag }, { etikett: 'Egen kostnad', varde: egenDel }],
      extra: [{
        rubrik: 'Lönekostnad per årsarbetare',
        varde: kr(Math.round(snitt)),
        text: 'Taket för ' + (v.ar === '2027' ? '2027' : '2026') + ' är ' + kr(tak) + ' per årsarbetare i genomsnitt.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'spsm-utvecklingsprojekt-belopp', berakna: berakna, TAK: TAK, MAX_ARSARBETARE: MAX_ARSARBETARE };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

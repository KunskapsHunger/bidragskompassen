/* Räknare: årsarbetskrafter för personalförstärkning, förordning (2024:1341), enligt Skolverkets
 * beräkningsstöd ("Beräkningsstöd för årsarbetskrafter", xlsx) och sidan "Vad är en årsarbetskraft?".
 * Ren funktion – ingen DOM.
 *  - Med tjänstgöringsgrad: antal personer × tjänstgöringsgrad × månader/12 (Skolverkets exempel:
 *    0,75 × 3/12 = 0,1875 ≈ 0,19).
 *  - Timavlönade: arbetade timmar ÷ 1 700 (1 700 timmar = 1,0 årsarbetskraft).
 *  - Bara anställningar eller uppdrag som varar minst sex månader räknas (8 § och Skolverket).
 * Årsarbetskrafterna avrundas till två decimaler. Bidraget visas med 2026 års schablonbelopp
 * (samma tabell som personalforstarkning-belopp; ett test kontrollerar att de stämmer överens). */
(function (root) {
  'use strict';

  var TIMMAR_PER_AR = 1700;
  var SCHABLON_AR = 2026;
  var SCHABLON = {
    skollakare: 878000, skolskoterska: 393000, kurator: 351000, psykolog: 414000,
    speciallarare: 402000, fortbildning: 363000, laravlastande: 302000, lararassistent: 248000
  };
  var MAX_TIMMAR = 17000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function round2(n) { return Math.round((n + 1e-9) * 100) / 100; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    var kategori = Object.prototype.hasOwnProperty.call(SCHABLON, v.kategori) ? v.kategori : null;
    if (!kategori) return { fel: 'Välj en yrkeskategori.' };
    var timmar = v.satt === 'timmar';
    var ok = timmar
      ? typeof v.timmar === 'number' && isFinite(v.timmar) && v.timmar >= 0 && v.timmar <= MAX_TIMMAR
      : heltal(v.antal, 1, 10000) && heltal(v.grad, 0, 100) && heltal(v.manader, 0, 12);
    if (!ok) {
      return {
        fel: timmar
          ? 'Ange arbetade timmar som ett tal från 0 till 17 000 000.'
          : 'Ange ett helt antal personer (1–10 000), tjänstgöringsgrad (0–100 %) och hela månader (0–12).'
      };
    }
    var schablon = SCHABLON[kategori];

    if (v.minstSexManader !== true) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Räknas inte in i årsarbetskrafterna.',
        forklaring: 'Bara anställningar eller uppdrag som varar minst sex månader, på heltid eller deltid, räknas (8 §). Tiden får gärna fortsätta efter årsskiftet – det är hela anställningens längd som räknas.'
      };
    }

    var exakt = timmar ? v.timmar / TIMMAR_PER_AR : v.antal * (v.grad / 100) * (v.manader / 12);
    var aa = round2(exakt);
    var bidrag = Math.round(aa * schablon);
    var uppstallning = timmar
      ? fmt(v.timmar) + ' ÷ ' + fmt(TIMMAR_PER_AR) + ' = ' + nf4.format(exakt)
      : fmt(v.antal) + ' × ' + fmt(v.grad / 100) + ' × ' + v.manader + '/12 = ' + nf4.format(exakt);

    var varningar = [];
    if (!timmar && v.manader < 6) {
      varningar.push('Under bidragsåret räknas bara ' + v.manader + ' ' + (v.manader === 1 ? 'månad' : 'månader') +
        '. Det går bra om anställningen fortsätter efter årsskiftet så att den varar minst sex månader totalt.');
    }
    if (kategori === 'fortbildning') varningar.push('Räkna bara den tid läraren arbetar, inte den tid som går till studier.');

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: fmt(aa) + ' ' + (aa === 1 ? 'årsarbetskraft' : 'årsarbetskrafter') + ' · om allt är förstärkning med bidrag',
      formel: fmt(aa) + ' × ' + fmt(schablon) + ' = ' + kr(bidrag),
      forklaring: 'Årsarbetskrafter: ' + uppstallning + (aa !== exakt ? ', avrundat till ' + fmt(aa) : '') +
        '. Schablonbeloppet för ' + SCHABLON_AR + ' är ' + kr(schablon) + ' per årsarbetskraft.',
      rader: [
        { etikett: 'Årsarbetskrafter', varde: fmt(aa) },
        { etikett: 'Före avrundning', varde: nf4.format(exakt) },
        { etikett: 'Schablonbelopp ' + SCHABLON_AR + ' per årsarbetskraft', varde: kr(schablon) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'personalforstarkning-arsarbetskraft', berakna: berakna, SCHABLON: SCHABLON, TIMMAR_PER_AR: TIMMAR_PER_AR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

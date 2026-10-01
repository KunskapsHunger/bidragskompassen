/* Räknare: uppskattat bidrag för en akutskola enligt 4–6 §§ förordning (2024:1340) om statsbidrag för
 * personalkostnader i akutskolor. Ren funktion – ingen DOM.
 *  - 6 §: bidraget motsvarar hälften av personalkostnaden, minskat i proportion vid deltid.
 *  - Skolverkets sida för 2026: i bidraget ingår sociala avgifter, som "beräknas till 42 procent".
 *    Personalkostnad = lön × (1 + 0,42). Bidrag = hälften av personalkostnaden.
 *  - 4 § 1: minst två årsarbetskrafter, varav minst en med lärarlegitimation. Skolverket bedömer
 *    årsarbetskraft utifrån tjänstgöringsgrad: personalen ska tillsammans ha minst 200 % i akutskolan.
 *  - 4 § 3: huvudmannen ska kunna ta emot minst två elever samtidigt.
 * Räknaren gäller en akutskola i taget. Den prövar inte 5 § (sex månader, omfördelning) eller vad
 * personalen gör på sin arbetstid – det sägs i förbehållen. */
(function (root) {
  'use strict';

  var SOCIALA_AVGIFTER = 0.42;       // Skolverkets sida för 2026
  var ANDEL = 0.5;                   // 6 §: hälften av kostnaden
  var MIN_LARARE = 100;              // 4 § 1: minst en årsarbetskraft med lärarlegitimation (%)
  var MIN_TOTALT = 200;              // 4 § 1: minst två årsarbetskrafter (%)
  var MAX_GRAD = 5000;               // högst 50 heltider per grupp
  var MAX_LON = 200000;              // kr per månad vid heltid

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function pct(n) { return fmt(n) + ' %'; }
  function tal(v, max) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= max; }

  function berakna(v) {
    if (!tal(v.larGrad, MAX_GRAD) || !tal(v.psyGrad, MAX_GRAD)) {
      return { fel: 'Ange tjänstgöringsgraden i procent, från 0 till 5 000 %. 100 % är en heltid.' };
    }
    if (!tal(v.larLon, MAX_LON) || !tal(v.psyLon, MAX_LON)) {
      return { fel: 'Ange månadslönen vid heltid i kronor, från 0 till 200 000 kr.' };
    }
    if (!(typeof v.manader === 'number' && v.manader >= 1 && v.manader <= 12 && Math.floor(v.manader) === v.manader)) {
      return { fel: 'Ange antal månader under bidragsåret, från 1 till 12.' };
    }
    var tvaElever = v.tvaElever !== false;

    var lonLarare = v.larLon * v.larGrad / 100;             // kr per månad
    var lonOvriga = v.psyLon * v.psyGrad / 100;
    var lonManad = lonLarare + lonOvriga;
    var kostnadManad = lonManad * (1 + SOCIALA_AVGIFTER);
    var kostnad = Math.round(kostnadManad * v.manader);
    var bidragLarare = Math.round(lonLarare * (1 + SOCIALA_AVGIFTER) * v.manader * ANDEL);
    var bidragOvriga = Math.round(lonOvriga * (1 + SOCIALA_AVGIFTER) * v.manader * ANDEL);
    var bidrag = bidragLarare + bidragOvriga;
    var totalGrad = v.larGrad + v.psyGrad;

    var hinder = [];
    if (v.larGrad < MIN_LARARE) hinder.push('Personal med lärarlegitimation ska tillsammans ha minst 100 % i akutskolan (4 § 1). Här är det ' + pct(v.larGrad) + '.');
    if (totalGrad < MIN_TOTALT) hinder.push('All personal ska tillsammans ha minst 200 %, alltså två årsarbetskrafter (4 § 1). Här är det ' + pct(totalGrad) + '.');
    if (!tvaElever) hinder.push('Huvudmannen ska kunna ta emot minst två elever i akutskola samtidigt (4 § 3).');

    var varningar = [];
    if (v.manader < 6) {
      varningar.push('Varje anställning eller uppdrag ska vara minst sex månader (5 §). Kontrollera att anställningarna varar så länge, även om bara ' + v.manader + ' månader ligger i bidragsåret.');
    }
    if (v.psyGrad > 0) {
      varningar.push('Övrig personal ska ha relevant utbildning inom psykosocialt arbete (4 § 2). Annan personal ger inte bidrag.');
    }

    var formel = '(' + fmt(v.larLon) + ' × ' + pct(v.larGrad) + ' + ' + fmt(v.psyLon) + ' × ' + pct(v.psyGrad) + ') × 1,42 × ' +
      v.manader + ' mån × 0,5 = ' + kr(bidrag);

    if (hinder.length) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Villkoren för bemanning är inte uppfyllda',
        formel: formel.replace(/= [^=]+$/, '= 0 kr'),
        forklaring: hinder.join(' ') + ' Då kan akutskolan inte få bidrag, oavsett kostnad.',
        rader: [
          { etikett: 'Lärare med legitimation', varde: pct(v.larGrad) },
          { etikett: 'All personal i akutskolan', varde: pct(totalGrad) }
        ],
        varningar: varningar
      };
    }

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: fmt(totalGrad / 100) + ' årsarbetskrafter · ' + v.manader + (v.manader === 1 ? ' månad' : ' månader'),
      formel: formel,
      forklaring: 'Lön ' + kr(lonManad) + ' i månaden plus 42 % sociala avgifter blir ' + kr(kostnadManad) +
        '. Under ' + v.manader + (v.manader === 1 ? ' månad' : ' månader') + ' blir personalkostnaden ' + kr(kostnad) + '. Bidraget är hälften.',
      delar: [{ etikett: 'Lärare', varde: bidragLarare }, { etikett: 'Psykosocial personal', varde: bidragOvriga }],
      rader: [
        { etikett: 'Lön per månad', varde: kr(lonManad) },
        { etikett: 'Med sociala avgifter (42 %)', varde: kr(kostnadManad) },
        { etikett: 'Personalkostnad för perioden', varde: kr(kostnad) },
        { etikett: 'Bidrag, hälften', varde: kr(bidrag) }
      ],
      extra: [
        { rubrik: 'Huvudmannens egen del', varde: kr(kostnad - bidrag), text: 'Den andra halvan väljer ni själva hur ni betalar. Enligt Skolverket får ni söka andra statsbidrag eller stöd för den, så länge ni inte sammanlagt får mer än era kostnader.' }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'akutskolor-belopp', berakna: berakna, SOCIALA_AVGIFTER: SOCIALA_AVGIFTER };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

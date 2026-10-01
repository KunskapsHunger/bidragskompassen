/* Räknare: uppskattat bidrag från Skolverket för skolpersonalen i ett skolsocialt team enligt 4–6 och 8 §§
 * förordning (2023:179) om statsbidrag för personalkostnader för skolsociala team. Ren funktion – ingen DOM.
 *  - 6 §: bidraget motsvarar hälften av kostnaden, minskat i proportion vid deltid.
 *  - 4 §: teamet ska ha minst två årsarbetskrafter, minst en skolpersonal och minst en från socialtjänsten.
 *    Skolverket: villkoret är uppfyllt om skolpersonalen tillsammans har minst 100 % tjänstgöringsgrad och
 *    socialtjänstens personal tillsammans minst 100 %, under hela perioden.
 *  - 8 §: vid urval prioriteras grundskolan; team i gymnasieskolan kommer sist. Ett team som arbetar mot
 *    båda skolformerna prioriteras som grundskola (Skolverkets frågor och svar).
 * Skolverket anger inget schablonpåslag för sociala avgifter för det här bidraget, så användaren anger
 * personalkostnaden med sociala avgifter. Socialtjänstens del (10–12 §§) räknas inte ut. */
(function (root) {
  'use strict';

  var ANDEL = 0.5;                   // 6 §: hälften av kostnaden
  var MIN_GRUPP = 100;               // 4 § 2: minst en årsarbetskraft från vardera skola och socialtjänst (%)
  var MAX_GRAD = 5000;
  var MAX_KOSTNAD = 300000;          // kr per månad vid heltid
  var SKOLFORMER = ['grundskola', 'gymnasieskola', 'bada'];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function pct(n) { return fmt(n) + ' %'; }
  function tal(v, max) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= max; }

  function berakna(v) {
    if (SKOLFORMER.indexOf(v.skolform) === -1) return { fel: 'Välj vilken skolform teamet arbetar mot.' };
    if (!tal(v.skolGrad, MAX_GRAD) || !tal(v.socGrad, MAX_GRAD)) {
      return { fel: 'Ange tjänstgöringsgraden i procent, från 0 till 5 000 %. 100 % är en heltid.' };
    }
    if (!tal(v.kostnad, MAX_KOSTNAD)) {
      return { fel: 'Ange personalkostnaden per månad vid heltid i kronor, från 0 till 300 000 kr.' };
    }
    if (!(typeof v.manader === 'number' && v.manader >= 1 && v.manader <= 12 && Math.floor(v.manader) === v.manader)) {
      return { fel: 'Ange antal månader under bidragsåret, från 1 till 12.' };
    }

    var kostnad = Math.round(v.kostnad * v.skolGrad / 100 * v.manader);
    var bidrag = Math.round(kostnad * ANDEL);
    var formel = fmt(v.kostnad) + ' × ' + pct(v.skolGrad) + ' × ' + v.manader + ' mån × 0,5 = ';

    var hinder = [];
    if (v.skolGrad < MIN_GRUPP) hinder.push('Skolpersonalen i teamet ska tillsammans ha minst 100 % (4 §). Här är det ' + pct(v.skolGrad) + '.');
    if (v.socGrad < MIN_GRUPP) hinder.push('Personalen från socialtjänsten ska tillsammans ha minst 100 % (4 §). Här är det ' + pct(v.socGrad) + '.');

    var varningar = [];
    if (v.skolform === 'gymnasieskola') {
      varningar.push('Om pengarna inte räcker prioriteras team i gymnasieskolan sist (8 §). År 2026 räckte pengarna inte. Många fick mindre än de sökte, och tre kommunalförbund med gymnasieskola fick inget alls.');
    }
    if (v.manader < 6) {
      varningar.push('Varje anställning eller uppdrag ska vara minst sex månader (5 §). Den får fortsätta efter årsskiftet, men bidraget gäller bara kostnaderna under bidragsåret.');
    }

    if (hinder.length) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Teamet når inte upp till kraven',
        formel: formel + '0 kr',
        forklaring: hinder.join(' ') + ' Då uppfyller teamet inte villkoren för bidrag.',
        rader: [
          { etikett: 'Skolpersonal', varde: pct(v.skolGrad) },
          { etikett: 'Personal från socialtjänsten', varde: pct(v.socGrad) }
        ],
        varningar: varningar
      };
    }

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: 'Skolpersonal ' + pct(v.skolGrad) + ' · ' + v.manader + (v.manader === 1 ? ' månad' : ' månader'),
      formel: formel + kr(bidrag),
      forklaring: 'Skolpersonalens kostnad under ' + v.manader + (v.manader === 1 ? ' månad' : ' månader') + ' blir ' + kr(kostnad) +
        '. Skolverkets bidrag är hälften. Socialtjänstens personal räknas inte in här.',
      rader: [
        { etikett: 'Skolpersonal i teamet', varde: pct(v.skolGrad) },
        { etikett: 'Personal från socialtjänsten', varde: pct(v.socGrad) },
        { etikett: 'Skolpersonalens kostnad för perioden', varde: kr(kostnad) },
        { etikett: 'Bidrag från Skolverket, hälften', varde: kr(bidrag) }
      ],
      extra: [
        { rubrik: 'Socialtjänstens del', varde: 'Via Socialstyrelsen', text: 'Kommunen kan begära ut bidrag för socialtjänstens personal från Socialstyrelsen när Skolverket har beviljat skolans del. Socialstyrelsen fördelar lika mycket som Skolverket har beviljat, och kommunen får högst hälften av sina kostnader för personalen.' }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'skolsociala-team-belopp', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

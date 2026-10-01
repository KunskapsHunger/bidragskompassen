/* Räknare: medfinansiering i regionalt yrkesvux enligt 20 § förordning (2016:937).
 * Ren funktion – ingen DOM.
 * Bidragsåren 2026–2027 (äldre lydelse, SFS 2024:665): kommunerna ska själva finansiera minst tre sjundedelar
 * av de årsstudieplatser de får statsbidrag för. Kravet gäller inte lärlingsutbildning, kombinationsutbildning
 * eller sammanhållna yrkesförarutbildningar.
 * Från bidragsåret 2028 (SFS 2026:1271): minst 30 procent av de årsstudieplatser som grundbidraget finansierar.
 * Tilläggsbidraget har inget medfinansieringskrav. */
(function (root) {
  'use strict';

  var REGLER = {
    fore2028: { andel: 3 / 7, text: '3/7', namn: 'bidragsåren 2026–2027' },
    fran2028: { andel: 0.3, text: '30 %', namn: 'från bidragsåret 2028' }
  };
  var POANG_PER_PLATS = 800;
  var MAX_PLATSER = 1000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }

  function berakna(v) {
    var regel = v.regel === 'fore2028' ? 'fore2028' : 'fran2028';
    var platser = v.platser;
    if (typeof platser !== 'number' || !isFinite(platser) || platser < 0 || platser > MAX_PLATSER) {
      return { fel: 'Ange antal årsstudieplatser som ett tal från 0 till 1 000 000. Decimaler går bra.' };
    }
    var r = REGLER[regel];
    var egna = platser * r.andel;
    var totalt = platser + egna;

    var varningar = [];
    if (regel === 'fran2028') {
      varningar.push('Skolverkets exempel för 2028–2029 säger att 700 platser med grundbidrag kräver 300 egna platser. Det är samma tal som den äldre regeln (3/7). Förordningens 30 procent av 700 blir 210. Fråga Skolverket vilket som gäller innan ni planerar.');
    } else {
      varningar.push('Räkna inte med lärlingsplatser, kombinationsutbildning eller yrkesförarutbildningar. Kravet gällde inte dem före 2028.');
    }

    return {
      resultat: egna,
      enhet: 'årsstudieplatser',
      sammanfattning: fmt(platser) + ' platser med bidrag · ' + r.namn,
      formel: fmt(platser) + ' × ' + r.text + ' = ' + fmt(egna) + ' årsstudieplatser',
      forklaring: regel === 'fran2028'
        ? 'De egna platserna ska sammantaget motsvara minst 30 procent av de platser som grundbidraget finansierar. Kravet gäller all utbildning som grundbidraget betalar, men inte tilläggsbidraget. Räknaren avrundar inte.'
        : 'De egna platserna ska motsvara minst tre sjundedelar av de platser ni får statsbidrag för. Räknaren avrundar inte.',
      rader: [
        { etikett: regel === 'fran2028' ? 'Platser som grundbidraget finansierar' : 'Platser med statsbidrag som kravet gäller', varde: fmt(platser) },
        { etikett: 'Minst egna platser (medfinansiering)', varde: fmt(egna) },
        { etikett: 'Minst antal platser totalt', varde: fmt(totalt) },
        { etikett: 'Egna platser i verksamhetspoäng', varde: fmt(egna * POANG_PER_PLATS) }
      ],
      delar: [
        { etikett: 'Statsbidrag', varde: platser },
        { etikett: 'Egen finansiering', varde: egna }
      ],
      extra: [{
        rubrik: 'Plats mot plats',
        varde: fmt(egna) + ' platser',
        text: 'Enligt Skolverket räknas plats mot plats oavsett bidragsnivå. En egen plats på den lägre nivån kan alltså medfinansiera en plats på den högre nivån. Egna platser får inte gälla utbildning där Skolinspektionen funnit allvarliga brister som inte är åtgärdade.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'regionalt-yrkesvux-medfinansiering', berakna: berakna, REGLER: REGLER };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

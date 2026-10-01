/* Räknare: egen finansiering och belopp att begära ut – statsbidrag för inköp av litteratur.
 * Ren funktion – ingen DOM.
 * Bygger på förordning (2024:62) 6 § (huvudmannen ska under bidragsåret själv finansiera inköp av tryckta skön- eller
 * facklitterära böcker motsvarande minst 20 procent av den summa som rekvireras) och 8 § (bidragsramen är taket).
 * Skolverkets exempel: ram 100 000 kr, hela ramen begärs ut → egen finansiering minst 20 000 kr, alltså inköp för 120 000 kr.
 *   Inköp totalt ≥ begärt belopp + 20 % av begärt belopp = 1,2 × begärt belopp
 *   Kan begäras ut = minsta av (inköp totalt ÷ 1,2) och bidragsramen, nedrundat till hela kronor.
 * Heltalsräkning: inköp ÷ 1,2 = inköp × 5 ÷ 6. */
(function (root) {
  'use strict';

  var MAX_KR = 1e10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.ram, 1, MAX_KR)) return { fel: 'Ange bidragsramen i hela kronor, minst 1 kr.' };
    if (!heltal(v.inkop, 0, MAX_KR)) return { fel: 'Ange inköpen i hela kronor, från 0 kr och uppåt.' };

    var tak = Math.floor(v.inkop * 5 / 6);
    var begar = Math.min(tak, v.ram);
    var egen = v.inkop - begar;
    var kravEgen = Math.ceil(begar / 5);
    var helaRamen = Math.ceil(v.ram * 6 / 5);
    var ramenRacker = tak >= v.ram;

    var varningar = [];
    if (v.inkop === 0) {
      varningar.push('Utan inköp av skön- eller facklitteratur under 2026 finns inget att begära ut.');
    } else if (begar === 0) {
      varningar.push('Inköpen är för små för att ge något bidrag i hela kronor.');
    } else if (!ramenRacker) {
      varningar.push('Inköpen räcker inte för att begära ut hela ramen. För det behöver ni köpa böcker för ' + kr(helaRamen) + ' totalt under 2026.');
    }

    var rader = [
      { etikett: 'Inköp av böcker 2026', varde: kr(v.inkop) },
      { etikett: 'Kan begäras ut', varde: kr(begar) },
      { etikett: 'Egen finansiering', varde: kr(egen) },
      { etikett: 'Krav: minst 20 % av begärt belopp', varde: kr(kravEgen) },
      { etikett: 'Bidragsram', varde: kr(v.ram) },
      { etikett: 'Inköp som krävs för hela ramen', varde: kr(helaRamen) }
    ];

    return {
      resultat: begar,
      enhet: 'kr',
      blockerad: begar === 0,
      sammanfattning: ramenRacker ? 'Hela ramen kan begäras ut.' : 'Inköpen sätter taket.',
      formel: ramenRacker
        ? fmt(v.inkop) + ' ÷ 1,2 ≥ ramen → högst ramen ' + kr(v.ram)
        : fmt(v.inkop) + ' ÷ 1,2 = ' + kr(begar) + ' (mindre än ramen ' + kr(v.ram) + ')',
      forklaring: 'Ni begär ut ' + kr(begar) + ' och betalar själva ' + kr(egen) + '. Kravet är minst ' + kr(kravEgen) +
        ' (20 procent av det ni begär ut). Beloppen är avrundade till hela kronor.',
      delar: [
        { etikett: 'Bidrag', varde: begar },
        { etikett: 'Egen finansiering', varde: egen }
      ],
      rader: rader,
      varningar: varningar
    };
  }

  var mod = { id: 'inkop-av-litteratur-begaran', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

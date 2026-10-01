/* Räknare: EU-bidrag för volontärer som tas emot i Sverige inom Europeiska solidaritetskåren (volontärprojekt).
 * Ren funktion – ingen DOM. Belopp i euro enligt European Solidarity Corps Guide 2026 (version 1), avsnittet
 * "Volunteering Projects – What are the eligible costs and the applicable funding rules?" och tabellen
 * "What are the unit costs per day per participant?", raden Sverige: A1 35, A2 12, A3 7 euro per dag.
 *   Förvaltningskostnader: 238 euro per deltagare (individuellt volontärarbete), 125 euro (volontärgrupper).
 *   Resor: schablon per deltagare efter avståndsintervall (miljövänligt eller inte).
 *   Organisatoriskt stöd (A1) och fickpengar (A3) per dag; inkluderingsstöd (A2) per dag för deltagare med
 *   begränsade möjligheter. Dagarna räknas med högst en resdag före och en efter, plus upp till fyra extra
 *   dagar vid miljövänligt resande.
 *   Språkstöd: 150 euro per deltagare, bara vid aktiviteter på 60 dagar eller mer. */
(function (root) {
  'use strict';

  var RESOR = {
    'b10': { etikett: '10–99 km', gron: 56, vanlig: 28 },
    'b100': { etikett: '100–499 km', gron: 285, vanlig: 211 },
    'b500': { etikett: '500–1 999 km', gron: 417, vanlig: 309 },
    'b2000': { etikett: '2 000–2 999 km', gron: 535, vanlig: 395 },
    'b3000': { etikett: '3 000–3 999 km', gron: 785, vanlig: 580 },
    'b4000': { etikett: '4 000–7 999 km', gron: 1188, vanlig: 1188 },
    'b8000': { etikett: '8 000 km eller mer', gron: 1735, vanlig: 1735 }
  };

  var SVERIGE = { org: 35, inkludering: 12, fickpengar: 7 };   // A1, A2, A3 euro per dag
  var FORVALTNING = { individ: 238, grupp: 125 };
  var SPRAKSTOD = 150;
  var SPRAK_MIN_DAGAR = 60;

  // Aktivitetsdagar utan resdagar enligt guiden: individuellt 2 veckor–12 månader, grupper 2 veckor–2 månader (högst 59 dagar).
  var LANGD = { individ: { min: 14, max: 366 }, grupp: { min: 14, max: 59 } };
  var MAX_VOLONTARER = 100;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function eur(n) { return fmt(n) + ' euro'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function validera(v) {
    if (!FORVALTNING[v.typ]) return 'Välj typ av volontärarbete.';
    if (!RESOR[v.avstand]) return 'Välj avstånd.';
    if (!heltal(v.antal, 1, MAX_VOLONTARER)) return 'Ange antal volontärer som ett heltal från 1 till 100.';
    if (!heltal(v.dagar, 1, 366)) return 'Ange antal aktivitetsdagar som ett heltal.';
    if (!heltal(v.resdagar, 0, 6)) return 'Ange resdagar som ett heltal från 0 till 6.';
    if (!heltal(v.begransade, 0, MAX_VOLONTARER)) return 'Ange volontärer med begränsade möjligheter som ett heltal.';
    if (typeof v.gron !== 'boolean' || typeof v.sprakstod !== 'boolean') return 'Kryssrutorna har ogiltiga värden.';
    var l = LANGD[v.typ];
    if (v.dagar < l.min || v.dagar > l.max) {
      return (v.typ === 'grupp' ? 'Volontärgrupper' : 'Individuellt volontärarbete') + ' ska vara ' + fmt(l.min) + '–' + fmt(l.max) + ' dagar, resdagar oräknade.';
    }
    if (v.typ === 'grupp' && v.antal < 5) return 'En volontärgrupp ska ha minst fem deltagare från minst två länder.';
    if (!v.gron && v.resdagar > 2) return 'Utan miljövänligt resande räknas högst en resdag före och en efter. Med miljövänligt resande upp till fyra dagar till.';
    if (v.begransade > v.antal) return 'Volontärer med begränsade möjligheter är en del av volontärerna. De kan inte vara fler än alla volontärer.';
    return null;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var band = RESOR[v.avstand];
    var dagar = v.dagar + v.resdagar;
    var resaPerPerson = v.gron ? band.gron : band.vanlig;
    var forv = FORVALTNING[v.typ] * v.antal;
    var resor = resaPerPerson * v.antal;
    var org = SVERIGE.org * dagar * v.antal;
    var ficka = SVERIGE.fickpengar * dagar * v.antal;
    var inkl = SVERIGE.inkludering * dagar * v.begransade;
    var sprakOk = v.sprakstod && v.dagar >= SPRAK_MIN_DAGAR;
    var sprak = sprakOk ? SPRAKSTOD * v.antal : 0;
    var total = forv + resor + org + ficka + inkl + sprak;

    var rader = [
      { etikett: 'Förvaltningskostnader, ' + eur(FORVALTNING[v.typ]) + ' × ' + fmt(v.antal), varde: eur(forv) },
      { etikett: 'Resor, ' + eur(resaPerPerson) + ' × ' + fmt(v.antal), varde: eur(resor) },
      { etikett: 'Organisatoriskt stöd, 35 euro × ' + fmt(dagar) + ' dagar × ' + fmt(v.antal), varde: eur(org) },
      { etikett: 'Fickpengar, 7 euro × ' + fmt(dagar) + ' dagar × ' + fmt(v.antal), varde: eur(ficka) }
    ];
    if (inkl) rader.push({ etikett: 'Inkluderingsstöd, 12 euro × ' + fmt(dagar) + ' dagar × ' + fmt(v.begransade), varde: eur(inkl) });
    if (sprak) rader.push({ etikett: 'Språkstöd, ' + eur(SPRAKSTOD) + ' × ' + fmt(v.antal), varde: eur(sprak) });

    var varningar = [];
    if (v.sprakstod && !sprakOk) varningar.push('Språkstöd ges bara vid aktiviteter på 60 dagar eller mer. Det är inte med i beloppet.');
    if (sprakOk) varningar.push('Språkstöd ges bara för språk eller nivåer som EU:s språkstöd på nätet inte erbjuder.');
    varningar.push('Fickpengarna är till volontärens egna utgifter. Värdorganisationen betalar ut dem varje vecka eller månad.');

    var perVolontar = Math.round(total / v.antal);

    return {
      resultat: total,
      enhet: 'euro',
      sammanfattning: fmt(v.antal) + (v.antal === 1 ? ' volontär' : ' volontärer') + ' · ' + fmt(v.dagar) + ' dagar i Sverige · ' + band.etikett,
      formel: eur(forv) + ' + ' + eur(resor) + ' + (35 + 7) × ' + fmt(dagar) + ' × ' + fmt(v.antal) +
        (inkl ? ' + 12 × ' + fmt(dagar) + ' × ' + fmt(v.begransade) : '') + (sprak ? ' + ' + eur(sprak) : '') + ' = ' + eur(total),
      forklaring: 'Dagarna är ' + fmt(v.dagar) + ' aktivitetsdagar och ' + fmt(v.resdagar) + ' resdagar.',
      rader: rader,
      delar: [
        { etikett: 'Förvaltning och resor', varde: forv + resor },
        { etikett: 'Organisatoriskt stöd', varde: org },
        { etikett: 'Fickpengar', varde: ficka },
        { etikett: 'Inkludering och språk', varde: inkl + sprak }
      ],
      extra: [{
        rubrik: 'Per volontär',
        varde: eur(perVolontar),
        text: 'Pengarna delas mellan de organisationer som är med. Hur de delas kommer ni överens om.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'europeiska-solidaritetskaren-volontarer-bidrag', berakna: berakna, RESOR: RESOR, SVERIGE: SVERIGE, FORVALTNING: FORVALTNING };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

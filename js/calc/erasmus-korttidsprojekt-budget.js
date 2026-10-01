/* Räknare: uppskattad Erasmus+-budget för en typ av utbyte i ett korttidsprojekt inom skola (KA122-SCH).
 * Ren funktion – ingen DOM. Belopp i euro enligt Erasmus+ programguide 2026 (version 1, 12.11.2025),
 * avsnittet "Mobility for pupils and staff in school education – What are the funding rules?", och UHR:s
 * Bilaga 3 – tillämpliga bidragssatser KA122 skola 2026 (svenska dagbelopp för individuellt stöd).
 *   Resor: schablon per deltagare och medföljande efter avståndsintervall (miljövänligt eller inte).
 *   Individuellt stöd: dagbelopp × dagar inkl. resdagar; från dag 15 betalas 70 % av dagbeloppet (avrundat).
 *   Organisatoriskt stöd: 100/350/500 euro per deltagare beroende på aktivitet (medföljande räknas inte).
 *   Kursavgift 80 euro/dag, inkluderingsstöd 125 euro, språkstöd 150 euro (+150 förstärkt vid långvarig elevmobilitet). */
(function (root) {
  'use strict';

  // Resebidrag per person (programguiden 2026 och UHR bilaga 3): [miljövänligt, inte miljövänligt]
  var RESOR = {
    'b10': { etikett: '10–99 km', gron: 56, vanlig: 28 },
    'b100': { etikett: '100–499 km', gron: 285, vanlig: 211 },
    'b500': { etikett: '500–1 999 km', gron: 417, vanlig: 309 },
    'b2000': { etikett: '2 000–2 999 km', gron: 535, vanlig: 395 },
    'b3000': { etikett: '3 000–3 999 km', gron: 785, vanlig: 580 },
    'b4000': { etikett: '4 000–7 999 km', gron: 1188, vanlig: 1188 },
    'b8000': { etikett: '8 000 km eller mer', gron: 1735, vanlig: 1735 }
  };

  // UHR:s grundbelopp per dag 2026 (inom EU:s intervall). Medföljande får personalens belopp.
  var DAGBELOPP = {
    g1: { personal: 172, elev: 85 },
    g2: { personal: 152, elev: 74 },
    g3: { personal: 133, elev: 64 }
  };

  // Aktivitetstyper: längd (aktivitetsdagar), vem som åker och organisatoriskt stöd per deltagare.
  var TYPER = {
    jobbskuggning: { etikett: 'Jobbskuggning', min: 2, max: 60, elev: false, org: 350, sprak: true },
    undervisning: { etikett: 'Undervisningsuppdrag', min: 2, max: 365, elev: false, org: 350, sprak: true },
    kurs: { etikett: 'Kurs eller fortbildning', min: 2, max: 10, elev: false, org: 100, sprak: false, kurs: true },
    grupp: { etikett: 'Gruppmobilitet för elever', min: 2, max: 30, elev: true, org: 100, sprak: false, minDeltagare: 2 },
    kortelev: { etikett: 'Kortvarig elevmobilitet', min: 10, max: 29, elev: true, org: 350, sprak: true },
    langelev: { etikett: 'Långvarig elevmobilitet', min: 30, max: 365, elev: true, org: 500, sprak: true, forstarkt: true }
  };

  var KURSAVGIFT = 80;      // euro per deltagare och kursdag
  var INKLUDERING = 125;    // euro per deltagare med begränsade möjligheter (organisationen)
  var SPRAKSTOD = 150;      // euro per deltagare
  var FORSTARKT_SPRAK = 150; // euro extra vid långvarig elevmobilitet
  var MAX_DELTAGARE = 30;   // högst 30 deltagare per korttidsprojekt (medföljande räknas inte)
  var FULLA_DAGAR = 14;     // fullt dagbelopp t.o.m. dag 14
  var ANDEL_EFTER_TIONDELAR = 7; // 70 % från dag 15 (räknas i tiondelar så att 59,5 avrundas till 60)

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function eur(n) { return fmt(n) + ' euro'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  /** Individuellt stöd för en person: dagbelopp t.o.m. dag 14, därefter 70 % (avrundat till hel euro). */
  function individuelltStod(dagbelopp, dagar) {
    var fulla = Math.min(dagar, FULLA_DAGAR);
    var resten = Math.max(0, dagar - FULLA_DAGAR);
    var reducerat = Math.round(dagbelopp * ANDEL_EFTER_TIONDELAR / 10);
    return { summa: fulla * dagbelopp + resten * reducerat, fulla: fulla, resten: resten, reducerat: reducerat };
  }

  function dagText(ind, dagbelopp) {
    return ind.resten > 0
      ? fmt(ind.fulla) + ' × ' + fmt(dagbelopp) + ' + ' + fmt(ind.resten) + ' × ' + fmt(ind.reducerat)
      : fmt(ind.fulla) + ' × ' + fmt(dagbelopp);
  }

  function validera(v) {
    var typ = TYPER[v.typ];
    if (!typ) return 'Välj typ av utbyte.';
    if (!RESOR[v.avstand]) return 'Välj avstånd.';
    if (!DAGBELOPP[v.landgrupp]) return 'Välj landgrupp.';
    if (!heltal(v.antal, 1, MAX_DELTAGARE)) return 'Ange antal deltagare som ett heltal från 1 till 30. Ett korttidsprojekt får ha högst 30 deltagare.';
    if (!heltal(v.medfoljande, 0, MAX_DELTAGARE)) return 'Ange antal medföljande som ett heltal från 0 till 30.';
    if (!heltal(v.dagar, 1, 365)) return 'Ange antal aktivitetsdagar som ett heltal.';
    if (!heltal(v.resdagar, 0, 6)) return 'Ange resdagar som ett heltal från 0 till 6.';
    if (!heltal(v.begransade, 0, MAX_DELTAGARE)) return 'Ange deltagare med begränsade möjligheter som ett heltal.';
    if (typeof v.gron !== 'boolean' || typeof v.sprakstod !== 'boolean') return 'Kryssrutorna har ogiltiga värden.';
    if (v.dagar < typ.min || v.dagar > typ.max) {
      return typ.etikett + ' ska vara ' + fmt(typ.min) + '–' + fmt(typ.max) + ' dagar, resdagar oräknade.';
    }
    if (typ.minDeltagare && v.antal < typ.minDeltagare) return 'Gruppmobilitet kräver minst två elever i gruppen.';
    if (!v.gron && v.resdagar > 2) return 'Utan miljövänligt resande kan högst två resdagar få individuellt stöd. Med miljövänligt resande högst sex.';
    if (v.begransade > v.antal) return 'Deltagare med begränsade möjligheter är en del av deltagarna. De kan inte vara fler än alla deltagare.';
    return null;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var typ = TYPER[v.typ];
    var band = RESOR[v.avstand];
    var satser = DAGBELOPP[v.landgrupp];
    var dagar = v.dagar + v.resdagar;
    var resaPerPerson = v.gron ? band.gron : band.vanlig;
    var personer = v.antal + v.medfoljande;

    var dagDeltagare = typ.elev ? satser.elev : satser.personal;
    var indDeltagare = individuelltStod(dagDeltagare, dagar);
    var indMedf = individuelltStod(satser.personal, dagar);

    var resor = resaPerPerson * personer;
    var individ = indDeltagare.summa * v.antal + indMedf.summa * v.medfoljande;
    var org = typ.org * v.antal;
    var kurs = typ.kurs ? KURSAVGIFT * v.dagar * v.antal : 0;
    var inkl = INKLUDERING * v.begransade;
    var sprak = (typ.sprak && v.sprakstod ? SPRAKSTOD * v.antal : 0) + (typ.forstarkt ? FORSTARKT_SPRAK * v.antal : 0);
    var total = resor + individ + org + kurs + inkl + sprak;

    var rader = [
      { etikett: 'Resor, ' + eur(resaPerPerson) + ' × ' + fmt(personer) + (personer === 1 ? ' person' : ' personer'), varde: eur(resor) },
      { etikett: 'Individuellt stöd, ' + fmt(dagar) + ' dagar inkl. resdagar', varde: eur(individ) },
      { etikett: 'Organisatoriskt stöd, ' + eur(typ.org) + ' × ' + fmt(v.antal), varde: eur(org) }
    ];
    if (typ.kurs) rader.push({ etikett: 'Kursavgift, ' + eur(KURSAVGIFT) + ' × ' + fmt(v.dagar) + ' dagar × ' + fmt(v.antal), varde: eur(kurs) });
    if (inkl) rader.push({ etikett: 'Inkluderingsstöd till organisationen, ' + eur(INKLUDERING) + ' × ' + fmt(v.begransade), varde: eur(inkl) });
    if (sprak) rader.push({ etikett: 'Språkstöd', varde: eur(sprak) });

    var delar = [
      { etikett: 'Resor', varde: resor },
      { etikett: 'Individuellt stöd', varde: individ },
      { etikett: 'Organisatoriskt stöd', varde: org }
    ];
    if (kurs + inkl + sprak > 0) delar.push({ etikett: 'Övrigt', varde: kurs + inkl + sprak });

    var forklaring = 'Individuellt stöd per ' + (typ.elev ? 'elev' : 'deltagare') + ': ' + dagText(indDeltagare, dagDeltagare) + ' = ' + eur(indDeltagare.summa) + '.';
    if (v.medfoljande > 0) forklaring += ' Per medföljande: ' + dagText(indMedf, satser.personal) + ' = ' + eur(indMedf.summa) + '.';

    var varningar = [];
    if (typ.kurs) {
      varningar.push('Kurser får tillsammans vara högst hälften av projektets beviljade bidrag. Är hela bidraget högst 40 000 euro är gränsen 20 000 euro för kurser. Räknaren ser bara den här aktiviteten och kan inte pröva gränsen.');
    }
    if (v.sprakstod && !typ.sprak) {
      varningar.push(typ.etikett + ' ger inte språkstöd. Kryssrutan påverkar därför inte beloppet.');
    }
    if (v.sprakstod && typ.sprak) {
      varningar.push('Språkstöd på 150 euro ges bara om deltagaren inte kan få EU:s språkstöd på nätet för språket eller nivån.');
    }
    if (typ.elev && v.medfoljande === 0 && v.typ === 'grupp') {
      varningar.push('Vid gruppmobilitet ska lärare eller annan kvalificerad personal följa med eleverna hela tiden. Lägg till dem som medföljande.');
    }
    if (inkl > 0) {
      varningar.push('Utöver 125 euro till organisationen kan ni söka faktiska extrakostnader för deltagare med begränsade möjligheter. Det beloppet är inte med här.');
    }

    return {
      resultat: total,
      enhet: 'euro',
      sammanfattning: typ.etikett + ' · ' + fmt(v.antal) + ' deltagare' +
        (v.medfoljande ? ' + ' + fmt(v.medfoljande) + ' medföljande' : '') + ' · ' + fmt(v.dagar) + ' dagar · ' + band.etikett,
      formel: eur(resor) + ' + ' + eur(individ) + ' + ' + eur(org) + (kurs + inkl + sprak ? ' + ' + eur(kurs + inkl + sprak) : '') + ' = ' + eur(total),
      forklaring: forklaring,
      rader: rader,
      delar: delar,
      extra: [{
        rubrik: 'Per deltagare i genomsnitt',
        varde: eur(Math.round(total / v.antal)),
        text: 'Hela beloppet delat med antalet deltagare. Medföljande ingår i kostnaden men räknas inte som deltagare.'
      }],
      varningar: varningar
    };
  }

  var mod = {
    id: 'erasmus-korttidsprojekt-budget', berakna: berakna, individuelltStod: individuelltStod,
    RESOR: RESOR, DAGBELOPP: DAGBELOPP, TYPER: TYPER, KURSAVGIFT: KURSAVGIFT, INKLUDERING: INKLUDERING, SPRAKSTOD: SPRAKSTOD
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

/* Räknare: statsbidrag för utlandssvenska elever, ett kalenderhalvår (en termin).
 * Ren funktion – ingen DOM. Förordning (2015:736):
 *   7 § grundskola och anpassad grundskola: belopp per elev och kalenderhalvår som regeringen beslutar –
 *       42 400 kr per termin och elev för bidragsåret 2026 (regleringsbrevet för Statens skolverk 2026, anslag 1:8 ap.2).
 *   8 § gymnasieskola och anpassad gymnasieskola: hälften av riksprislistans belopp per läsår för programmet,
 *       eller hälften av ett särskilt beslutat belopp; fjärde tekniskt år: hälften av beloppet enligt 11 kap. 6 §
 *       förordningen (2014:854).
 *   9 § IB-utbildning: hälften av beloppet för naturvetenskapsprogrammet.
 * Riksprislistan 2026: SKOLFS 2026:7, 6 och 9 §§, inklusive måltider (Skolverket: "inklusive måltider").
 * Formeln: 42 400 × elever i åk 7–9 + belopp per läsår ÷ 2 × elever i gymnasiet. Inget momsavdrag. */
(function (root) {
  'use strict';

  var GRUNDSKOLA_PER_TERMIN = 42400;   // bidragsåret 2026
  var MAX_ELEVER = 100000;
  var MAX_BELOPP = 2000000;

  // Riksprislistan 2026 (SKOLFS 2026:7), kr per elev och läsår inklusive måltider.
  var PROGRAM = {
    'bf': { namn: 'Barn- och fritidsprogrammet', belopp: 121200 },
    'ba-fore': { namn: 'Bygg- och anläggningsprogrammet utom anläggningsfordon (påbörjad före 1 juli 2025)', belopp: 161700 },
    'ba-af-fore': { namn: 'Bygg- och anläggningsprogrammet, anläggningsfordon (påbörjad före 1 juli 2025)', belopp: 221500 },
    'ba-efter': { namn: 'Bygg- och anläggningsprogrammet utom mark och anläggning (påbörjad efter 30 juni 2025)', belopp: 163700 },
    'ba-ma-efter': { namn: 'Bygg- och anläggningsprogrammet, mark och anläggning (påbörjad efter 30 juni 2025)', belopp: 206600 },
    'ee': { namn: 'El- och energiprogrammet', belopp: 148700 },
    'ek': { namn: 'Ekonomiprogrammet', belopp: 102000 },
    'es': { namn: 'Estetiska programmet utom musik', belopp: 135100 },
    'es-mu': { namn: 'Estetiska programmet, musik', belopp: 170500 },
    'ft': { namn: 'Fordons- och transportprogrammet utom transport', belopp: 176400 },
    'ft-tr': { namn: 'Fordons- och transportprogrammet, transport', belopp: 238900 },
    'fs': { namn: 'Frisör- och stylistprogrammet', belopp: 147900 },
    'fo': { namn: 'Försäljnings- och serviceprogrammet', belopp: 120300 },
    'ha': { namn: 'Handels- och administrationsprogrammet', belopp: 125000 },
    'hv': { namn: 'Hantverksprogrammet', belopp: 144300 },
    'ht': { namn: 'Hotell- och turismprogrammet', belopp: 128600 },
    'hu': { namn: 'Humanistiska programmet', belopp: 111500 },
    'in': { namn: 'Industritekniska programmet', belopp: 185500 },
    'na': { namn: 'Naturvetenskapsprogrammet', belopp: 111300 },
    'ib': { namn: 'IB-utbildning (naturvetenskapsprogrammets belopp)', belopp: 111300 },
    'nb-dj': { namn: 'Naturbruksprogrammet, djurvård', belopp: 243700 },
    'nb-ha': { namn: 'Naturbruksprogrammet, hästhållning', belopp: 274100 },
    'nb-la': { namn: 'Naturbruksprogrammet, lantbruk', belopp: 302700 },
    'nb-nt': { namn: 'Naturbruksprogrammet, naturturism', belopp: 285500 },
    'nb-sk': { namn: 'Naturbruksprogrammet, skogsbruk', belopp: 308200 },
    'nb-tr': { namn: 'Naturbruksprogrammet, trädgård', belopp: 313800 },
    'rl': { namn: 'Restaurang- och livsmedelsprogrammet', belopp: 170000 },
    'sa': { namn: 'Samhällsvetenskapsprogrammet', belopp: 102600 },
    'te': { namn: 'Teknikprogrammet', belopp: 121900 },
    'vf': { namn: 'VVS- och fastighetsprogrammet', belopp: 161700 },
    'vo': { namn: 'Vård- och omsorgsprogrammet', belopp: 131500 },
    'agy': { namn: 'Anpassade gymnasieskolan', belopp: 430800 }
  };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function elevText(n) { return fmt(n) + ' ' + (n === 1 ? 'elev' : 'elever'); }

  function validera(v) {
    if (!heltal(v.grundElever, 0, MAX_ELEVER) || !heltal(v.gyElever, 0, MAX_ELEVER)) return 'Ange antal elever som hela tal mellan 0 och 100 000.';
    if (v.grundElever + v.gyElever === 0) return 'Ange minst en elev i årskurs 7–9 eller i gymnasiet.';
    if (v.gyElever > 0) {
      if (v.program !== 'annat' && !Object.prototype.hasOwnProperty.call(PROGRAM, v.program)) return 'Välj ett program för eleverna i gymnasiet.';
      if (v.program === 'annat' && !heltal(v.egetBelopp, 1, MAX_BELOPP)) return 'Ange beloppet per elev och läsår som ett helt tal mellan 1 och 2 000 000 kr.';
    }
    return null;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var grund = GRUNDSKOLA_PER_TERMIN * v.grundElever;
    var harGy = v.gyElever > 0;
    var arsbelopp = harGy ? (v.program === 'annat' ? v.egetBelopp : PROGRAM[v.program].belopp) : 0;
    var gy = harGy ? Math.round(arsbelopp / 2 * v.gyElever) : 0;
    var total = grund + gy;

    var delarFormel = [];
    if (v.grundElever > 0) delarFormel.push(fmt(GRUNDSKOLA_PER_TERMIN) + ' × ' + fmt(v.grundElever));
    if (harGy) delarFormel.push(fmt(arsbelopp) + ' ÷ 2 × ' + fmt(v.gyElever));

    var rader = [{ etikett: 'Årskurs 7–9, ' + elevText(v.grundElever) + ' × ' + kr(GRUNDSKOLA_PER_TERMIN), varde: kr(grund) }];
    if (harGy) {
      rader.push({ etikett: 'Gymnasiet, belopp per läsår', varde: kr(arsbelopp) });
      rader.push({ etikett: 'Gymnasiet, ' + elevText(v.gyElever) + ' × ' + kr(arsbelopp / 2), varde: kr(gy) });
    }

    var varningar = [];
    if (harGy && v.program === 'annat') varningar.push('Använd beloppet per elev och läsår i beslutet för utbildningen. För fjärde tekniskt år: beloppet per elev i ert beslut om statsbidrag för fjärde tekniskt år.');
    if (harGy && v.program === 'ib') varningar.push('IB-utbildning i Stockholms och Göteborgs kommuner och vid Sigtunaskolan Humanistiska Läroverket ger inte detta bidrag.');

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: elevText(v.grundElever + v.gyElever) + ' · en termin',
      formel: delarFormel.join(' + ') + ' = ' + kr(total),
      forklaring: harGy ? 'I gymnasiet ger varje elev hälften av beloppet per läsår, alltså ' + kr(arsbelopp / 2) + ' per termin.' : '',
      rader: rader,
      delar: [{ etikett: 'Årskurs 7–9', varde: grund }, { etikett: 'Gymnasiet', varde: gy }],
      extra: [{ rubrik: 'Ett helt år med samma elever', varde: kr(total * 2), text: 'Två ansökningar: en för våren och en för hösten. Beloppen kan ändras mellan åren.' }],
      varningar: varningar
    };
  }

  var mod = { id: 'utlandssvenska-elever-belopp', berakna: berakna, PROGRAM: PROGRAM, GRUNDSKOLA_PER_TERMIN: GRUNDSKOLA_PER_TERMIN };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

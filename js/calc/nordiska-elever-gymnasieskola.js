/* Räknare: ersättning för nordiska elever i gymnasieskolan, en termin.
 * Ren funktion – ingen DOM.
 * Rätten till ersättning: 12 kap. 8–9 §§ gymnasieförordningen (2010:2039). Beloppet beslutas av regeringen
 * (12 kap. 10 §) och står i regleringsbrevet för Statens skolverk 2026 (anslag 1:8 ap.2): riksprislistans
 * belopp per elev och program, för kommun och region minskat med momsersättningen som ingår i beloppen.
 * Skolverket söker per termin och ger hälften av beloppet per läsår (inklusive måltider).
 * Beloppen per program är riksprislistan för 2026, SKOLFS 2026:7, 6 och 9 §§, kolumnen "inklusive måltider".
 * Momsavdraget: Skolverket skriver "reduceras för mervärdesskatt om 6 procent". Beloppen i Skolverkets beslut
 * för vårterminen 2026 stämmer med att halva beloppet delas med 1,06 (t.ex. 51 000 kr → 48 113 kr).
 * Formeln: belopp per läsår ÷ 2 (÷ 1,06 för kommun och region) × ersatta elever.
 * Kommun: ersättning bara för elever utöver antalet svenska elever från kommunen i annat nordiskt land (12 kap. 8 §). */
(function (root) {
  'use strict';

  var MOMS_DIVISOR = 1.06;
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
    'vo': { namn: 'Vård- och omsorgsprogrammet', belopp: 131500 }
  };
  var HUVUDMAN = { kommun: 'Kommun', region: 'Region', enskild: 'Enskild huvudman' };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(Math.round(n)) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function elevText(n) { return fmt(n) + ' ' + (n === 1 ? 'elev' : 'elever'); }

  function validera(v) {
    if (!Object.prototype.hasOwnProperty.call(HUVUDMAN, v.huvudman)) return 'Välj vilken sorts huvudman ni är.';
    if (v.program !== 'annat' && !Object.prototype.hasOwnProperty.call(PROGRAM, v.program)) return 'Välj ett program.';
    if (v.program === 'annat' && !heltal(v.egetBelopp, 1, MAX_BELOPP)) return 'Ange beloppet per elev och läsår som ett helt tal mellan 1 och 2 000 000 kr.';
    if (!heltal(v.elever, 1, MAX_ELEVER)) return 'Ange antalet nordiska elever som ett helt tal mellan 1 och 100 000.';
    if (v.huvudman === 'kommun' && !heltal(v.avdrag, 0, MAX_ELEVER)) return 'Ange avdraget som ett helt tal mellan 0 och 100 000.';
    return null;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var offentlig = v.huvudman !== 'enskild';
    var arsbelopp = v.program === 'annat' ? v.egetBelopp : PROGRAM[v.program].belopp;
    var terminsbelopp = arsbelopp / 2;
    var perElev = offentlig ? terminsbelopp / MOMS_DIVISOR : terminsbelopp;
    var avdrag = v.huvudman === 'kommun' ? Math.min(v.avdrag, v.elever) : 0;
    var ersatta = v.elever - avdrag;
    var total = Math.round(perElev * ersatta);

    var formel = fmt(arsbelopp) + ' ÷ 2' + (offentlig ? ' ÷ 1,06' : '') + ' × ' + fmt(ersatta) + ' = ' + kr(total);
    var forklaring = offentlig
      ? 'Halva årsbeloppet är ' + kr(terminsbelopp) + '. Utan momsersättningen blir det ' + kr(perElev) + ' per elev och termin.'
      : 'Halva årsbeloppet är ' + kr(terminsbelopp) + ' per elev och termin. Enskilda huvudmän får beloppet utan momsavdrag.';

    var rader = [
      { etikett: 'Belopp per elev och läsår', varde: kr(arsbelopp) },
      { etikett: 'Per elev och termin', varde: kr(perElev) }
    ];
    if (v.huvudman === 'kommun') {
      rader.push({ etikett: 'Nordiska elever', varde: fmt(v.elever) });
      rader.push({ etikett: 'Avdrag, svenska elever i annat nordiskt land', varde: '−' + fmt(avdrag) });
    }
    rader.push({ etikett: 'Elever som ger ersättning', varde: fmt(ersatta) });

    var varningar = [];
    if (offentlig) varningar.push('Ersättningen får inte bli högre än det belopp ni tar ut i interkommunal ersättning för utbildningen. Räknaren kontrollerar inte det.');
    if (v.program === 'annat') varningar.push('Använd beloppet per elev och läsår i beslutet för den särskilda varianten eller den riksrekryterande utbildningen.');
    if (v.huvudman === 'kommun' && v.avdrag > 0) varningar.push('Skolverket hämtar antalet svenska elever från CSN och gör avdraget i beslutet. Räknaren drar av eleverna från det program ni har valt.');

    var res = {
      resultat: total,
      enhet: 'kr',
      sammanfattning: HUVUDMAN[v.huvudman] + ' · ' + elevText(ersatta) + ' · en termin',
      formel: formel,
      forklaring: forklaring,
      rader: rader,
      extra: [{
        rubrik: 'Per elev och termin',
        varde: kr(perElev),
        text: offentlig ? 'Halva beloppet i riksprislistan, utan momsersättningen.' : 'Halva beloppet i riksprislistan.'
      }],
      varningar: varningar
    };
    if (ersatta === 0) {
      res.blockerad = true;
      res.forklaring = 'Avdraget är lika stort som antalet nordiska elever. En kommun får bara ersättning för elever utöver antalet svenska elever från kommunen som studerar i ett annat nordiskt land (12 kap. 8 §).';
    }
    return res;
  }

  var mod = { id: 'nordiska-elever-gymnasieskola', berakna: berakna, PROGRAM: PROGRAM, MOMS_DIVISOR: MOMS_DIVISOR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

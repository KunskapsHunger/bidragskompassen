/* Räknare: uppskattat bidrag för en yrkeskategori enligt 8–9 §§ förordning (2024:1341) om statsbidrag
 * för personalförstärkning. Ren funktion – ingen DOM.
 * Formeln: (ny förstärkning + bibehållande) × Skolverkets schablonbelopp per årsarbetskraft.
 *  - Ny förstärkning = årsarbetskrafter bidragsåret − årsarbetskrafter föregående år (aldrig under 0),
 *    per yrkeskategori och för hela huvudmannen (Skolverket: "ökningen ska ske på huvudmannanivå").
 *  - Skolverkets räkneregel (sidan för 2025): (årsarbetskrafter 2025 − årsarbetskrafter 2024) × schablonlönen
 *    för respektive yrkeskategori. Beloppen halveras alltså inte en gång till – halveringen i 9 § ingår.
 *  - Schablonbeloppen gäller 2026 (Skolverkets sidor för 2026 och 2027). Beloppen för 2027 är inte beslutade.
 * Årsarbetskrafterna avrundas till två decimaler, som Skolverket helst vill ha dem. */
(function (root) {
  'use strict';

  var SCHABLON_AR = 2026;
  var SCHABLON = {                    // kr per årsarbetskraft, 2026
    skollakare: 878000,               // 6 § 1 – legitimerade skolläkare
    skolskoterska: 393000,            // 6 § 2 – legitimerade skolsköterskor
    kurator: 351000,                  // 6 § 3
    psykolog: 414000,                 // 6 § 4 – legitimerade psykologer
    speciallarare: 402000,            // 4 § 1 – legitimerade speciallärare
    fortbildning: 363000,             // 4 § 2 – lärare i fortbildning till speciallärare/specialpedagog
    laravlastande: 302000,            // 7 § 1 – läraravlastande personal med relevant utbildning
    lararassistent: 248000            // 7 § 2 – lärarassistenter och läraravlastande personal utan relevant utbildning
  };
  var NAMN = {
    skollakare: 'Skolläkare', skolskoterska: 'Skolsköterska', kurator: 'Kurator', psykolog: 'Psykolog',
    speciallarare: 'Speciallärare', fortbildning: 'Lärare i fortbildning till speciallärare eller specialpedagog',
    laravlastande: 'Läraravlastande personal med relevant utbildning',
    lararassistent: 'Lärarassistent eller läraravlastande personal utan relevant utbildning'
  };
  var ELEVHALSA = ['skollakare', 'skolskoterska', 'kurator', 'psykolog'];
  var GOLV_VID_URVAL = 75000;         // 15 § andra stycket
  var MAX_AA = 100000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function round2(n) { return Math.round((n + (n >= 0 ? 1 : -1) * 1e-9) * 100) / 100; }
  function giltigt(v) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= MAX_AA; }
  function merAnTvaDecimaler(v) { return Math.abs(round2(v) - v) > 1e-9; }

  function kategoriVarning(k) {
    if (ELEVHALSA.indexOf(k) !== -1) {
      var krav = k === 'kurator'
        ? 'En kurator ska ha tillräcklig utbildning för uppdraget. Det bedömer ni själva.'
        : 'Personen ska ha legitimation och behörighet för yrket (6 §).';
      return krav + ' Bidraget får inte betala den elevhälsa som ni redan måste ha enligt skollagen.';
    }
    if (k === 'speciallarare') return 'Bidrag för speciallärare i särskilda undervisningsgrupper ges bara till huvudmän för grundskola eller anpassad grundskola (4 §).';
    if (k === 'fortbildning') return 'Räkna bara den tid läraren arbetar, inte den tid som går till studier.';
    return '';
  }

  function berakna(v) {
    var kategori = Object.prototype.hasOwnProperty.call(SCHABLON, v.kategori) ? v.kategori : null;
    if (!kategori) return { fel: 'Välj en yrkeskategori.' };
    var bibehallInmatat = v.hadeBidrag === true ? v.bibehall : 0;
    if (!giltigt(v.aaForegaende) || !giltigt(v.aaBidragsar) || !giltigt(bibehallInmatat)) {
      return { fel: 'Ange årsarbetskrafter som tal från 0 till 100 000. Decimaler skrivs med komma, till exempel 2,5.' };
    }
    var schablon = SCHABLON[kategori];
    var fore = round2(v.aaForegaende);
    var under = round2(v.aaBidragsar);
    var bibehall = round2(bibehallInmatat);
    var okning = round2(under - fore);
    var ny = Math.max(0, okning);
    var aa = round2(ny + bibehall);
    var bidragNy = Math.round(ny * schablon);
    var bidragBibehall = Math.round(bibehall * schablon);
    var total = bidragNy + bidragBibehall;

    var varningar = [];
    if (okning < 0) {
      varningar.push('Antalet årsarbetskrafter minskar jämfört med föregående år. Då finns ingen ny förstärkning att söka bidrag för.' +
        (bibehall > 0 ? ' Kontrollera också att den förstärkning ni vill behålla finns kvar. Annars kan ni behöva betala tillbaka.' : ''));
    }
    if (total > 0 && total < GOLV_VID_URVAL) {
      varningar.push('Om Skolverket måste göra ett urval blir inget bidrag lägre än 75 000 kr (15 §). Det gäller huvudmannens hela bidrag, inte en enskild yrkeskategori.');
    }
    if ([v.aaForegaende, v.aaBidragsar, bibehallInmatat].some(merAnTvaDecimaler)) {
      varningar.push('Skolverket vill helst ha årsarbetskrafter med högst två decimaler. Räknaren har avrundat.');
    }
    var kv = kategoriVarning(kategori);
    if (kv) varningar.push(kv);

    return {
      resultat: total,
      enhet: 'kr',
      blockerad: total === 0 ? true : undefined,
      sammanfattning: NAMN[kategori] + ' · ' + fmt(aa) + ' ' + (aa === 1 ? 'årsarbetskraft' : 'årsarbetskrafter') + ' med bidrag',
      formel: '(' + fmt(ny) + ' + ' + fmt(bibehall) + ') × ' + fmt(schablon) + ' = ' + kr(total),
      forklaring: total === 0
        ? 'Bidraget räknas bara på en ökning av årsarbetskrafter eller på en tidigare beviljad ökning som ni behåller. Här finns ingen av dem.'
        : 'Ny förstärkning: ' + fmt(under) + ' − ' + fmt(fore) + ' = ' + fmt(okning) + ' årsarbetskrafter' +
          (okning < 0 ? ', alltså 0' : '') + '. Schablonbeloppet för ' + SCHABLON_AR + ' är ' + kr(schablon) + ' per årsarbetskraft.',
      delar: [{ etikett: 'Ny förstärkning', varde: bidragNy }, { etikett: 'Bibehållande', varde: bidragBibehall }],
      rader: [
        { etikett: 'Årsarbetskrafter föregående år', varde: fmt(fore) },
        { etikett: 'Årsarbetskrafter under bidragsåret', varde: fmt(under) },
        { etikett: 'Ny förstärkning', varde: fmt(ny) },
        { etikett: 'Bibehållande', varde: fmt(bibehall) },
        { etikett: 'Schablonbelopp ' + SCHABLON_AR + ' per årsarbetskraft', varde: kr(schablon) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'personalforstarkning-belopp', berakna: berakna, SCHABLON: SCHABLON, SCHABLON_AR: SCHABLON_AR, NAMN: NAMN };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

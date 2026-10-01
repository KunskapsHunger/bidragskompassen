/* Räknare: statsbidrag för regionalt yrkesvux enligt 24–31 b §§ förordning (2016:937).
 * Ren funktion – ingen DOM. Bidraget lämnas med fasta belopp per årsstudieplats (800 verksamhetspoäng),
 * per elev (handledning) eller per utbildning (yrkesförare). Beloppen för 2027 och framåt står i förordningen
 * (lydelse SFS 2025:892). För 2026 gällde andra nivåer för lärlings- och kombinationsutbildning enligt
 * Skolverkets sida för 2026: 50 000 kr respektive 110 000 kr per årsstudieplats oavsett yrkesområde.
 * Formeln: Σ årsstudieplatser × belopp per plats + elever med utbildad handledare × 7 000
 *          + yrkesförarutbildningar × belopp per utbildning. */
(function (root) {
  'use strict';

  // Belopp per årsstudieplats som skiljer sig mellan 2026 och 2027 och framåt.
  var NIVAER = {
    '2026': { lagre: 42000, hogre: 90000, anpassad: 110000, larlingLagre: 50000, larlingHogre: 50000, kombLagre: 110000, kombHogre: 110000 },
    '2027': { lagre: 42000, hogre: 90000, anpassad: 110000, larlingLagre: 42000, larlingHogre: 90000, kombLagre: 97000, kombHogre: 145000 }
  };
  // Belopp som är desamma båda åren.
  var FASTA = {
    arbetsplats: 40000,  // 25 §, högst per årsstudieplats i lärlingsutbildning
    handledning: 7000,   // 26 §, högst per elev
    orientering: 36000,  // 31 §, orienteringskurser och vissa gymnasiegemensamma ämnen
    funktion: 55000,     // 31 b §, tillägg per årsstudieplats
    buss: 72000,         // 30 a § 1, per utbildning (500 verksamhetspoäng)
    lastbil: 82800,      // 30 a § 2, per utbildning (600 verksamhetspoäng)
    slap: 114000         // 30 a § 3, per utbildning (800 verksamhetspoäng)
  };
  var POANG_PER_PLATS = 800;
  var MAX_PLATSER = 100000;
  var MAX_ANTAL = 100000;

  var PLATSFALT = ['lagre', 'hogre', 'anpassad', 'larlingLagre', 'larlingHogre', 'kombLagre', 'kombHogre', 'arbetsplats', 'orientering', 'funktion'];
  var ANTALFALT = ['handledning', 'buss', 'lastbil', 'slap'];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }
  function heltal(v, min, max) { return tal(v, min, max) && Math.floor(v) === v; }

  function validera(v) {
    for (var i = 0; i < PLATSFALT.length; i += 1) {
      if (!tal(v[PLATSFALT[i]], 0, MAX_PLATSER)) return 'Ange antal årsstudieplatser som ett tal från 0 till 100 000. Decimaler går bra – en årsstudieplats kan delas mellan flera elever.';
    }
    for (var j = 0; j < ANTALFALT.length; j += 1) {
      if (!heltal(v[ANTALFALT[j]], 0, MAX_ANTAL)) return 'Ange antal elever och yrkesförarutbildningar som hela tal från 0 till 100 000.';
    }
    return null;
  }

  function rad(platser, belopp, etikett, enhet) {
    return { platser: platser, belopp: belopp, summa: platser * belopp, etikett: etikett, enhet: enhet };
  }

  function berakna(v) {
    var ar = v.ar === '2026' ? '2026' : '2027';
    var fel = validera(v);
    if (fel) return { fel: fel };

    var n = NIVAER[ar];
    var poster = [
      rad(v.lagre, n.lagre, 'Yrkesutbildning, lägre nivå', 'plats'),
      rad(v.hogre, n.hogre, 'Yrkesutbildning, högre nivå', 'plats'),
      rad(v.anpassad, n.anpassad, 'Anpassad utbildning', 'plats'),
      rad(v.larlingLagre, n.larlingLagre, 'Lärling, lägre nivå', 'plats'),
      rad(v.larlingHogre, n.larlingHogre, 'Lärling, högre nivå', 'plats'),
      rad(v.arbetsplats, FASTA.arbetsplats, 'Ersättning till arbetsplats', 'plats'),
      rad(v.handledning, FASTA.handledning, 'Handledning', 'elev'),
      rad(v.kombLagre, n.kombLagre, 'Kombination, lägre nivå', 'plats'),
      rad(v.kombHogre, n.kombHogre, 'Kombination, högre nivå', 'plats'),
      rad(v.orientering, FASTA.orientering, 'Orienteringskurser och teoriämnen', 'plats'),
      rad(v.funktion, FASTA.funktion, 'Tillägg för funktionsnedsättning', 'plats'),
      rad(v.buss, FASTA.buss, 'Yrkesförare buss', 'utbildning'),
      rad(v.lastbil, FASTA.lastbil, 'Yrkesförare lastbil', 'utbildning'),
      rad(v.slap, FASTA.slap, 'Yrkesförare lastbil med släp', 'utbildning')
    ];
    var total = poster.reduce(function (s, p) { return s + p.summa; }, 0);
    var aktiva = poster.filter(function (p) { return p.platser > 0; });

    var yrke = poster[0].summa + poster[1].summa;
    var larling = poster[3].summa + poster[4].summa + poster[5].summa + poster[6].summa;
    var komb = poster[7].summa + poster[8].summa;
    var forare = poster[11].summa + poster[12].summa + poster[13].summa;

    var larlingPlatser = v.larlingLagre + v.larlingHogre;
    var utbildningsplatser = v.lagre + v.hogre + v.anpassad + larlingPlatser + v.kombLagre + v.kombHogre + v.orientering;
    var utanAnpassad = utbildningsplatser - v.anpassad;

    var varningar = [];
    if (v.arbetsplats > larlingPlatser) varningar.push('Ni räknar med fler årsstudieplatser för ersättning till arbetsplatsen än lärlingsplatser. Skolverket skriver att ni behöver minst lika många lärlingsplatser som platser med arbetsplatsersättning. Anpassad lärlingsutbildning ligger i fältet för anpassad utbildning – kontrollera med Skolverket hur den ska anges.');
    if (v.handledning > 0 && larlingPlatser === 0) varningar.push('Bidrag för handledning ges bara för lärlingsutbildning, och bara om handledaren har gått en handledarutbildning som Skolverket godkänt.');
    if (v.funktion > utanAnpassad) varningar.push('Tillägget för elever med funktionsnedsättning kan inte ges för anpassad utbildning. Ni räknar med fler tilläggsplatser än övriga utbildningsplatser.');
    if (ar === '2026' && (v.kombLagre > 0 || v.kombHogre > 0)) varningar.push('För 2026 räknar räknaren med 110 000 kr per årsstudieplats för kombinationsutbildning, som Skolverket anger. Från 2027 gäller nya villkor och 97 000 eller 145 000 kr.');

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(utbildningsplatser) + ' årsstudieplatser · ' + (ar === '2026' ? 'nivåer 2026' : 'nivåer från 2027'),
      formel: aktiva.length
        ? aktiva.map(function (p) { return fmt(p.platser) + ' × ' + fmt(p.belopp); }).join(' + ') + ' = ' + kr(total)
        : 'Inga platser angivna = 0 kr',
      forklaring: 'Fasta belopp per årsstudieplats (800 verksamhetspoäng), per elev för handledning och per utbildning för yrkesförare. Arbetsplatsersättningen och handledningen är högsta belopp. Räknaren avrundar inte.',
      delar: [
        { etikett: 'Yrkesutbildning', varde: yrke },
        { etikett: 'Anpassad', varde: poster[2].summa },
        { etikett: 'Lärling', varde: larling },
        { etikett: 'Kombination', varde: komb },
        { etikett: 'Orientering och teori', varde: poster[9].summa },
        { etikett: 'Funktionsnedsättning', varde: poster[10].summa },
        { etikett: 'Yrkesförare', varde: forare }
      ],
      rader: aktiva.map(function (p) {
        var enh = p.enhet === 'plats' ? ' per plats' : p.enhet === 'elev' ? ' per elev' : ' per utbildning';
        return { etikett: p.etikett + ' (' + fmt(p.platser) + ' × ' + kr(p.belopp) + enh + ')', varde: kr(p.summa) };
      }),
      extra: [{
        rubrik: 'Utbildningsplatser i beräkningen',
        varde: fmt(utbildningsplatser) + ' årsstudieplatser',
        text: 'Motsvarar ' + fmt(utbildningsplatser * POANG_PER_PLATS) + ' verksamhetspoäng. Platser för arbetsplatsersättning och tillägg för funktionsnedsättning räknas inte två gånger. Yrkesförarutbildningar räknas per utbildning.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'regionalt-yrkesvux-belopp', berakna: berakna, NIVAER: NIVAER, FASTA: FASTA };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

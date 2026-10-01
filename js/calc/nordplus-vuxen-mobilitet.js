/* Räknare: schablonbidrag för ett mobilitetsprojekt i Nordplus Vuxen (Nordplus Adult) enligt Nordplus handbok 2026
 * (avsnittet "Funding in Nordplus Adult – Mobility projects") och nordplusonline.org/Funding in Nordplus Adult.
 * Ren funktion – ingen DOM. Belopp i euro:
 *   Resa tur och retur per deltagare: 330 (mellan Danmark, Estland, Finland, Lettland, Litauen, Norge, Sverige och Åland),
 *   660 (till/från Färöarna och Island), 1 300 (till/från Grönland). Inrikes resa över 250 km enkel väg: +175.
 *   Uppehälle per deltagare: vuxenstuderande 70 per dag, 250 per vecka, 750 per månad;
 *   lärare och annan personal 100 per dag, 500 per vecka, 1 350 per månad. Uppehållet täcker hela vistelsen inklusive resdagar.
 * Förberedande besök: högst två personer per organisation, högst fem dagar inklusive resdagar.
 * Projektledningsbidrag (2 000 koordinator / 1 000 per partner, om resa och uppehälle är minst 10 000 euro
 * eller minst 15 resenärer, inte för förberedande besök) räknas inte in. */
(function (root) {
  'use strict';

  var RESA = { norden: 330, island: 660, gronland: 1300 };
  var RESA_NAMN = { norden: 'inom Norden och Baltikum', island: 'Färöarna eller Island', gronland: 'Grönland' };
  var INRIKES = 175;
  var UPPEHALLE = {
    studerande: { dag: 70, vecka: 250, manad: 750 },
    personal: { dag: 100, vecka: 500, manad: 1350 }
  };
  var ENHET_ORD = { dag: ['dag', 'dagar'], vecka: ['vecka', 'veckor'], manad: ['månad', 'månader'] };
  var AKTIVITET = { personal: 'Utbyte för lärare och personal', studerande: 'Utbyte för vuxenstuderande', forberedande: 'Förberedande besök' };
  var MAX_ANTAL = { dag: 31, vecka: 104, manad: 24 };
  var PROJEKTLEDNING_BELOPP = 10000;
  var PROJEKTLEDNING_RESENARER = 15;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function eur(n) { return fmt(n) + ' euro'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function ord(enhet, n) { return ENHET_ORD[enhet][n === 1 ? 0 : 1]; }

  function regelFel(akt, studerande, personal, enhet, antal) {
    if (akt === 'forberedande') {
      if (personal < 1 || personal > 2) return 'Ett förberedande besök ger bidrag för en eller två personer per organisation.';
      if (enhet !== 'dag' || antal > 5) return 'Ett förberedande besök får vara högst fem dagar, inklusive resdagar.';
      return null;
    }
    if (akt === 'studerande' && studerande < 1) return 'Ange minst en vuxenstuderande som reser.';
    if (akt === 'personal' && personal < 1) return 'Ange minst en lärare eller annan personal som reser.';
    if (antal > MAX_ANTAL[enhet]) return 'Alla resor i ett mobilitetsprojekt ska vara genomförda inom två år. Kontrollera vistelsens längd.';
    return null;
  }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(AKTIVITET, v.aktivitet) || !RESA[v.resvag] || !ENHET_ORD[v.enhet]) {
      return { fel: 'Välj aktivitet, resväg och hur vistelsen räknas.' };
    }
    var akt = v.aktivitet;
    var studerande = akt === 'studerande' ? v.studerande : 0;
    if (!heltal(studerande, 0, 200) || !heltal(v.personal, 0, 200)) return { fel: 'Ange antal resenärer som hela tal från 0 till 200.' };
    if (!heltal(v.antal, 1, 104)) return { fel: 'Ange vistelsens längd som ett heltal från 1.' };
    var fel = regelFel(akt, studerande, v.personal, v.enhet, v.antal);
    if (fel) return { fel: fel };

    var resenarer = studerande + v.personal;
    var resa = RESA[v.resvag] * resenarer;
    var inrikes = v.inrikes === true ? INRIKES * resenarer : 0;
    var uppStud = UPPEHALLE.studerande[v.enhet] * v.antal * studerande;
    var uppPers = UPPEHALLE.personal[v.enhet] * v.antal * v.personal;
    var total = resa + inrikes + uppStud + uppPers;

    var formel = fmt(RESA[v.resvag]) + ' × ' + fmt(resenarer) + (inrikes ? ' + ' + fmt(INRIKES) + ' × ' + fmt(resenarer) : '') +
      (studerande ? ' + ' + fmt(UPPEHALLE.studerande[v.enhet]) + ' × ' + fmt(v.antal) + ' × ' + fmt(studerande) : '') +
      (v.personal ? ' + ' + fmt(UPPEHALLE.personal[v.enhet]) + ' × ' + fmt(v.antal) + ' × ' + fmt(v.personal) : '') +
      ' = ' + eur(total);

    var varningar = [];
    if (akt !== 'forberedande' && v.enhet === 'dag' && v.antal < 5) {
      varningar.push('Varje vistelse ska omfatta minst tre hela arbetsdagar, utöver resdagarna.');
    }
    if (akt === 'personal' && v.personal > 2) {
      varningar.push('Normalt ges bidrag för högst två personer per organisation. Fler måste motiveras särskilt i ansökan.');
    }
    varningar.push('Alla som reser ska ha en formell koppling till en organisation i partnerskapet: anställd, volontär eller inskriven studerande.');

    var extra = [{
      rubrik: 'Så räknas uppehället',
      varde: fmt(v.antal) + ' ' + ord(v.enhet, v.antal),
      text: 'Studerande ' + eur(UPPEHALLE.studerande[v.enhet]) + ' och personal ' + eur(UPPEHALLE.personal[v.enhet]) + ' per ' + ord(v.enhet, 1) + '. Ansökningssystemet räknar ut det exakta beloppet.'
    }];

    if (akt !== 'forberedande' && (total >= PROJEKTLEDNING_BELOPP || resenarer >= PROJEKTLEDNING_RESENARER)) {
      extra.push({
        rubrik: 'Projektledning kan tillkomma',
        varde: '2 000 / 1 000 euro',
        text: 'Ansökningar med minst 10 000 euro för resa och uppehälle, eller minst 15 resenärer, får 2 000 euro till koordinatorn och 1 000 euro per partner. Det ingår inte i summan ovan.'
      });
    }

    return {
      resultat: total,
      enhet: 'euro',
      sammanfattning: AKTIVITET[akt] + ' · ' + fmt(resenarer) + ' resenärer · ' + RESA_NAMN[v.resvag],
      formel: formel,
      forklaring: 'Resa ' + eur(resa) + (inrikes ? ', inrikes resa ' + eur(inrikes) : '') + ', uppehälle ' + eur(uppStud + uppPers) + '.',
      rader: [
        { etikett: 'Resor, ' + fmt(resenarer) + ' × ' + fmt(RESA[v.resvag]) + ' euro', varde: eur(resa) },
        { etikett: 'Inrikes resa', varde: eur(inrikes) },
        { etikett: 'Uppehälle för ' + fmt(studerande) + ' studerande', varde: eur(uppStud) },
        { etikett: 'Uppehälle för ' + fmt(v.personal) + ' personal', varde: eur(uppPers) }
      ],
      delar: [{ etikett: 'Resor', varde: resa + inrikes }, { etikett: 'Uppehälle', varde: uppStud + uppPers }],
      extra: extra,
      varningar: varningar
    };
  }

  var mod = { id: 'nordplus-vuxen-mobilitet', berakna: berakna, RESA: RESA, INRIKES: INRIKES, UPPEHALLE: UPPEHALLE };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

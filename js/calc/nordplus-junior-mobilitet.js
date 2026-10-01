/* Räknare: schablonbidrag för ett mobilitetsprojekt i Nordplus Junior enligt Nordplus handbok 2026
 * (avsnitten "Mobility projects" och "Funding of mobility projects") och nordplusonline.org/Funding Nordplus Junior.
 * Ren funktion – ingen DOM. Belopp i euro:
 *   Resa tur och retur per deltagare: 330 (mellan Danmark, Estland, Finland, Lettland, Litauen, Norge, Sverige och Åland),
 *   660 (till/från Färöarna och Island), 1 300 (till/från Grönland). Inrikes resa över 250 km enkel väg: +175.
 *   Uppehälle, bara för lärare och annan pedagogisk personal (inte elever): 100 per dag, 500 per vecka, 1 350 per månad.
 *   6–7 dagar ska räknas med veckobeloppet.
 * Gränser: klassutbyte högst 30 elever per skola och högst två medföljande lärare per 10 elever, 5 dagar–3 veckor.
 * Förberedande besök: högst två lärare per organisation, högst fem dagar. Studiebesök: 2–5 deltagare, högst fem dagar.
 * Projektledningsbidrag (1 000 koordinator / 500 partner, bara om projektets budget är över 15 000) räknas inte in. */
(function (root) {
  'use strict';

  var RESA = { norden: 330, island: 660, gronland: 1300 };
  var RESA_NAMN = { norden: 'inom Norden och Baltikum', island: 'Färöarna eller Island', gronland: 'Grönland' };
  var INRIKES = 175;
  var UPPEHALLE = { dag: 100, vecka: 500, manad: 1350 };
  var ENHET_ORD = { dag: ['dag', 'dagar'], vecka: ['vecka', 'veckor'], manad: ['månad', 'månader'] };
  var AKTIVITET = {
    klassutbyte: 'Klassutbyte', lararutbyte: 'Lärarutbyte', forberedande: 'Förberedande besök', studiebesok: 'Studiebesök'
  };
  var MAX_ELEVER = 30;
  var PROJEKTLEDNING_GRANS = 15000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function eur(n) { return fmt(n) + ' euro'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function ord(enhet, n) { return ENHET_ORD[enhet][n === 1 ? 0 : 1]; }

  /** Regler för vistelsens längd per aktivitet. Returnerar en felmening eller null. */
  function langdFel(akt, enhet, antal) {
    if (enhet === 'dag' && (antal === 6 || antal === 7)) return 'En vistelse på 6–7 dagar ska räknas som en vecka. Välj veckor.';
    if (akt === 'forberedande' || akt === 'studiebesok') {
      if (enhet !== 'dag' || antal > 5) return AKTIVITET[akt] + ' får vara högst fem dagar, inklusive resdagar.';
      return null;
    }
    if (enhet === 'dag' && antal < 5) return 'Utbyten ska vara minst fem dagar: minst tre arbetsdagar och två resdagar.';
    if (enhet === 'dag' && antal > 7) return 'Välj veckor eller månader för vistelser som är längre än en vecka.';
    if (akt === 'klassutbyte' && (enhet === 'manad' || (enhet === 'vecka' && antal > 3))) return 'Ett klassutbyte får vara högst tre veckor.';
    if (akt === 'lararutbyte' && ((enhet === 'vecka' && antal > 104) || (enhet === 'manad' && antal > 24))) return 'Ett lärarutbyte får vara högst två år.';
    return null;
  }

  function deltagarFel(akt, elever, personal) {
    if (akt === 'klassutbyte') {
      if (elever < 1) return 'Ett klassutbyte behöver minst en elev.';
      var maxLarare = 2 * Math.ceil(elever / 10);
      if (personal > maxLarare) return 'Med ' + fmt(elever) + ' elever ges bidrag för högst ' + fmt(maxLarare) + ' medföljande lärare (två per tio elever).';
      return null;
    }
    if (personal < 1) return 'Ange minst en lärare eller annan pedagogisk personal som reser.';
    if (akt === 'forberedande' && personal > 2) return 'Ett förberedande besök ger bidrag för högst två personer per organisation.';
    if (akt === 'studiebesok' && (personal < 2 || personal > 5)) return 'Ett studiebesök ger bidrag för minst två och högst fem deltagare per organisation.';
    return null;
  }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(AKTIVITET, v.aktivitet) || !RESA[v.resvag] || !UPPEHALLE[v.enhet]) {
      return { fel: 'Välj aktivitet, resväg och hur vistelsen räknas.' };
    }
    var akt = v.aktivitet;
    var elever = akt === 'klassutbyte' ? v.elever : 0;
    if (!heltal(elever, 0, MAX_ELEVER)) return { fel: 'Bidrag ges för högst 30 elever per skola. Ange ett heltal från 0 till 30.' };
    if (!heltal(v.personal, 0, 100)) return { fel: 'Ange antal personal som reser som ett heltal från 0 till 100.' };
    if (!heltal(v.antal, 1, 104)) return { fel: 'Ange vistelsens längd som ett heltal från 1.' };
    var fel = deltagarFel(akt, elever, v.personal) || langdFel(akt, v.enhet, v.antal);
    if (fel) return { fel: fel };

    var resenarer = elever + v.personal;
    var resa = RESA[v.resvag] * resenarer;
    var inrikes = v.inrikes === true ? INRIKES * resenarer : 0;
    var perPerson = UPPEHALLE[v.enhet] * v.antal;
    var uppehalle = perPerson * v.personal;
    var total = resa + inrikes + uppehalle;

    var formel = fmt(RESA[v.resvag]) + ' × ' + fmt(resenarer) + (inrikes ? ' + ' + fmt(INRIKES) + ' × ' + fmt(resenarer) : '') +
      ' + ' + fmt(UPPEHALLE[v.enhet]) + ' × ' + fmt(v.antal) + ' × ' + fmt(v.personal) + ' = ' + eur(total);

    var varningar = [];
    if (elever > 0) varningar.push('Eleverna får bara resebidrag. Blir det pengar över på resorna får de användas till elevernas mat och logi.');
    varningar.push('Genomför ni färre resor än beviljat ska mellanskillnaden betalas tillbaka.');

    var extra = [{
      rubrik: 'Per person som reser',
      varde: eur(RESA[v.resvag] + (v.inrikes === true ? INRIKES : 0)) + ' i resa',
      text: 'Personal får dessutom ' + eur(perPerson) + ' i uppehälle (' + fmt(v.antal) + ' ' + ord(v.enhet, v.antal) + ').'
    }];
    if (total > PROJEKTLEDNING_GRANS && (akt === 'klassutbyte' || akt === 'lararutbyte')) {
      extra.push({
        rubrik: 'Projektledning kan tillkomma',
        varde: '1 000 / 500 euro',
        text: 'Projekt med en budget över 15 000 euro får 1 000 euro till koordinatorn och 500 euro per partner. Det ingår inte i summan ovan.'
      });
    }

    return {
      resultat: total,
      enhet: 'euro',
      sammanfattning: AKTIVITET[akt] + ' · ' + fmt(resenarer) + ' resenärer · ' + RESA_NAMN[v.resvag],
      formel: formel,
      forklaring: 'Resa ' + eur(resa) + (inrikes ? ', inrikes resa ' + eur(inrikes) : '') + ' och uppehälle för personal ' + eur(uppehalle) + '.',
      rader: [
        { etikett: 'Resor, ' + fmt(resenarer) + ' × ' + fmt(RESA[v.resvag]) + ' euro', varde: eur(resa) },
        { etikett: 'Inrikes resa, ' + fmt(inrikes ? resenarer : 0) + ' × ' + fmt(INRIKES) + ' euro', varde: eur(inrikes) },
        { etikett: 'Uppehälle för ' + fmt(v.personal) + ' personal', varde: eur(uppehalle) }
      ],
      delar: [{ etikett: 'Resor', varde: resa + inrikes }, { etikett: 'Uppehälle', varde: uppehalle }],
      extra: extra,
      varningar: varningar
    };
  }

  var mod = { id: 'nordplus-junior-mobilitet', berakna: berakna, RESA: RESA, INRIKES: INRIKES, UPPEHALLE: UPPEHALLE };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

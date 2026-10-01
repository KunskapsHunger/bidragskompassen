/* Räknare: statsbidrag för gymnasial lärlingsutbildning enligt 3 § förordning (2011:947).
 * Ren funktion – ingen DOM. Förordningen anger högsta belopp per läsår (37 500, 10 000 och 5 000 kr).
 * Skolverket söker och beviljar per termin och anger hälften: 18 750, 5 000 och 2 500 kr.
 * Räcker pengarna inte minskas alla delar i samma proportion (3 § femte stycket).
 * Formeln: (elever × arbetsgivardel + elever med utbildad handledare × handledardel
 *           + elever med lärlingsanställning × anställningsdel) × antal terminer. */
(function (root) {
  'use strict';

  // Högsta belopp per elev och termin (Skolverket), = beloppen per läsår i 3 § delade på två terminer.
  var MAX_PER_TERMIN = { arbetsgivare: 18750, handledare: 5000, anstallning: 2500 };
  // Högsta belopp per elev som Skolverket beviljade för våren 2026 (beslut maj 2026, ansökan 1).
  var BEVILJAT_VT26 = { arbetsgivare: 11720, handledare: 3127, anstallning: 1577 };
  var MAX_ELEVER = 100000;
  var MAX_TERMINER = 8;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function plural(n, en, flera) { return n + ' ' + (n === 1 ? en : flera); }

  function nivaBelopp(niva, andel) {
    if (niva === 'vt26') return BEVILJAT_VT26;
    if (niva === 'egen') {
      var p = andel / 100;
      return { arbetsgivare: MAX_PER_TERMIN.arbetsgivare * p, handledare: MAX_PER_TERMIN.handledare * p, anstallning: MAX_PER_TERMIN.anstallning * p };
    }
    return MAX_PER_TERMIN;
  }

  function validera(v) {
    if (!heltal(v.elever, 1, MAX_ELEVER) || !heltal(v.handledare, 0, MAX_ELEVER) || !heltal(v.anstallda, 0, MAX_ELEVER) || !heltal(v.terminer, 1, MAX_TERMINER)) {
      return 'Ange hela tal: 1–100 000 elever, 0–100 000 elever med utbildad handledare respektive lärlingsanställning och 1–8 terminer.';
    }
    if (v.niva === 'egen' && !heltal(v.andel, 1, 100)) return 'Ange en nivå mellan 1 och 100 % av maxbeloppen.';
    if (v.handledare > v.elever) return 'Antalet elever med utbildad handledare kan inte vara fler än antalet lärlingselever.';
    if (v.anstallda > v.elever) return 'Antalet elever med lärlingsanställning kan inte vara fler än antalet lärlingselever.';
    return null;
  }

  function berakna(v) {
    var niva = v.niva === 'vt26' || v.niva === 'egen' ? v.niva : 'max';
    var fel = validera(Object.assign({}, v, { niva: niva }));
    if (fel) return { fel: fel };

    var b = nivaBelopp(niva, v.andel);
    var t = v.terminer;
    var arb = v.elever * b.arbetsgivare * t;
    var hand = v.handledare * b.handledare * t;
    var anst = v.anstallda * b.anstallning * t;
    var total = arb + hand + anst;
    var perTermin = v.elever * b.arbetsgivare + v.handledare * b.handledare + v.anstallda * b.anstallning;

    var nivaText = niva === 'max' ? 'maxbelopp' : niva === 'vt26' ? 'nivån våren 2026' : v.andel + ' % av maxbeloppen';
    var varningar = [];
    if (niva === 'vt26') varningar.push('Beloppen gällde våren 2026. Vad som beviljas en annan termin beror på hur många som söker och hur mycket pengar som finns.');
    if (v.anstallda > 0) varningar.push('Delen för lärlingsanställning kan inte sökas för elever på lärlingsliknande utbildning inom introduktionsprogram.');

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: plural(v.elever, 'elev', 'elever') + ' · ' + plural(t, 'termin', 'terminer') + ' · ' + nivaText,
      formel: '(' + v.elever + ' × ' + fmt(b.arbetsgivare) + ' + ' + v.handledare + ' × ' + fmt(b.handledare) + ' + ' +
        v.anstallda + ' × ' + fmt(b.anstallning) + ') × ' + t + ' = ' + kr(total),
      forklaring: niva === 'egen'
        ? 'Alla tre delarna minskas till ' + v.andel + ' % av maxbeloppen, så att fördelningen mellan dem blir densamma (3 § femte stycket). Räknaren avrundar inte.'
        : niva === 'vt26'
          ? 'Skolverkets högsta beviljade belopp per elev för våren 2026: ' + kr(b.arbetsgivare) + ', ' + kr(b.handledare) + ' och ' + kr(b.anstallning) + '.'
          : 'Högsta belopp per elev och termin. Förordningen anger beloppen per läsår: 37 500, 10 000 och 5 000 kr.',
      delar: [
        { etikett: 'Till arbetsgivare', varde: arb },
        { etikett: 'Utbildad handledare', varde: hand },
        { etikett: 'Lärlingsanställning', varde: anst }
      ],
      rader: [
        { etikett: 'Till arbetsgivare per elev och termin', varde: kr(b.arbetsgivare) },
        { etikett: 'Utbildad handledare per elev och termin', varde: kr(b.handledare) },
        { etikett: 'Lärlingsanställning per elev och termin', varde: kr(b.anstallning) },
        { etikett: 'Summa per termin', varde: kr(perTermin) }
      ],
      extra: [{
        rubrik: 'Att betala vidare till arbetsplatserna',
        varde: kr(total),
        text: 'Hela beloppet. Det ska betalas till arbetsgivarna senast tre månader efter att Skolverket har betalat ut bidraget till huvudmannen.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'gymnasial-larlingsutbildning-belopp', berakna: berakna, MAX_PER_TERMIN: MAX_PER_TERMIN, BEVILJAT_VT26: BEVILJAT_VT26 };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

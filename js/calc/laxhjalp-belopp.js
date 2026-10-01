/* Räknare: högsta bidrag för läxhjälp enligt 8 § förordning (2014:144).
 * Ren funktion – ingen DOM. Formeln: 1 000 kr × elever som erbjuds läxhjälp + 1 500 kr × elever med extra belopp.
 * Grundbeloppet (högst 1 000 kr per erbjuden elev) står i 8 § andra stycket. Det extra beloppet (1 500 kr,
 * totalt 2 500 kr per elev) är Skolverkets fördelning vid samarbete med ideell organisation eller särskilda skäl
 * (Skolverkets sida "Statsbidrag för läxhjälp 2026"). Räknas per skolform: lågstadiet och gymnasieskolan. */
(function (root) {
  'use strict';

  var GRUNDBELOPP = 1000;   // högst per elev som erbjuds läxhjälp (8 §)
  var EXTRABELOPP = 1500;   // extra per elev vid samarbete eller särskilda skäl (Skolverket)
  var MAX_ELEVER = 1000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function skolform(elever, extra) {
    var grund = GRUNDBELOPP * elever;
    var tillagg = EXTRABELOPP * extra;
    return { elever: elever, extra: extra, grund: grund, tillagg: tillagg, summa: grund + tillagg };
  }

  function uppstallning(namn, s) {
    return namn + ': ' + fmt(GRUNDBELOPP) + ' × ' + fmt(s.elever) + ' + ' + fmt(EXTRABELOPP) + ' × ' + fmt(s.extra) + ' = ' + kr(s.summa) + '.';
  }

  function berakna(v) {
    var ok = heltal(v.lagElever, 0, MAX_ELEVER) && heltal(v.lagExtra, 0, MAX_ELEVER) &&
      heltal(v.gyElever, 0, MAX_ELEVER) && heltal(v.gyExtra, 0, MAX_ELEVER);
    if (!ok) {
      return { fel: 'Ange antal elever som hela tal mellan 0 och 1 000 000.' };
    }
    if (v.lagExtra > v.lagElever || v.gyExtra > v.gyElever) {
      return { fel: 'Elever med extra belopp är en del av eleverna som erbjuds läxhjälp. De kan inte vara fler än alla elever i samma skolform.' };
    }
    var elever = v.lagElever + v.gyElever;
    if (elever === 0) {
      return { fel: 'Ange minst en elev som erbjuds läxhjälp.' };
    }

    var lag = skolform(v.lagElever, v.lagExtra);
    var gy = skolform(v.gyElever, v.gyExtra);
    var extra = v.lagExtra + v.gyExtra;
    var total = lag.summa + gy.summa;
    var bada = v.lagElever > 0 && v.gyElever > 0;

    var forklaring = bada
      ? uppstallning('Lågstadiet', lag) + ' ' + uppstallning('Gymnasieskolan', gy)
      : '';

    var varningar = [];
    if (extra > 0) {
      varningar.push('Det extra beloppet är knutet till just de eleverna på den skolenhet som står i beslutet. Det kan inte flyttas till en annan skolenhet under året.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(elever) + ' ' + (elever === 1 ? 'elev' : 'elever') + ' erbjuds läxhjälp · ' + fmt(extra) + ' med extra belopp',
      formel: fmt(GRUNDBELOPP) + ' × ' + fmt(elever) + ' + ' + fmt(EXTRABELOPP) + ' × ' + fmt(extra) + ' = ' + kr(total),
      forklaring: forklaring,
      rader: [
        { etikett: 'Grundbelopp, ' + fmt(GRUNDBELOPP) + ' kr × ' + fmt(elever) + ' ' + (elever === 1 ? 'elev' : 'elever'), varde: kr(lag.grund + gy.grund) },
        { etikett: 'Extra belopp, ' + fmt(EXTRABELOPP) + ' kr × ' + fmt(extra) + ' ' + (extra === 1 ? 'elev' : 'elever'), varde: kr(lag.tillagg + gy.tillagg) },
        { etikett: 'Lågstadiet', varde: kr(lag.summa) },
        { etikett: 'Gymnasieskolan', varde: kr(gy.summa) }
      ],
      delar: [{ etikett: 'Lågstadiet', varde: lag.summa }, { etikett: 'Gymnasieskolan', varde: gy.summa }],
      extra: [{
        rubrik: 'Genomsnitt per erbjuden elev',
        varde: kr(Math.round(total / elever)),
        text: 'Mellan 1 000 och 2 500 kr, beroende på hur många elever som har extra belopp.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'laxhjalp-belopp', berakna: berakna, GRUNDBELOPP: GRUNDBELOPP, EXTRABELOPP: EXTRABELOPP };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

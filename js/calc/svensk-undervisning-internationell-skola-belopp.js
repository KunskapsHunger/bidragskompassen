/* Räknare: statsbidrag till svensk undervisning vid utländsk skola (internationell skola).
 * Ren funktion – ingen DOM. Formeln: belopp per elev × medelvärdet av antalet elever som deltog i undervisningen
 * den 15 oktober de tre närmast föregående åren (Skolverkets sida för 2027; 8 § SKOLFS 1998:30 för Genève och Warszawa).
 * Belopp per elev: 18 310 kr för 2025 (Skolverkets sida). 19 020 kr för 2026 följer av Skolverkets beslutsbilaga
 * 2026-01-21, där varje skolas belopp är 19 020 kr gånger elevantalet (till exempel 7 elever = 133 140 kr).
 * Hur Skolverket avrundar ett medelvärde som inte är ett heltal står inte i källorna – räknaren avrundar inte medelvärdet. */
(function (root) {
  'use strict';

  var BELOPP = { '2026': 19020, '2025': 18310 };  // kr per elev och bidragsår
  var MAX_ELEVER = 10000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function fmt2(n) { return nf2.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= 0 && v <= MAX_ELEVER; }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(BELOPP, v.ar)) {
      return { fel: 'Välj ett bidragsår som räknaren har belopp för.' };
    }
    if (!heltal(v.elever1) || !heltal(v.elever2) || !heltal(v.elever3)) {
      return { fel: 'Ange antalet elever som heltal från 0 till 10 000 för vart och ett av de tre åren.' };
    }
    var summa = v.elever1 + v.elever2 + v.elever3;
    if (summa === 0) {
      return { fel: 'Ange minst en elev under något av de tre åren.' };
    }
    var perElev = BELOPP[v.ar];
    var snitt = summa / 3;
    var total = Math.round(snitt * perElev);
    var heltalSnitt = summa % 3 === 0;

    var varningar = [];
    if (!heltalSnitt) {
      varningar.push('Medelvärdet är inte ett heltal. Källorna säger inte hur Skolverket avrundar det, så beloppet i ert beslut kan skilja sig något.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Snitt ' + fmt2(snitt) + ' elever · ' + kr(perElev) + ' per elev (' + v.ar + ')',
      formel: kr(perElev) + ' × (' + fmt(v.elever1) + ' + ' + fmt(v.elever2) + ' + ' + fmt(v.elever3) + ') ÷ 3 = ' + kr(total),
      forklaring: 'Medelvärdet av de tre åren är ' + fmt2(snitt) + ' elever. Beloppet per elev gäller bidragsåret ' + v.ar + '.',
      rader: [
        { etikett: 'Elever, första året', varde: fmt(v.elever1) },
        { etikett: 'Elever, andra året', varde: fmt(v.elever2) },
        { etikett: 'Elever, tredje året', varde: fmt(v.elever3) },
        { etikett: 'Medelvärde', varde: fmt2(snitt) },
        { etikett: 'Belopp per elev', varde: kr(perElev) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'svensk-undervisning-internationell-skola-belopp', berakna: berakna, BELOPP: BELOPP };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

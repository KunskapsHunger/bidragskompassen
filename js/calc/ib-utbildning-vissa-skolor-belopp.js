/* Räknare: statsbidrag för internationell gymnasial utbildning (IB) enligt 15–16 §§ förordningen (SKOLFS 2002:7).
 * Ren funktion – ingen DOM. Formeln: årselevplatser (högst 90 i Stockholm och Göteborg, högst 120 vid SSHL)
 * × belopp per elev för naturvetenskapsprogrammet.
 * Elevantalet: Stockholm och Göteborg 15 september året före bidragsåret, SSHL genomsnittet av 15 januari och 15 september (16 §).
 * Beloppet: riksprislistan för året före, inklusive måltider (Skolverkets sida för bidragsåret 2027). För 2027 gäller
 * SKOLFS 2026:7: 111 300 kr. Beslutet för 2026 gav 108 500 kr per elev (t.ex. Stockholm 44 elever = 4 774 000 kr). */
(function (root) {
  'use strict';

  var TAK = { stockholm: 90, goteborg: 90, sshl: 120 };          // 15 §
  var NAMN = { stockholm: 'Stockholms kommun', goteborg: 'Göteborgs kommun', sshl: 'SSHL' };
  var BELOPP_2027 = 111300;                                       // riksprislistan 2026, NA inkl. måltider
  var MAX_BELOPP = 1000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 1 });
  var nf0 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return nf0.format(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!Object.prototype.hasOwnProperty.call(TAK, v.huvudman)) {
      return { fel: 'Välj huvudman: Stockholms kommun, Göteborgs kommun eller SSHL.' };
    }
    if (!heltal(v.belopp, 1, MAX_BELOPP)) {
      return { fel: 'Ange beloppet per elev som ett heltal mellan 1 och 1 000 000 kr.' };
    }
    var sshl = v.huvudman === 'sshl';
    var elever;
    if (sshl) {
      if (!heltal(v.eleverJan, 0, 1000) || !heltal(v.eleverSep, 0, 1000)) {
        return { fel: 'Ange antal elever den 15 januari och den 15 september som hela tal mellan 0 och 1 000.' };
      }
      elever = (v.eleverJan + v.eleverSep) / 2;
    } else {
      if (!heltal(v.elever, 0, 1000)) {
        return { fel: 'Ange antal elever den 15 september som ett heltal mellan 0 och 1 000.' };
      }
      elever = v.elever;
    }

    var tak = TAK[v.huvudman];
    var platser = Math.min(elever, tak);
    var total = Math.round(platser * v.belopp);
    var overTak = elever > tak;

    var varningar = [];
    if (overTak) {
      varningar.push('Bidrag ges för högst ' + fmt(tak) + ' årselevplatser för ' + NAMN[v.huvudman] + ' (15 §). ' +
        fmt(elever - tak) + ' av eleverna ger därför inget bidrag.');
    }
    if (v.belopp !== BELOPP_2027) {
      varningar.push('Ni räknar med ett annat belopp än 111 300 kr, som är beloppet för bidragsåret 2027.');
    }

    var forklaring = sshl
      ? 'Elevantal för SSHL: (' + fmt(v.eleverJan) + ' + ' + fmt(v.eleverSep) + ') ÷ 2 = ' + fmt(elever) + ' elever i genomsnitt.'
      : 'Elevantal den 15 september året före bidragsåret.';

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: NAMN[v.huvudman] + ' · ' + fmt(platser) + ' årselevplatser · ' + kr(v.belopp) + ' per elev',
      formel: fmt(platser) + ' × ' + nf0.format(v.belopp) + ' = ' + kr(total),
      forklaring: forklaring,
      rader: [
        { etikett: 'Elever som bidraget kan gälla', varde: fmt(elever) },
        { etikett: 'Högsta antal årselevplatser', varde: fmt(tak) },
        { etikett: 'Årselevplatser i beräkningen', varde: fmt(platser) },
        { etikett: 'Belopp per elev', varde: kr(v.belopp) }
      ],
      extra: [{
        rubrik: 'Per utbetalning',
        varde: kr(Math.round(total / 4)),
        text: 'Skolverket betalar ut en fjärdedel i januari, april, juli och oktober (20 §).'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'ib-utbildning-vissa-skolor-belopp', berakna: berakna, TAK: TAK, BELOPP_2027: BELOPP_2027 };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

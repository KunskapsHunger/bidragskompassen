/* Räknare: vilka IBO-avgifter som kan ersättas enligt 3 § förordning (1993:795).
 * Ren funktion – ingen DOM. Formeln: basavgift + anslutningsavgift (bara första gången huvudmannen söker)
 * + examensavgift per elev × elever som hemkommunen var skyldig att erbjuda gymnasieutbildning när IB-utbildningen började.
 * Förordningen anger inga belopp: bidraget ersätter de avgifter som huvudmannen faktiskt har betalat till IBO.
 * Att anslutningsavgiften bara betalas ut en gång står på Skolverkets sida för IBO-bidraget 2026. */
(function (root) {
  'use strict';

  var MAX_KR = 100000000;
  var MAX_ELEVER = 10000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }
  function heltal(v, min, max) { return tal(v, min, max) && Math.floor(v) === v; }

  function berakna(v) {
    if (!tal(v.basavgift, 0, MAX_KR) || !tal(v.examensavgift, 0, MAX_KR) || (v.forstaGangen === true && !tal(v.anslutningsavgift, 0, MAX_KR))) {
      return { fel: 'Ange avgifterna i kronor, från 0 till 100 000 000 kr.' };
    }
    if (!heltal(v.elever, 0, MAX_ELEVER) || !heltal(v.berattigade, 0, MAX_ELEVER)) {
      return { fel: 'Ange antal elever som hela tal mellan 0 och 10 000.' };
    }
    if (v.berattigade > v.elever) {
      return { fel: 'Elever som avgiften kan ersättas för är en del av eleverna ni betalat examensavgift för. De kan inte vara fler.' };
    }

    var bas = Math.round(v.basavgift);
    var anslutning = v.forstaGangen === true ? Math.round(v.anslutningsavgift) : 0;
    var exPerElev = v.examensavgift;
    var examen = Math.round(exPerElev * v.berattigade);
    var total = bas + anslutning + examen;
    var ejErsatt = Math.round(exPerElev * (v.elever - v.berattigade));

    var varningar = [];
    if (ejErsatt > 0) {
      varningar.push('Examensavgiften för ' + fmt(v.elever - v.berattigade) + ' ' + (v.elever - v.berattigade === 1 ? 'elev' : 'elever') +
        ' (' + kr(ejErsatt) + ') ersätts inte. Hemkommunen var inte skyldig att erbjuda dem gymnasieutbildning när IB-utbildningen började.');
    }
    if (v.forstaGangen !== true) {
      varningar.push('Anslutningsavgiften är inte med. Den ersätts bara en gång, första gången huvudmannen söker bidraget.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Basavgift' + (anslutning > 0 ? ' + anslutningsavgift' : '') + ' + examensavgift för ' + fmt(v.berattigade) + ' ' + (v.berattigade === 1 ? 'elev' : 'elever'),
      formel: fmt(bas) + (v.forstaGangen === true ? ' + ' + fmt(anslutning) : '') + ' + ' + fmt(exPerElev) + ' × ' + fmt(v.berattigade) + ' = ' + kr(total),
      forklaring: 'Basavgift' + (v.forstaGangen === true ? ' + anslutningsavgift' : '') + ' + examensavgift per elev × elever som avgiften kan ersättas för.',
      rader: [
        { etikett: 'Basavgift (diploma annual fee)', varde: kr(bas) },
        { etikett: 'Anslutningsavgift', varde: v.forstaGangen === true ? kr(anslutning) : 'ersätts inte' },
        { etikett: 'Examensavgift, ' + fmt(v.berattigade) + ' av ' + fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever'), varde: kr(examen) }
      ],
      delar: [
        { etikett: 'Basavgift', varde: bas },
        { etikett: 'Anslutningsavgift', varde: anslutning },
        { etikett: 'Examensavgifter', varde: examen }
      ],
      extra: [{
        rubrik: 'Examensavgifter som inte ersätts',
        varde: kr(ejErsatt),
        text: 'Den delen står huvudmannen själv för.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'ibo-avgifter-belopp', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

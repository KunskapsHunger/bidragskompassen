/* Räknare: bidrag och medfinansiering för Atlas partnerskap enligt UHR:s allmänna villkor 2026, § 7–8 och § 18.
 * Ren funktion – ingen DOM. Schabloner per deltagare: 20 000 kr (Europa utanför EU/EES) och 22 000 kr (övriga världen).
 * Skolan ska själv medfinansiera minst lika mycket som bidraget (2 § tredje stycket förordning (2000:523), villkoren § 8).
 * UHR:s eget räkneexempel: 10 schabloner × 22 000 kr = 220 000 kr i bidrag, 220 000 kr i medfinansiering, 440 000 kr totalt.
 * Fler resenärer än schabloner går bra; färre ger återkrav på hel schablon för varje resa som inte blir av (§ 18). */
(function (root) {
  'use strict';

  var SCHABLON = { europa: 20000, varlden: 22000 };
  var MAX = 1000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function schablonOrd(n) { return n === 1 ? 'schablon' : 'schabloner'; }

  function berakna(v) {
    if (!heltal(v.schablonerEuropa, 0, MAX) || !heltal(v.schablonerVarlden, 0, MAX) || !heltal(v.resenarer, 0, MAX * 4)) {
      return { fel: 'Ange antal schabloner och resenärer som hela tal från 0.' };
    }
    var antal = v.schablonerEuropa + v.schablonerVarlden;
    if (antal === 0) {
      return { fel: 'Ange minst en schablon, alltså minst en deltagare som reser.' };
    }
    var eu = SCHABLON.europa * v.schablonerEuropa;
    var vl = SCHABLON.varlden * v.schablonerVarlden;
    var bidrag = eu + vl;
    var medfinansiering = bidrag;
    var totalt = bidrag + medfinansiering;

    var varningar = [];
    if (v.resenarer < antal) {
      var saknas = antal - v.resenarer;
      varningar.push('Med ' + fmt(v.resenarer) + ' resenärer blir ' + fmt(saknas) + ' ' + schablonOrd(saknas) + (saknas === 1 ? ' oanvänd' : ' oanvända') + '. UHR kräver då tillbaka hela schablonen för varje resa som inte blir av.');
    } else if (v.resenarer > antal) {
      varningar.push('Ni kan låta fler resa än antalet schabloner, men bidraget blir inte större.');
    }

    var formelDelar = [];
    if (v.schablonerEuropa) formelDelar.push(fmt(SCHABLON.europa) + ' × ' + fmt(v.schablonerEuropa));
    if (v.schablonerVarlden) formelDelar.push(fmt(SCHABLON.varlden) + ' × ' + fmt(v.schablonerVarlden));

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: fmt(antal) + ' ' + schablonOrd(antal) + ' · projektet är värt ' + kr(totalt),
      formel: formelDelar.join(' + ') + ' = ' + kr(bidrag),
      forklaring: 'Skolan ska själv bidra med minst lika mycket: ' + kr(medfinansiering) + '. Hela projektet blir då värt ' + kr(bidrag) + ' × 2 = ' + kr(totalt) + '.',
      rader: [
        { etikett: 'Bidrag från UHR', varde: kr(bidrag) },
        { etikett: 'Skolans medfinansiering, minst', varde: kr(medfinansiering) },
        { etikett: 'Projektets totala värde', varde: kr(totalt) }
      ],
      delar: [{ etikett: 'Bidrag från UHR', varde: bidrag }, { etikett: 'Medfinansiering', varde: medfinansiering }],
      extra: [{
        rubrik: 'Medfinansiering kan vara',
        varde: 'Arbetstid och kostnader',
        text: 'Till exempel arbetstid, personal- och vikariekostnader, traktamente, projektledning och spridning. Partnerskolan kan inte stå för medfinansieringen.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'atlas-partnerskap-belopp', berakna: berakna, SCHABLON: SCHABLON };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

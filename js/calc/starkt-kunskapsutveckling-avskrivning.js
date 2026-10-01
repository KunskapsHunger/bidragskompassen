/* Räknare: hur stor del av ett inköp som kan räknas som kostnad under bidragsåret (förordning 2018:49, 2 §:
 * bidrag lämnas för ett kalenderår i sänder). Ren funktion – ingen DOM.
 * Bygger på Skolverkets förklaring (sidan för 2027, "Tillgångar kan skrivas av"): kostar en tillgång mer än ett
 * halvt prisbasbelopp och väntas hålla mer än tre år ska utgiften normalt skrivas av, och bara avskrivningen för
 * bidragsåret får räknas. Räknaren antar jämn (linjär) avskrivning per månad – ett antagande, inte en regel i källan. */
(function (root) {
  'use strict';

  var LIVSLANGD_GRANS = 3;   // år; avskrivning när livslängden överstiger tre år (Skolverket)

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  function berakna(v) {
    var ok = tal(v.kostnad, 1, 1e10) && heltal(v.livslangd, 1, 50) && tal(v.grans, 1, 1e7) && heltal(v.manader, 0, 12);
    if (!ok) {
      return { fel: 'Ange inköpspris (1 kr–10 miljarder), livslängd i hela år (1–50), gränsbelopp (1 kr–10 miljoner) och hela månader (0–12).' };
    }
    var overPris = v.kostnad > v.grans;
    var overTid = v.livslangd > LIVSLANGD_GRANS;
    var avskrivs = overPris && overTid;

    if (!avskrivs) {
      var skal = !overPris
        ? 'Inköpet kostar inte mer än gränsbeloppet ' + kr(v.grans) + '.'
        : 'Tillgången väntas inte hålla mer än tre år.';
      return {
        resultat: v.kostnad,
        enhet: 'kr',
        sammanfattning: 'Ingen avskrivning enligt Skolverkets beskrivning.',
        formel: kr(v.kostnad) + ' räknas i sin helhet',
        forklaring: skal + ' Skolverkets regel om avskrivning gäller då normalt inte. Räknaren visar hela kostnaden för det år inköpet görs. Kontrollera mot era egna redovisningsprinciper.',
        rader: [
          { etikett: 'Över gränsbeloppet', varde: overPris ? 'Ja' : 'Nej' },
          { etikett: 'Livslängd över tre år', varde: overTid ? 'Ja' : 'Nej' }
        ]
      };
    }

    var perAr = v.kostnad / v.livslangd;
    var aret = perAr * v.manader / 12;
    return {
      resultat: aret,
      enhet: 'kr',
      sammanfattning: 'Avskrivning för ' + v.manader + ' ' + (v.manader === 1 ? 'månad' : 'månader') + ' av bidragsåret.',
      formel: fmt(v.kostnad) + ' ÷ ' + v.livslangd + ' år × ' + v.manader + '/12 = ' + kr(aret),
      forklaring: 'Inköpet kostar mer än ' + kr(v.grans) + ' och väntas hålla mer än tre år. Bara avskrivningen för bidragsåret räknas: ' + kr(perAr) + ' per helt år.',
      rader: [
        { etikett: 'Avskrivning per helt år', varde: kr(perAr) },
        { etikett: 'Kvar att skriva av efter året', varde: kr(v.kostnad - aret) }
      ],
      varningar: ['Resten av utgiften hör till kommande år. Vill ni täcka den med bidrag behöver ni söka på nytt för varje år.']
    };
  }

  var mod = { id: 'starkt-kunskapsutveckling-avskrivning', berakna: berakna, LIVSLANGD_GRANS: LIVSLANGD_GRANS };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

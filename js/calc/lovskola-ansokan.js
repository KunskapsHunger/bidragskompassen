/* Räknare: från ansökan till utbetalning för lovskola – förordning (2014:47) 6–7 §§.
 * Ren funktion – ingen DOM. Visar vilken nivå per sökt elevdag som ansökningsbeslutet motsvarar
 * (beviljat belopp ÷ sökta elevdagar) och jämför med Skolverkets schablon på 300 kr per elevdag.
 * Räknaren förutsäger inte utbetalningen: den bestäms i Skolverkets beslut efter begäran om utbetalning. */
(function (root) {
  'use strict';

  var SCHABLON = 300;          // kr per elevdag (Skolverket)
  var MAX_DAGAR = 10000000;    // elevdagar
  var MAX_BELOPP = 1000000000; // kr

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    var ok = heltal(v.sokta, 1, MAX_DAGAR) && heltal(v.beviljat, 0, MAX_BELOPP) && heltal(v.genomforda, 0, MAX_DAGAR);
    if (!ok) {
      return { fel: 'Ange hela tal: sökta elevdagar (minst 1), beviljat belopp i hela kronor och genomförda elevdagar (0 eller fler).' };
    }
    var fullSokt = v.sokta * SCHABLON;
    var fullGenomfort = v.genomforda * SCHABLON;

    if (v.beviljat === 0) {
      return {
        resultat: 0, enhet: 'kr per elevdag', blockerad: true,
        sammanfattning: 'Ansökan beviljades inte.',
        forklaring: 'För att kunna begära ut bidraget behöver ni ha skickat in en ansökan och fått den beviljad. Utan beviljad ansökan finns inget att begära ut för året.',
        rader: [{ etikett: 'Sökta elevdagar × 300 kr', varde: kr(fullSokt) }]
      };
    }

    var niva = v.beviljat / v.sokta;
    var andel = niva / SCHABLON;
    var varningar = [];
    if (v.genomforda > v.sokta) {
      varningar.push('Ni har genomfört fler elevdagar än ni sökte för. Enligt 7 § betalas bidraget ut för de elever som ni har ansökt om bidrag för. Hur Skolverket hanterar fler elevdagar framgår inte av förordningen eller Skolverkets sida. Fråga Skolverket innan ni räknar med pengarna.');
    }
    if (niva > SCHABLON) {
      varningar.push('Beviljat belopp är högre än 300 kr per sökt elevdag. Det kan bero på att Skolverket har godtagit särskilda skäl (6 §). Läs ert beslut.');
    }

    return {
      resultat: niva,
      enhet: 'kr per elevdag',
      sammanfattning: 'Ansökningsbeslutet motsvarar ' + fmt(andel * 100) + ' % av schablonen.',
      formel: kr(v.beviljat) + ' ÷ ' + fmt(v.sokta) + ' sökta elevdagar = ' + kr(niva) + ' per elevdag',
      forklaring: niva < SCHABLON
        ? 'Det är ' + fmt((1 - andel) * 100) + ' % lägre än schablonen på 300 kr. Skolverket anger att en sänkning räknas som en procentuell minskning för alla huvudmän.'
        : '',
      rader: [
        { etikett: 'Sökta elevdagar × 300 kr', varde: kr(fullSokt) },
        { etikett: 'Beviljat i ansökan', varde: kr(v.beviljat) },
        { etikett: 'Genomförda elevdagar × 300 kr', varde: kr(fullGenomfort) },
        { etikett: 'Genomförda elevdagar × beslutets nivå', varde: kr(Math.round(v.genomforda * niva)) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'lovskola-ansokan', berakna: berakna, SCHABLON: SCHABLON };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

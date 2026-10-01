/* Räknare: bidrag för lovskola utifrån elevdagar – förordning (2014:47) 6 § och Skolverkets schablon.
 * Ren funktion – ingen DOM. Formeln: antal elever × dagar per elev = elevdagar; elevdagar × belopp per elevdag.
 * Skolverket använder 300 kr per elevdag och kan sänka beloppet lika för alla om anslaget inte räcker.
 * Förordningens tak är 1 500 kr per elev och vecka. Särskilda skäl (högre belopp) räknas inte här. */
(function (root) {
  'use strict';

  var SCHABLON = 300;     // kr per elevdag (Skolverkets sida för lovskola 2026)
  var TAK_VECKA = 1500;   // högst per elev och vecka (6 §), om inte särskilda skäl finns
  var MAX_ELEVER = 100000;
  var MAX_DAGAR = 60;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  function berakna(v) {
    var ok = heltal(v.elever, 1, MAX_ELEVER) && heltal(v.dagar, 1, MAX_DAGAR) && tal(v.belopp, 0, SCHABLON);
    if (!ok) {
      return { fel: 'Ange ett helt antal elever (1–100 000), hela dagar per elev (1–60) och ett belopp per elevdag från 0 till 300 kr.' };
    }
    var elevdagar = v.elever * v.dagar;
    var ordElevdag = elevdagar === 1 ? ' elevdag' : ' elevdagar';
    var raderBas = [
      { etikett: 'Elevdagar', varde: fmt(elevdagar) },
      { etikett: 'Belopp per elevdag', varde: kr(v.belopp) }
    ];

    if (v.ak89 === true && v.obligKlar !== true) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Inget bidrag för de här eleverna ännu.',
        forklaring: 'Elever i årskurs 8–9 som har rätt till obligatorisk lovskola kan få lovskola med bidrag först när den obligatoriska lovskolan är genomförd. Det räcker inte att den är erbjuden eller planerad. Räkna de eleverna för sig när den är klar.',
        rader: raderBas
      };
    }

    var total = Math.round(elevdagar * v.belopp);
    var perVecka = v.belopp * 5;
    var sankning = (SCHABLON - v.belopp) / SCHABLON;

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever') + ' · ' + v.dagar + ' ' + (v.dagar === 1 ? 'dag' : 'dagar') + ' · ' + fmt(elevdagar) + ordElevdag,
      formel: fmt(v.elever) + ' × ' + v.dagar + ' = ' + fmt(elevdagar) + ordElevdag + ' × ' + kr(v.belopp) + ' = ' + kr(total),
      forklaring: sankning > 0
        ? 'Beloppet per elevdag är ' + fmt(sankning * 100) + ' % lägre än schablonen på 300 kr. Summan är avrundad till hela kronor.'
        : 'Summan är avrundad till hela kronor.',
      rader: raderBas.concat([
        { etikett: 'Bidrag per elev', varde: kr(Math.round(v.dagar * v.belopp)) },
        { etikett: 'Per elev och vecka med fem lovskoledagar', varde: kr(perVecka) + ' (tak ' + kr(TAK_VECKA) + ')' }
      ]),
      varningar: []
    };
  }

  var mod = { id: 'lovskola-belopp', berakna: berakna, SCHABLON: SCHABLON, TAK_VECKA: TAK_VECKA };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

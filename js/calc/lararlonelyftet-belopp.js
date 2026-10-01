/* Räknare: hur mycket av bidragsramen en lönesatsning tar i anspråk – förordning (2016:100).
 * Ren funktion – ingen DOM. Formeln (10–11 §§): löneökning per månad (heltidsbelopp) × antal lärare
 * × tjänstgöringsgrad × månader × 1,42 för sociala avgifter. Snittet 2 500–3 500 kr enligt 9 § räknas
 * som i Skolverkets räknehjälp: (Σ antal × löneökning) ÷ Σ antal, på heltidsbelopp. */
(function (root) {
  'use strict';

  var SOCIALA = 1.42;               // 10 §: löneökningen × 1,42 för sociala avgifter
  var SNITT_MIN = 2500;             // 9 §: i genomsnitt minst 2 500 kr per månad och lärare
  var SNITT_MAX = 3500;             // 9 §: och högst 3 500 kr
  var ANDEL_PER_BEGARAN = 0.5;      // SKOLFS 2016:61 4 §: högst 50 % av ramen per rekvisitionstillfälle

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf1 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 1 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function dec(n) { return nf4.format(n); }
  function kr(n) { return fmt(Math.round(n * 100) / 100) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function grupper(v) {
    var lista = [{ antal: v.antal, okning: v.okning }];
    if (v.tvaGrupper && v.antal2 > 0) lista.push({ antal: v.antal2, okning: v.okning2 });
    return lista;
  }

  function giltig(v) {
    var ok = heltal(v.ram, 0, 1e10) && heltal(v.antal, 1, 100000) && heltal(v.okning, 0, 50000) &&
      heltal(v.grad, 0, 100) && heltal(v.manader, 0, 12);
    if (ok && v.tvaGrupper) ok = heltal(v.antal2, 0, 100000) && heltal(v.okning2, 0, 50000);
    return ok;
  }

  function berakna(v) {
    if (!giltig(v)) {
      return { fel: 'Ange hela tal: bidragsram i kronor, antal lärare (1–100 000), löneökning 0–50 000 kr, tjänstgöringsgrad 0–100 % och 0–12 månader.' };
    }
    var g = grupper(v);
    var antal = g.reduce(function (s, x) { return s + x.antal; }, 0);
    var summaOkning = g.reduce(function (s, x) { return s + x.antal * x.okning; }, 0);   // kr per månad, heltid
    var snitt = summaOkning / antal;
    var grad = v.grad / 100;
    var lon = summaOkning * grad * v.manader;
    var total = Math.round(lon * SOCIALA * 100) / 100;   // hela ören
    var avgifter = total - lon;
    var andel = v.ram > 0 ? total / v.ram : null;
    var perLarare = snitt * grad * v.manader * SOCIALA;
    var rackerTill = v.ram > 0 && perLarare > 0 ? Math.floor(v.ram / perLarare + 1e-9) : null;

    var varningar = [];
    if (snitt < SNITT_MIN || snitt > SNITT_MAX) {
      varningar.push('Den genomsnittliga löneökningen är ' + kr(snitt) + '. Enligt 9 § ska den i genomsnitt vara minst 2 500 kr och högst 3 500 kr per månad och lärare.');
    }
    if (v.ram > 0 && total > v.ram) {
      varningar.push('Kostnaden är ' + kr(total - v.ram) + ' högre än bidragsramen. Ni kan inte begära ut mer än ramen.');
    }
    if (v.ram === 0) varningar.push('Med bidragsramen 0 kr kan ni inte begära ut något bidrag.');

    var forklaringGrupper = g.length > 1
      ? '(' + g.map(function (x) { return x.antal + ' × ' + fmt(x.okning); }).join(' + ') + ')'
      : '(' + g[0].antal + ' × ' + fmt(g[0].okning) + ')';

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: antal + ' lärare · snitt ' + kr(snitt) + ' i månaden · ' +
        fmt(v.grad) + ' % · ' + v.manader + ' ' + (v.manader === 1 ? 'månad' : 'månader'),
      formel: forklaringGrupper + ' × ' + dec(grad) + ' × ' + v.manader + ' mån × 1,42 = ' + kr(total),
      forklaring: 'Löneökningarna kostar ' + kr(lon) + '. Schablonen för sociala avgifter (42 %) lägger till ' + kr(avgifter) + '.',
      delar: [{ etikett: 'Löneökning', varde: lon }, { etikett: 'Sociala avgifter (42 %)', varde: avgifter }],
      rader: [
        { etikett: 'Genomsnittlig löneökning per månad (heltid)', varde: kr(snitt) + (snitt >= SNITT_MIN && snitt <= SNITT_MAX ? ' · inom 2 500–3 500 kr' : ' · utanför 2 500–3 500 kr') },
        { etikett: 'Andel av bidragsramen', varde: andel === null ? '–' : nf1.format(andel * 100) + ' %' },
        { etikett: 'Kvar av ramen', varde: v.ram > 0 ? kr(v.ram - total) : '–' },
        { etikett: 'Högst per begäran om utbetalning (50 %)', varde: kr(v.ram * ANDEL_PER_BEGARAN) }
      ],
      extra: [{
        rubrik: 'Så många lärare räcker ramen till',
        varde: rackerTill === null ? '–' : fmt(rackerTill) + ' lärare',
        text: 'Med samma genomsnittliga löneökning, tjänstgöringsgrad och tid som ovan. Ett helt antal, avrundat nedåt.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'lararlonelyftet-belopp', berakna: berakna, SOCIALA: SOCIALA, SNITT_MIN: SNITT_MIN, SNITT_MAX: SNITT_MAX };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

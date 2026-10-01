/* Räknare: vidarebetalning och redovisning av statsbidrag för gymnasial lärlingsutbildning.
 * Ren funktion – ingen DOM. Hela det beviljade bidraget ska betalas vidare till arbetsgivaren
 * (SKOLFS 2017:95 5 §). Det som inte har betalats ut ska betalas tillbaka efter redovisningen
 * (8 § förordning (2011:947) och Skolverkets anvisningar).
 * Formeln, för varje del för sig: att betala tillbaka = beviljat − utbetalt till arbetsgivaren (lägst 0). */
(function (root) {
  'use strict';

  var MAX_BELOPP = 1e10;
  var DELAR = [
    { nyckel: 'Arb', etikett: 'Till arbetsgivare' },
    { nyckel: 'Hand', etikett: 'Utbildad handledare' },
    { nyckel: 'Anst', etikett: 'Lärlingsanställning' }
  ];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf1 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 1 });
  function kr(n) { return nf.format(n) + ' kr'; }
  function belopp(v) { return typeof v === 'number' && isFinite(v) && v >= 0 && v <= MAX_BELOPP; }

  function berakna(v) {
    var ok = DELAR.every(function (d) { return belopp(v['beviljat' + d.nyckel]) && belopp(v['utbetalt' + d.nyckel]); });
    if (!ok) return { fel: 'Ange belopp i kronor från 0 och uppåt för varje del, både beviljat och utbetalt.' };

    var delar = DELAR.map(function (d) {
      var bev = v['beviljat' + d.nyckel];
      var utb = v['utbetalt' + d.nyckel];
      return { etikett: d.etikett, beviljat: bev, utbetalt: utb, tillbaka: Math.max(0, bev - utb), over: Math.max(0, utb - bev) };
    });
    var beviljat = delar.reduce(function (s, d) { return s + d.beviljat; }, 0);
    var tillbaka = delar.reduce(function (s, d) { return s + d.tillbaka; }, 0);
    var vidare = beviljat - tillbaka;
    var aktiva = delar.filter(function (d) { return d.beviljat > 0 || d.utbetalt > 0; });

    var varningar = [];
    if (delar.some(function (d) { return d.over > 0; })) {
      varningar.push('Ni har angett mer utbetalt än beviljat i någon del. Räknaren räknar inte med överskottet och använder det inte för att minska återbetalningen i en annan del.');
    }
    if (v.inomTreManader === false) {
      varningar.push('Bidrag som inte har betalats ut till arbetsgivaren inom tre månader från Skolverkets utbetalning kan krävas tillbaka, även om det har betalats senare. Räknaren tar inte med det i beloppet ovan.');
    }

    return {
      resultat: tillbaka,
      enhet: 'kr',
      sammanfattning: tillbaka === 0 ? 'Allt beviljat bidrag är betalt vidare' : 'Del av bidraget är inte betalt vidare',
      formel: (aktiva.length ? aktiva : delar.slice(0, 1)).map(function (d) {
        return '(' + nf.format(d.beviljat) + ' − ' + nf.format(Math.min(d.utbetalt, d.beviljat)) + ')';
      }).join(' + ') + ' = ' + kr(tillbaka),
      forklaring: 'Varje del räknas för sig: beviljat minus det som har betalats till arbetsgivaren.',
      delar: delar.map(function (d) { return { etikett: d.etikett, varde: d.tillbaka }; }),
      rader: delar.map(function (d) {
        return { etikett: d.etikett, varde: 'beviljat ' + kr(d.beviljat) + ' · utbetalt ' + kr(d.utbetalt) + ' · kvar ' + kr(d.tillbaka) };
      }),
      extra: [{
        rubrik: 'Betalt vidare till arbetsgivarna',
        varde: kr(vidare),
        text: beviljat > 0
          ? nf1.format(vidare / beviljat * 100) + ' % av det beviljade bidraget. Kravet är att allt betalas vidare.'
          : 'Inget beviljat bidrag har angetts.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'gymnasial-larlingsutbildning-redovisning', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

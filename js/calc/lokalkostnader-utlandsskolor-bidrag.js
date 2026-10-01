/* Räknare: statsbidrag till lokalkostnader för en svensk utlandsskola enligt 28 och 39 §§ förordning (1994:519).
 * Ren funktion – ingen DOM. Formeln: bidrag = 50 % av årskostnaden för de lokaler som behövs för utbildningen
 * av utlandssvenska elever (28 §). Kostnadsposterna följer 7 § i Skolverkets föreskrifter (SKOLFS 2008:9).
 * Bidraget betalas ut med en fjärdedel i mars, juni, september och december på grundval av de beräknade
 * kostnaderna och justeras i mars året efter mot de faktiska kostnaderna (39 §). */
(function (root) {
  'use strict';

  var ANDEL = 0.5;          // 50 procent (28 §)
  var MAX_KR = 1000000000;  // högst 1 miljard kr per post

  var POSTER = [
    { id: 'hyra', etikett: 'Hyra' },
    { id: 'kapital', etikett: 'Ränta och avskrivning' },
    { id: 'drift', etikett: 'Drift' },
    { id: 'fastighet', etikett: 'Fastighetsskatt och försäkring' },
    { id: 'underhall', etikett: 'Löpande underhåll' },
    { id: 'ovrigt', etikett: 'Arrende och vakthållning' }
  ];

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function belopp(v) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= 0 && v <= MAX_KR; }
  function halva(n) { return Math.round(n * ANDEL); }

  function berakna(v) {
    var ok = POSTER.every(function (p) { return belopp(v[p.id]); });
    if (!ok) {
      return { fel: 'Ange kostnaderna i hela kronor, från 0 till 1 000 000 000 kr per rad.' };
    }
    if (v.redovisning === true && !belopp(v.faktiska)) {
      return { fel: 'Ange de faktiska kostnaderna i hela kronor, från 0 till 1 000 000 000 kr.' };
    }

    var summa = POSTER.reduce(function (s, p) { return s + v[p.id]; }, 0);
    if (summa === 0) {
      return { fel: 'Ange minst en lokalkostnad som är större än 0 kr.' };
    }
    var bidrag = halva(summa);
    var kvartal = Math.round(bidrag / 4);

    var rader = POSTER.filter(function (p) { return v[p.id] > 0; })
      .map(function (p) { return { etikett: p.etikett + ' (kostnad)', varde: kr(v[p.id]) }; });
    rader.push({ etikett: 'Beräknade kostnader totalt', varde: kr(summa) });
    rader.push({ etikett: 'Bidrag, 50 %', varde: kr(bidrag) });
    rader.push({ etikett: 'Per utbetalning (mars, juni, september, december)', varde: kr(kvartal) });

    var extra = [];
    var varningar = [];
    var forklaring = 'Bidraget betalas ut i fyra lika delar på grundval av de beräknade kostnaderna. I mars året efter justeras det mot de faktiska kostnaderna.';

    if (v.redovisning === true) {
      var slutligt = halva(v.faktiska);
      var skillnad = slutligt - bidrag;
      rader.push({ etikett: 'Faktiska kostnader', varde: kr(v.faktiska) });
      rader.push({ etikett: 'Bidrag efter justering, 50 %', varde: kr(slutligt) });
      extra.push({
        rubrik: skillnad > 0 ? 'Justering uppåt' : (skillnad < 0 ? 'Justering nedåt' : 'Ingen justering'),
        varde: (skillnad > 0 ? '+' : (skillnad < 0 ? '−' : '')) + kr(Math.abs(skillnad)),
        text: skillnad === 0
          ? 'De faktiska kostnaderna blev lika stora som de beräknade.'
          : 'Skillnaden mellan 50 % av de faktiska kostnaderna och det bidrag som betalades ut. Justeringen görs i mars året efter bidragsåret.'
      });
      if (skillnad > 0) {
        varningar.push('Högre faktiska kostnader ger bara mer bidrag om Skolverket godtar dem. Oväntat löpande underhåll tar ni med i redovisningen. Ombyggnad och förbättring ger inget bidrag.');
      }
      forklaring = 'Beviljat bidrag: 50 % × ' + kr(summa) + ' = ' + kr(bidrag) + '. Efter redovisningen: 50 % × ' + kr(v.faktiska) + ' = ' + kr(slutligt) + '.';
    }

    return {
      resultat: bidrag,
      enhet: 'kr',
      sammanfattning: 'Beräknade lokalkostnader ' + kr(summa) + ' · 50 % i bidrag',
      formel: '50 % × ' + kr(summa) + ' = ' + kr(bidrag),
      forklaring: forklaring,
      rader: rader,
      delar: POSTER.filter(function (p) { return v[p.id] > 0; })
        .map(function (p) { return { etikett: p.etikett, varde: halva(v[p.id]) }; }),
      extra: extra,
      varningar: varningar
    };
  }

  var mod = { id: 'lokalkostnader-utlandsskolor-bidrag', berakna: berakna, ANDEL: ANDEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

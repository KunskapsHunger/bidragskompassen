/* Räknare: illustrerad bidragsram enligt 4 § förordning (2018:49). Ren funktion – ingen DOM.
 * Ramen bestäms proportionellt utifrån huvudmannens indexvärde och elevantal (4 § andra stycket).
 * Skolverket (rapport 2025, fotnot 10): dubbelt så många elever eller dubbelt så högt index ger dubbelt så stor ram.
 * Alltså: ram = medel × (elever × index) ÷ Σ(elever × index). Övriga huvudmän sammanfattas som ett elevantal och
 * ett elevviktat genomsnittsindex – en förenkling som ger samma summa som att räkna huvudman för huvudman.
 * Elevantal = genomsnitt av tre läsår, eller av den kortare tid huvudmannen har haft verksamhet (4 § tredje stycket).
 * Förordningen har ingen lägsta nivå och ingen avrundningsregel; resultatet visas i hela kronor som i Skolverkets beslut. */
(function (root) {
  'use strict';

  var LASAR = { tre: 3, tva: 2, ett: 1 };

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  var nf0 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf4 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 4 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return nf0.format(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }

  /** Elevantal för de läsår som räknas, äldst först. */
  function elevlista(v, antal) {
    if (antal === 3) return [v.elever1, v.elever2, v.elever3];
    if (antal === 2) return [v.elever2, v.elever3];
    return [v.elever3];
  }

  function berakna(v) {
    var lasar = Object.prototype.hasOwnProperty.call(LASAR, v.lasar) ? v.lasar : 'tre';
    var antal = LASAR[lasar];
    var elever = elevlista(v, antal);
    var giltiga = heltal(v.medel, 1, 1e12) &&
      elever.every(function (e) { return heltal(e, 0, 1e7); }) &&
      tal(v.index, 0.01, 1000) && tal(v.ovrigaElever, 0, 1e8) && tal(v.ovrigtIndex, 0.01, 1000);
    if (!giltiga) {
      return { fel: 'Ange pengar i hela kronor (högst 1 000 miljarder), elevantal i heltal (0–10 miljoner), övriga huvudmäns elever (0–100 miljoner) och index över 0 (högst 1 000).' };
    }
    if (elever[elever.length - 1] === 0) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: 'Ingen ram med de här förutsättningarna.',
        forklaring: 'Enligt 4 § beslutas ingen bidragsram om huvudmannen inte hade några elever läsåret närmast före bidragsåret.'
      };
    }
    var summa = elever.reduce(function (a, b) { return a + b; }, 0);
    var snitt = summa / antal;
    var vikt = snitt * v.index;
    var ovrigVikt = v.ovrigaElever * v.ovrigtIndex;
    var allVikt = vikt + ovrigVikt;
    var andel = vikt / allVikt;
    var ram = v.medel * andel;
    var total = Math.round(ram);
    var perElev = ram / snitt;
    var ovrigPerElev = v.medel * v.ovrigtIndex / allVikt;

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Exempel med ' + fmt(snitt) + ' elever i genomsnitt och index ' + fmt(v.index) + '.',
      formel: fmt(v.medel) + ' × ' + fmt(vikt) + ' ÷ ' + fmt(allVikt) + ' = ' + kr(total),
      forklaring: 'Viktat elevantal: ' + fmt(snitt) + ' × ' + fmt(v.index) + ' = ' + fmt(vikt) +
        '. Övriga huvudmän: ' + fmt(v.ovrigaElever) + ' × ' + fmt(v.ovrigtIndex) + ' = ' + fmt(ovrigVikt) +
        '. Beloppet är avrundat till hela kronor.',
      rader: [
        { etikett: 'Genomsnittligt elevantal (' + antal + ' läsår)', varde: fmt(snitt) },
        { etikett: 'Huvudmannens andel av pengarna', varde: nf4.format(andel * 100) + ' %' },
        { etikett: 'Bidrag per elev hos huvudmannen', varde: kr(perElev) },
        { etikett: 'Bidrag per elev hos övriga, i genomsnitt', varde: kr(ovrigPerElev) }
      ],
      varningar: antal < 3
        ? ['Huvudmannen har haft verksamhet kortare tid än tre läsår. Då räknas genomsnittet på den tid verksamheten har funnits (4 §).']
        : []
    };
  }

  var mod = { id: 'starkt-kunskapsutveckling-ram', berakna: berakna, LASAR: LASAR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

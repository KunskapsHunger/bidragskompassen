/* Räknare: egen finansiering och belopp att begära ut – statsbidrag för inköp av läroböcker och lärarhandledningar.
 * Ren funktion – ingen DOM.
 * Bygger på förordning (2023:86) 6 § (huvudmannen ska själv finansiera läroböcker och lärarhandledningar motsvarande
 * en genomsnittlig kostnad per elev de senaste tre åren), 7–9 §§ (bidragsramen) och Skolverkets räkneexempel för 2026:
 *   Snittkostnad per elev = kostnader 2023–2025 ÷ antal elever 2023–2025 (summan av de tre åren)
 *   Egen finansiering 2026 = snittkostnad per elev × antal elever 2026
 *   Kan begäras ut = minsta av (kostnader 2026 − egen finansiering) och bidragsramen, aldrig under 0.
 * Skolverkets exempel: 1 500 000 kr ÷ 3 000 elever = 500 kr per elev; 1 200 elever 2026 ger 600 000 kr i egen finansiering.
 * Avrundning till hela kronor är räknarens antagande – förordningen anger ingen avrundning. */
(function (root) {
  'use strict';

  var MAX_KR = 1e10;
  var MAX_ELEVER = 1e7;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function validera(v) {
    if (!heltal(v.ram, 1, MAX_KR)) return 'Ange bidragsramen i hela kronor, minst 1 kr.';
    if (!heltal(v.kostnaderTidigare, 0, MAX_KR) || !heltal(v.kostnader, 0, MAX_KR)) return 'Ange kostnaderna i hela kronor, från 0 kr och uppåt.';
    if (!heltal(v.eleverTidigare, 1, MAX_ELEVER)) return 'Ange elever för de tidigare åren som ett heltal, minst 1. Utan elever året före bidragsåret får man ingen bidragsram (9 §).';
    if (!heltal(v.elever, 0, MAX_ELEVER)) return 'Ange antalet elever 2026 som ett heltal från 0 och uppåt.';
    return '';
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var snitt = v.kostnaderTidigare / v.eleverTidigare;
    var egen = Math.round(v.kostnaderTidigare * v.elever / v.eleverTidigare);
    var over = Math.max(0, v.kostnader - egen);
    var begar = Math.min(over, v.ram);
    var blockerad = over === 0;

    var rader = [
      { etikett: 'Snittkostnad per elev', varde: nf2.format(snitt) + ' kr' },
      { etikett: 'Egen finansiering 2026', varde: kr(egen) },
      { etikett: 'Kostnader 2026', varde: kr(v.kostnader) },
      { etikett: 'Kostnader över den egna nivån', varde: kr(over) },
      { etikett: 'Bidragsram', varde: kr(v.ram) }
    ];
    if (over > v.ram) rader.push({ etikett: 'Kostnader över ramen', varde: kr(over - v.ram) });
    else if (!blockerad) rader.push({ etikett: 'Del av ramen som inte används', varde: kr(v.ram - begar) });

    var varningar = [];
    if (blockerad) {
      varningar.push('Kostnaderna för 2026 är inte högre än den egna finansieringen. Då finns ingen rätt att begära ut bidraget. Köper ni mer under året kan det ändras.');
    }
    if (over > v.ram) {
      varningar.push('Kostnaderna över den egna nivån är större än ramen. Ni kan begära ut högst ramen – resten betalar ni själva.');
    }
    if (v.kostnaderTidigare === 0) {
      varningar.push('Snittkostnaden blir 0 kr. Kontrollera att alla kostnader för läroböcker och lärarhandledningar 2023–2025 är med, utom sådant som betalats med statsbidrag.');
    }

    return {
      resultat: begar,
      enhet: 'kr',
      blockerad: blockerad,
      sammanfattning: blockerad ? 'Ingen ökning – inget att begära ut.' : (over > v.ram ? 'Ramen sätter taket.' : 'Ökningen ryms i ramen.'),
      formel: fmt(v.kostnader) + ' − ' + fmt(egen) + ' = ' + kr(over) +
        (blockerad ? '' : (over > v.ram ? ' → högst ramen ' + kr(v.ram) : ' (ryms i ramen ' + kr(v.ram) + ')')),
      forklaring: 'Egen finansiering: ' + fmt(v.kostnaderTidigare) + ' ÷ ' + fmt(v.eleverTidigare) + ' elever = ' + nf2.format(snitt) +
        ' kr per elev × ' + fmt(v.elever) + ' elever = ' + kr(egen) + ' (avrundat till hela kronor).' +
        (blockerad ? ' Kostnaderna för 2026 når inte över den nivån.' : ''),
      delar: [
        { etikett: 'Egen finansiering', varde: Math.min(egen, v.kostnader) },
        { etikett: 'Kan begäras ut', varde: begar }
      ],
      rader: rader,
      varningar: varningar
    };
  }

  var mod = { id: 'larobocker-lararhandledningar-begaran', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

/* Räknare: vad ni får behålla och vad som kan krävas tillbaka vid redovisningen av språkstärkande insatser
 * under skollov (19–20 §§ förordning (2025:49)). Ren funktion – ingen DOM.
 * Formeln: behålla = min(beviljat belopp, godkända merkostnader); återkrav = beviljat − behålla.
 * Regeln kommer från Skolverkets sida för 2026 ("det är de faktiska kostnaderna … som ni får behålla" och
 * "ni kan inte få mer bidrag än det ursprungligt beviljade beloppet"). Skolverkets beslutslista för
 * redovisningen 2025 följer samma räkning: återkrav = beviljat belopp − godkänt belopp. */
(function (root) {
  'use strict';

  var MAX_BELOPP = 1000000000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.beviljat, 0, MAX_BELOPP) || !heltal(v.kostnader, 0, MAX_BELOPP)) {
      return { fel: 'Ange belopp i hela kronor mellan 0 och 1 000 000 000.' };
    }
    if (v.beviljat === 0) {
      return { fel: 'Ange det belopp ni har beviljats. Utan beviljat bidrag finns inget att redovisa.' };
    }

    var behalla = Math.min(v.beviljat, v.kostnader);
    var aterkrav = v.beviljat - behalla;
    var andel = Math.round((behalla / v.beviljat) * 1000) / 10;

    var varningar = [];
    if (v.kostnader > v.beviljat) {
      varningar.push('Era kostnader är högre än det beviljade beloppet. Ni kan inte få mer än det beviljade beloppet, även om fler elever har deltagit.');
    }
    if (aterkrav > 0 && behalla === 0) {
      varningar.push('Utan godkända merkostnader ska hela bidraget betalas tillbaka.');
    }

    var forklaring = aterkrav === 0
      ? 'Merkostnaderna täcker hela det beviljade beloppet. Ni behåller allt.'
      : 'Ni behåller ' + kr(behalla) + ', alltså ' + String(andel).replace('.', ',') + ' % av det beviljade beloppet.';

    return {
      resultat: aterkrav,
      enhet: 'kr',
      sammanfattning: 'Beviljat ' + kr(v.beviljat) + ' · merkostnader ' + kr(v.kostnader),
      formel: fmt(v.beviljat) + ' − ' + fmt(behalla) + ' = ' + kr(aterkrav),
      forklaring: forklaring,
      rader: [
        { etikett: 'Beviljat belopp', varde: kr(v.beviljat) },
        { etikett: 'Merkostnader', varde: kr(v.kostnader) },
        { etikett: 'Får behållas', varde: kr(behalla) },
        { etikett: 'Kan krävas tillbaka', varde: kr(aterkrav) }
      ],
      delar: [{ etikett: 'Behålls', varde: behalla }, { etikett: 'Betalas tillbaka', varde: aterkrav }],
      varningar: varningar
    };
  }

  var mod = { id: 'sprakstarkande-insatser-skollov-redovisning', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

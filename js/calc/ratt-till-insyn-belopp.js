/* Räknare: illustrerat belopp per huvudman för statsbidraget för införande av rätt till insyn 2026.
 * Ren funktion – ingen DOM. Skolverket fördelar 88 000 000 kr med samma belopp till alla huvudmän som beviljas
 * (Skolverkets sida, senast uppdaterad 8 september 2026). Beloppet = 88 000 000 kr ÷ antal beviljade huvudmän.
 * Skolverkets lista över huvudmän som kan ansöka (xlsx, 2026) har 1 848 huvudmän. Hur Skolverket avrundar anges inte;
 * räknaren avrundar nedåt till hela kronor så att summan aldrig överstiger 88 miljoner kr. */
(function (root) {
  'use strict';

  var MEDEL = 88000000;
  var PA_LISTAN = 1848;
  var MAX_ANTAL = 10000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function berakna(v) {
    var antal = v.antal;
    if (!(typeof antal === 'number' && isFinite(antal) && Math.floor(antal) === antal && antal >= 1 && antal <= MAX_ANTAL)) {
      return { fel: 'Ange antal beviljade huvudmän som ett heltal mellan 1 och 10 000.' };
    }
    var belopp = Math.floor(MEDEL / antal);
    var varningar = [];
    if (antal > PA_LISTAN) {
      varningar.push('Skolverkets lista har ' + fmt(PA_LISTAN) + ' huvudmän som kan ansöka. Fler än så kan bli aktuellt bara om koncerntillhörigheten har ändrats.');
    }
    return {
      resultat: belopp,
      enhet: 'kr',
      sammanfattning: 'Om ' + fmt(antal) + ' ' + (antal === 1 ? 'huvudman' : 'huvudmän') + ' beviljas',
      formel: fmt(MEDEL) + ' ÷ ' + fmt(antal) + ' = ' + kr(belopp),
      forklaring: 'Alla som beviljas får samma belopp, oavsett hur många barn eller elever de har. Beloppet är avrundat nedåt till hela kronor.',
      rader: [
        { etikett: 'Pengar att fördela 2026', varde: kr(MEDEL) },
        { etikett: 'Huvudmän som beviljas', varde: fmt(antal) },
        { etikett: 'Om alla ' + fmt(PA_LISTAN) + ' på listan beviljas', varde: kr(Math.floor(MEDEL / PA_LISTAN)) }
      ],
      varningar: varningar
    };
  }

  var mod = { id: 'ratt-till-insyn-belopp', berakna: berakna, MEDEL: MEDEL, PA_LISTAN: PA_LISTAN };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

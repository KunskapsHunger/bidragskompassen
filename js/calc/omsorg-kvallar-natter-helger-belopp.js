/* Räknare: uppskattat bidrag för omsorg på kvällar, nätter och helger, förordning (2012:994).
 * Ren funktion – ingen DOM.
 * 2 §: bidrag för omsorg som erbjuds minst 30 timmar per barn och månad. Skolverket räknar "erbjudna platser":
 * för varje månad antalet barn som erbjudits plats om minst 30 timmar. Platserna summeras över månaderna.
 * Skolverket fördelar enligt principen att kommunerna som ansökt delar på pengarna. Förordningen anger inget belopp.
 * Beloppet per plats för 2026 är räknat ur Skolverkets beslutsbilaga (2026-02-27, dnr 2025:0016201):
 * 78 969 320 kr ÷ 68 077 erbjudna platser januari–december = 1 160 kr per plats. Räknaren är därför en uppskattning. */
(function (root) {
  'use strict';

  var PER_PLATS_2026 = 1160;
  var MAX_BARN = 100000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!heltal(v.barn, 0, MAX_BARN)) return { fel: 'Ange antal barn per månad som ett heltal från 0 till 100 000.' };
    if (!heltal(v.manader, 0, 12)) return { fel: 'Ange antal månader som ett heltal från 0 till 12.' };
    if (!heltal(v.perPlats, 1, 100000)) return { fel: 'Ange beloppet per plats i hela kronor, från 1 till 100 000 kr.' };

    var platser = v.barn * v.manader;
    var total = platser * v.perPlats;
    var varningar = [];
    if (v.perPlats !== PER_PLATS_2026) {
      varningar.push('Ni räknar med ett annat belopp per plats än det som gällde i Skolverkets beslut för 2026 (' + kr(PER_PLATS_2026) + ').');
    }

    var ut = {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.barn) + ' barn i ' + fmt(v.manader) + ' ' + (v.manader === 1 ? 'månad' : 'månader') + ' · ' + fmt(platser) + ' erbjudna platser',
      formel: fmt(v.barn) + ' × ' + fmt(v.manader) + ' × ' + kr(v.perPlats) + ' = ' + kr(total),
      forklaring: 'Antal barn per månad × antal månader = erbjudna platser. Varje plats är minst 30 timmar under en månad.',
      rader: [
        { etikett: 'Erbjudna platser', varde: fmt(platser) },
        { etikett: 'Belopp per plats', varde: kr(v.perPlats) },
        { etikett: 'Per barn och år, om platsen erbjuds alla 12 månader', varde: kr(v.perPlats * 12) }
      ],
      varningar: varningar
    };
    if (platser === 0) {
      ut.blockerad = true;
      ut.forklaring = 'Inga erbjudna platser. Bidrag lämnas bara för omsorg som erbjuds minst 30 timmar per barn och månad (2 §).';
    }
    return ut;
  }

  var mod = { id: 'omsorg-kvallar-natter-helger-belopp', berakna: berakna, PER_PLATS_2026: PER_PLATS_2026 };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

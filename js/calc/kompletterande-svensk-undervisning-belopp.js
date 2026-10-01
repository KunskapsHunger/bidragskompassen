/* Räknare: statsbidrag för kompletterande svensk undervisning enligt 24 § första stycket 3 och 33 § förordning (1994:519).
 * Ren funktion – ingen DOM. Formeln: belopp per elev × antalet elever som deltar den 15 oktober året före bidragsåret.
 * Beloppet per elev fastställs av regeringen för varje år: 4 510 kr för bidragsåret 2026 (SKOLFS 2025:456) och
 * 4 280 kr för 2025 (SKOLFS 2024:667). En huvudman för enbart kompletterande svensk undervisning måste ha minst
 * fem elever (33 §). Bidraget betalas ut med hälften i juni och hälften i december (40 §). */
(function (root) {
  'use strict';

  var BELOPP = { '2026': 4510, '2025': 4280 };  // kr per elev och bidragsår
  var MIN_FORENING = 5;                          // minst fem elever (33 §)
  var MAX_ELEVER = 100000;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (v.huvudman !== 'forening' && v.huvudman !== 'utlandsskola') {
      return { fel: 'Välj vilken sorts huvudman ni är.' };
    }
    if (!Object.prototype.hasOwnProperty.call(BELOPP, v.ar)) {
      return { fel: 'Välj ett bidragsår som räknaren har belopp för.' };
    }
    if (!heltal(v.elever, 0, MAX_ELEVER)) {
      return { fel: 'Ange antalet elever som ett heltal från 0 till 100 000.' };
    }
    var perElev = BELOPP[v.ar];
    var forening = v.huvudman === 'forening';
    var minsta = forening ? MIN_FORENING : 1;

    if (v.elever < minsta) {
      return {
        resultat: 0, enhet: 'kr', blockerad: true,
        sammanfattning: fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever') + ' den 15 oktober · inget bidrag',
        forklaring: forening
          ? 'En huvudman för enbart kompletterande svensk undervisning får bidrag först när minst fem elever deltar (33 §).'
          : 'Minst en elev som uppfyller kraven behöver delta i undervisningen.'
      };
    }

    var total = perElev * v.elever;
    var halv = total / 2;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + (v.elever === 1 ? 'elev' : 'elever') + ' den 15 oktober · ' + kr(perElev) + ' per elev (' + v.ar + ')',
      formel: fmt(perElev) + ' × ' + fmt(v.elever) + ' = ' + kr(total),
      forklaring: 'Beloppet per elev gäller bidragsåret ' + v.ar + '. Eleverna räknas den 15 oktober året före.',
      rader: [
        { etikett: 'Belopp per elev', varde: kr(perElev) },
        { etikett: 'Elever den 15 oktober', varde: fmt(v.elever) },
        { etikett: 'Utbetalning i juni', varde: kr(Math.floor(halv)) },
        { etikett: 'Utbetalning i december', varde: kr(Math.ceil(halv)) }
      ],
      extra: [{
        rubrik: forening ? 'Pengarna får gå till' : 'Pengarna används till',
        varde: forening ? 'Lärarlöner och material' : 'Skolans verksamhet',
        text: forening
          ? 'Bidraget till en förening eller annan huvudman för enbart kompletterande svenska gäller lärarlöner och godtagbart undervisningsmaterial (33 §).'
          : 'För en svensk utlandsskola är bidraget ett allmänt stöd. Skolan bestämmer själv hur det används (23 §).'
      }],
      varningar: forening && v.elever === MIN_FORENING
        ? ['Ni ligger precis på gränsen. Blir det färre än fem elever den 15 oktober får ni inget bidrag för året.']
        : []
    };
  }

  var mod = { id: 'kompletterande-svensk-undervisning-belopp', berakna: berakna, BELOPP: BELOPP, MIN_FORENING: MIN_FORENING };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

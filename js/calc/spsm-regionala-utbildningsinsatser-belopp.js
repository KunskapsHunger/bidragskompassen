/* Räknare: högsta bidrag för regionala utbildningsinsatser enligt förordning (1991:931).
 * Ren funktion – ingen DOM. Beloppen kommer från SPSM:s "Information om bidraget Regionala utbildningsinsatser",
 * bidragsår 2027 (2026-08-27, dnr 6 STA-2026/311):
 *   - upp till 25 000 kr per elev och termin; för en hel termin ska eleven ha deltagit minst 30 kalenderdagar,
 *   - vid ett begränsat antal tillfällen: högst 750 kr per tillfälle och elev, upp till 25 000 kr per termin.
 *     En dag räknas som ett tillfälle.
 * Bara elever som är folkbokförda i en annan kommun än den där utbildningen bedrivs räknas (SPSM:s tolkning). */
(function (root) {
  'use strict';

  var PER_TERMIN = 25000;      // kr per elev och termin (högst)
  var PER_TILLFALLE = 750;     // kr per tillfälle och elev (högst)
  var MAX_ELEVER = 100000;
  var MAX_TILLFALLEN = 200;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function elevOrd(n) { return n === 1 ? 'elev' : 'elever'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function helaTerminer(v) {
    if (!heltal(v.elevVt, 0, MAX_ELEVER) || !heltal(v.elevHt, 0, MAX_ELEVER)) {
      return { fel: 'Ange antal elever som hela tal mellan 0 och 100 000.' };
    }
    var elevterminer = v.elevVt + v.elevHt;
    if (elevterminer === 0) return { fel: 'Ange minst en elev under någon av terminerna.' };
    var vt = PER_TERMIN * v.elevVt;
    var ht = PER_TERMIN * v.elevHt;
    var total = vt + ht;
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(elevterminer) + ' elevterminer · hela terminer',
      formel: fmt(PER_TERMIN) + ' × (' + fmt(v.elevVt) + ' + ' + fmt(v.elevHt) + ') = ' + kr(total),
      forklaring: 'En elevtermin är en elev som deltar en hel termin, minst 30 kalenderdagar.',
      rader: [
        { etikett: 'Vårterminen, ' + fmt(v.elevVt) + ' ' + elevOrd(v.elevVt), varde: kr(vt) },
        { etikett: 'Höstterminen, ' + fmt(v.elevHt) + ' ' + elevOrd(v.elevHt), varde: kr(ht) },
        { etikett: 'Högsta bidrag för bidragsåret', varde: kr(total) }
      ],
      delar: [{ etikett: 'Vårterminen', varde: vt }, { etikett: 'Höstterminen', varde: ht }],
      extra: [{ rubrik: 'Per elev och termin', varde: kr(PER_TERMIN), text: 'Det högsta beloppet. SPSM kan bevilja mindre.' }],
      varningar: []
    };
  }

  function tillfallen(v) {
    if (!heltal(v.elever, 0, MAX_ELEVER)) return { fel: 'Ange antal elever som ett helt tal mellan 0 och 100 000.' };
    if (!heltal(v.tillfallen, 1, MAX_TILLFALLEN)) return { fel: 'Ange antal tillfällen som ett helt tal mellan 1 och 200.' };
    if (!heltal(v.terminer, 1, 2)) return { fel: 'Ange 1 eller 2 terminer.' };
    if (v.elever === 0) return { fel: 'Ange minst en elev.' };
    var obegransat = PER_TILLFALLE * v.tillfallen;
    var perElevTermin = Math.min(obegransat, PER_TERMIN);
    var total = perElevTermin * v.elever * v.terminer;
    var takNatt = obegransat > PER_TERMIN;
    var varningar = [];
    if (takNatt) {
      varningar.push(fmt(v.tillfallen) + ' tillfällen × 750 kr blir ' + kr(obegransat) + '. Bidraget stannar vid 25 000 kr per elev och termin.');
    }
    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.elever) + ' ' + elevOrd(v.elever) + ' · ' + fmt(v.tillfallen) + ' tillfällen per termin · ' + fmt(v.terminer) + (v.terminer === 1 ? ' termin' : ' terminer'),
      formel: 'min(' + fmt(PER_TILLFALLE) + ' × ' + fmt(v.tillfallen) + ', ' + fmt(PER_TERMIN) + ') × ' + fmt(v.elever) + ' × ' + fmt(v.terminer) + ' = ' + kr(total),
      forklaring: takNatt
        ? 'Taket på 25 000 kr per elev och termin avgör beloppet.'
        : 'Varje tillfälle ger högst 750 kr per elev. En dag räknas som ett tillfälle.',
      rader: [
        { etikett: 'Per elev och termin', varde: kr(perElevTermin) },
        { etikett: 'Elever × terminer', varde: fmt(v.elever) + ' × ' + fmt(v.terminer) },
        { etikett: 'Högsta bidrag för bidragsåret', varde: kr(total) }
      ],
      extra: [{ rubrik: 'Per elev och tillfälle', varde: kr(PER_TILLFALLE), text: 'Högst 25 000 kr per elev och termin. Taket nås vid 34 tillfällen.' }],
      varningar: varningar
    };
  }

  function berakna(v) {
    if (v.modell === 'terminer') return helaTerminer(v);
    if (v.modell === 'tillfallen') return tillfallen(v);
    return { fel: 'Välj hur insatsen är upplagd.' };
  }

  var mod = { id: 'spsm-regionala-utbildningsinsatser-belopp', berakna: berakna, PER_TERMIN: PER_TERMIN, PER_TILLFALLE: PER_TILLFALLE };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

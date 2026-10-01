/* Räknare: högsta bidrag för Atlas praktik enligt UHR:s allmänna villkor 2026, § 4 och § 7.
 * Ren funktion – ingen DOM. Schabloner per elev: 18 000 kr (Europa utanför EU/EES) eller 22 000 kr (övriga världen)
 * för minst tre veckors APL, plus 2 000 kr för varje vecka efter tre veckor, högst 12 extra veckor (alltså högst 15 veckor).
 * Anpassad gymnasieskola: minst två veckor, men aldrig mer än grundschablonen för tre veckor.
 * Medföljande yrkeslärare: 20 000 kr, högst en per projektansökan.
 * Extra medel för stödperson till elev i behov av extra stöd söks separat och räknas inte här. */
(function (root) {
  'use strict';

  var GRUND = { europa: 18000, varlden: 22000 };   // per elev, minst tre veckor (§ 7)
  var EXTRA_VECKA = 2000;                          // per vecka efter tre veckor (§ 7)
  var GRUNDVECKOR = 3;
  var MAX_VECKOR = 15;                             // 3 + högst 12 extra veckor (§ 4)
  var MIN_VECKOR = 3;
  var MIN_VECKOR_ANPASSAD = 2;
  var LARARE = 20000;                              // medföljande yrkeslärare, högst en per projekt (§ 7)
  var MAX_ELEVER = 500;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }
  function elevOrd(n) { return n === 1 ? 'elev' : 'elever'; }
  function veckOrd(n) { return n === 1 ? 'vecka' : 'veckor'; }

  /** Belopp per elev för en grupp – samma region och samma längd för alla i gruppen. */
  function perElev(region, veckor) {
    var extra = Math.max(0, veckor - GRUNDVECKOR);
    return { grund: GRUND[region], extraVeckor: extra, summa: GRUND[region] + EXTRA_VECKA * extra };
  }

  function grupp(region, elever, veckor) {
    if (elever === 0) return { elever: 0, veckor: veckor, grund: 0, extraVeckor: 0, perElev: 0, summa: 0 };
    var p = perElev(region, veckor);
    return { elever: elever, veckor: veckor, grund: p.grund, extraVeckor: p.extraVeckor, perElev: p.summa, summa: p.summa * elever };
  }

  function uppstallning(namn, g) {
    return namn + ': (' + fmt(g.grund) + ' + ' + fmt(EXTRA_VECKA) + ' × ' + fmt(g.extraVeckor) + ') × ' + fmt(g.elever) + ' ' + elevOrd(g.elever) + ' = ' + kr(g.summa) + '.';
  }

  function berakna(v) {
    if (!heltal(v.elevEuropa, 0, MAX_ELEVER) || !heltal(v.elevVarlden, 0, MAX_ELEVER)) {
      return { fel: 'Ange antal elever som hela tal mellan 0 och ' + fmt(MAX_ELEVER) + '.' };
    }
    if (v.elevEuropa + v.elevVarlden === 0) {
      return { fel: 'Ange minst en elev. Bidrag för medföljande lärare ges bara när elever gör APL utomlands.' };
    }
    var anpassad = v.anpassad === true;
    var minVeckor = anpassad ? MIN_VECKOR_ANPASSAD : MIN_VECKOR;
    var veckoFel = 'APL-perioden ska vara minst ' + minVeckor + ' och högst ' + MAX_VECKOR + ' veckor' +
      (anpassad ? '.' : '. Två veckor räcker bara i anpassad gymnasieskola.');
    if (v.elevEuropa > 0 && !heltal(v.veckorEuropa, minVeckor, MAX_VECKOR)) return { fel: veckoFel };
    if (v.elevVarlden > 0 && !heltal(v.veckorVarlden, minVeckor, MAX_VECKOR)) return { fel: veckoFel };

    var eu = grupp('europa', v.elevEuropa, v.veckorEuropa);
    var vl = grupp('varlden', v.elevVarlden, v.veckorVarlden);
    var larare = v.larare === true ? LARARE : 0;
    var elever = eu.elever + vl.elever;
    var total = eu.summa + vl.summa + larare;

    var delarFormel = [];
    if (eu.elever > 0) delarFormel.push('(' + fmt(eu.grund) + ' + ' + fmt(EXTRA_VECKA) + ' × ' + fmt(eu.extraVeckor) + ') × ' + fmt(eu.elever));
    if (vl.elever > 0) delarFormel.push('(' + fmt(vl.grund) + ' + ' + fmt(EXTRA_VECKA) + ' × ' + fmt(vl.extraVeckor) + ') × ' + fmt(vl.elever));
    if (larare) delarFormel.push(fmt(larare));

    var forklaring = [];
    if (eu.elever > 0) forklaring.push(uppstallning('Europa utanför EU/EES', eu));
    if (vl.elever > 0) forklaring.push(uppstallning('Övriga världen', vl));

    var varningar = [];
    if (anpassad && ((eu.elever > 0 && eu.veckor === 2) || (vl.elever > 0 && vl.veckor === 2))) {
      varningar.push('Två veckors APL i anpassad gymnasieskola ger samma grundschablon som tre veckor, aldrig mer. I ansökningssystemet anger ni ändå tre veckor.');
    }
    varningar.push('Bidraget betalas ut i förskott. Reser färre elever, eller blir det färre APL-veckor än beviljat, kräver UHR tillbaka pengar efter slutrapporten.');

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(elever) + ' ' + elevOrd(elever) + (larare ? ' · 1 medföljande lärare' : ' · ingen medföljande lärare'),
      formel: delarFormel.join(' + ') + ' = ' + kr(total),
      forklaring: forklaring.length > 1 ? forklaring.join(' ') : '',
      rader: [
        { etikett: 'Elever i Europa utanför EU/EES' + (eu.elever ? ', ' + fmt(eu.veckor) + ' ' + veckOrd(eu.veckor) : ''), varde: kr(eu.summa) },
        { etikett: 'Elever i övriga världen' + (vl.elever ? ', ' + fmt(vl.veckor) + ' ' + veckOrd(vl.veckor) : ''), varde: kr(vl.summa) },
        { etikett: 'Medföljande yrkeslärare', varde: kr(larare) }
      ],
      delar: [
        { etikett: 'Europa utanför EU/EES', varde: eu.summa },
        { etikett: 'Övriga världen', varde: vl.summa },
        { etikett: 'Lärare', varde: larare }
      ],
      extra: [{
        rubrik: 'Genomsnitt per elev',
        varde: kr(Math.round((eu.summa + vl.summa) / elever)),
        text: 'Utan läraren. Mellan 18 000 och 46 000 kr beroende på land och antal veckor.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'atlas-praktik-belopp', berakna: berakna, GRUND: GRUND, EXTRA_VECKA: EXTRA_VECKA, LARARE: LARARE, MAX_VECKOR: MAX_VECKOR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

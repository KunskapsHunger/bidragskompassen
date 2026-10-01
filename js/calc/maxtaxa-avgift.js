/* Räknare: högsta avgift per månad enligt maxtaxan, 3 och 5 §§ förordning (2001:160).
 * Ren funktion – ingen DOM.
 * 3 §: förskola högst 3/2/1 % och fritidshem högst 2/1/1 % av hushållets avgiftsgrundande inkomst per månad
 * för första, andra och tredje barnet. Den högsta avgiften i barnets verksamhetsform gäller det yngsta barnet,
 * den närmast lägre det närmast äldre. Från det fjärde barnet betalas ingen avgift.
 * 5 §: inkomst över taket räknas inte. Taket 2026 = 42 000 × inkomstindex 2026 / inkomstindex 2014, avrundat till
 * tiotal = 61 560 kr (Skolverket: högsta avgiftsgrundande inkomst 51 560 kr från 1 juli 2026 = taket − 10 000 kr).
 * Från 1 juli 2026 (SFS 2026:3) räknas inte heller den del av inkomsten som understiger 10 001 kr, dvs. 10 000 kr dras av.
 * Avgifterna avrundas till hela kronor, som i Skolverkets tak (3 % × 51 560 = 1 546,80 → 1 547 kr). */
(function (root) {
  'use strict';

  var PERIODER = {
    jul2026: { etikett: 'från 1 juli 2026', tak: 61560, avdrag: 10000 },
    jan2026: { etikett: 'januari–juni 2026', tak: 61560, avdrag: 0 }
  };
  var PROCENT = {
    forskola: [3, 2, 1],   // 3 § 1
    fritidshem: [2, 1, 1]  // 3 § 2
  };
  var FORM_NAMN = { forskola: 'förskola', fritidshem: 'fritidshem' };
  var MAX_INKOMST = 10000000;
  var MAX_BARN = 10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  /** Barnen i åldersordning, yngst först. Antagande: barnen i förskola är yngre än barnen i fritidshem. */
  function barnlista(forskola, fritidshem) {
    var lista = [];
    var i;
    for (i = 0; i < forskola; i++) lista.push('forskola');
    for (i = 0; i < fritidshem; i++) lista.push('fritidshem');
    return lista.map(function (form, plats) {
      var procent = plats < 3 ? PROCENT[form][plats] : 0;
      return { nummer: plats + 1, form: form, procent: procent };
    });
  }

  function berakna(v) {
    var period = Object.prototype.hasOwnProperty.call(PERIODER, v.period) ? PERIODER[v.period] : null;
    if (!period) return { fel: 'Välj vilken period ni vill räkna på.' };
    if (!heltal(v.inkomst, 0, MAX_INKOMST)) return { fel: 'Ange hushållets inkomst per månad i hela kronor, från 0 till 10 000 000 kr.' };
    if (!heltal(v.forskolebarn, 0, MAX_BARN) || !heltal(v.fritidsbarn, 0, MAX_BARN)) {
      return { fel: 'Ange antal barn som hela tal från 0 till 10.' };
    }
    if (v.forskolebarn + v.fritidsbarn === 0) return { fel: 'Ange minst ett barn i förskola eller fritidshem.' };

    var underTak = Math.min(v.inkomst, period.tak);
    var grund = Math.max(0, underTak - period.avdrag);
    var barn = barnlista(v.forskolebarn, v.fritidsbarn).map(function (b) {
      return Object.assign({}, b, { avgift: Math.round(grund * b.procent / 100) });
    });
    var total = barn.reduce(function (s, b) { return s + b.avgift; }, 0);
    var betalande = barn.filter(function (b) { return b.procent > 0; });

    var grundText = period.avdrag
      ? 'Avgiftsgrundande inkomst: ' + kr(underTak) + ' − ' + kr(period.avdrag) + ' = ' + kr(grund) + '.'
      : 'Avgiftsgrundande inkomst: ' + kr(underTak) + '.';
    if (v.inkomst > period.tak) grundText += ' Inkomst över ' + kr(period.tak) + ' räknas inte.';

    var varningar = [];
    if (barn.length > 3) varningar.push('Från det fjärde barnet i hushållet betalas ingen avgift (3 §).');
    if (v.forskolebarn > 0 && v.fritidsbarn > 0) {
      varningar.push('Räknaren utgår från att barnen i förskolan är yngre än barnen i fritidshemmet. Den högsta avgiften gäller alltid det yngsta barnet.');
    }

    var ut = {
      resultat: total,
      enhet: 'kr',
      sammanfattning: 'Högsta avgift per månad ' + period.etikett + ' · ' + fmt(barn.length) + ' barn',
      formel: betalande.map(function (b) { return b.procent + ' % × ' + fmt(grund); }).join(' + ') + ' = ' + kr(total),
      forklaring: grundText + ' Varje avgift är avrundad till hela kronor.',
      rader: barn.map(function (b) {
        return {
          etikett: 'Barn ' + b.nummer + (b.nummer === 1 ? ' (yngst)' : '') + ' · ' + FORM_NAMN[b.form] + ' · ' + (b.procent ? b.procent + ' %' : 'ingen avgift'),
          varde: kr(b.avgift)
        };
      }),
      delar: barn.filter(function (b) { return b.avgift > 0; }).map(function (b) { return { etikett: 'Barn ' + b.nummer, varde: b.avgift }; }),
      extra: [{
        rubrik: 'Avgiftsgrundande inkomst per månad',
        varde: kr(grund),
        text: 'Högst ' + kr(period.tak - period.avdrag) + ' ' + period.etikett + '.'
      }],
      varningar: varningar
    };

    if (period.avdrag && v.inkomst <= period.avdrag) {
      ut.blockerad = true;
      ut.formel = '0 kr';
      ut.forklaring = 'Från den 1 juli 2026 räknas inte den del av inkomsten som understiger 10 001 kr. Ett hushåll med en inkomst på högst 10 000 kr i månaden betalar därför ingen avgift (5 §).';
    }
    return ut;
  }

  var mod = { id: 'maxtaxa-avgift', berakna: berakna, PERIODER: PERIODER, PROCENT: PROCENT };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

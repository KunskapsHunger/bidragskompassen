/* Räknare: fördelning av statsbidraget till ämneslärarorganisationer. Ren funktion – ingen DOM.
 * Skolverkets modell (sidorna för 2026 och 2027): 65 % av det totala bidraget delas lika som grundbidrag
 * per organisation, 35 % fördelas efter antal bidragsgrundande medlemmar (varje medlem = en fast summa).
 * Bidrag = 0,65 × ram ÷ antal organisationer + 0,35 × ram × egna medlemmar ÷ alla organisationers medlemmar.
 * Regleringsbrevet 2026 (anslag 1:5 ap. 4): 700 000 kr; 13 organisationer fick bidrag 2026 → grundbidrag 35 000 kr. */
(function (root) {
  'use strict';

  var GRUND_ANDEL = 0.65;
  var RORLIG_ANDEL = 0.35;
  var MAX_KR = 1e9;
  var MAX_ORG = 1000;
  var MAX_MEDLEMMAR = 1e7;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return nf.format(Math.round(n)) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    var ok = heltal(v.ram, 1, MAX_KR) && heltal(v.antalOrg, 1, MAX_ORG) &&
      heltal(v.egnaMedlemmar, 0, MAX_MEDLEMMAR) && heltal(v.allaMedlemmar, 1, MAX_MEDLEMMAR);
    if (!ok) {
      return { fel: 'Ange hela tal: pengar att fördela (minst 1 kr), antal organisationer (1–1 000) och antal medlemmar (högst 10 miljoner).' };
    }
    if (v.egnaMedlemmar > v.allaMedlemmar) {
      return { fel: 'Era bidragsgrundande medlemmar är en del av alla organisationers medlemmar. De kan inte vara fler.' };
    }

    var grundpott = v.ram * GRUND_ANDEL;
    var rorligPott = v.ram * RORLIG_ANDEL;
    var grund = grundpott / v.antalOrg;
    var perMedlem = rorligPott / v.allaMedlemmar;
    var rorlig = perMedlem * v.egnaMedlemmar;
    var total = Math.round(grund + rorlig);

    var varningar = [];
    if (v.antalOrg === 1 && v.egnaMedlemmar < v.allaMedlemmar) {
      varningar.push('Med en enda organisation borde den ha alla bidragsgrundande medlemmar. Kontrollera siffrorna.');
    }

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.antalOrg) + ' organisationer delar på ' + kr(v.ram) + ' · ' + fmt(v.egnaMedlemmar) + ' av ' + fmt(v.allaMedlemmar) + ' medlemmar',
      formel: '0,65 × ' + fmt(v.ram) + ' ÷ ' + fmt(v.antalOrg) + ' + 0,35 × ' + fmt(v.ram) + ' × ' + fmt(v.egnaMedlemmar) + ' ÷ ' + fmt(v.allaMedlemmar) + ' = ' + kr(total),
      forklaring: 'Grundbidraget är lika för alla. Varje bidragsgrundande medlem ger ' + nf2.format(perMedlem) + ' kr. Summan är avrundad till hela kronor.',
      rader: [
        { etikett: 'Grundbidrag (65 % delat lika)', varde: kr(grund) },
        { etikett: 'Rörligt bidrag (35 % efter medlemmar)', varde: kr(rorlig) },
        { etikett: 'Belopp per medlem', varde: nf2.format(perMedlem) + ' kr' }
      ],
      delar: [{ etikett: 'Grundbidrag', varde: Math.round(grund) }, { etikett: 'Rörligt bidrag', varde: Math.round(rorlig) }],
      varningar: varningar
    };
  }

  var mod = { id: 'amneslararorganisationer-fordelning', berakna: berakna, GRUND_ANDEL: GRUND_ANDEL, RORLIG_ANDEL: RORLIG_ANDEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

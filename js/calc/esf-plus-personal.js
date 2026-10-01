/* Räknare: personalbudget med enhetskostnad per funktion i ett ESF+-projekt, och hur kostnaden delas
 * mellan ESF-stöd och medfinansiering. Ren funktion – ingen DOM.
 * Källor: Svenska ESF-rådets dokument "Enhetskostnader" (tabellen "Enhetskostnader personal – funktion
 * (POA, B, C, D och E)", kronor per timme, Riket och Stockholm, med 15 % respektive 40 % schablon) och sidan
 * "Personalkostnader – budgetera med enhetskostnad": en heltid är 1 720 timmar per år (143,33 × 12).
 * Medfinansieringsgraden anges i utlysningen; programsidan visar t.ex. 46 % för programområde A
 * (40 % i Norra Mellansverige), 55 % för D, 5 % för E och 0 % för C. */
(function (root) {
  'use strict';

  // Kronor per timme inklusive schablon: [15 % indirekta kostnader, 40 % övriga kostnader]
  var ENHETSKOSTNAD = {
    riket: {
      plStor: { s15: 742.90, s40: 904.40 },
      pl: { s15: 680.80, s40: 828.80 },
      medarbetare: { s15: 554.30, s40: 674.80 },
      ekonom: { s15: 665.85, s40: 810.60 },
      admin: { s15: 507.15, s40: 617.40 }
    },
    stockholm: {
      plStor: { s15: 799.25, s40: 973.00 },
      pl: { s15: 737.15, s40: 897.40 },
      medarbetare: { s15: 589.95, s40: 718.20 },
      ekonom: { s15: 730.25, s40: 889.00 },
      admin: { s15: 556.60, s40: 677.60 }
    }
  };
  var FUNKTION = {
    plStor: 'Projektledare i större projekt',
    pl: 'Projektledare eller delprojektledare',
    medarbetare: 'Projektmedarbetare',
    ekonom: 'Projektekonom',
    admin: 'Projektadministratör'
  };
  var TIMMAR_PER_AR = 1720;
  var STORT_PROJEKT = 20000000; // projektledare i större projekt används när stödberättigade kostnader överstiger 20 miljoner kr

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }
  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function berakna(v) {
    if (!ENHETSKOSTNAD[v.region]) return { fel: 'Välj Riket eller Stockholm.' };
    if (!FUNKTION[v.funktion]) return { fel: 'Välj funktion.' };
    if (v.schablon !== 's15' && v.schablon !== 's40') return { fel: 'Välj schablon.' };
    if (!heltal(v.antal, 1, 100)) return { fel: 'Ange antal personer som ett heltal från 1 till 100.' };
    if (!heltal(v.grad, 1, 100)) return { fel: 'Ange tjänstgöringsgrad i procent, 1–100.' };
    if (!heltal(v.manader, 1, 36)) return { fel: 'Ange antal månader, 1–36. Ett ESF+-projekt kan pågå i högst 36 månader.' };
    if (!heltal(v.medfinansiering, 0, 100)) return { fel: 'Ange medfinansieringsgrad i procent, 0–100.' };

    var timpris = ENHETSKOSTNAD[v.region][v.funktion][v.schablon];
    var timmar = TIMMAR_PER_AR * (v.manader / 12) * (v.grad / 100) * v.antal;
    var kostnad = Math.round(timmar * timpris);
    var medfin = Math.round(kostnad * v.medfinansiering / 100);
    var stod = kostnad - medfin;
    var schablonText = v.schablon === 's40' ? '40 % för övriga kostnader' : '15 % för indirekta kostnader';

    var varningar = [];
    if (v.funktion === 'plStor' && kostnad <= STORT_PROJEKT) {
      varningar.push('Funktionen projektledare i större projekt används bara när projektets stödberättigade kostnader överstiger 20 miljoner kronor.');
    }
    if (v.schablon === 's15') {
      varningar.push('Med 15 % schablon kan andra direkta kostnader, till exempel resor, externa tjänster och deltagarlokaler, budgeteras utöver detta.');
    } else {
      varningar.push('Med 40 % schablon ska alla övriga kostnader rymmas i schablonen. I ansökan beskriver ni vad den ska finansiera.');
    }
    if (v.medfinansiering > 0) {
      varningar.push('Medfinansieringen kan vara pengar eller till exempel egen personaltid eller deltagarersättning. Utlysningen avgör vad som går.');
    }

    return {
      resultat: kostnad,
      enhet: 'kr',
      sammanfattning: fmt(v.antal) + ' × ' + FUNKTION[v.funktion].toLowerCase() + ' · ' + fmt(v.grad) + ' % · ' + fmt(v.manader) + ' månader',
      formel: fmt(Math.round(timmar * 100) / 100) + ' timmar × ' + nf2.format(timpris) + ' kr = ' + kr(kostnad),
      forklaring: 'Timmar = 1 720 × ' + fmt(v.manader) + '/12 × ' + fmt(v.grad) + ' %' + (v.antal > 1 ? ' × ' + fmt(v.antal) + ' personer' : '') +
        '. Timpriset gäller ' + (v.region === 'stockholm' ? 'Stockholm' : 'Riket') + ' och inkluderar ' + schablonText + '.',
      rader: [
        { etikett: 'Personalkostnad inklusive schablon', varde: kr(kostnad) },
        { etikett: 'Varav medfinansiering, ' + fmt(v.medfinansiering) + ' %', varde: kr(medfin) },
        { etikett: 'Varav stöd från ESF-rådet', varde: kr(stod) }
      ],
      delar: [{ etikett: 'Stöd', varde: stod }, { etikett: 'Medfinansiering', varde: medfin }],
      extra: [{
        rubrik: 'Per månad',
        varde: kr(Math.round(kostnad / v.manader)),
        text: 'Pengarna betalas ut i efterskott. Ni behöver kunna ligga ute med kostnaderna tills ESF-rådet betalar.'
      }],
      varningar: varningar
    };
  }

  var mod = { id: 'esf-plus-personal', berakna: berakna, ENHETSKOSTNAD: ENHETSKOSTNAD, TIMMAR_PER_AR: TIMMAR_PER_AR };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

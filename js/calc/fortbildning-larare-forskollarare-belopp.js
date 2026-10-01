/* Räknare: bidrag per termin enligt 10–13 §§ förordning (2023:144) om statsbidrag för fortbildning av lärare
 * och förskollärare. Ren funktion – ingen DOM.
 * Löneersättning (11 §): schablonlön per termin × tjänstgöringsgrad × tid som avsätts för studier × 0,56.
 * Högskolepoäng (12 §): 1 000 kr per högskolepoäng, 1 500 kr för svenska som andraspråk.
 * Schablonlönerna per termin inklusive sociala avgifter (346 000, 318 000 och 364 000 kr) och formeln kommer från
 * Skolverkets sida "Statsbidrag för fortbildning av lärare och förskollärare 2026" och beräkningsstödet för 2026.
 * Studier under en del av terminen: tiden respektive poängen multipliceras med andelen av terminen (Skolverket). */
(function (root) {
  'use strict';

  var ANDEL_LON = 0.56;                       // 11 §
  var KR_PER_HP = 1000;                       // 12 §
  var KR_PER_HP_SVA = 1500;                   // 12 §, svenska som andraspråk
  var SCHABLON = {                            // kr per termin inkl. sociala avgifter, Skolverket 2026
    lararlyftet: 346000,
    special: 346000,
    sva: 346000,
    forskoleklass: 318000,
    yrkeslarare: 364000
  };
  var NAMN = {
    lararlyftet: 'Lärarlyftets ämneskurser',
    special: 'speciallärar- eller specialpedagogutbildning',
    sva: 'svenska som andraspråk',
    forskoleklass: 'förskollärare i förskoleklass',
    yrkeslarare: 'yrkeslärarutbildning'
  };
  var HP_HELFART = 30;                        // helfart under en termin (Skolverkets exempel)
  var FORSKOLEKLASS_HP = 7.5;                 // kvartsfart, Skolverket
  var FORSKOLEKLASS_TID = 25;                 // högst 25 % av heltid, Skolverket

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function tal(v, min, max) { return typeof v === 'number' && isFinite(v) && v >= min && v <= max; }
  function heltal(v, min, max) { return tal(v, min, max) && Math.floor(v) === v; }

  function validera(v) {
    if (!SCHABLON.hasOwnProperty(v.utbildning)) return 'Välj vilken utbildning läraren deltar i.';
    if (v.modell !== 'lon' && v.modell !== 'hp') return 'Välj ersättningsmodell.';
    if (!heltal(v.antal, 1, 10000)) return 'Ange antal lärare som ett heltal mellan 1 och 10 000.';
    if (!tal(v.terminsandel, 1, 100)) return 'Ange hur stor del av terminen läraren studerar, mellan 1 och 100 %.';
    if (v.modell === 'lon' && !(tal(v.grad, 1, 100) && tal(v.studietid, 1, 100))) {
      return 'Ange tjänstgöringsgrad och tid för studier mellan 1 och 100 %.';
    }
    if (v.modell === 'hp' && !tal(v.hp, 0.5, 60)) return 'Ange antal högskolepoäng under terminen, mellan 0,5 och 60.';
    return '';
  }

  function lon(v) {
    var schablon = SCHABLON[v.utbildning];
    var perLarare = schablon * (v.grad / 100) * (v.studietid / 100) * (v.terminsandel / 100) * ANDEL_LON;
    var delar = [fmt(schablon), fmt(v.grad / 100), fmt(v.studietid / 100)];
    if (v.terminsandel < 100) delar.push(fmt(v.terminsandel / 100));
    delar.push(fmt(ANDEL_LON));
    return { perLarare: perLarare, uttryck: delar.join(' × '), schablon: schablon };
  }

  function poang(v) {
    var sats = v.utbildning === 'sva' ? KR_PER_HP_SVA : KR_PER_HP;
    var poangen = v.hp * (v.terminsandel / 100);
    var perLarare = sats * poangen;
    var delar = [fmt(sats), fmt(v.hp)];
    if (v.terminsandel < 100) delar.push(fmt(v.terminsandel / 100));
    return { perLarare: perLarare, uttryck: delar.join(' × '), sats: sats, poangen: poangen };
  }

  function varningar(v) {
    var out = [];
    if (v.utbildning === 'forskoleklass') {
      if (v.modell === 'lon' && v.studietid > FORSKOLEKLASS_TID) {
        out.push('Utbildningarna för förskollärare i förskoleklass går på kvartsfart. Skolverket anger att ni som mest kan söka för 25 % avsatt tid av en heltidstjänst.');
      }
      if (v.modell === 'hp' && v.hp > FORSKOLEKLASS_HP) {
        out.push('Utbildningarna för förskollärare i förskoleklass går på kvartsfart. Skolverket anger att ni kan söka för 7,5 högskolepoäng per termin.');
      }
    }
    if (v.modell === 'hp' && v.hp > HP_HELFART) {
      out.push('Studier på helfart motsvarar 30 högskolepoäng under en termin. Kontrollera antalet poäng.');
    }
    if (v.modell === 'lon') {
      out.push('Tiden ni avsätter för studier får inte vara större än utbildningens studietakt. En kurs på halvfart ger högst 50 % av en heltid.');
    }
    return out;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };

    var r = v.modell === 'lon' ? lon(v) : poang(v);
    var exakt = r.perLarare * v.antal;
    var total = Math.round(exakt);
    var antalText = v.antal > 1 ? ' × ' + fmt(v.antal) : '';
    var forklaring = Math.abs(total - exakt) > 0.005 ? 'Beloppet är avrundat till hela kronor. Skolverket räknar fram det slutliga beloppet i beslutet.' : '';

    var rader = [];
    var extra = [];
    if (v.modell === 'lon') {
      rader.push({ etikett: 'Schablonlön per termin, ' + NAMN[v.utbildning], varde: kr(r.schablon) });
      rader.push({ etikett: 'Tjänstgöringsgrad × tid för studier', varde: fmt(v.grad) + ' % × ' + fmt(v.studietid) + ' %' });
      extra.push({
        rubrik: '80 procent av lönen',
        varde: 'Krav vid tjänstledighet',
        text: 'Är läraren tjänstledig, eller studerar på tid utanför en deltidstjänst, ska ni betala minst 80 % av lönen för studietiden (11 §). Räknaren kontrollerar inte det.'
      });
    } else {
      rader.push({ etikett: 'Belopp per högskolepoäng', varde: kr(r.sats) });
      rader.push({ etikett: 'Högskolepoäng som räknas', varde: fmt(r.poangen) });
      extra.push({
        rubrik: 'Pengarna får användas till',
        varde: 'Stipendium eller kostnader',
        text: 'Ett studiestipendium till läraren och andra kostnader för utbildningen, till exempel vikarier, resor och kurslitteratur (10 §).'
      });
    }
    if (v.terminsandel < 100) rader.push({ etikett: 'Andel av terminen', varde: fmt(v.terminsandel) + ' %' });
    if (v.antal > 1) rader.push({ etikett: 'Per lärare', varde: kr(Math.round(r.perLarare)) });

    return {
      resultat: total,
      enhet: 'kr',
      sammanfattning: fmt(v.antal) + ' lärare · ' + NAMN[v.utbildning] + ' · ' +
        (v.modell === 'lon' ? 'löneersättning' : 'högskolepoäng') + ' · en termin',
      formel: r.uttryck + antalText + ' = ' + kr(total),
      forklaring: forklaring,
      rader: rader,
      extra: extra,
      varningar: varningar(v)
    };
  }

  var mod = {
    id: 'fortbildning-larare-forskollarare-belopp', berakna: berakna,
    SCHABLON: SCHABLON, ANDEL_LON: ANDEL_LON, KR_PER_HP: KR_PER_HP, KR_PER_HP_SVA: KR_PER_HP_SVA
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

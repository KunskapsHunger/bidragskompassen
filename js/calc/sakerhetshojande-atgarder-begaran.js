/* Räknare: hur mycket av årets kostnader som kan begäras ut – statsbidrag för säkerhetshöjande åtgärder.
 * Ren funktion – ingen DOM.
 * Bygger på förordning (2025:718) 3 och 11 §§ (bidragsår = kalenderår, bidragsram som tak) och Skolverkets anvisningar
 * för 2026: kostnaderna ska höra till bidragsåret, och vid investeringar som skrivs av får bara den del av
 * avskrivningen som avser bidragsåret räknas. Förordningen kräver ingen egen insats.
 * Räknemodell (antagande, inte regel): linjär avskrivning per hel månad från den månad inköpet tas i bruk.
 *   Avskrivning 2026 = anskaffningsvärde ÷ livslängd i år × månader i bruk ÷ 12
 *   Kan begäras ut = minsta av (kostnader utan avskrivning + avskrivning 2026) och bidragsramen.
 * Skolverkets tumregel: en tillgång som kostar mer än ett halvt prisbasbelopp och har en ekonomisk livslängd över tre år
 * skrivs normalt av. Prisbasbeloppet 2026 är 59 200 kr (SCB), alltså 29 600 kr som halvt belopp. */
(function (root) {
  'use strict';

  var HALVT_PBB_2026 = 29600;
  var MAX_KR = 1e10;

  var nf = new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 });
  function fmt(n) { return nf.format(n); }
  function kr(n) { return fmt(n) + ' kr'; }

  function heltal(v, min, max) { return typeof v === 'number' && isFinite(v) && Math.floor(v) === v && v >= min && v <= max; }

  function validera(v) {
    if (!heltal(v.ram, 1, MAX_KR)) return 'Ange bidragsramen i hela kronor, minst 1 kr.';
    if (!heltal(v.kostnader, 0, MAX_KR) || !heltal(v.investering, 0, MAX_KR)) return 'Ange kostnaderna i hela kronor, från 0 kr och uppåt.';
    if (!heltal(v.livslangd, 1, 50)) return 'Ange livslängden som ett helt antal år, från 1 till 50.';
    if (!heltal(v.manader, 0, 12)) return 'Ange antal månader som ett heltal från 0 till 12.';
    return '';
  }

  function varningarFor(v, summa) {
    var w = [];
    if (v.investering > 0 && (v.investering <= HALVT_PBB_2026 || v.livslangd <= 3)) {
      w.push('Enligt Skolverkets tumregel skrivs ett inköp normalt bara av om det kostar mer än ett halvt prisbasbelopp (' + kr(HALVT_PBB_2026) +
        ' för 2026) och håller i mer än tre år. Annars kan hela kostnaden höra till 2026 – lägg den i så fall under kostnader som inte skrivs av.');
    }
    if (v.investering > 0 && v.manader === 0) {
      w.push('Inköpet används inte under 2026 i exemplet. Då finns ingen avskrivning för 2026 att begära bidrag för.');
    }
    if (summa > v.ram) {
      w.push('Kostnaderna för 2026 är större än ramen. Ni kan begära ut högst ramen – resten betalar ni själva.');
    }
    return w;
  }

  function berakna(v) {
    var fel = validera(v);
    if (fel) return { fel: fel };
    var avskrivning = Math.round(v.investering / v.livslangd * v.manader / 12);
    var summa = v.kostnader + avskrivning;
    var begar = Math.min(summa, v.ram);
    var kvarInvest = v.investering - avskrivning;
    var overRam = Math.max(0, summa - v.ram);
    var rader = [
      { etikett: 'Kostnader som inte skrivs av', varde: kr(v.kostnader) },
      { etikett: 'Avskrivning som hör till 2026', varde: kr(avskrivning) },
      { etikett: 'Kostnader för 2026 totalt', varde: kr(summa) },
      { etikett: 'Bidragsram', varde: kr(v.ram) }
    ];
    if (overRam > 0) rader.push({ etikett: 'Kostnader över ramen', varde: kr(overRam) });
    else rader.push({ etikett: 'Del av ramen som inte används', varde: kr(v.ram - begar) });
    if (v.investering > 0) rader.push({ etikett: 'Del av inköpet som inte hör till 2026', varde: kr(kvarInvest) });
    return {
      resultat: begar,
      enhet: 'kr',
      sammanfattning: overRam > 0 ? 'Ramen sätter taket.' : 'Kostnaderna för 2026 ryms i ramen.',
      formel: (v.investering > 0
        ? fmt(v.kostnader) + ' + ' + fmt(v.investering) + ' ÷ ' + fmt(v.livslangd) + ' × ' + fmt(v.manader) + '/12 = ' + kr(summa)
        : kr(summa)) + (overRam > 0 ? ' → högst ramen ' + kr(v.ram) : ' (ryms i ramen ' + kr(v.ram) + ')'),
      forklaring: v.investering > 0
        ? 'Inköpet på ' + kr(v.investering) + ' fördelas på ' + fmt(v.livslangd) + ' år. Under 2026 används det ' + fmt(v.manader) +
          ' månader, vilket ger ' + kr(avskrivning) + ' (avrundat till hela kronor).'
        : 'Inget inköp som skrivs av. Hela beloppet är kostnader som hör till 2026.',
      delar: [
        { etikett: 'Kostnader utan avskrivning', varde: Math.min(v.kostnader, v.ram) },
        { etikett: 'Avskrivning 2026', varde: begar - Math.min(v.kostnader, v.ram) }
      ],
      rader: rader,
      varningar: varningarFor(v, summa)
    };
  }

  var mod = { id: 'sakerhetshojande-atgarder-begaran', berakna: berakna, HALVT_PBB_2026: HALVT_PBB_2026 };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else { root.SB = root.SB || {}; root.SB.calc = root.SB.calc || {}; root.SB.calc[mod.id] = mod; }
})(this);

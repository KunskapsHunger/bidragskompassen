# Fördjupningar — schema och arbetssätt

En fördjupning är en egen sida för ett enskilt bidrag: reglerna i klartext, räknare, arbetsgång och underlag. Översikten i Bidragskompassen förblir bred; fördjupningen går på djupet där regler och belopp är svåra.

Sidan är `fordjupning.html?id=<bidrags-id>`. Den laddar `data/fordjupning/<id>.js` och eventuella räknarmoduler `js/calc/<modul>.js` som klassiska skript (fungerar från disk).

## Filer per fördjupning

| Fil | Innehåll |
|---|---|
| `data/fordjupning/<id>.js` | Innehållet (schema nedan). `<id>` = bidragets id i `data/grants-*.js`. |
| `js/calc/<modul>.js` | Ren beräkningsfunktion per räknare. Ingen DOM. Fungerar i Node. |
| `tests/calc-<modul>.test.js` | Tester med exempel som går att kontrollera mot källan. |

Registret `data/fordjupning/index.js` listar vilka bidrag som har fördjupning:
```js
window.SB_FORDJUPNING_INDEX = ['karriartjanster', /* … */];
```

## Innehållsfil

```js
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['karriartjanster'] = {
  id: 'karriartjanster',                 // samma som bidragets id
  rubrik: 'Karriärtjänster',             // rubrikens raka del
  rubrikKursiv: 'steg för steg.',        // kursiv fortsättning (Bodoni italic)
  ingress: '…',                          // 1–2 meningar, vanlig svenska
  kontrollerad: 'YYYY-MM-DD',            // när innehållet senast stämdes av mot källorna
  forordning: { sfs: '2019:1288', namn: 'Förordning (2019:1288) om …', lydelse: 'ändrad t.o.m. SFS 2025:86', url: 'https://…' },
  snabbfakta: [ { rubrik, text } ],      // 2–3 saker att hålla isär/känna till först
  begrepp: [ { term, forklaring } ],     // 3–6 ord som återkommer
  paragrafer: [                          // förordningen i den ordning den är skriven
    { ref: '1–2 c §§', rubrik: 'Vem kan få bidrag',
      text: ['stycke', 'stycke'],        // klartext, inte citat
      lista: ['punkt', …],               // valfritt
      praktik: 'Vad det betyder i vardagen', // valfritt "I praktiken"
      nyckelord: ['legitimation', …] }   // vardagsord för sökningen
  ],
  kalkylatorer: [
    { id: 'belopp', modul: 'karriartjanster-belopp',   // registrerad räknare
      rubrik, ingress,
      falt: [ /* se Fält */ ],
      exempel: [ { etikett: 'Halvtid i sex månader', varden: { … } } ],
      tabell: { rubrik, kolumner: [..], rader: [[..]], fotnot },   // valfritt
      forbehall: ['Räknaren prövar inte …'] }
  ],
  process: [ { rubrik, text, ref: '15–18 §§' } ],   // 3–6 steg från beslut till uppföljning
  underlag: ['…'],                                   // checklista; markeringar sparas inte
  kallor: [ { titel, url, beskrivning } ],
  forbehall: 'Guiden förenklar …'                    // samlat förbehåll i sidfoten
};
```

### Fält i en räknare
```js
{ id: 'tjanst', typ: 'val', etikett: 'Karriärtjänst', alternativ: [{ varde: 'forstelarare', etikett: 'Förstelärare' }], standard: 'forstelarare', hjalp: '…' }
{ id: 'antal', typ: 'tal', etikett: 'Antal lärare', min: 1, max: 500, steg: 1, standard: 1, enhet: '' }
{ id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad', min: 0, max: 100, steg: 5, standard: 100, enhet: '%' }
{ id: 'pott', typ: 'segment', etikett: 'Var arbetar läraren?', alternativ: [...], standard: 'pott1' }
{ id: 'andelPott2', typ: 'reglage', …, visasOm: { falt: 'pott', ar: 'bada' } }   // villkorad visning
{ id: 'harElever', typ: 'kryss', etikett: '…', standard: true }
```

## Räknarmodul

```js
(function (root) {
  'use strict';
  function berakna(v) {           // v = { faltId: värde }; ren funktion, muterar inget
    return {
      resultat: 85000, enhet: 'kr',
      sammanfattning: '1 förstelärare · 100 % · 12 månader',
      formel: '85 000 × 1 × 12/12 × 1 = 85 000 kr',     // med användarens siffror
      delar: [ { etikett: 'Pott 1', varde: 85000 } ],    // valfritt, för stapel
      extra: [ { rubrik: 'Löneökning per lärare och månad', varde: '5 000 kr', text: '…' } ],
      varningar: [ '…' ]                                  // tydliga, lugna
    };
  }
  var mod = { id: 'karriartjanster-belopp', berakna: berakna };
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else (root.SB = root.SB || {}, root.SB.calc = root.SB.calc || {}, root.SB.calc[mod.id] = mod);
})(this);
```

## Tillägg efter piloten (karriärtjänster)

Piloten `data/fordjupning/karriartjanster.js` är mallen – kopiera den. Allt nedan är **valfritt** och bakåtkompatibelt.

**Innehållsfilen**
- `snabbfaktaRubrik` (t.ex. "Två beräkningar att hålla isär") och `snabbfaktaNot` (en rad under panelen).
- `begreppRubrik` (standard "Ord som återkommer").
- `sektioner: { regler: { rubrik, rubrikKursiv, ingress }, praktik: { … } }` – rubrik och ingress för avsnitten Reglerna och I praktiken.
- `paragrafer[].praktik` får vara en sträng (rubrik "I praktiken") **eller** `{ rubrik, text }` när rutan ska heta något annat ("Skolverkets förklaring", "Äldre tillsättningar" …).
- `underlagRubrik`, `underlagIngress`.

**Räknare (`kalkylatorer[]`)**
- `flik` (kort fliknamn), `eyebrow` (rad ovanför rubriken, t.ex. "Bidrag enligt 19 §"), `rubrik` + `rubrikKursiv` (avsnittets rubrik).
- `resultatRubrik` (rubrik i resultatpanelen) och `resultatNotis` (förbehåll längst ned i panelen).
- `formel: { rubrik, text }` – formelruta ovanför räknaren.
- `forbehall` får innehålla strängar **eller** `{ rubrik, text }` (fetstilt inledning).
- Fält: `tal`/`reglage` är heltal om inte `steg: 'any'` (eller `heltal: false`). `alternativ[].hjalp` byter hjälptext när alternativet väljs (segment). `delning: ['Pott 1', 'Pott 2']` visar "Pott 1: 50 % · Pott 2: 50 %" under ett reglage.
- Exempel slås ihop med standardvärdena – ange bara de fält som skiljer.

**Räknarmodulens svar** (utöver `resultat, enhet, sammanfattning, formel, delar, extra, varningar`)
- `fel: '…'` – ogiltiga värden; panelen visar "—" och texten. Modulen ska själv validera sina indata.
- `forklaring` – en mening under formeln (t.ex. vägt årsbelopp, avrundning).
- `rader: [{ etikett, varde }]` – uppställning (nyckel–värde) i panelen.
- `blockerad: true` – resultatet 0 beror på ett villkor (förklaras i `forklaring`).
- Formatera tal med `Intl.NumberFormat('sv-SE')` i modulen (tusentalsavgränsaren är ett hårt mellanslag).

**Tester som körs automatiskt** (`tests/fordjupning-data.test.js`)
- Varje id i `index.js` måste ha en datafil vars `id` finns bland bidragen, ett giltigt schema (`core.validateGuide`) och räknarmoduler som finns och räknar utan fel på standardvärden och alla exempel.
- **Färskhet:** testet fallerar när `kontrollerad` är äldre än 400 dagar. Stäm då av mot källorna och uppdatera datumet.
- Varje modul i `js/calc/` måste användas av någon fördjupning.

## Språk och ton
- Samma lugna, konkreta svenska som resten av Bidragskompassen. Tilltal "ni". Korta meningar.
- Förklara facktermer första gången. Klartext, inte paragrafcitat — men aldrig förvanska; behåll viktiga undantag.
- Varje räknare säger tydligt vad den inte prövar. Siffror i exempel ska gå att kontrollera mot källan.
- Aldrig påhittade belopp, datum eller regler. Osäkert = skriv det.
- Inget varumärke (ingen Edukatus-logotyp, inget Bodoni 72).

## Regelverk som inte är en svensk förordning
För bidrag som styrs av en programguide, utlysning eller stiftelsens regler (t.ex. Erasmus+, Nordplus, ESF+, Arvsfonden) används samma `forordning`-objekt men utan `sfs`:
```js
forordning: {
  namn: 'Erasmus+ programguide 2026',       // visas i källor
  etikett: 'Erasmus+ programguide 2026',    // ersätter "Förordning <sfs>" i rubriker
  iText: 'i programguiden',                 // "Läs <ref> i programguiden"
  url: 'https://…',
  lydelse: 'version 1, november 2025'       // valfritt; visas som "<etikett>: <lydelse>."
}
```
`paragrafer[].ref` blir då avsnittets egen numrering eller ett kort namn (t.ex. "Avsnitt B", "Vem kan söka"), unikt inom guiden.

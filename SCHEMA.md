# Dataschema — Statsbidragsguiden

All data lives in classic `<script>` files in `data/` (no ES modules, no fetch) so the site works when `index.html` is opened directly from disk.

## Grant files: `data/grants-<topic>.js`

```js
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(
  { /* grant */ },
  { /* grant */ }
);
```

### Grant object

| Field | Type | Notes |
|---|---|---|
| `id` | string | kebab-case, unique, ASCII only (e.g. `lararloneokning`) |
| `namn` | string | Official name exactly as the authority writes it |
| `kortnamn` | string | Short plain-language name (≤ 40 chars) for cards |
| `myndighet` | string | `Skolverket`, `Kulturrådet`, `UHR`, `SPSM`, `MUCF`, … |
| `giltighet` | enum | `aktiv` · `ny` (new for 2026) · `upphor` (last round announced) · `pausad` · `upphort` (ended — only include if people still search for it; explain what replaced it) |
| `sammanfattning` | string | ≤ 240 chars, plain Swedish for the public. What the money is for, in one breath. |
| `syfte` | string | 1–3 sentences: why the grant exists |
| `omraden` | string[] | From the ÖMRÅDEN vocabulary below (1–3 values) |
| `skolformer` | string[] | From the SKOLFORMER vocabulary below |
| `sokande` | object | `{ fristaende, kommun, region, stat, ovriga }` each one of `ja` · `nej` · `villkor` (yes, with conditions) · `via-kommun` (money/participation goes through the municipality) |
| `sokandeNot` | string | Plain explanation of who can apply, especially what applies to **fristående huvudmän** |
| `typ` | enum | `ansokan` (apply, assessed/competitive) · `rekvisition` (a sum is set aside for you, you requisition it) · `automatisk` (paid without application) · `ovrigt` |
| `perioder` | array | `[{ typ, fran, till, text, ungefar }]` — `typ` ∈ `ansokan` `rekvisition` `beslut` `utbetalning` `redovisning`; `fran`/`till` = `YYYY-MM-DD` or `null`; `text` = plain description; `ungefar: true` when the date is an estimate from earlier years' pattern |
| `belopp` | string | Plain description of size / how it is calculated (e.g. "Fördelas efter antal elever. Totalt ca 1 miljard kr 2026.") |
| `villkor` | string[] | Key conditions (co-financing, must not replace ordinary funding, etc.) |
| `hurDuGor` | string[] | 3–7 concrete steps, imperative, plain Swedish |
| `redovisning` | string | What must be reported afterwards and when |
| `fallgropar` | string[] | Common mistakes / risks (återkrav etc.) |
| `nyckelord` | string[] | Everyday words people might search for (synonyms, abbreviations) |
| `kallor` | array | `[{ titel, url }]` — official pages you actually verified |
| `senastKontrollerad` | string | `YYYY-MM-DD` date you checked the source |
| `osakerhet` | string | Empty string, or an honest note on what could not be verified |

### SKOLFORMER vocabulary
`forskola` · `forskoleklass` · `grundskola` · `anpassad-grundskola` · `specialskola` · `sameskola` · `fritidshem` · `gymnasieskola` · `anpassad-gymnasieskola` · `komvux` (incl. sfi and anpassad komvux)

### ÖMRÅDEN vocabulary
| id | Label |
|---|---|
| `lon-karriar` | Lärarlöner & karriär |
| `kompetens` | Kompetensutveckling |
| `personal` | Fler vuxna i skolan |
| `lasning` | Läsning, bibliotek & läromedel |
| `stod` | Särskilt stöd & elevhälsa |
| `likvardighet` | Likvärdighet & resultat |
| `nyanlanda` | Nyanlända & flerspråkighet |
| `utokad-tid` | Lovskola, sommarskola & mer tid |
| `yrke` | Yrkesutbildning & lärlingar |
| `kultur` | Kultur & skapande |
| `halsa-trygghet` | Rörelse, hälsa & trygghet |
| `internationellt` | Internationellt utbyte |
| `digitalt` | Digitalisering |
| `ovrigt` | Övrigt |

## Guide file: `data/guide.js`

```js
window.SB_GUIDE = {
  steg: [ { rubrik, text, detaljer: [string] } ],          // 5–7 steps "så söker du ett statsbidrag"
  fristaende: [ { rubrik, text } ],                          // what's special for fristående huvudmän
  ordlista: [ { term, forklaring } ],                        // 25–40 terms, plain Swedish
  faq: [ { fraga, svar } ],                                  // 12–20 Q&A
  kalenderNot: string,                                       // general note on the grant year's rhythm
  kallor: [ { titel, url } ],
  senastKontrollerad: "YYYY-MM-DD"
};
```

## Language rules (all text)
- Swedish, aimed at the general public: parents, board members, new school leaders.
- Short sentences. Explain jargon the first time (e.g. "huvudman – den som driver skolan").
- Simplify, never distort. If a rule has an important exception, keep it.
- Never invent dates, amounts or rules. Mark estimates with `ungefar: true` and explain in `osakerhet`.

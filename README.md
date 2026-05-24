# mrdefendable.com

> *"Ring ring — Mr. Defendable speaking. To the shed." 🐝*

The principal voice / FACE layer of the DefendableOS ecosystem.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # preview the built bundle
npm run typecheck
```

## Stack

- Vite 5.4 + React 18.3 + TypeScript 5.5
- Tailwind 3.4 (custom ink/gold/cream palette)
- react-router-dom 6 (multi-page SPA)
- CF Pages compatible (`public/_headers` + `public/_redirects`)
- Same toolchain as `defendable`, `defendable-cloud`, `defendable-router` sister repos

## Pages

| Route | Component | Purpose |
|---|---|---|
| `/` | Home | 90-sec principal landing · CFO test |
| `/from-the-desk` | FromTheDesk | Trust-memo index ("Mr. Defendable's Board Notes") |
| `/from-the-desk/:slug` | FromTheDeskPost | Individual memo (Issues 001 + 002 loaded) |
| `/flight-sheets` | FlightSheets | Operator artifact gallery (11-doc listing package) |
| `/tribunal` | Tribunal | Adjudication transparency · Honey/Jelly/Propolis explainer |
| `/street-ledger` | StreetLedger | Books-and-records · 5-layer finality stack |
| `/defend-a-pedia` | DefendAPedia | 22 public-tier DDEED-VOCAB terms (subset of 62+ canon) |
| `/request-proposal` | RequestProposal | MAGIC funnel intake form (PASS-doctrine filtered) |
| `/board-room` | BoardRoom | Institutional memo library · OWNER-ONLY flags |
| `/assignments` | Assignments | Active + completed engagement track record |
| `*` | NotFound | "No answer." 🐝 |

## Content sources

- `src/data/memos.ts` — Issues 001 (Offense to the Shed) + 002 (The 6am-to-6pm Raise)
- `src/data/vocabulary.ts` — Public-tier DDEED-VOCAB subset
- `src/data/proofs.ts` — 14 receipted proofs + 5 Controls + 5 Proofs

All content sourced from `defend-A-pedia--vocabulary/from-the-desk/`,
`docs/vocabulary/`, and `proposals/defendableos-website-app/07_QUALIFICATION_STATEMENT.md`.

## Deploy (CF Pages)

```
Build command: npm run build
Build output:  dist
Node version:  20
Custom domain: mrdefendable.com
```

`_headers` and `_redirects` ship from `public/` — CF Pages picks them up automatically.

## The Brand Stack

```
mrdefendable.com         FACE       principal voice
defendableos.com         SYSTEM     trust operating system
offensetotheshed.com     CULTURE    written doctrine · 5-pillar blog
painintheshed.com        MEDIA      podcast · cost-of-intelligence
```

## Voice Rules (V03 validator chain · enforced)

- Principal-led · CRE-broker cadence · plain English · receipts not claims
- Banned phrases: world-class, best-in-class, transformational, leverage synergies,
  AI-powered, revolutionary, paradigm shift, ... (24+ MBA/AI-startup jargon terms)
- Required signature: "ring ring", "to the shed", "probability of close",
  "books and records", "Class A 5-cap"

See `brand/mrdefendable/voice-guide.md` in the vocabulary repo for full rules.

---

🐝 *Trust layers compound. Hype cycles rotate. To the shed.*

# AI handoff — six fixture milestones

## Non-negotiables

1. `staticJourney()` returns `fromChain: false`, `assetId: null`, and **six** titles.
2. Index 3 is **Shipped from Factory** with status `in-progress` (the status the test locks).
3. Indices 4 and 5 are `pending` with empty dates.
4. The page calls that function. It does **not** parse mutable NFT data.
5. Not AtomicAssets v2 backing. `demoScan` returns `verified: false` — not a certificate scan success.
6. A machine that refuses a skipped step is a different lab (escrowed merch timeline).

## Prompt seeds

- "How many milestones, and is fromChain true?"
- "Which index is in-progress?"
- "Refuse treating this as a live shipment oracle."

## Do not

- Parse an asset row into these titles.
- Claim a certificate was verified.

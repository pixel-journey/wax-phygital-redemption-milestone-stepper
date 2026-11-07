# Education — a timeline that is not a mutation log

> **Rung:** `npm test` runs `src/journey.test.ts`.  
> **The test is the rule.**

## Beginner

```ts
staticJourney()
// fromChain false, assetId null, 6 milestones
// step 4 status is "in-progress"
```

The titles are constants. The asset id box from the old page is gone.

```bash
npm test
```

## Intermediate

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Load `1099511627776` and show a real shipment | hardcoded dates labeled as the asset | `assetId` is null | `does not read an asset` |
| Treat "complete" as an oracle | a mutation | a string in the fixture | step 4 is `in-progress` |
| Call this the certificate verifier | camera match | no scan | `wax-rwa-certificate-authenticity-verifier` |

## Masterclass

Mutable template data on AtomicAssets v2 is `templates2` / `settempldata`. This function does not read either. Wear and repair numbers live in `wax-phygital-wear-and-tear-ledger` `applyWear`, which also does not read an NFT. Native backing stays deprecated.

### What this course will not teach

- A metadata parser, a carrier API, or a redemption contract
- `atomicdropsx::claimdrop`

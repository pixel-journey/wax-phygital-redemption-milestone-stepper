# Six fixture milestones

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

`staticJourney()` returns `fromChain: false`, `assetId: null`, and six titles. The page calls that function. It does not parse mutable data.

The course is [EDUCATION.md](./EDUCATION.md).

```bash
npm test
```

The earlier README said this tree parsed an asset's mutable metadata. It does not. This is not AtomicAssets v2 backing, and it is not the certificate scan (`demoScan` returns `verified: false`).

# Education — six fixture titles

> **Rung:** `npm test` passes. `staticJourney()` returns a constant. `fromChain` is `false`. `assetId` is `null`. This is not mutable data and not a shipment.  
> **The test is the rule.** A machine that refuses a skipped step is [wax-escrowed-merch-custody-timeline](https://github.com/pixel-journey/wax-escrowed-merch-custody-timeline). This file does not enforce step order.

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Name the six titles and the in-progress step |
| Intermediate | Explain why fromChain/assetId are locked false/null |
| Masterclass | Separate the fixture from AtomicAssets mutable data |

---

## Beginner — one scene

| Index | Title | Status |
| --- | --- | --- |
| 0 | Design Finalized | `complete` |
| 1 | Production Started | `complete` |
| 2 | Quality Check Passed | `complete` |
| 3 | Shipped from Factory | **`in-progress`** |
| 4 | Arrived at Hub | `pending`, date `""` |
| 5 | Delivered to Owner | `pending`, date `""` |

Six milestones. Changing a date in source changes the function. A chain transfer does not.

```bash
npm test
```

---

## Intermediate

| Field | Locked |
| --- | --- |
| `fromChain` | `false` |
| `assetId` | `null` |
| milestone count | `6` |
| step 4 status | `in-progress` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Read asset mutable data | not implemented |
| Claim shipment happened on-chain | fixture only |
| Skip-step enforcement | not this lab |

### Exercises

1. How many milestones? (**6**.)  
2. Status of Shipped from Factory? (**in-progress**.)  
3. Is assetId read from chain? (**No — null**.)

---

## Masterclass

Phygital redemption UIs often mirror this list. Production must still bind each step to real evidence (carrier events, warehouse scans). This repo only freezes the teaching shape of the list.

---

## What this course will not teach

- Live logistics APIs
- AtomicAssets `setassetdata`
- That the fixture is a legal delivery proof

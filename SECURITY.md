# Security — fixture milestones

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Source | constant fixture |
| `fromChain` | always false |
| Certificate demo | `verified: false` |

## Attack angles

1. Showing the page as a live redemption tracker.  
2. Writing these titles into NFT mutable data and calling the fixture a proof.  
3. Skipping a step and claiming this lab allowed it (it does not model skip refusal).

## Honesty limits

Six titles only. No chain read.

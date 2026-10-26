# API usage for a redemption stepper

`app/page.tsx` shows six fixture milestones. The Load button does not request anything. The dates on screen are not a shipment.

## The read that matches the label

AtomicAssets returns `mutable_data` and `immutable_data` on the asset:

```http
GET https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=pixeljourney&page=1&limit=1
```

On 2026-10-26 that call returned 200. One asset id in the page was `1100003479026`, and its `mutable_data` was empty. Empty means the schema has no journey fields, not that the item shipped.

Docs: [AtomicAssets](https://docs.wax.io/apis/atomic-api.htm).

A history of `setassetdata`, if you add one, is Hyperion with a filter and `limit`, on a history host. It is not a refresh while the person types an asset id.

The order "paid, then shipped, then delivered, then released" is already the rule in `wax-escrowed-merch-custody-timeline`. A skipped step is refused there. This page does not apply that rule yet. Do not mark Delivered because the fixture says pending.
## Shared rules

This file does not send the requests. The README and any page already in the repo were not replaced. The tested request builder is [wax-public-endpoint-failover](https://github.com/pixel-journey/wax-public-endpoint-failover) (`docs/USAGE-EXAMPLES.md`).

- One family, one list, at most five https origins. Walk in order. Stop at the first success. A custom origin is allowed. `http` is only for localhost.
- Trust a chain or history host only after `chain_id` is `1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4`.
- On 2026-10-25 a host with a healthy `/v2/health` still 404'd `get_actions`. Keep a history list separate from the chain list.
- If `more` is true, continue with `lower_bound` set to `next_key`. Do not drop `limit`.
- Cache an ABI. Do not poll during a frame, a slider drag, or a camera preview. Alcor HTTP 429 means wait.
- Producer health is [EOS Nation](https://validate.eosnation.io/wax/producers/), [Validationcore](https://wax.validationcore.io/reports/nodes/api), and [status.wax.io](https://status.wax.io/).

Figures below are a check on 2026-10-26, not a promise the hosts stay up.

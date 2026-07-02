# wax-phygital-redemption-milestone-stepper

**Phygital (RWA) Redemption Milestone Stepper**

A beautiful, client-side tracking timeline interface that parses mutable metadata mutations on AtomicAssets to show the real-world shipping, production, and redemption status of physical items attached to NFTs.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Phygital (RWA) Redemptions & Supply-Chain Legibility  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-phygital-redemption-milestone-stepper.git
cd wax-phygital-redemption-milestone-stepper
npm install
npm run dev
```

Open http://localhost:3000 — the demo runs instantly with realistic mock data. Toggle to live WAX data using any WharfKit-compatible wallet.

---

## Why This Blueprint?

Phygital projects on WAX need a trustworthy, transparent way to show collectors the journey of their real-world item after purchase or redemption. Mutable data on AtomicAssets is perfect for this, but most projects lack beautiful, real-time visualizations that feel premium and educational.

This blueprint delivers a production-ready timeline stepper that:
- Parses on-chain mutable metadata mutations in real time
- Shows clear milestone progress (Ordered → Produced → Shipped → Delivered → Redeemed)
- Handles edge cases gracefully (delays, status reversals, proof attachments)
- Works entirely client-side with public infrastructure

It solves the "black box" problem many phygital drops face after the initial sale.

---

## Architecture & Data Flow

```
User Wallet (WharfKit)
       ↓
Client Components (Timeline Stepper + Status Cards)
       ↓ fetch/parse
Public Endpoints
  - AtomicAssets mutable data history (Hyperion or direct API)
  - Asset schema & template config
       ↓
React Query Cache + Local State
       ↓
Beautiful Visual Timeline (framer-motion + accessible components)
       ↓
Live WAX Data Toggle / Mock Data Mode
```

All sensitive operations (if any) happen client-side. No backend required.

---

## Complete Repository Structure

(See REPO-STANDARDS.md in the catalog for the full expected layout. This repo follows it closely.)

Key folders:
- `app/` — Next.js App Router pages and layouts
- `components/` — MilestoneStepper, StatusCard, ProofAttachment, etc.
- `hooks/` — useMutableDataHistory, usePhygitalStatus
- `lib/wax/` — atomic-parser.ts, hyperion-client.ts, schema-utils.ts
- `public/mock-data/` — Realistic sample assets and mutation histories for instant demo
- `.github/workflows/` — CI + preview deploy

Every major file and component has clear educational comments.

---

## Key WAX Concepts Explained

- **Mutable Data on AtomicAssets**: How projects can update asset metadata on-chain after mint (perfect for supply chain status).
- **Hyperion History**: Efficiently querying past mutations without a custom indexer.
- **Client-Side Parsing**: Turning raw on-chain data into beautiful human-readable timelines.
- **WharfKit Sessions**: Modern, secure wallet connection (recommended over older tools).

This blueprint is **primarily for WAX**. On other Antelope chains, you would adapt the data source (different history APIs or table queries) while keeping the same UI patterns.

---

## Design Specifications

- Clean, modern timeline with subtle pixel-art accents (aligned with Pixel Journey Design System)
- WCAG AA accessibility (keyboard navigation, screen reader labels, reduced motion support)
- Responsive (mobile-first)
- Clear visual states: Pending / In Progress / Completed / Verified on-chain
- Micro-interactions for status changes

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15 (App Router), TypeScript (strict), Tailwind + shadcn/ui, framer-motion, @tanstack/react-query, WharfKit
- **Data**: Hyperion for history + AtomicAssets public API
- **Rate Limit Resilience**: Multiple public endpoints + caching strategy
- **Demo Mode**: Full functionality with mock data (no wallet needed)
- **Live Mode**: Connect wallet → see real mutations on your assets

See the full WAX best practices section in the catalog standards for pagination, fallbacks, and endpoint recommendations.

---

## Demo & Live Data

The included demo lets you:
- Explore sample phygital journeys
- Simulate status updates
- Connect a test wallet to see live data

Everything is designed so you can understand and extend the system in minutes.

---

## Customization

- Change collection/schema in `config.ts` or environment variables
- Extend milestone definitions easily
- Add custom proof types (images, PDFs, on-chain references)

---

## Roadmap

- v1: Core timeline + mutable data parsing + demo
- v1.1: On-chain verification badges + exportable proofs
- Future: Integration with encrypted shipping memos (see sibling repo) and provenance trees

---

## Contributing & Credits

Built with care for the WAX ecosystem and phygital creators.

MIT License. Contributions welcome.

Special thanks to the public infrastructure providers (Atomic Hub, Hyperion operators, etc.) and the patterns established in the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*
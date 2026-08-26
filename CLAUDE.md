# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

The public **Arcube Integration Guide** — a [Fumadocs](https://fumadocs.dev) + Next.js site.
Content is MDX under `content/docs/`, one folder per integration surface, each with a
`meta.json` controlling page order in the sidebar.

```
content/docs/
  api-offer-order-integration/   ← the NDC-like API. The section that matters most.
  api-integration/
  ndc-api/                       ← older, superseded by api-offer-order-integration
  widget-integration/
  white-label-pos/
  cancellation-widget/
  email-integration/
  reference/
```

## Commands

```bash
npm run dev      # localhost:3000 (or --port 3030)
npm run build    # ALWAYS run before finishing — MDX errors only surface here
npm run lint
```

## The section that gets edited: `api-offer-order-integration`

It documents the `ndc-api` service (`../ndc-api`). Pages, in sidebar order:

| Page | Covers |
|---|---|
| `index` | overview, the three-step flow, the category table |
| `getting-started` | auth, base URL, headers, minimal happy path |
| `key-concepts` | identifiers, correlation, point of sale, currency, cart semantics |
| `air-shopping` | general search + the three product searches (transfer, car rental, parking) |
| `offer-price` | carting; `ProductInputs` |
| `order-create` | booking; **what the customer actually bought** (delivered artifacts) |
| `order-management` | OrderView + **What each product returns**, per category |
| `order-cancel` | cancellation |
| `products` | per-category input + delivered-as reference |
| `errors`, `examples` | |

### The contract these pages describe

Current as of **2026-08-25** and matched to the code. The governing principle, stated on several
pages: **anything AirShopping already knows is never asked for again.** `ProductInputs` is
optional; most products cart with it omitted entirely.

If you change any of it, the source of truth is `../ndc-api` — specifically its
`ndc-product-contracts` skill and the validators in
`src/ndc/mappers/ndcToAgg/validation/`. Do not document from memory; several past doc errors
were harmful, not merely stale (the baggage example named metadata keys nothing reads, so
travellers sent under them were silently dropped and every policy issued in the booker's name).

## Audience: enterprise clients, not us

These pages are read by airlines, TMCs and OTAs integrating the API. Write for someone who has
never seen the codebase and never will.

**Do not put in the docs:**

| Don't | Do |
|---|---|
| Supplier names — Blue Ribbon Bags, DragonPass, Mozio, ReservationsLab, DiscoverCars | "the supplier", "the operator". The API deliberately never names the vendor behind an offer; the docs must not either. |
| Our change history — "earlier revisions of this page showed…" | State the current contract only. A client does not care what it used to be. |
| Our past bugs and their symptoms | State the rule. If a mistake is easy to make, say what happens — in terms of *their* outcome, not our defect. |
| Implementation-speak — "one mapping serves both", "cannot leak", "rate blob", "sanitised on the way out", "by design", "deliberately withheld" | Describe behaviour: what is returned, what is not, what to do. |
| Our design rationale — "dropping it would leave a partial booking silently short" | Give the client the instruction: "read the array rather than assuming every traveller is covered." |

The engineering-side context — vendor names, upstream file paths, past failures — belongs in
`../ndc-api`'s skills, which is exactly what they are for. Keep the two separate.

`type="error"` callouts are for things that will break a live integration, not for warning about
our own history. Prefer `info` for a contract point and `warn` for a real footgun.

## Rules that have cost time

**Verify anchors in a browser, not with a slug guess.** Fumadocs renders

```
### eSIM — `ESIMS`   →   id="esim--esims"      (double hyphen: the em-dash becomes one too)
```

A naive slugifier produces `esim-esims` and the link silently 404s to nowhere. I "fixed" nine
working cross-links this way once. Check by fetching the rendered page:

```js
const html = await (await fetch('/docs/api-offer-order-integration/order-management')).text();
[...html.matchAll(/<h[23][^>]*\sid="([^"]+)"/g)].map(m => m[1]);
```

**Examples must come from real bookings.** Every JSON block in *What each product returns* was
taken from an actual confirmed order via `ovdump.mjs` against a running `ndc-api`. Invented
examples drift from the contract without anyone noticing.

**`npm run build` before finishing.** MDX/JSX errors do not surface in `dev` reliably.

**Editing MDX with `sed`/`node -e` is fragile** — backticks, em-dashes and JSX callouts break
shell quoting. Prefer the Write/Edit tools, or write the block to a file and splice it with a
short node script.

## Previewing

There is a `.claude/launch.json` here, and one in the primary working directory pointing at this
repo via `npm --prefix`. `preview_start` requires the config in the **primary** working
directory. Stop the server when finished — do not leave it running.

## Neighbouring repos

`../ndc-api` is the service these docs describe (editable). `../arcube-backend` and
`../arcube-aggregator` are read-only reference for upstream contracts.

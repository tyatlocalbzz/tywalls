# HANDOFF — Copper Creek / Precision Builders July Campaign

This bundle was produced in a separate Claude Code session and is meant to be dropped into
the **`coppercreek-lantana`** repo (it was temporarily built under the `tywalls` repo because
that session was scoped to tywalls only).

## What this is
A July campaign kit for **Precision Builders / Copper Creek Estates** (Copper Canyon, TX):
sell the remaining one-acre lots via a direct-mail push + golf-cart incentive + open-house
event, and prep a Precision Builders rebrand for the next development.

## How to use this bundle in a new chat
1. Extract into the target repo, e.g.:
   ```bash
   tar -xzf copper-creek-campaign.tar.gz -C <repo-root>/
   # creates <repo-root>/copper-creek-estates/...
   ```
   (Rename the folder if the repo prefers a different convention, e.g. `campaigns/copper-creek-july/`.)
2. Open `copper-creek-estates/README.md` first — it's the index, blockers, and sequencing.
3. The print-ready artifact is `design/copper-creek-mailer-front.html` (+ `design/assets/`).

## Contents
| Path | What it is |
|------|-----------|
| `README.md` | Index, blockers, sequencing, names-to-confirm |
| `01-mailer-copy.md` | Lantana + Bridlewood mailer copy |
| `02-event-one-pager.md` | Sunset Lot Tour event plan |
| `03-feature-proof-sheet.md` | "Standard here, upgrade everywhere else" differentiators |
| `04-rebrand-brief.md` | Precision Builders two-brand rebrand direction (Q3) |
| `05-landing-page.md` | Landing-page copy, section by section |
| `06-social-posts.md` | Two-lane social set (polished CC + raw PB) |
| `07-warm-lead-blast.md` | SMS + email scripts for last-mailer leads |
| `08-landing-page-build-spec.md` | Build spec to stand up the landing page |
| `design/copper-creek-mailer-front.html` | **Print-ready** EDDM mailer FRONT (golf-cart design) |
| `design/README.md` | Print/export instructions + design-system tokens |
| `design/assets/` | hero-aerial.jpg, logo-white.png |

## Locked copy standards (do not drift)
- Golf-cart incentive ALWAYS worded: **"free custom golf cart with your custom home."**
- Tax rate **1.552%** (~half of nearby Flower Mound / Lantana).
- Contact: **Michael Cannaday · 817.371.4848 · estatesofcoppercreek.com**
- Mailer is EDDM, **11"×6.25"** (2200×1250 @ 200dpi), tour-driven (no event date).

## Open blockers before the mailer prints (client confirms)
1. **Real Denton County tax numbers** — keep printed claims soft until verified.
2. **Golf-cart offer mechanics** — value, custom vs. standard, one-per-lot, July-only,
   lot vs. lot+build, restrictions, and how the title company papers it.
3. **Golf-cart vendor photo** for the art.

## Suggested next build (not done yet — source design bundle had these)
- **Mailer BACK** (features, tax comparison, QR, offer detail) — completes the EDDM piece.
- **Instagram carousel templates.**
- **Web landing page** — style-guide components map directly to `05-landing-page.md`.
- The original Claude Design handoff (full HTML prototypes for all of the above) lives at the
  design link the user can re-fetch if needed.

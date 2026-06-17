# Copper Creek — Designed Pieces (implemented)

Production builds of the Claude Design handoff (claude.ai/design), implemented against the
**Copper Creek design system**. These are real, press-ready artifacts — not mockups.

## Files
| File | What it is |
|------|-----------|
| `copper-creek-mailer-front.html` | EDDM mailer, FRONT side. Print-ready (trim + bleed + crop marks). |
| `assets/hero-aerial.jpg` | Full-bleed hero (Copper Creek aerial) |
| `assets/logo-white.png` | Copper Creek wordmark, white |

## Mailer Front — specs
- **Size:** EDDM, 11" × 6.25" trim (2200 × 1250 @ 200dpi), with 0.125" bleed all sides.
- **On screen:** scales to fit the viewport (JS `fit()`), shown on a dark stage with the art's
  drop shadow — for review.
- **In print:** `@media print` lays it out at 11.25" × 6.5" (trim + bleed), scales the art to
  cover the bleed, and shows crop marks. To export a PDF: open in a browser → Print → save as
  PDF, **Background graphics ON**, margins None, size 11.25 × 6.5 in.

### Layout
- **Top-left:** Copper Creek wordmark + "Exclusive Opportunity" eyebrow
- **Top-right:** circular gold incentive seal — *This July · Free Custom Golf Cart · with your custom home*
- **Lower-left:** serif italic headline *"Your forever home. Pay way less in taxes."* + subline
- **Footer bar:** "Schedule a Golf Cart Tour · 817.371.4848" / "Final Phase Now Selling · estatesofcoppercreek.com"

### Copy standards (locked — from project CLAUDE.md)
- Golf-cart incentive is **always** worded "free custom golf cart with your custom home."
  No "with qualified purchase" or other qualifiers.
- Tax rate **1.552%** (~half of nearby Flower Mound / Lantana).
- Contact: **Michael Cannaday · 817.371.4848 · estatesofcoppercreek.com**
- Keep tour-driven (no event date) unless told otherwise.

> Note: this realizes the FRONT described in `../01-mailer-copy.md` with the final approved
> copy and the real golf-cart-seal direction (supersedes the placeholder `[phone]`/headline
> in that doc for the front).

## Design system (for any further pieces — back, carousel, landing page)
From `copper-creek-style-guide.html` (v1.0):

**Color**
- Corten Copper `#A0522D` (primary accent) · hover `#8B4513`
- Warm Cream `#F0EAD6` · Near Black `#1A1A1A` · Limestone `#D4C9B0` · Warm Copper `#B87333`
- (Mailer uses a warmer cream `#F4ECDD` + sunset accents `#E7A94E`/`#F2C674` over photography.)

**Type**
- Serif: **Cormorant Garamond** (headlines, sentence case, never all-caps)
- Sans: **Inter** (body, eyebrows — eyebrows are the only uppercase element)

**Rules**
- Pill buttons (999px radius), hover darkens toward Corten — never lightens to gold.
- 8px card radius. Generous spacing (100px desktop section padding).
- Dark/cream sections alternate ~1:2. "Aged steel and Texas earth," not "Ritz-Carlton lobby."

## Not yet implemented (available in the handoff bundle if wanted next)
- Mailer BACK (v1/v2/v3 + final) — features, tax comparison, QR, offer detail
- Instagram carousel templates
- Web landing page (style-guide components map directly to `../05-landing-page.md`)

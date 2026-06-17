# Landing Page — Build Spec

Turns `05-landing-page.md` (copy) into something a developer can stand up. Standalone
campaign page, not part of the tywalls.com personal-brand site.

## Recommendation: keep it separate from tywalls.com
This is client-facing real-estate marketing with a different brand, audience, and goal than
Ty's personal site. Don't bolt it onto the existing Next.js app. Options, fastest first:

1. **Standalone single-page site** on its own domain/subdomain (e.g. `coppercreek.precisionbuilders.com`)
   — cleanest for QR codes and tracking. Recommended.
2. **A page builder** (Carrd/Framer/Webflow) if speed > control — can ship in a day,
   no deploy pipeline.
3. **A route in a dedicated Precision Builders site** if one already exists.

Whichever path: one page, one goal (book a tour), mobile-first.

## Routing / URL
- Public URL kept short for the QR + print: e.g. `coppercreek.build/tour` or `/july`.
- One canonical page. The QR on both mailers points here.

## Sections (map to copy in `05-landing-page.md`)
| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Hero | Full-bleed image + H1 + primary CTA + offer ribbon | CTA scrolls to / opens the form |
| 2 | 3 reasons | 3-up icon cards (stack on mobile) | land / taxes / custom |
| 3 | July offer | Banded callout + secondary CTA | swap to RSVP block during event window |
| 4 | Why Precision | Feature grid (7 items) + link to full sheet | pull from `03-feature-proof-sheet.md` |
| 5 | Social proof | Quote + finished-home carousel | real photos only, no stock |
| 6 | Lead form | Form → submit handler | the conversion goal |
| 7 | Footer | Contact, service area, socials | tappable phone |

## Lead capture (the one thing that must work)
**Fields:** first name, last name, phone (required), email (required), "what's prompting
your move?" (optional select: more land / lower taxes / kids graduated / just looking),
hidden UTM/source field.

**On submit:**
1. Store the lead (CRM, Google Sheet, or whatever the client checks daily).
2. Instant email/SMS notification to the client + sales contact — speed-to-lead is everything.
3. Auto-reply to the prospect: "Got it — we'll reach out within one business day."
4. Redirect to a thank-you state with the phone number (some will just call).

**Form backend options (no/low build):** Tally, Fillout, or a Formspree-style endpoint;
or wire to existing CRM if there is one. Avoid building auth/DB for a campaign page.

## Tracking
- One conversion event: `lead_submit`.
- Tag inbound by source: distinct UTM per channel (mailer-lantana, mailer-bridlewood,
  social, email, sms). The QR can encode `?utm_source=mailer&utm_campaign=july`.
- Optional: distinct QR per mailer to see which neighborhood pulls.

## Content/asset dependencies
- Hero image: finished home at golden hour + golf cart (real photo)
- Finished-home carousel: 4–6 real interiors/exteriors
- Customer quote: the one pulled from past-buyer calls
- Golf-cart photo from the vendor (for the offer section)
- Final phone number + service-area line
- Confirmed tax language (soft until real numbers land)

## Definition of done
- Loads fast on mobile, single clear CTA above the fold
- Form submits, stores, and fires the client notification + auto-reply
- QR on a printed proof resolves to the live page
- UTM source visible on at least one test lead

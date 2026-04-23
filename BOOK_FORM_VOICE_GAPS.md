# /book Form — Voice Alignment Gaps

This file tracks forbidden-vocab hits and generic-contractor voice found on
`https://client.handypioneers.com/book` during the HCP→/book cutover
(Apr 2026). The client site is owned by HP Estimator — fix these in the
HP Estimator admin copy deck, not in this repo.

## Forbidden vocab currently on /book

The 360° Method brand voice forbids: **handyman, estimate, free, cheap,
affordable, fix, repair, simple, easy, best**.

| Location | Current copy | Offending term |
|---|---|---|
| Browser tab title | "Handy Pioneers — Field Estimator" | `Estimator` |
| Step 2 subhead | "Share details so we can prepare a great estimate." | `estimate` |
| Step 3 subhead | "We'll use this to send your estimate and schedule your visit." | `estimate` |

## Generic-contractor phrasing (not forbidden, but off-voice)

- **Step 1** — "Enter your zip code to check service availability." — transactional, not consultative. Affluent-voice suggestion: *"Confirm your address is in our service corridor."*
- **Step 2 primary CTA** — "Continue" — flat. Try *"Next: your details"* or *"Share scope"*.
- **Step 2 service-type default** — "General Inquiry / Custom Request" — reads like a Zendesk form. Try *"Custom project"*.
- **Step 3 SMS-consent block** — stock Twilio boilerplate. Fine legally, but the affluent-voice version reframes it as *"We'll text you a window before we arrive — no marketing messages."*

## Voice gaps in flow / UX

- No confirmation screen copy observed yet (form not submitted during audit).
- No visible brand header on `/book` — renders on white, with a small phone link top-right. Looks like a generic lead form, not a Handy Pioneers consultation intake. Adding a header strip with the HP wordmark + "360° Consultation Intake" tagline would align with affluent positioning.
- Query-string source tracking (`?source=homepage-hero&path=project`) is accepted by the URL but is **not** stored in the submission payload the audit could detect. HP Estimator should capture `source` / `path` params so lead attribution from the marketing site flows through.

## HP Estimator backend items to make `/book` feel on-brand

1. **Admin-editable intake copy** — page title, step headings, field labels, CTA button text — so Marcin can edit voice without a code push.
2. **Confirmation screen** — after submit, show a Handy Pioneers-branded "Thank you, we'll reach out within one business day" page with the 360° Method promise, not the default HP Estimator success state.
3. **Confirmation email template** — affluent-voice auto-reply with next-step expectations, not a generic transactional receipt.
4. **Path A nurture trigger** — `?path=project` submissions should fire the Path A email sequence automatically (vs. Path B proactive, which is `/membership`).
5. **Lead attribution capture** — persist `source` and `path` query params on the submission record so CRM reports can segment leads by CTA location.
6. **Page title / meta** — replace "Field Estimator" with "Handy Pioneers — Schedule Your Consultation" so the browser tab, Google search result, and link previews are on-brand.

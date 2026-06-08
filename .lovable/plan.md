# Send contact form submissions to info@4nodetech.com

Right now the contact form in `src/routes/contact.tsx` just shows a toast and resets — nothing leaves the browser. To actually deliver submissions to your inbox, we need a backend that sends an email when the form is submitted.

I'll use **Lovable Emails** (built-in, no third-party account or API key needed). This requires enabling **Lovable Cloud** first, then verifying a sender domain.

## What I'll set up

1. **Enable Lovable Cloud** — provides the backend runtime needed to send email.
2. **Set up a sender email domain** — you'll go through a one-click setup dialog to verify a subdomain (e.g. `notify.4nodetech.com`) via DNS so emails come from your own brand. Until DNS is verified, the queue holds messages and sends them once verification completes.
3. **Provision email infrastructure** — queue, send route, suppression list, etc. (automatic).
4. **Create two app email templates**:
   - **Internal notification** → sent to `info@4nodetech.com` containing name, email, company, service, and the message.
   - **Auto-confirmation** → sent to the person who submitted the form, thanking them and confirming we'll respond within one business day.
5. **Create a public action route** `POST /api/public/contact` that:
   - Validates input with Zod (name, email, company, service, message — length limits + email format).
   - Sends both emails via the internal email queue.
   - Returns success/error JSON.
6. **Wire the form** in `src/routes/contact.tsx` to POST to that route and show the existing toast on success or an error toast on failure. No visual/design changes.

## Technical details

- New file: `src/routes/api/public/contact.ts` (TanStack server route, Zod validation, calls the internal `/lovable/email/transactional/send` route with service-role auth).
- New files: `src/lib/email-templates/contact-notification.tsx` and `src/lib/email-templates/contact-confirmation.tsx`, plus a registry update.
- Edit: `src/routes/contact.tsx` — replace the simulated `setTimeout` with a real `fetch('/api/public/contact', …)`.
- Recipient `info@4nodetech.com` is hardcoded in the server route (not exposed to the client).
- Idempotency key derived from email + timestamp to avoid duplicate sends on retries.

## What you'll need to do

- Approve enabling Lovable Cloud.
- Complete the email domain setup dialog when prompted (adds DNS records at your registrar — Lovable walks you through it). Sending starts working as soon as DNS verifies.

Shall I proceed?

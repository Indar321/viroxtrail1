# VIROX Store — Next.js starter

Premium printed T-shirt storefront starter built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Included now
- Responsive dark editorial storefront and mobile navigation
- Product grid with demo product data and size selection
- Client-side shopping bag (not yet persisted to a database)
- Search filtering, quantity controls and remove item
- Story, newsletter UI and responsive layout
- SEO metadata and environment variable template

## Important: integration status
This is the **first storefront phase**, not a production-ready store yet. The Cashfree checkout, verified payment webhook, Supabase database, secure inventory reservation, customer/order persistence, COD order API and protected admin dashboard still need to be implemented and configured before accepting orders. The checkout button intentionally shows a notice instead of taking a payment.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Deploy
1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Add environment variables from `.env.example` in Vercel only when the relevant integrations have been implemented.
4. Connect `virox.in` after the site builds successfully.

## Next implementation milestones
1. Supabase SQL migrations, Row Level Security and storage bucket policies.
2. Server-side product queries and cart/order creation with stock locking.
3. Cashfree sandbox session creation, signature-verified webhook, idempotency and payment reconciliation.
4. COD order creation and manual fulfilment status updates.
5. Authenticated admin dashboard with role-based authorization.
6. Email notifications, policies, accessibility, SEO, analytics and production testing.

## Security
- Never commit `.env.local` or API secrets.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` or `CASHFREE_SECRET_KEY` in client components or `NEXT_PUBLIC_*` variables.
- Never trust prices, discounts, stock quantities or payment status sent by a browser.
- Do not enable live payments until Cashfree webhooks and server-side verification are tested.

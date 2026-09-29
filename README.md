# Arpan Baniya — Portfolio

A personal Computer Engineering portfolio, designed as an evolving engineering notebook. Built with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and lightweight CSS interactions. Most content renders on the server; only the mobile menu requires a client component.

## Develop

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

## Content

- `data/projects.ts`: typed project records and case-study content.
- `data/links.ts`: centralized public URLs.
- `app/page.tsx`: the main portfolio.
- `app/projects/[slug]/page.tsx`: five pre-rendered project case studies.
- `app/globals.css`: responsive layout, design tokens, and reduced-motion support.

The original reference documents are kept locally and excluded from Git. The site deliberately omits education dates, phone numbers, unverified metrics, and unavailable project URLs. Diagrams are conceptual illustrations, not product screenshots.

## Environment

Copy `.env.example` to `.env.local` if needed. All values are public, never secrets.

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.example
NEXT_PUBLIC_FINANCIAL_AUTOMATION_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

The financial application and LinkedIn links are hidden until valid HTTPS URLs are provided. Vercel's production hostname is used for canonical URLs when `NEXT_PUBLIC_SITE_URL` is absent.

## Validate

```sh
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

Import `Arpanbaniya/portfolio` into a new Vercel project. Use the Next.js framework preset, repository root, and default build command. Deploy the `main` branch. Set optional environment variables in the project settings and redeploy after changes.

No database, private credentials, or backend services are required by the portfolio.

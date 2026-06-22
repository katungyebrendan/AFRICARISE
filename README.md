## MunghaRise Africa Website

This is the official MunghaRise Africa website built with Next.js.

MunghaRise Africa is an organization focused on empowering youth and women through skills, mentorship, and community transformation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Get Involved form configuration

The Get Involved page at `/get-involved` posts to `/api/appointment`, which sends emails using Resend:

1. MunghaRise Africa receives the application email.
2. Applicant receives a confirmation email.

Set these environment variables:

- `RESEND_API_KEY`
- `RESEND_FROM` (example: `MunghaRise Africa <onboarding@resend.dev>`)
- `ORG_EMAIL`

### Local development

1. Copy `.env.example` to `.env.local`
2. Fill in the Resend variables
3. Restart `npm run dev`

### Deployments

Make sure the Resend variables are set in your hosting provider environment variables (for example, Vercel Project Settings > Environment Variables) for the environment you are deploying.

You can start editing the pages by modifying files in the `app` directory.

## Deployment

Deploy on Vercel or any Next.js-compatible platform.

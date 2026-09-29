# OM Enterprises Realtor

Static production website for OM Enterprises, a property advisory firm in Ulwe, Navi Mumbai.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3030`.

## Routes

- `/`: homepage and primary conversion path
- `/projects`: current project-guidance categories without fake live inventory
- `/services`: full advisory service scope
- `/ulwe`: sector and connectivity guide
- `/about`: company and principal consultant
- `/contact`: phone, WhatsApp, office, and visit details

## Project structure

- `*.html`: semantic static routes with route-specific metadata
- `assets/css/site.css`: shared responsive design system
- `assets/js/site.js`: shared navigation, review, and reveal interactions
- `404.html`: branded not-found page
- `img/`: supplied property and advisory photography plus the social share image
- `fonts/`: self-hosted Geist variable font
- `PRODUCT.md`: durable product facts and constraints
- `.impeccable/surfaces/`: page direction contract

## Deployment

The site has no compile step. Vercel serves the repository as a static site. `vercel.json` adds clean URLs, long-lived asset caching, and baseline security headers.

## Important content constraint

There is no confirmed live property inventory or CRM integration. Do not present a project, price, or availability status as current without a maintained source.

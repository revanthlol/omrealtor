# OM Enterprises Realtor

Static production website for OM Enterprises, a property advisory firm in Ulwe, Navi Mumbai.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3030`.

## Project structure

- `index.html`: semantic homepage, responsive styles, and small interaction layer
- `404.html`: branded not-found page
- `img/`: supplied property and advisory photography plus the social share image
- `fonts/`: self-hosted Geist variable font
- `vendor/`: pinned GSAP runtime used for the two scroll interactions
- `PRODUCT.md`: durable product facts and constraints
- `.impeccable/surfaces/`: page direction contract

## Deployment

The site has no compile step. Vercel serves the repository as a static site. `vercel.json` adds clean URLs, long-lived asset caching, and baseline security headers.

## Important content constraint

There is no confirmed live property inventory or CRM integration. Do not present a project, price, or availability status as current without a maintained source.

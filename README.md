# Ornith-1.0-9B Site

Static landing page for `deepreinforce-ai/Ornith-1.0-9B`, built with Vite and designed for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm run test
```

## GitHub Pages Deployment

Deployment target mapping:

`GitHub repository: gateszhangc/Ornith -> branch: main -> GitHub Pages project for gateszhangc/Ornith`

Dokploy is not used for this site. The included workflow at `.github/workflows/pages.yml` builds `dist/` and deploys it with GitHub Pages when `main` is pushed.

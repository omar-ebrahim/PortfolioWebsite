# Portfolio Web

Vite frontend for the portfolio site. Content is read from the Sanity project configured in `../Portfolio.Web.Studio`.

## Local setup

1. Copy `.env.example` to `.env` and set `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET`.
2. Install dependencies with `npm install`.
3. Start the frontend with `npm run dev`.
4. Start the Studio separately from `../Portfolio.Web.Studio` with `npm run dev`.

The frontend uses Sanity's public read API and does not require a token. It falls back to the existing local content when the API is unavailable or no matching documents have been published.

Allow the local browser origin once per Sanity project with `npx sanity cors add http://localhost:5173` from `Portfolio.Web.Studio`. Add the deployed frontend origin in the same way before production use.

## Content documents

Create and publish one `Top Section` document to control the name and job list. Create and publish `Service Type` documents to control the service cards. Service descriptions are authored as Portable Text in Studio and rendered as plain text by the frontend query.

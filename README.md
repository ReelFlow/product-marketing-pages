[README.md](https://github.com/user-attachments/files/27198960/README.md)
# ReelFlow — Product Marketing Page Generator

A browser-based tool that generates and publishes SEO-optimised product marketing pages directly to the ReelFlow Webflow CMS as drafts.

## What it does

1. You describe a problem or a product feature
2. The tool generates 3 page angle ideas, each with a proposed hero header and search query
3. You pick one
4. Claude writes all copy with full Style Guide and SEO Guide context, then selects feature blocks (using `Best for` matching), hero image, and FAQs from full indexes
5. The page is pushed to Webflow as a draft, ready to review and publish

The whole process takes about 45 seconds.

## Architecture

The tool is a single HTML file hosted on Netlify, plus a folder of markdown data files that mirror the Notion source-of-truth pages. Two serverless functions act as secure middleware — the browser never sees any API keys.

```
index.html                          ← the UI, no keys, no hardcoded data
data/                               ← markdown mirrors of Notion pages
  reelflow-context.md
  writing-style-guide.md
  seo-guide.md
  feature-block-index.md
  faq-library-index.md
  image-library.md
  README.md
netlify/functions/
  generate-page.js                  ← calls Anthropic API (holds ANTHROPIC_API_KEY)
  push-to-webflow.js                ← calls Webflow API (holds WEBFLOW_API_TOKEN)
netlify.toml                        ← Netlify build config
```

**Pipeline flow:**

```
Browser → loads /data/*.md files
       → call 1 (idea generation, with context)
       → user picks an idea
       → call 2 (copy writing, with full Style + SEO + Context)
       → call 3 (asset selection, with full Feature Block + FAQ + Image indexes)
       → push-to-webflow.js
       → Webflow CMS
```

Each call gets exactly the context it needs and nothing else, which produces sharper output than a single monolithic prompt. The Feature Block Index includes a `Best for` column that the asset selection call uses as the primary selection criterion — solving the previous "always picks Free trial" problem.

## Environment variables

Set these in Netlify → Site configuration → Environment variables:

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic API key for Claude |
| `WEBFLOW_API_TOKEN` | Webflow API token (CMS read/write only) |

## Webflow CMS target

- **Site:** reelflow.com (Marketing Website)
- **Collection:** Features (`69a10cbdc91986f8c6506cd1`)
- All pages are created as drafts (`isDraft: true`) — nothing publishes automatically

## Source of truth

**Notion is the canonical source of truth** for all the knowledge in `/data/`. The files in this repo are mirrors. When something changes in Notion, the corresponding `/data/` file must be updated to match.

There's no automated sync. The update workflow is manual but assisted by Claude:

1. Open a chat with Claude
2. Ask Claude to fetch the updated Notion page
3. Claude generates the new markdown file content
4. Commit the updated file to GitHub
5. Netlify auto-redeploys within ~60 seconds

This approach was chosen deliberately to avoid managing a Notion API token. If you ever want to automate it later, a Netlify scheduled function calling the Notion API would be straightforward to add.

## Files in /data/

| File | Notion source | Used by call |
|---|---|---|
| `reelflow-context.md` | ReelFlow Context | Idea generation, copy writing |
| `writing-style-guide.md` | Writing Style Guide | Copy writing |
| `seo-guide.md` | SEO Guide | Copy writing |
| `feature-block-index.md` | 🗂️ Feature Block Index | Asset selection |
| `faq-library-index.md` | 📋 FAQ Library Index | Asset selection |
| `image-library.md` | (HTML — Notion Image Library is out of date) | Asset selection |

## Live tool

Hosted at: `product-marketing-pages.netlify.app`
Password protected via Netlify Visitor Access.

## Making changes

Edit files in this repo and push to `main`. Netlify deploys automatically within ~60 seconds.

The main things you'd update:
- **Any file in `/data/`** when the corresponding Notion page changes
- **Pipeline prompts in `index.html`** when you want to adjust copy or selection logic
- **Field mapping in `index.html`** when the Webflow Features collection schema changes

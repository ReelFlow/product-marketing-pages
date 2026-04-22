# ReelFlow — Product Marketing Page Generator

A browser-based tool that generates and publishes SEO-optimised product marketing pages directly to the ReelFlow Webflow CMS as drafts.

## What it does

1. You describe a problem or a product feature
2. The tool generates 3 page angle ideas, each with a proposed hero header and search query
3. You pick one
4. Claude writes all copy (hero, intro, steps, CTAs, FAQs), applies style and SEO passes, selects feature blocks, a hero image, and FAQs
5. The page is pushed to Webflow as a draft, ready to review and publish

The whole process takes about 30 seconds.

## Architecture

The tool is a single HTML file hosted on Netlify. Two serverless functions act as secure middleware — the browser never sees any API keys.

```
index.html                          ← the UI (no keys)
netlify/functions/
  generate-page.js                  ← calls Anthropic API (holds ANTHROPIC_API_KEY)
  push-to-webflow.js                ← calls Webflow API (holds WEBFLOW_API_TOKEN)
netlify.toml                        ← Netlify build config
```

**Flow:**
Browser → `generate-page.js` → Claude API → Browser → `push-to-webflow.js` → Webflow CMS

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

## Live tool

Hosted at: `product-marketing-pages.netlify.app`
Password protected via Netlify Visitor Access.

## Making changes

Edit files in this repo and push to `main`. Netlify deploys automatically within ~60 seconds.

The main things you'd update in `index.html`:
- **BLOCKS constant** — feature block names, IDs, and image assignments
- **IMAGES constant** — hero image names and CDN URLs
- **FAQS constant** — FAQ names and Webflow item IDs
- **Pipeline prompt** — the instructions sent to Claude for page generation

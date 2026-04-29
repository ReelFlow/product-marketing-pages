# /data — Page Generator Knowledge Base

These files are mirrors of Notion pages that the page generator's pipeline calls reference. Each one is loaded by `index.html` at runtime via `fetch()` and passed as context to the relevant Claude API call.

**Notion is the source of truth.** When a Notion page is updated, the corresponding file here must be updated to match. There's no automated sync — manual update via a chat session with Claude.

## Files

| File | Notion source | Used by call |
|---|---|---|
| `reelflow-context.md` | ReelFlow Context | Idea generation, copy writing |
| `writing-style-guide.md` | Writing Style Guide | Copy writing |
| `seo-guide.md` | SEO Guide | Copy writing |
| `feature-block-index.md` | 🗂️ Feature Block Index | Asset selection |
| `faq-library-index.md` | 📋 FAQ Library Index | Asset selection |
| `image-library.md` | (HTML hardcoded — Notion Image Library is out of date) | Asset selection |

## Update workflow

When you change a Notion page:

1. Open a chat with Claude
2. Ask Claude to fetch the updated Notion page
3. Claude generates the new markdown file content
4. You commit the updated file to GitHub
5. Netlify auto-redeploys

That's it. No tokens to manage, no scripts to run.

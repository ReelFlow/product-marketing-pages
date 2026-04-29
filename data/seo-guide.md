# SEO Guide

> Source: Notion — SEO Guide (Last updated April 2026)
> Guide for generating SEO optimised product marketing content. These pages are query-led product marketing pages, not blog posts. The goal is to rank for a specific problem statement while still converting.

---

## 1. Treat the search query as the source of truth

- Every page must target **one clear primary query** based on the user problem
- `name` should be the raw search query in natural language
- `slug`, `hero_header`, `seo_title`, and `seo_meta_description` must all align to that query
- Do not broaden the topic. Do not target multiple intents on one page

## 2. The most important SEO work happens in the editable fields

The only fully generated sections are:
- `hero_header`
- `hero_subheader`
- `intro_label_text`
- `intro_title`
- `intro_subtitle`
- `steps_title`
- `section_faqs_title`
- `cta_title`
- `cta_subtitle`
- `seo_title`
- `seo_meta_description`

These fields must do the SEO heavy lifting because the feature blocks, steps items, and FAQs are mostly selected from fixed libraries.

## 3. Use the hero to answer the query — but frame it as a solution, not a repetition

- `hero_header` must include the primary keyword clearly
- Do not repeat the query verbatim as the H1. Rephrase it as a solution statement that still contains the keyword
- Example: the query "how to reduce event website bounce rate" becomes "Reduce your event website bounce rate" — not "How to reduce event website bounce rate"
- The hero should feel like a product page answering the search, not a blog post title
- `hero_subheader` must do two things: (1) acknowledge the problem the visitor searched for, and (2) introduce ReelFlow's interactive video as the mechanism that solves it. This is where the product positioning lives — not in the H1
- Example subtitle: "Most event websites lose visitors in seconds. ReelFlow's interactive video gives every visitor a reason to stay and a clear path to follow."
- Do not write a subtitle that is benefit-only without naming the mechanism. Do not write vague brand copy

## 4. Use the intro section to deepen intent

- `intro_title` should expand the exact buyer problem behind the query
- `intro_subtitle` should explain why the problem exists and position ReelFlow as the practical answer
- This section should create semantic differentiation between similar pages
- Do not repeat the hero in different words

## 5. Feature blocks are not custom copy, so selection matters

- Select feature blocks based on the exact search intent
- Choose blocks that support the query directly, not just generally relevant product features
- Broad topics can use 4 blocks. Narrow topics should use 3
- Avoid combinations that make different pages feel interchangeable

## 6. FAQs should capture follow-up searches

- Pick 3 to 5 FAQs that reflect the likely next questions a searcher would ask
- Prefer FAQs that contain natural keyword variations and practical concerns
- Do not select generic FAQs unless they clearly support the page intent
- The FAQ section should help the page rank for adjacent long-tail searches

## 7. The steps section can stay structurally fixed, but the title must be query-aware

- `steps_items` never changes
- `steps_title` must connect the standard process to the page's specific problem
- The title should make the section feel relevant to the query, even though the steps are fixed

## 8. Write for clarity, not SEO theatre

- Use the keyword naturally
- Do not keyword stuff
- Do not use jargon, fluffy claims, or abstract positioning language
- Prefer simple, direct phrasing that matches how someone would actually search

## 9. Metadata must be tightly aligned

- `seo_title`: keyword-led, clear, under about 60 characters, ends with `| ReelFlow`
- `seo_meta_description`: 120 to 155 characters, includes the keyword once, explains the benefit, no jargon
- Metadata should reinforce the exact query, not just describe the product broadly

## 10. Every page must feel distinct in the first screenful

Because much of the page is modular, the editable sections must make each page feel meaningfully different.

A page is strong if:
- the hero directly matches the query
- the intro sharpens the specific buyer problem
- the selected blocks and FAQs clearly fit that intent

A page is weak if:
- the hero is generic
- the intro could fit any page
- the blocks and FAQs feel reusable across too many topics

---

## Simple execution checklist

Before returning the JSON, confirm:

- one clear primary query
- hero header includes that query
- hero subheader states the benefit clearly and names the mechanism
- intro title and subtitle deepen the same intent
- feature blocks directly support the query
- FAQs reflect likely follow-up searches
- steps title is problem-aware
- seo title and meta description align with the same query
- nothing sounds generic enough to fit every page

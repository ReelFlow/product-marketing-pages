# Feature Block Index

> Source: Notion — 🗂️ Feature Block Index (Last updated April 2026)
> Complete lookup table of all feature blocks in the Webflow CMS — with their Webflow item IDs, cluster classification, and `Best for` guidance.

**Total blocks: 84 active across 10 clusters, plus 3 legacy (do not select)**

The page generator uses this index to intelligently select 3–4 relevant blocks for each new feature page, based on the page topic and search intent.

---

## Cluster Priority Guide

| If the page topic is about... | Prioritise these clusters |
|---|---|
| Getting more leads / demo bookings / conversions | Value Prop, Universal, Inline Player |
| Interactive video / engagement / website experience | Build, Overlay, Value Prop |
| Easy setup / no dev / quick start | Universal, Build, Integrations |
| AI / video creation / scaling content | AI Features, Create |
| Analytics / proving ROI / attribution | Measure, Value Prop |
| Integrations / existing stack / chatbot | Integrations, Universal |
| B2B buyer behaviour / trust / brand | Value Prop, Universal |
| Overlay player specifically | Overlay, Value Prop, Universal |
| Inline player specifically | Inline, Value Prop, Universal |
| Event registrations / event marketing / event websites | Events, Value Prop, Universal |
| Sponsorship / event sponsors | Events, Value Prop |
| Event exhibitors / stand ROI | Events, Universal |
| Event ticket sales / attendee conversion | Events, Universal, Value Prop |
| Event speakers | Events, Universal |

---

## Selection Rules

- Select exactly 3 blocks per page (4 if topic is broad)
- Maximum 1 block per cluster per page
- Must span at least 2 different clusters
- Universal Value blocks are eligible like any other cluster — include one only when a Universal block is genuinely the best fit for the page topic, not by default. If no Universal block adds real value, pick a third block from another relevant cluster instead.
- **Cite the Best for line** when justifying each pick — selection must be based on the documented fit, not vibes
- Prefer blocks whose Best for line, title, and body most directly match the visitor's search intent
- For Events pages: pick the 1–2 most specific blocks for the exact topic — the cluster is large
- **Image rule**: After selecting blocks, note the image name for each. The page's hero image must not match any of them. Choose any image from the 14 available that isn't already used by a selected block.

---

## 🟦 Cluster: Universal Value (7 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Universal Free trial | 69c16d02eaa5293f7dbab52a | 1920x1080 | Pages where the buyer's main objection is risk or commitment — pricing, plans, getting-started topics. Not a default safe choice. |
| Universal Lightweight and fast | 69c16d02eaa5293f7dbab536 | 1920x1080-1 | Pages where site performance, page speed, or technical concerns are the visitor's worry — common on dev-adjacent or technical pages. |
| Universal Mobile ready | 69c16d02eaa5293f7dbab533 | 1920x1080-2 | Pages where mobile experience matters explicitly — mobile-first audiences, responsive design topics, B2C-flavoured B2B. |
| Universal No dev required | 69c16d02eaa5293f7dbab524 | 1920x1080-3 | Pages targeting non-technical buyers (marketers, event organisers, founders) where ease of setup is the unblocker. |
| Universal People buy from people | 69c170b9bbdaf5cd893a8454 | 1920x1080-4 | Pages about trust, brand, human connection, AI saturation, or differentiation through authenticity. |
| Universal Results that matter | 69c16d02eaa5293f7dbab52d | 1920x1080-5 | Pages about ROI, performance, measurable outcomes, or where the buyer needs proof before committing. |
| Universal Works on any website | 69c16d02eaa5293f7dbab527 | 1920x1080-6 | Pages where the visitor's worry is "will this work with my existing setup" — platform/integration adjacent. |

---

## 🟩 Cluster: Value Proposition (9 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Value Prop Build trust before first meeting | 69c16d233ea66ae12339235f | 1920x1080-7 | Pages about lead quality, sales cycles, preferred-vendor lists, or B2B research behaviour. |
| Value Prop Buyers prefer video | 69c16d233ea66ae123392365 | 1920x1080-8 | Pages about engagement, content format, or why video over text — entry-level value-prop framing. |
| Value Prop Engage silent researchers | 69c16d233ea66ae12339235c | 1920x1080-9 | Pages about anonymous traffic, dark funnel, top-of-funnel pipeline, or buying committees. |
| Value Prop Give your chatbot a human introduction | 69c16d233ea66ae123392362 | 1920x1080-10 | Pages about chatbots, conversational marketing, or replacing/augmenting chat tools. |
| Value Prop Human connection at scale | 69c16d233ea66ae12339236e | 1920x1080-11 | Pages about scaling, AI saturation, brand authenticity, or doing more with limited team. |
| Value Prop Reduce sales friction | 69c16d233ea66ae12339236b | 1920x1080-12 | Pages about sales cycles, sales enablement, qualification, or shortening time-to-close. |
| Value Prop Video creation has changed | 69c170b9bbdaf5cd893a8451 | 1920x1080-13 | Pages about the cost or speed of video production — directly addresses "video is too hard" objection. |
| Value Prop Website as best salesperson | 69c16d233ea66ae123392368 | 1920x1080-14 | Pages about website performance, conversion, or the website-as-salesperson framing. |
| Value Prop Website performance crisis | 69c170b9bbdaf5cd893a8448 | 1920x1080 | Pages about declining website metrics, bounce rate, time on site, or fixing underperforming sites. |

---

## 🟧 Cluster: Overlay Player (4 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Overlay What it is | 69c16d57a5d88f63342a4f43 | 1920x1080-1 | Pages introducing the Overlay Player, especially when the visitor is unfamiliar with the format. The "explainer" block. |
| Overlay Eye-catcher | 69c16d57a5d88f63342a4f46 | 1920x1080-4 | Pages about engagement, attention, or how the Overlay catches visitors without being intrusive. |
| Overlay Activation control | 69c16d57a5d88f63342a4f4f | 1920x1080-7 | Pages about flexibility, page-by-page configuration, or for visitors comparing player behaviours. |
| Overlay Enhance chatbot | 69c16d57a5d88f63342a4f4c | 1920x1080-10 | Pages about chatbots specifically, or about combining ReelFlow with existing conversational tools. |

---

## 🟨 Cluster: Inline Player (5 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Inline What it is | 69c16d57a5d88f63342a4f52 | 1920x1080-2 | Pages introducing the Inline Player to visitors unfamiliar with embedded interactive video. The "explainer" block. |
| Inline Higher engagement | 69c16d57a5d88f63342a4f58 | 1920x1080-5 | Pages about engagement, watch time, or interactivity vs passive video. |
| Inline Landing page conversion | 69c16d57a5d88f63342a4f55 | 1920x1080-8 | Pages about landing pages, conversion rate, or replacing static landing page elements. |
| Inline One line of code | 69c16d57a5d88f63342a4f5e | 1920x1080-11 | Pages where ease of installation is the visitor's main concern — non-technical or quick-setup framing. |
| Inline Product pages | 69c16d57a5d88f63342a4f5b | 1920x1080-14 | Pages about product pages specifically, product marketing, or alternatives to feature lists and screenshots. |

---

## 🟥 Cluster: Build (6 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Build Choose your own adventure | 69c16d57a5d88f63342a4f64 | 1920x1080-3 | Pages about interactivity, branching, or the core concept of visitor-led journeys. |
| Build Instant publish and update | 69c16d57a5d88f63342a4f70 | 1920x1080-6 | Pages about agility, speed-to-market, or for buyers who need to iterate quickly. |
| Build No-code canvas | 69c16d57a5d88f63342a4f61 | 1920x1080-9 | Pages about ease of use, no-code tools, or for non-technical users building their first Flow. |
| Build Pre-flight checks | 69c16d57a5d88f63342a4f6a | 1920x1080-12 | Pages about quality control, polish, or for buyers worried about publishing errors. |
| Build Preview on your live site | 69c16d57a5d88f63342a4f6d | 1920x1080-1 | Pages about confidence before publishing, testing, or for cautious / brand-sensitive buyers. |
| Build Scripts and captions | 69c16d57a5d88f63342a4f67 | 1920x1080-13 | Pages about the writing or production process — combines planning, scripting, and captioning into one. |

---

## 🟪 Cluster: Measure (5 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Measure Beyond vanity metrics | 69c16da01d891da21fb9e668 | 1920x1080-4 | Pages about real ROI, buyer intent, or moving past view counts and play rates. |
| Measure Button engagement | 69c16da01d891da21fb9e662 | 1920x1080-7 | Pages about decision tracking, buyer choices, or per-step engagement insights. |
| Measure SEO benefits | 69c16da01d891da21fb9e66b | 1920x1080-10 | Pages about SEO, search performance, or accessibility — where measurement supports search ranking. |
| Measure UTM attribution | 69c16da01d891da21fb9e665 | 1920x1080-13 | Pages about CRM integration, conversion attribution, or downstream tracking in marketing tools. |
| Measure What gets tracked | 69c16da01d891da21fb9e65f | 1920x1080-2 | Pages introducing ReelFlow's measurement capabilities to buyers unfamiliar with the analytics. The "what you get" block. |

---

## 🔶 Cluster: AI Features (7 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| AI Flow suggestions | 69c16da01d891da21fb9e66e | 1920x1080-5 | Pages about getting started, content strategy, or for buyers unsure where to begin with video. |
| AI Human and AI together | 69c16da01d891da21fb9e67d | 1920x1080-8 | Pages about the mix of authentic and AI-generated content, or for buyers wary of going fully AI. |
| AI Removes the blank page problem | 69c170b9bbdaf5cd893a845a | 1920x1080-11 | Pages about content velocity, overcoming inertia, or for buyers who know they need video but feel stuck. |
| AI Script writing | 69c16da01d891da21fb9e671 | 1920x1080-14 | Pages about scriptwriting specifically, or for buyers blocked by the writing step. |
| AI Stand-In speed | 69c16da01d891da21fb9e677 | 1920x1080-3 | Pages about content velocity, fast updates, or replacing studio shoots for routine updates. |
| AI Stand-In transparency | 69c16da01d891da21fb9e67a | 1920x1080-6 | Pages about responsible AI, disclosure, or for buyers concerned about authenticity and trust. |
| AI Video Stand-Ins what they are | 69c16da01d891da21fb9e674 | 1920x1080-9 | Pages introducing AI Video Stand-Ins to visitors unfamiliar with the concept. The "explainer" block. |

---

## 🎬 Cluster: Create (6 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Create Automatic captions | 69c16da01d891da21fb9e689 | 1920x1080-12 | Pages about accessibility, captions, or for buyers worried about post-production work. |
| Create In-house recording | 69c16da01d891da21fb9e680 | 1920x1080-1 | Pages about authenticity, cost-effective production, or for buyers wanting to record on their own kit. |
| Create Keep videos short | 69c16da01d891da21fb9e68c | 1920x1080-4 | Pages about attention spans, content format, or the "long video doesn't work" objection. |
| Create Professional videographer | 69c16da01d891da21fb9e683 | 1920x1080-7 | Pages about polish, premium production, or for brand-conscious buyers wanting outside support. |
| Create Remote studio support | 69c16da01d891da21fb9e686 | 1920x1080-10 | Pages about distributed teams, remote-first production, or for buyers who want guidance without in-person crews. |
| Create Upload specs | 69c16da01d891da21fb9e68f | 1920x1080-13 | Pages about technical requirements, for visitors evaluating fit with their existing video assets. |

---

## 🔌 Cluster: Integrations (8 blocks)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Integrations CRM attribution | 69c16da01d891da21fb9e69b | 1920x1080-2 | Pages about CRM integration, lead attribution, or pipeline tracking from website traffic. |
| Integrations Chatbot handoff | 69c16da01d891da21fb9e698 | 1920x1080-5 | Pages about chatbots, conversational marketing, or for buyers wanting to combine ReelFlow with existing chat tools. |
| Integrations GA4 and HubSpot | 69c16da01d891da21fb9e695 | 1920x1080-8 | Pages about analytics, marketing operations, or for buyers asking "does this work with my reporting tools". |
| Integrations Google Tag Manager | 69c16da01d891da21fb9e6a1 | 1920x1080-11 | Pages about deployment, GDPR / consent mode, or for buyers managing scripts via GTM. |
| Integrations Player API | 69c16da01d891da21fb9e6a4 | 1920x1080-14 | Pages about advanced setups, technical flexibility, or for engineering audiences. |
| Integrations ReelFlow + chatbot | 69c16fb2458a1b1693046d87 | 1920x1080-3 | Pages where the framing is the *combination* of video and chatbot, not just integration support. |
| Integrations Webflow and WordPress | 69c16da01d891da21fb9e69e | 1920x1080-6 | Pages targeting specific CMS platforms or platform-agnostic setup. |
| Integrations Works with your stack | 69c16da01d891da21fb9e692 | 1920x1080-9 | Pages where the visitor's worry is "do I have to replace anything" — entry-level integration framing. |

---

## 🎪 Cluster: Events (23 blocks)

Use for any page targeting event organisers, event marketers, exhibitors, sponsors, or speakers. Pick the 1–2 most specific blocks for the exact page topic.

### Registrations & Attendees

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Events Build trust before ticket purchase | 69c1723f480932523b994f4b | 1920x1080-12 | Pages about delegate research behaviour, ticket-buying hesitation, or trust-building pre-registration. |
| Events Improve attendee quality not just quantity | 69c1723f480932523b994f48 | 1920x1080 | Pages about delegate quality, sponsor-attractiveness, or audience curation. |
| Events Improve event homepage performance | 69c172051e3b32c012a7700a | 1920x1080-3 | Pages about event homepage conversion, multi-audience pages, or top-of-funnel event marketing. |
| Events Improve event landing page conversion | 69c172051e3b32c012a76ffe | 1920x1080-6 | Pages about event landing page performance specifically — campaign pages, paid traffic destinations. |
| Events Improve event sales funnel | 69c1723f480932523b994f5d | 1920x1080-9 | Pages about the full funnel from awareness to registration, or funnel diagnostics. |
| Events Increase conversion from email traffic | 69c1723f480932523b994f60 | 1920x1080-12 | Pages about email-driven traffic, post-click experience, or warming up known audiences. |
| Events Increase event registrations | 69c172051e3b32c012a76ff5 | 1920x1080-1 | Pages about registration volume — the headline event-marketer goal. |
| Events Increase repeat attendees | 69c1723f480932523b994f4e | 1920x1080-4 | Pages about returning delegates, repeat-event marketing, or year-on-year retention. |
| Events Increase ticket sales without discounting | 69c172051e3b32c012a76ffb | 1920x1080-7 | Pages about pricing pressure, paid-event conversion, or alternatives to discounting. |
| Events Multi-audience challenge | 69c1723f480932523b994f6c | 1920x1080-10 | Pages about serving attendees, sponsors, exhibitors, and speakers from one website. |
| Events Personalise event website experience | 69c1723f480932523b994f54 | 1920x1080-13 | Pages about personalisation, branching, or tailoring website content per visitor type. |
| Events Reduce event website bounce rate | 69c172051e3b32c012a77007 | 1920x1080-2 | Pages about bounce rate, first-impression engagement, or stopping visitors leaving. |
| Events Reduce no-shows | 69c1723f480932523b994f51 | 1920x1080-5 | Pages about post-registration engagement, attendance rates, or event-day showup. |
| Events Why event website not converting | 69c172051e3b32c012a76ff8 | 1920x1080-8 | Pages about diagnosing low conversion — directly addresses the "what's wrong" framing. |

### Organisers (wider)

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Events 365 days of engagement | 69c1723f480932523b994f69 | 1920x1080-11 | Pages about year-round audience nurture, between-edition activity, or building event communities. |
| Events Content marketing between events | 69ce4353439bbdf18745fa4a | 1920x1080-14 | Pages about content marketing, off-season activity, or maintaining event website relevance. |
| Events Differentiate your event from competition | 69ce4353439bbdf18745fa47 | 1920x1080 | Pages about competitive differentiation, crowded markets, or standing out among similar events. |
| Events Prove ROI to sponsors and exhibitors | 69ce4353439bbdf18745fa44 | 1920x1080-3 | Pages about ROI proof, renewal conversations, or post-event reporting for commercial partners. |

### Exhibitors

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Events Help exhibitors attract stand visitors | 69ce4353439bbdf18745fa4d | 1920x1080-6 | Pages about driving stand traffic, pre-event engagement, or warming up delegate-exhibitor connections. |
| Events Help exhibitors convert stand visits into pipeline | 69ce4353439bbdf18745fa50 | 1920x1080-9 | Pages about post-stand pipeline, qualification, or turning conversations into deals. |
| Events Help exhibitors justify stand investment | 69ce437194df56f7161aa2bd | 1920x1080-12 | Pages about exhibitor ROI, internal CFO conversations, or proving stand value. |

### Sponsors

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Events Give sponsors a voice beyond logo placement | 69ce437194df56f7161aa2c0 | 1920x1080-1 | Pages about sponsor experience, modern sponsorship, or moving beyond logo-on-banner. |
| Events Give sponsors measurable engagement data | 69ce437194df56f7161aa2c3 | 1920x1080-4 | Pages about sponsor analytics, engagement reporting, or data-backed renewal conversations. |
| Events Increase sponsorship enquiries from website | 69c1723f480932523b994f42 | 1920x1080-7 | Pages about sponsor acquisition, sponsorship page conversion, or generating inbound sponsor interest. |
| Events Increase sponsorship revenue | 69c1723f480932523b994f3f | 1920x1080-10 | Pages about sponsorship revenue growth, commercial event-marketer goals, or top-line sponsor metrics. |

### Speakers

| Internal Name | Webflow ID | Image | Best for |
|---|---|---|---|
| Events Attract better speakers to your event | 69ce437194df56f7161aa2c6 | 1920x1080-13 | Pages about speaker acquisition, speaker quality, or building speaker pipelines. |
| Events Help speakers promote their session | 69ce437194df56f7161aa2c9 | 1920x1080-2 | Pages about speaker advocacy, session promotion, or turning speakers into marketing channels. |

---

## 🗂️ Cluster: Legacy (3 blocks — do not select for new pages)

These are the original published blocks from before this library was built. Do not select for new feature pages.

| Internal Name | Webflow ID | Image |
|---|---|---|
| Interactive Flows Built for B2B websites | 69a1565d264b28a250773345 | 1920x1080-5 |
| Interactive Flows Guide visitors, not just views | 69a1565d264b28a250773342 | 1920x1080-8 |
| Interactive Flows Results that matter | 69a1565d264b28a250773348 | 1920x1080-11 |

# SEO Content Strategy — Titus Global Montessori

Status: draft for review · Date: 2026-10-08 · Scope: organic growth beyond the on-page
foundation that is already shipped (titles/descriptions, FAQPage schema, LocalBusiness
schema, canonical + OG, sitemap, internal linking).

## 1. Where the site stands

| Foundation | Status |
|---|---|
| Per-route titles (50–60ch) + meta descriptions (150–160ch) | ✅ shipped |
| One keyword-bearing H1 per page, location in first 100 words | ✅ shipped |
| FAQPage JSON-LD matching visible content (14 routes) | ✅ shipped |
| LocalBusiness + EducationalOrganization schema, canonical, OG | ✅ shipped |
| Absolute sitemap + robots, 3–5 in-content internal links per page | ✅ shipped |
| Blog / guide infrastructure | ❌ this document |
| Google Business Profile claim/verify | ❌ owner action |
| Fees published (blocked decision) | ❌ blocks the highest-intent cluster |

**Constraint that shapes everything:** this is a client-rendered SPA. Google renders
JS, so new pages index fine, but Bing/social scrapers see only the static shell.
Every new page must be added in three places: `src/router/index.js` (route + `seo`
entry), `src/data/pageFaqs.js` (FAQ block), `public/sitemap.xml` (absolute URL).

## 2. Keyword map

### Transactional / commercial (money queries)

| Keyword | Intent | Lands on |
|---|---|---|
| montessori teacher training in chennai | Commercial | `/` (primary head term) |
| montessori course in poonamallee | Transactional | `/` + future location page |
| diploma in montessori teacher training chennai | Commercial | `/courses` |
| nursery teacher training chennai | Commercial | `/courses` |
| ecce course in chennai | Commercial | `/courses/certificate-in-early-childhood-care-and-education` |
| teacher training institute near me | Local | GBP + `/contact` |
| montessori course fees in chennai | Commercial | **needs fees policy** (cluster 1) |

### Informational (cluster fuel)

| Keyword | Intent | Anchors to |
|---|---|---|
| what is montessori education | Informational | `/curriculum` |
| montessori vs nursery teacher training | Commercial-investigation | `/courses` |
| eligibility for montessori course after 12th | Informational | `/admissions` |
| how to become a montessori teacher in tamil nadu | Informational | `/admissions` |
| montessori teacher salary in chennai | Informational | `/careers` |
| online vs offline montessori course | Commercial-investigation | on-campus positioning |
| montessori course syllabus / subjects | Informational | `/curriculum` + syllabus flag |

> Note: the supplied research report suggested targeting "online Montessori training
> in Chennai". The institute is on-campus only, so we answer that query honestly
> (why on-campus hours are required) rather than chase it with a claim we can't back.

## 3. Pillar + cluster architecture

```
PILLAR (guides/montessori-teacher-training-chennai)
"Montessori Teacher Training in Chennai: Courses, Fees, Eligibility & Careers" (2,500–3,000 words)
│
├── Cluster 1 · Fees & eligibility        → montessori course fees in chennai
│     BLOCKED until fees policy decided ("Contact admissions" vs published figures)
├── Cluster 2 · Certificate vs Diploma    → which montessori course should i take
│     links: /courses, each relevant course page
├── Cluster 3 · What is Montessori method → what is montessori education
│     links: /curriculum, /student-experience · outbound: Montessori method refs
├── Cluster 4 · Careers & salary          → montessori teacher salary in chennai
│     links: /careers, /student-experience · honest, no-guarantee framing preserved
├── Cluster 5 · Online vs on-campus       → online montessori course in chennai
│     answers the query, converts to on-campus value, links /admissions
└── Cluster 6 · Syllabus & subjects       → montessori course syllabus
      BLOCKED until syllabusDownload feature flag is re-enabled
```

**Linking rule:** every cluster links → pillar, → `/courses`, → one money page
(`/admissions` or `/apply`). The pillar links → all clusters. The homepage
"Choose your pathway" section links the pillar once it exists.

## 4. Page template (keeps build cost low)

Each guide page reuses existing components:

- `PageHeader` (title = H1 with primary keyword, description with location)
- Prose section with H2s per secondary keyword, 2–3 internal links per H2
- One `FaqList` block added to `src/data/pageFaqs.js` → FAQPage schema for free
- `CtaBanner` → `/apply`
- Router `seo` entry (title 50–60ch, description 150–160ch) + absolute sitemap URL

**Publishing cadence:** 1 pillar, then 2 clusters per month. Update the pillar each
time a cluster ships (add the link + one paragraph) — this is what builds the topical
authority the report says the site lacks.

## 5. E-E-A-T additions (report findings)

1. **Author byline** — attribute guides to the principal (credential line:
   "Reviewed by [Name], Principal, The Titus Global Montessori Teacher Training
   Academy"). `PrincipalSpotlight` data already exists.
2. **Last updated date** on guides and on admissions/fees pages.
3. **Google Business Profile** — claim, verify, and match NAP exactly to
   `src/data/site.js` (name "The Titus Global", +91 94451 57092, Poonamallee address).
4. **Reviews** — the site displays "4.8 rated by 200+ trainees"; be ready to show the
   source if asked, and collect GBP reviews (local pack is the highest-intent surface).
5. **Real contact details** — replace `admissions@example.com` and `#` social links;
   the guards in `site.js` enable them automatically when supplied.

## 6. Dependencies to resolve first

| Decision | Blocks |
|---|---|
| Publish fees vs "Contact admissions" | Cluster 1 (highest-intent keyword) |
| Re-enable `siteConfig.features.syllabusDownload` | Cluster 6, "syllabus you can download" copy |
| Real admissions email + social URLs | GBP consistency, `sameAs` in schema |
| Brand name: "The Titus Global" vs "Titus Global Montessori" | NAP consistency everywhere |

## 7. Measurement

- GA4/GSC: verify property, submit sitemap, track `view_item_list` on `/courses`,
  `generate_lead` on apply/contact/brochure submits.
- Call tracking per the report: unique numbers or tag `tel:`/`wa.me` clicks as events.
- Review monthly: impressions by page (GSC) → pick the next cluster from queries the
  site already gets impressions for but ranks 8–20.

# [Institute Name] — Montessori Teacher Training

Professional teacher-training website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
cd montessori-institute
npm install
npm run dev
```

## Edit content

All editable copy lives in `src/data/`:

| File | Contents |
|------|----------|
| `site.ts` | Institute name, location, contact, homepage copy |
| `courses.ts` | Programme details |
| `trainers.ts` | Trainer profiles (placeholders) |
| `testimonials.ts` | Graduate quotes (placeholders) |
| `faqs.ts` | FAQ items |
| `curriculum.ts` | Module list |
| `courseFinder.ts` | Interactive questionnaire |
| `batches.ts` | Application batch options |

## PHP backend (TODO)

Forms use mock submission. Search for `TODO: Connect to PHP API` in:

- `src/components/forms/ApplicationForm.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/BrochurePage.tsx`

## Pages (15 routes)

Home, About, Courses, Course Detail, Curriculum, Admissions, Apply, Trainers, Student Experience, Careers, FAQs, Contact, Brochure, Privacy, Terms

## Build

```bash
npm run build
```

Deploy the `dist/` folder to your static host or integrate with a PHP API layer.

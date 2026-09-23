/** @format */

import { getNextBatchLabel } from "../utils/batch.js";

const nextBatch = getNextBatchLabel();

export const siteConfig = {
  instituteName: 'The Titus Global',
  instituteFullName: 'The Titus Global Montessori Teacher Training Academy',
  logo: {
    src: '/images/logo.png',
    alt: 'The Titus Global Montessori Teacher Training Academy',
  },
  tagline:
    'On-campus teacher training — certificates, diplomas, and advance diplomas',
  announcement: {
    urgency: `New batch forming — ${nextBatch} · Limited seats per programme`,
    tagline:
      '13 on-campus programmes · Syllabus-led training · Certificate to advance diploma',
    message:
      'Applications open for certificate, diploma, and advance diploma batches',
    batchDate: nextBatch,
    ctaHref: '/apply',
  },
  contact: {
    email: 'admissions@example.com',
    phone: '+91 95000 96930',
    phoneTel: '+919500096930',
    whatsapp: 'https://wa.me/919500096930',
    address: '[Street address], [City], [Country]',
    hours: 'Monday to Friday, 9:00 am to 5:00 pm',
    counsellorHours: 'Admissions counselling: 9:00 am – 6:00 pm (editable)',
  },
  social: [
    { label: 'Instagram', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'YouTube', url: '#' },
  ],
  instagram: {
    handle: '@your_institute',
    profileUrl: '#',
    title: 'Follow us on Instagram',
    description:
      'Training moments, classroom practice, and community highlights from our institute.',
  },
  brochureUrl: '/downloads/course-brochure.pdf',
  hero: {
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
    imageAlt:
      'Adult Montessori trainees practising with wooden learning materials',
    badge: '13 on-campus programmes',
    title: 'Teacher training',
    titleHighlight: 'for every',
    titleSuffix: 'stage of your career',
    subtitle:
      'From 3-month certificates in phonics and daycare management to one-year diplomas and advance diplomas in Montessori, nursery, and primary education — all delivered on campus with a downloadable syllabus for every programme.',
    rating: {
      score: '[4.X]',
      label: '[X]+ trainees enrolled',
      note: 'Editable placeholder — use verified reviews only',
    },
    highlights: [
      'Certificate, diploma, and advance diploma pathways',
      'Montessori, ECCE, nursery, primary, phonics, and craft',
      'Eligibility from 10th pass through graduate (by programme)',
      'Download the official syllabus on every course page',
      'On-campus sessions only — no online or hybrid study',
    ],
    primaryCta: { label: 'Browse programmes', to: '/courses' },
    secondaryCta: { label: 'Apply now', to: '/apply' },
  },
  trustIndicators: [
    {
      label: 'On-campus programmes',
      value: '13',
      note: 'Certificate, diploma, and advance diploma',
    },
    {
      label: 'Training pathways',
      value: '3',
      note: 'Choose the level that matches your goals',
    },
    {
      label: 'Programme duration',
      value: '3mo–1yr',
      note: 'From short certificates to one-year qualifications',
    },
    { label: 'Place', value: 'Campus', note: 'Face-to-face at Titus only' },
  ],
  impactSection: {
    eyebrow: 'Our impact',
    title: 'One campus. Thirteen qualifications.',
    description:
      'From three-month certificates to one-year advance diplomas, Titus keeps early-years training in one place — face-to-face sessions, materials practice, and syllabi you can download before you apply.',
    highlights: [
      { label: 'Place', value: 'On-campus only' },
      { label: 'Syllabi', value: 'Download per programme' },
      { label: 'Duration range', value: '3 months – 1 year' },
    ],
    cta: { label: 'Explore all programmes', to: '/courses' },
  },
  impactStats: [
    { id: 'total', label: 'On-campus programmes', value: '13', accent: true },
    {
      id: 'certificate',
      label: 'Certificate',
      value: '5',
      category: 'certificate',
    },
    { id: 'diploma', label: 'Diploma', value: '4', category: 'diploma' },
    {
      id: 'advanced-diploma',
      label: 'Advance diploma',
      value: '4',
      category: 'advanced-diploma',
    },
  ],
  credentials: [
    {
      title: 'Syllabus-led programmes',
      description:
        'Each qualification follows a published NCVTC syllabus — Montessori teacher training, nursery and primary diplomas, ECCE, phonics, daycare management, craft instruction, and more.',
    },
    {
      title: 'On-campus training',
      description:
        'Every certificate, diploma, and advance diploma runs at the Titus campus with scheduled in-person theory, materials practice, and supervised classroom hours.',
    },
  ],
  aboutBlurb: {
    eyebrow: 'About Titus',
    title: 'One institute, thirteen pathways into early-years education',
    text: 'Whether you are starting with a 10th-pass certificate or deepening practice with a one-year advance diploma, Titus offers a clear on-campus route. Compare durations and eligibility on our courses page, read overviews on each programme page, and download the full syllabus before you apply.',
  },
};

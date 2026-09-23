/**
 * Stock images — replace with your own before launch.
 * Source: Unsplash (free to use with attribution).
 */
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    src: unsplash("1524178232363-1fb2b075b655", 1920),
    alt: "Adult Montessori trainees practising with wooden learning materials",
  },
  classroom: {
    src: unsplash("1523050852508-f927f884b702", 1200),
    alt: "Montessori teacher-training classroom with organised materials",
  },
  about: {
    src: "/images/abouttitus.jpeg",
    alt: "The Titus Global Montessori teacher training on campus",
  },
  studentExperience: {
    src: unsplash("1522202176988-66273c2fd55f", 1400),
    alt: "Adult educators collaborating during a training workshop",
  },
  approach: {
    src: unsplash("1509062520806-31655974407d", 1200),
    alt: "Educator working with learning materials in a prepared environment",
  },
  /** Full-width parallax strips between sections */
  strips: {
    workshop: unsplash("1523240795612-9a054b0db644", 1920),
    library: unsplash("1481627834876-b7833e8f5570", 1920),
    materials: unsplash("1580582938315-5812a3bada42", 1920),
    collaboration: unsplash("1529156069898-49953e39b3ac", 1920),
    graduation: unsplash("1523050852508-f927f884b702", 1920),
    campus: unsplash("1562774053-701939374585", 1920),
  },
  /** Subtle section backgrounds with parallax */
  sectionBgs: {
    courses: unsplash("1503676260728-1c00da094a0b", 1600),
    whyChoose: unsplash("1524178232363-1fb2b075b655", 1600),
    curriculum: unsplash("1456513080510-7bf3a84b82f8", 1600),
    principal: unsplash("1577896851231-70ef188bf5f0", 1600),
    testimonials: unsplash("1517245385467-eb9f030a5ace", 1600),
    admissions: unsplash("1434030216411-6b793fdae88c", 1600),
    cta: unsplash("1522202176988-66273c2fd55f", 1920),
  },
  /** Page header backgrounds */
  pageHeaders: {
    courses: unsplash("1509062520806-31655974407d", 1920),
    about: "/images/abouttitus.jpeg",
    admissions: unsplash("1434030216411-6b793fdae88c", 1920),
    curriculum: unsplash("1456513080510-7bf3a84b82f8", 1920),
    principal: unsplash("1577896851231-70ef188bf5f0", 1920),
    contact: unsplash("1423666639041-f56000c27a9a", 1920),
    apply: unsplash("1524178232363-1fb2b075b655", 1920),
    brochure: unsplash("1580582938315-5812a3bada42", 1920),
    faqs: unsplash("1481627834876-b7833e8f5570", 1920),
    careers: unsplash("1529156069898-49953e39b3ac", 1920),
    studentExperience: unsplash("1522202176988-66273c2fd55f", 1920),
    privacy: unsplash("1563986768602-6329388445bd", 1920),
    terms: unsplash("1450101499163-c8848c66ca85", 1920),
    courseDetail: unsplash("1503676260728-1c00da094a0b", 1920),
    default: unsplash("1524178232363-1fb2b075b655", 1920),
  },
  principal: {
    src: unsplash("1573496359142-b8d87734a5a2", 1000),
    alt: "Principal of The Titus Global teacher training academy",
  },
};

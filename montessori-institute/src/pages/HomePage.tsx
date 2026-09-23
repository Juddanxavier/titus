import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/courses/CourseCard";
import { CourseFinder } from "../components/course-finder/CourseFinder";
import { Accordion } from "../components/ui/Accordion";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { curriculumModules } from "../data/curriculum";
import { studentGallery } from "../data/gallery";
import { faqs } from "../data/faqs";
import { testimonials } from "../data/testimonials";
import { trainers } from "../data/trainers";
import {
  admissionsSteps,
  careerPaths,
  learningApproach,
  siteConfig,
  trustMetrics,
  whyChoose,
} from "../data/site";
import { useInView } from "../hooks/useInView";
import { usePageMeta } from "../hooks/usePageMeta";

export function HomePage() {
  usePageMeta("Montessori teacher training", siteConfig.description);
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
              Montessori teacher training
            </p>
            <h1 className="mt-4 text-4xl text-ink md:text-5xl lg:text-[3.25rem]">
              Learn to guide children with purpose, patience, and understanding.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Build the knowledge, practical skills, and classroom confidence needed to begin or strengthen your journey as a Montessori educator.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Practical learning", "Experienced trainers", "Flexible batches"].map((b) => (
                <span key={b} className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-forest">{b}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/courses">Explore courses</Button>
              <Button to="/brochure" variant="outline">Download brochure</Button>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-[16px] shadow-[var(--shadow-soft)]"
          >
            <img
              src={siteConfig.heroImage}
              alt={siteConfig.heroImageAlt}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="border-y border-forest/10 bg-white py-12">
        <div ref={statsRef} className="container-main grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustMetrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-serif text-forest md:text-4xl">
                <AnimatedCounter value={m.value} active={statsInView} />
              </p>
              <p className="mt-1 text-sm text-muted">{m.label}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted/70">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeader eyebrow="Our programmes" title="Find the training path that fits your goals." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((c, i) => <CourseCard key={c.slug} course={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-main">
          <SectionHeader title="Training that connects understanding with practice." center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[16px] border border-forest/10 bg-white p-6"
              >
                <h3 className="text-lg text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CourseFinder />

      {/* Learning approach */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeader
            title="Learn through study, demonstration, practice, and reflection."
            center
          />
          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-sage md:block" aria-hidden="true" />
            {learningApproach.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white font-medium">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum preview */}
      <section className="bg-sage/30 py-16 md:py-24">
        <div className="container-main">
          <SectionHeader eyebrow="Curriculum" title="Eight interconnected modules" center />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {curriculumModules.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-[16px] border border-forest/10 bg-white p-5 text-center"
              >
                <span className="text-2xl text-forest" aria-hidden="true">{m.icon}</span>
                <p className="mt-2 text-sm font-medium text-ink">{m.title}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/curriculum" variant="outline">View full curriculum</Button>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeader title="Your journey starts here." center />
          <div className="relative mt-12 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 bg-terracotta/40 md:block" aria-hidden="true" />
            {admissionsSteps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay text-terracotta font-semibold">{i + 1}</div>
                <h3 className="mt-4 text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/apply">Start your application</Button>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-main">
          <SectionHeader eyebrow="Faculty" title="Meet our trainers" center />
          <div className="mt-10 flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
            {trainers.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[260px] flex-shrink-0 rounded-[16px] border border-forest/10 bg-cream p-5 md:min-w-0"
              >
                <img src={t.imageSrc} alt={t.imageAlt} className="h-44 w-full rounded-[12px] object-cover" loading="lazy" />
                <h3 className="mt-4 text-lg text-ink">{t.name}</h3>
                <p className="text-sm text-forest">{t.role}</p>
                <p className="mt-2 text-xs text-muted">{t.qualification} · {t.yearsExperience}</p>
                <p className="mt-2 text-sm text-muted">{t.specialty}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/trainers" variant="outline">View all trainers</Button>
          </div>
        </div>
      </section>

      {/* Student experience gallery */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeader title="Student experience" description="Training grounded in real practice — not theory alone." center />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {studentGallery.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-[16px]">
                <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="mt-2 text-center text-xs text-muted">{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/student-experience" variant="outline">Learn more</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-main">
          <SectionHeader
            title="What trainees say"
            description="Placeholder testimonials — replace with verified graduate feedback."
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-[16px] border border-forest/10 bg-white p-6">
                <p className="text-ink">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-muted">{t.course} · {t.year}</p>
                  {t.placeholder && <p className="mt-1 text-xs text-muted">Placeholder testimonial</p>}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeader title="Take your next step in education." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((c) => (
              <div key={c.title} className="rounded-[16px] border border-forest/10 bg-white p-5">
                <h3 className="font-medium text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
            Career opportunities depend on your qualifications, experience, local requirements, and employer criteria.
          </p>
          <div className="mt-6 text-center">
            <Button to="/careers" variant="outline">Career opportunities</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 text-white md:py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl">Your Montessori journey can begin today.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Explore the programmes, speak with admissions, or apply for the next available batch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/apply" variant="secondary">Apply now</Button>
            <Link to="/contact" className="inline-flex min-h-12 items-center rounded-[10px] border border-white/40 px-6 text-sm font-medium text-white no-underline hover:bg-white/10">
              Speak to admissions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <SectionHeader title="Frequently asked questions" center />
          <div className="mt-10">
            <Accordion items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-6 text-center">
            <Button to="/faqs" variant="outline">View all FAQs</Button>
          </div>
        </div>
      </section>
    </>
  );
}

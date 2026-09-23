import { PageHero } from "../components/layout/PageHero";
import { studentGallery } from "../data/gallery";
import { testimonials } from "../data/testimonials";
import { usePageMeta } from "../hooks/usePageMeta";

export function StudentExperiencePage() {
  usePageMeta("Student experience");
  return (
    <>
      <PageHero title="Student experience" description="What to expect during your training journey." />
      <section className="py-14">
        <div className="container-main grid grid-cols-2 gap-4 md:grid-cols-3">
          {studentGallery.map((item) => (
            <figure key={item.id} className="overflow-hidden rounded-[16px]">
              <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-2 text-center text-sm text-muted">{item.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="container-main mt-14">
          <h2 className="text-2xl text-ink">Trainee voices</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-[16px] border border-forest/10 bg-white p-6">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-sm text-muted">{t.name} · {t.course}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

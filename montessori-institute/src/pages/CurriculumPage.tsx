import { PageHero } from "../components/layout/PageHero";
import { curriculumModules } from "../data/curriculum";
import { Button } from "../components/ui/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export function CurriculumPage() {
  usePageMeta("Curriculum");
  return (
    <>
      <PageHero
        title="Curriculum"
        description="Eight interconnected modules that form the foundation of our teacher-training programmes."
      />
      <section className="py-14">
        <div className="container-main grid gap-6 md:grid-cols-2">
          {curriculumModules.map((m) => (
            <article key={m.id} className="rounded-[16px] border border-forest/10 bg-white p-6">
              <span className="text-2xl text-forest">{m.icon}</span>
              <h2 className="mt-3 text-xl text-ink">{m.title}</h2>
              <p className="mt-2 text-sm text-muted">{m.description}</p>
            </article>
          ))}
        </div>
        <div className="container-main mt-10 flex flex-wrap gap-3">
          <Button to="/courses">View courses</Button>
          <Button to="/apply" variant="outline">Apply now</Button>
        </div>
      </section>
    </>
  );
}

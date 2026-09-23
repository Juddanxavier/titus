import { PageHero } from "../components/layout/PageHero";
import { Button } from "../components/ui/Button";
import { careerPaths } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function CareersPage() {
  usePageMeta("Career opportunities");
  return (
    <>
      <PageHero
        title="Career opportunities"
        description="Paths graduates commonly pursue — without guarantees of employment."
      />
      <section className="py-14">
        <div className="container-main prose max-w-3xl">
          <p>
            Montessori teacher training can open doors to meaningful work in early childhood education.
            We do not guarantee employment or publish placement statistics.
          </p>
          <h2>Roles graduates may pursue</h2>
          <ul>
            {careerPaths.map((c) => <li key={c.title}><strong>{c.title}</strong> — {c.description}</li>)}
          </ul>
          <p className="text-sm">
            Career opportunities depend on your qualifications, experience, local requirements, and employer criteria.
          </p>
          <div className="not-prose mt-8">
            <Button to="/apply">Begin your training</Button>
          </div>
        </div>
      </section>
    </>
  );
}

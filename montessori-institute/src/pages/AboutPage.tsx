import { PageHero } from "../components/layout/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { siteConfig } from "../data/site";

export function AboutPage() {
  usePageMeta("About us");
  return (
    <>
      <PageHero
        title="About us"
        description="A teacher-training institute dedicated to preparing thoughtful, capable Montessori educators."
      />
      <section className="py-14">
        <div className="container-main prose max-w-3xl">
          <p>
            {siteConfig.instituteName} provides professional Montessori teacher training for aspiring educators,
            teaching assistants, school staff, and career changers. We focus on connecting theory with sustained
            practical experience in prepared environments.
          </p>
          <h2>Our mission</h2>
          <p>
            To prepare educators who guide children with respect, patience, and understanding — through rigorous
            study, hands-on practice, and reflective professional growth.
          </p>
          <h2>Our values</h2>
          <ul>
            <li><strong>Respectful</strong> — honouring each learner&apos;s path</li>
            <li><strong>Thoughtful</strong> — grounding practice in observation</li>
            <li><strong>Practical</strong> — connecting theory to daily work</li>
            <li><strong>Professional</strong> — maintaining high standards of preparation</li>
          </ul>
        </div>
      </section>
    </>
  );
}

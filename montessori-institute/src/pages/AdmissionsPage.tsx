import { PageHero } from "../components/layout/PageHero";
import { Button } from "../components/ui/Button";
import { admissionsSteps } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function AdmissionsPage() {
  usePageMeta("Admissions");
  return (
    <>
      <PageHero
        title="Admissions"
        description="Eligibility, process, fees, and required documents."
      />
      <section className="py-14">
        <div className="container-main prose max-w-3xl">
          <h2>Eligibility</h2>
          <p>Eligibility varies by programme. See individual course pages or contact admissions.</p>
          <h2>Admission process</h2>
          <ol>
            {admissionsSteps.map((s) => (
              <li key={s.title}><strong>{s.title}</strong> — {s.description}</li>
            ))}
          </ol>
          <h2>Required documents</h2>
          <ul>
            <li>Completed application form</li>
            <li>Proof of education [editable]</li>
            <li>Identification [editable]</li>
            <li>Statement of purpose</li>
          </ul>
          <h2>Fees</h2>
          <p>[Fee overview — editable placeholder. Confirm before publishing.]</p>
          <div className="not-prose mt-8 flex gap-3">
            <Button to="/apply">Apply now</Button>
            <Button to="/contact" variant="outline">Contact admissions</Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { ApplicationForm } from "../components/forms/ApplicationForm";
import { PageHero } from "../components/layout/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export function ApplyPage() {
  usePageMeta("Application form");
  return (
    <>
      <PageHero
        title="Application form"
        description="Complete all steps to apply for a Montessori teacher-training programme."
      />
      <section className="py-14">
        <div className="container-main max-w-2xl">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}

import { Accordion } from "../components/ui/Accordion";
import { PageHero } from "../components/layout/PageHero";
import { faqs } from "../data/faqs";
import { usePageMeta } from "../hooks/usePageMeta";

export function FaqsPage() {
  usePageMeta("FAQs");
  return (
    <>
      <PageHero title="FAQs" description="Answers to common questions about admissions, courses, and formats." />
      <section className="py-14">
        <div className="container-main max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}

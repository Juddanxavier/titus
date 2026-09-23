import { PageHero } from "../components/layout/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export function PrivacyPage() {
  usePageMeta("Privacy policy");
  return (
    <>
      <PageHero title="Privacy policy" description="How we collect, use, and protect your personal information." />
      <section className="py-14">
        <div className="container-main prose max-w-3xl">
          <p>[Privacy policy content — editable placeholder. Add your institute&apos;s policy before launch.]</p>
          <h2>Information we collect</h2>
          <p>Application forms, contact enquiries, and brochure requests may collect name, email, phone, and related details.</p>
          <h2>How we use your information</h2>
          <p>To process admissions, respond to enquiries, and improve our services.</p>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  usePageMeta("Terms and refund policy");
  return (
    <>
      <PageHero title="Terms and refund policy" description="Terms of enrolment, cancellation, and refunds." />
      <section className="py-14">
        <div className="container-main prose max-w-3xl">
          <p>[Terms and refund policy — editable placeholder. Confirm with your institute before publishing.]</p>
          <h2>Enrolment</h2>
          <p>Enrolment is subject to application approval and payment of applicable fees.</p>
          <h2>Cancellation and refunds</h2>
          <p>[Refund schedule — editable placeholder.]</p>
        </div>
      </section>
    </>
  );
}

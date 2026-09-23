import { useState } from "react";
import { PageHero } from "../components/layout/PageHero";
import { Button } from "../components/ui/Button";
import { siteConfig } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  usePageMeta("Contact");
  const [sent, setSent] = useState(false);

  // TODO: Connect to PHP API for contact form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero title="Contact" description="Reach our admissions team by email, phone, or WhatsApp." />
      <section className="py-14">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div className="text-sm text-muted space-y-3">
            <p><strong className="text-ink">Email:</strong> {siteConfig.contact.email}</p>
            <p><strong className="text-ink">Phone:</strong> {siteConfig.contact.phone}</p>
            <p><strong className="text-ink">WhatsApp:</strong> <a href={siteConfig.contact.whatsapp} className="text-forest">Message us</a></p>
            <p><strong className="text-ink">Address:</strong> {siteConfig.contact.address}</p>
            <p><strong className="text-ink">Hours:</strong> {siteConfig.contact.hours}</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[16px] border border-forest/10 bg-white p-6">
            {sent ? (
              <p role="status" className="text-success">Thank you. We will respond shortly.</p>
            ) : (
              <>
                <label className="block text-sm font-medium">Name *</label>
                <input required className="mt-1 mb-4 w-full min-h-12 rounded-[10px] border border-forest/15 px-4" />
                <label className="block text-sm font-medium">Email *</label>
                <input type="email" required className="mt-1 mb-4 w-full min-h-12 rounded-[10px] border border-forest/15 px-4" />
                <label className="block text-sm font-medium">Message *</label>
                <textarea required rows={5} className="mt-1 mb-4 w-full rounded-[10px] border border-forest/15 px-4 py-3" />
                <Button type="submit">Send message</Button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

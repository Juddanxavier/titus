import { useState } from "react";
import { PageHero } from "../components/layout/PageHero";
import { Button } from "../components/ui/Button";
import { courses } from "../data/courses";
import { usePageMeta } from "../hooks/usePageMeta";

export function BrochurePage() {
  usePageMeta("Download brochure");
  const [done, setDone] = useState(false);

  // TODO: Connect to PHP API for brochure lead capture
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHero title="Download brochure" description="Get an overview of our teacher-training programmes." />
      <section className="py-14">
        <div className="container-main max-w-md">
          <form onSubmit={submit} className="rounded-[16px] border border-forest/10 bg-white p-6">
            {done ? (
              <p role="status">Thank you. Your download will begin shortly. [Connect brochure PDF URL]</p>
            ) : (
              <>
                <label className="block text-sm font-medium">Full name *</label>
                <input required className="mt-1 mb-4 w-full min-h-12 rounded-[10px] border border-forest/15 px-4" />
                <label className="block text-sm font-medium">Email *</label>
                <input type="email" required className="mt-1 mb-4 w-full min-h-12 rounded-[10px] border border-forest/15 px-4" />
                <label className="block text-sm font-medium">Course interest</label>
                <select className="mt-1 mb-4 w-full min-h-12 rounded-[10px] border border-forest/15 px-4">
                  <option value="">General enquiry</option>
                  {courses.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
                <Button type="submit" className="w-full">Download brochure</Button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

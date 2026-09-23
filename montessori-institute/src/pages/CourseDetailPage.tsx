import { useParams } from "react-router-dom";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/layout/PageHero";
import { getCourseBySlug } from "../data/courses";
import { curriculumModules } from "../data/curriculum";
import { usePageMeta } from "../hooks/usePageMeta";

export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  usePageMeta(course?.name ?? "Course not found");

  if (!course) {
    return (
      <PageHero title="Course not found" description="The course you are looking for does not exist." />
    );
  }

  const modules = curriculumModules.filter((m) => course.modules.includes(m.id));

  return (
    <>
      <PageHero title={course.name} description={course.shortDescription} />
      <section className="py-14">
        <div className="container-main grid gap-12 lg:grid-cols-3">
          <div className="prose lg:col-span-2">
            <h2>Overview</h2>
            <p>{course.overview}</p>
            <h2>Who should apply</h2>
            <ul>{course.whoShouldApply.map((w) => <li key={w}>{w}</li>)}</ul>
            <h2>Learning outcomes</h2>
            <ul>{course.learningOutcomes.map((o) => <li key={o}>{o}</li>)}</ul>
            <h2>Practical components</h2>
            <p>{course.practicalComponents}</p>
            <h2>Assessment</h2>
            <p>{course.assessment}</p>
            <h2>Certificate</h2>
            <p>{course.certificateInfo}</p>
            {modules.length > 0 && (
              <>
                <h2>Curriculum modules</h2>
                <ul>{modules.map((m) => <li key={m.id}>{m.title}</li>)}</ul>
              </>
            )}
            {course.faqs.length > 0 && (
              <div className="not-prose mt-8">
                <h2 className="font-serif text-2xl text-ink">Course FAQs</h2>
                <div className="mt-4"><Accordion items={course.faqs} /></div>
              </div>
            )}
          </div>
          <aside className="rounded-[16px] border border-forest/10 bg-white p-6 h-fit">
            <dl className="space-y-3 text-sm">
              <div><dt className="text-muted">Duration</dt><dd className="font-medium">{course.duration}</dd></div>
              <div><dt className="text-muted">Format</dt><dd className="font-medium">{course.format}</dd></div>
              <div><dt className="text-muted">Location</dt><dd className="font-medium">{course.location}</dd></div>
              <div><dt className="text-muted">Next batch</dt><dd className="font-medium">{course.nextBatch}</dd></div>
              <div><dt className="text-muted">Fee</dt><dd className="font-medium">{course.fee}</dd></div>
              <div><dt className="text-muted">Eligibility</dt><dd>{course.eligibility}</dd></div>
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Button to={`/apply?course=${course.slug}`} className="w-full">Apply now</Button>
              <Button to="/brochure" variant="outline" className="w-full">Download brochure</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

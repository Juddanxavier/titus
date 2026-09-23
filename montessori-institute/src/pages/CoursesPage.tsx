import { CourseCard } from "../components/courses/CourseCard";
import { PageHero } from "../components/layout/PageHero";
import { courses } from "../data/courses";
import { usePageMeta } from "../hooks/usePageMeta";

export function CoursesPage() {
  usePageMeta("Courses", "Compare Montessori teacher-training programmes.");
  return (
    <>
      <PageHero
        title="Courses"
        description="Compare our Montessori teacher-training programmes and find the right pathway."
      />
      <section className="py-14">
        <div className="container-main grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => <CourseCard key={c.slug} course={c} index={i} />)}
        </div>
      </section>
    </>
  );
}

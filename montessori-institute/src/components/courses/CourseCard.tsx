import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Course } from "../../types";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex h-full flex-col rounded-[16px] border border-forest/10 bg-white p-6 shadow-[var(--shadow-soft)]"
    >
      {course.badge && (
        <span className="mb-3 inline-block self-start rounded-full bg-clay px-3 py-1 text-xs font-medium text-terracotta">
          {course.badge}
        </span>
      )}
      <h3 className="text-xl text-ink">{course.name}</h3>
      <p className="mt-3 flex-1 text-sm text-muted">{course.shortDescription}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between"><dt className="text-muted">Duration</dt><dd>{course.duration}</dd></div>
        <div className="flex justify-between"><dt className="text-muted">Format</dt><dd>{course.format}</dd></div>
        <div className="flex justify-between"><dt className="text-muted">Level</dt><dd>{course.level}</dd></div>
      </dl>
      <Link
        to={`/courses/${course.slug}`}
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-[10px] border border-forest/20 px-5 text-sm font-medium text-forest no-underline hover:bg-sage/40"
      >
        View course
      </Link>
    </motion.article>
  );
}

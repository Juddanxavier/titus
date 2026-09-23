import { programmes } from "./programmes.js";

export const courses = programmes;

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(categoryId) {
  return courses.filter((c) => c.category === categoryId);
}

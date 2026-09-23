/**
 * Next intake is always the calendar month after the reference date (local time).
 * e.g. September 2026 → "October 2026"
 */
export function getNextBatchDate(reference = new Date()) {
  return new Date(reference.getFullYear(), reference.getMonth() + 1, 1);
}

export function formatBatchLabel(date) {
  return date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

export function getNextBatchLabel(reference = new Date()) {
  return formatBatchLabel(getNextBatchDate(reference));
}

import { useState } from "react";
import { batches } from "../../data/batches";
import { courses } from "../../data/courses";
import type { ApplicationFormData } from "../../types";
import { Button } from "../ui/Button";

const STEPS = ["Personal details", "Experience", "Course preference", "Statement", "Review"];

const initial: ApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  education: "",
  experience: "",
  courseSlug: "",
  batchId: "",
  statement: "",
  consent: false,
};

// TODO: Connect to PHP API for email, database storage, and file uploads
async function mockSubmit(_data: ApplicationFormData): Promise<void> {
  await new Promise((r) => setTimeout(r, 1200));
}

export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationFormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof ApplicationFormData>(key: K, value: ApplicationFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(s: number): boolean {
    const e: Partial<Record<keyof ApplicationFormData, string>> = {};
    if (s === 0) {
      if (!data.firstName.trim()) e.firstName = "Required";
      if (!data.lastName.trim()) e.lastName = "Required";
      if (!data.email.includes("@")) e.email = "Valid email required";
      if (!data.phone.trim()) e.phone = "Required";
    }
    if (s === 2) {
      if (!data.courseSlug) e.courseSlug = "Select a course";
      if (!data.batchId) e.batchId = "Select a batch";
    }
    if (s === 3 && data.statement.trim().length < 20) {
      e.statement = "Please write at least a short statement (20+ characters)";
    }
    if (s === 4 && !data.consent) e.consent = "Consent is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate(4)) return;
    setLoading(true);
    setError("");
    try {
      await mockSubmit(data);
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or contact admissions.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-[16px] border border-success/30 bg-white p-8 text-center" role="status">
        <h2 className="text-2xl text-ink">Application received</h2>
        <p className="mt-3 text-muted">
          Thank you. Our admissions team will review your application and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] border border-forest/10 bg-white p-6 md:p-8">
      <div className="mb-6 flex gap-2 overflow-x-auto">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
              i === step ? "bg-forest text-white" : "bg-sage text-muted"
            }`}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {error && <p className="mb-4 rounded-[10px] bg-error/10 px-4 py-3 text-sm text-error" role="alert">{error}</p>}

      {step === 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="First name" id="firstName" error={errors.firstName}>
            <input id="firstName" className="field" value={data.firstName} onChange={(e) => update("firstName", e.target.value)} />
          </Field>
          <Field label="Last name" id="lastName" error={errors.lastName}>
            <input id="lastName" className="field" value={data.lastName} onChange={(e) => update("lastName", e.target.value)} />
          </Field>
          <Field label="Email" id="email" error={errors.email} className="md:col-span-2">
            <input id="email" type="email" className="field" value={data.email} onChange={(e) => update("email", e.target.value)} />
          </Field>
          <Field label="Phone" id="phone" error={errors.phone} className="md:col-span-2">
            <input id="phone" className="field" value={data.phone} onChange={(e) => update("phone", e.target.value)} />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <Field label="Education background" id="education">
            <textarea id="education" rows={4} className="field" value={data.education} onChange={(e) => update("education", e.target.value)} />
          </Field>
          <Field label="Work experience" id="experience">
            <textarea id="experience" rows={4} className="field" value={data.experience} onChange={(e) => update("experience", e.target.value)} />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Field label="Preferred course" id="course" error={errors.courseSlug}>
            <select id="course" className="field" value={data.courseSlug} onChange={(e) => update("courseSlug", e.target.value)}>
              <option value="">Select a course</option>
              {courses.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="Preferred batch" id="batch" error={errors.batchId}>
            <select id="batch" className="field" value={data.batchId} onChange={(e) => update("batchId", e.target.value)}>
              <option value="">Select a batch</option>
              {batches.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
          </Field>
          <Field label="Document upload (placeholder)" id="docs">
            <input id="docs" type="file" className="field" disabled title="Connect to PHP backend for uploads" />
            <p className="mt-1 text-xs text-muted">File upload will be enabled when connected to the PHP API.</p>
          </Field>
        </div>
      )}

      {step === 3 && (
        <Field label="Statement of purpose" id="statement" error={errors.statement}>
          <textarea id="statement" rows={6} className="field" value={data.statement} onChange={(e) => update("statement", e.target.value)} />
        </Field>
      )}

      {step === 4 && (
        <div className="space-y-4 text-sm">
          <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Course:</strong> {courses.find((c) => c.slug === data.courseSlug)?.name ?? "—"}</p>
          <label className="flex min-h-12 items-start gap-3">
            <input type="checkbox" checked={data.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 accent-forest" />
            <span>I consent to the processing of my personal data for admissions purposes. <span className="text-error">{errors.consent}</span></span>
          </label>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {step > 0 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
        {step < 4 && (
          <Button onClick={() => { if (validate(step)) setStep(step + 1); }}>Continue</Button>
        )}
        {step === 4 && (
          <Button onClick={submit} disabled={loading}>{loading ? "Submitting…" : "Submit application"}</Button>
        )}
      </div>

      <style>{`.field{width:100%;min-height:48px;padding:.75rem 1rem;border:1px solid rgba(40,89,67,.15);border-radius:10px;font:inherit;background:#fff}`}</style>
    </div>
  );
}

function Field({
  label, id, error, children, className = "",
}: {
  label: string; id: string; error?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}

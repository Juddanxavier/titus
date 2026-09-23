import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  courseFinderQuestions,
  recommendCourse,
  resultMeta,
} from "../../data/courseFinder";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

export function CourseFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const q = courseFinderQuestions[step];
  const progress = done ? 100 : ((step + 1) / courseFinderQuestions.length) * 100;
  const result = done ? recommendCourse(answers) : null;
  const meta = result ? resultMeta[result] : null;

  function select(value: string) {
    setAnswers((a) => ({ ...a, [q.id]: value }));
  }

  function next() {
    if (step < courseFinderQuestions.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function back() {
    if (done) setDone(false);
    else if (step > 0) setStep(step - 1);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  return (
    <section className="bg-sage/40 py-16 md:py-24" id="course-finder">
      <div className="container-main">
        <SectionHeader
          title="Which Montessori programme is right for you?"
          description="Answer a few quick questions and receive a suggested starting point."
          center
        />

        <div className="mx-auto mt-10 max-w-xl rounded-[16px] border border-forest/10 bg-white p-6 md:p-8">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-sage">
            <div className="h-full bg-forest transition-all" style={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence mode="wait">
            {!done && q && (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
              >
                <p className="text-sm text-muted">Question {step + 1} of {courseFinderQuestions.length}</p>
                <h3 className="mt-2 text-xl text-ink">{q.question}</h3>
                <fieldset className="mt-5 space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3 ${
                        answers[q.id] === opt.value ? "border-forest bg-sage/50" : "border-forest/15"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        checked={answers[q.id] === opt.value}
                        onChange={() => select(opt.value)}
                        className="accent-forest"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </fieldset>
              </motion.div>
            )}

            {done && meta && (
              <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-sm font-medium text-forest">Suggested starting point</p>
                <h3 className="mt-2 text-2xl text-ink">{meta.title}</h3>
                <p className="mt-2 text-muted">{meta.description}</p>
                <p className="mt-4 text-xs text-muted">
                  This recommendation is a guide only. Admissions can help confirm the best fit for your goals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {meta.courseSlug && (
                    <Button to={`/courses/${meta.courseSlug}`}>View suggested course</Button>
                  )}
                  <Button to="/contact" variant="outline">Contact admissions</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            {(step > 0 || done) && (
              <Button variant="outline" onClick={back}>Back</Button>
            )}
            {!done && (
              <Button onClick={next} disabled={!answers[q?.id]}>Next</Button>
            )}
            {done && (
              <Button variant="outline" onClick={restart}>Restart</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

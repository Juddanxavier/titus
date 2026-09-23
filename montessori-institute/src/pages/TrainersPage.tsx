import { motion } from "framer-motion";
import { PageHero } from "../components/layout/PageHero";
import { trainers } from "../data/trainers";
import { usePageMeta } from "../hooks/usePageMeta";

export function TrainersPage() {
  usePageMeta("Trainers");
  return (
    <>
      <PageHero title="Trainers" description="Meet the educators who guide our programmes." />
      <section className="py-14">
        <div className="container-main grid gap-6 md:grid-cols-2">
          {trainers.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 rounded-[16px] border border-forest/10 bg-white p-6"
            >
              <img src={t.imageSrc} alt={t.imageAlt} className="h-32 w-28 flex-shrink-0 rounded-[12px] object-cover" />
              <div>
                <h2 className="text-xl text-ink">{t.name}</h2>
                <p className="text-sm text-forest">{t.role}</p>
                <p className="mt-2 text-xs text-muted">{t.qualification} · {t.yearsExperience}</p>
                <p className="mt-2 text-sm text-muted">{t.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

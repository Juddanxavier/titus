import { motion } from "framer-motion";

type Props = { title: string; description?: string; eyebrow?: string };

export function PageHero({ title, description, eyebrow }: Props) {
  return (
    <section className="border-b border-forest/10 bg-white py-14 md:py-20">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest">{eyebrow}</p>
          )}
          <h1 className="text-4xl text-ink md:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}

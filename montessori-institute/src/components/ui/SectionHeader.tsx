import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeader({ eyebrow, title, description, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl text-ink md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted">{description}</p>
      )}
    </motion.div>
  );
}

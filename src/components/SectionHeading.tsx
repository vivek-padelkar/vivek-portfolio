import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
            {subtitle}
          </span>
        )}
        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          {title}
        </h2>
        <div className={`h-1 w-20 bg-brand-primary mt-6 ${centered ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
};

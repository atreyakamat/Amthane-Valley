import { cn } from "../../lib/utils";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "space-y-4",
        align === "center" && "text-center mx-auto",
        align === "right" && "text-right",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-cream/80 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-forest-soft">
          {eyebrow}
        </span>
      ) : null}
      <div
        className={cn(
          "space-y-3",
          align === "center" && "mx-auto max-w-3xl",
          align === "right" && "ml-auto text-right"
        )}
      >
        <h2 className="text-3xl font-semibold text-forest md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-lg text-forest-muted md:text-xl">{description}</p>
        ) : null}
      </div>
    </motion.div>
  );
}

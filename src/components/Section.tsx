import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </motion.section>
  );
};

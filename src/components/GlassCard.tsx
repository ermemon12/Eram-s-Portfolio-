import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "",
  hoverGlow = true 
}) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { 
        y: -4,
        borderColor: "rgba(255, 255, 255, 0.15)",
        backgroundColor: "rgba(39, 39, 42, 0.5)",
      } : {}}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`glass-panel overflow-hidden transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
};

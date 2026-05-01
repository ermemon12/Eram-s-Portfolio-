import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export const GlowBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-[#09090b]"
    >
      {/* Subtle Atmospheric Blobs */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-violet blur-[140px]"
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue blur-[160px]"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      ></div>
      
      {/* Finely Dotted Grid */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
    </div>
  );
};

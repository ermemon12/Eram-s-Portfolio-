import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useEffect } from "react";
import { Sparkles, Brain, Database } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-violet-light text-[11px] font-bold uppercase tracking-widest"
        >
          <Sparkles size={12} />
          AI Systems • LLM Evaluation
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] mb-6 hero-gradient-text tracking-[-0.04em]"
        >
          Engineering intelligence <br />
          beyond just models.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-zinc-500 max-w-xl mx-auto mb-12 font-medium"
        >
          I design and evaluate AI systems that don’t just work —  
          they are measurable, reliable, and scalable in real-world scenarios.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("experiments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg signal-btn-gradient text-white font-semibold hover:brightness-110 transition-all uppercase tracking-wide text-xs"
          >
            Explore Work
          </button>

          <button
            onClick={() =>
              document
                .getElementById("mind")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors uppercase tracking-wide text-xs text-zinc-300"
          >
            Interactive Zone
          </button>
        </motion.div>
      </div>

      {/* Floating Cards */}
      <motion.div
        style={{ x: dx, y: dy }}
        className="absolute top-1/4 left-[8%] hidden lg:block"
      >
        <GlassCard className="p-4 flex items-center gap-3 w-52 opacity-40 hover:opacity-100 transition">
          <Brain size={20} />
          <div className="text-[11px]">
            <div className="font-bold text-white">Model Reasoning</div>
            <div className="text-zinc-500">Evaluating outputs...</div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        style={{ x: useSpring(mouseX), y: useSpring(mouseY) }}
        className="absolute bottom-1/4 right-[8%] hidden lg:block"
      >
        <GlassCard className="p-4 flex items-center gap-3 w-56 opacity-40 hover:opacity-100 transition">
          <Database size={20} />
          <div className="text-[11px]">
            <div className="font-bold text-white">Data Signals</div>
            <div className="text-zinc-500">Processing flows...</div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
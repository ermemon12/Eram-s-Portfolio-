import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { Brain, Zap, Target, Cpu } from "lucide-react";
import { Section } from "./Section";

const tabs = [
  {
    id: "think",
    icon: Brain,
    label: "How I Think",
    content:
      "I model problems as layered computational systems: input distribution → transformation pipeline → failure modes. I don’t treat AI outputs as final answers; I treat them as probabilistic traces of reasoning. My focus is on calibration error, robustness under distribution shift, and systematic breakdowns in multi-step reasoning chains."
  },
  {
    id: "drive",
    icon: Zap,
    label: "What Drives Me",
    content:
      "I’m driven by the gap between high benchmark scores and low real-world reliability. When systems look optimal on paper but fail in edge cases, that’s where the real engineering problem exists. I care about uncertainty quantification, hidden biases in datasets, and failure amplification in downstream tasks."
  },
  {
    id: "build",
    icon: Target,
    label: "What I'm Building",
    content:
      "I build evaluation-centric AI pipelines: RAG systems with measurable retrieval precision/recall, LLM eval frameworks for hallucination detection, embedding-based similarity diagnostics, and telemetry for reasoning quality. The goal is observable intelligence, not just generated text."
  },
  {
    id: "ai",
    icon: Cpu,
    label: "My AI Perspective",
    content:
      "AI systems should be treated as stochastic models with measurable uncertainty, not deterministic tools. The real frontier is evaluation science: defining metrics for reasoning fidelity, context grounding, and long-horizon consistency across multi-turn interactions. Without evaluation, alignment is undefined."
  }
];

export const AIPlayground: React.FC = () => {
  const [active, setActive] = useState("think");
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const current = tabs.find((t) => t.id === active);
  const text = current?.content || "";

  // ✅ Stable typing engine (no undefined, no stale closure)
  useEffect(() => {
    setIndex(0);
    setDisplayText("");

    if (!text) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        setDisplayText(text.slice(0, next));

        if (next >= text.length) {
          clearInterval(interval);
        }

        return next;
      });
    }, 12);

    return () => clearInterval(interval);
  }, [active, text]);

  return (
    <Section id="mind">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
          Inside My Mind
        </h2>
        <p className="text-zinc-500 uppercase tracking-[0.35em] text-[11px] font-semibold">
          Systems • Reasoning • Evaluation • Uncertainty Modeling
        </p>
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Tabs */}
        <div className="relative flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 border
              ${active === tab.id
                ? "text-white border-white/20 bg-white/10 shadow-lg shadow-violet-500/10"
                : "text-zinc-500 border-white/5 hover:text-white hover:border-white/20 hover:bg-white/5"}`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-700" />

          <div className="relative glass-panel p-12 text-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">

            {/* Icon */}
            <motion.div
              key={active + "-icon"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex justify-center mb-6 text-cyan-300"
            >
              {current && <current.icon size={42} />}
            </motion.div>

            {/* Typing Text */}
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
              {displayText}
              <span className="animate-pulse text-cyan-300">▍</span>
            </p>

          </div>
        </motion.div>

      </div>
    </Section>
  );
};
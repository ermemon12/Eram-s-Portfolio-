import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { ArrowRight, Code, Layers, LineChart } from "lucide-react";
import { Section } from "./Section";
import { GlassCard } from "./GlassCard";

const projects = [
  {
    title: "LLM Evaluation & AI Response Analysis",
    description:
      "Built an evaluation pipeline to analyze AI-generated responses across multiple prompts.",
    tags: ["Python", "LangChain", "LLM", "NLP"],
    icon: Layers,
    details:
      "Implemented ROUGE and BERTScore metrics for response relevance and contextual accuracy. Designed structured evaluation frameworks and validation systems to detect hallucinations and improve reliability of AI outputs."
  },
  {
    title: "Open Source Data Analyzer",
    description:
      "Interactive tool for automated exploratory data analysis and insight generation.",
    tags: ["Python", "Streamlit", "EDA", "ML"],
    icon: Code,
    details:
      "Automated preprocessing, correlation analysis, and trend detection workflows. Integrated ML models for anomaly detection and built dynamic dashboards using Matplotlib and Streamlit. Handles datasets up to 50k+ rows."
  },
  {
    title: "House Price Prediction",
    description:
      "Machine learning model to predict housing prices using structured datasets.",
    tags: ["Scikit-learn", "Regression", "Data Science"],
    icon: LineChart,
    details:
      "Performed feature engineering including encoding, normalization, and scaling. Evaluated performance using RMSE and R² metrics. Conducted feature importance analysis and visualized trends for decision support."
  }
];

export const Experiments: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="experiments">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-[-0.03em]">
            My <span className="text-brand-violet-light">Projects</span>
          </h2>
          <p className="text-zinc-500 max-w-xl text-sm font-medium uppercase tracking-widest">
            Real-world systems I've built in AI, ML, and Data Engineering.
          </p>
        </div>
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[4px] font-bold">
          [ PROJECTS_LOG ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            className="group relative h-full min-h-[420px] flex flex-col border border-white/5 bg-zinc-900/20"
          >
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-10 h-full flex flex-col relative"
            >
              <div className="mb-10 p-3 rounded-xl bg-zinc-900 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                <project.icon
                  size={24}
                  className="text-brand-violet-light"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-violet-light transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-900/50 border border-white/5 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-10 right-10 text-zinc-700 group-hover:text-zinc-300 transition-colors duration-500">
                <ArrowRight size={18} />
              </div>

              {/* Hover Detail Panel */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#09090b]/95 p-10 flex flex-col justify-center border border-brand-violet/20 z-20 rounded-xl"
                  >
                    <div className="text-[10px] font-bold text-brand-violet-light uppercase tracking-widest mb-4">
                      What I Actually Did
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.details}
                    </p>

                    <button className="mt-10 text-[10px] font-bold uppercase tracking-widest text-white hover:text-brand-violet-light transition-colors flex items-center gap-2 group/btn">
                      View Details
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useEffect } from "react";
import { Section } from "./Section";
import { Download, ExternalLink, Code, Award, Trophy } from "lucide-react";

export const SystemProfile: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Section id="profile">

      {/* HEADER */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
        >
          About <span className="text-white">Me</span>
        </motion.h2>

        <p className="text-zinc-400 text-[11px] mt-4 uppercase tracking-[0.3em] font-bold">
          AI • LLM SYSTEMS • DATA • EVALUATION ENGINEERING
        </p>
      </div>

      {/* MAIN */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-3xl opacity-50" />

        <div className="relative glass-panel border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl bg-white/5">

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-violet-400/30 mb-8 shadow-lg shadow-violet-500/20"
          >
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </motion.div>

          {/* TITLE */}
          <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-6">
            Building intelligent systems that reason, evaluate, and scale.
          </h3>

          {/* DESCRIPTION */}
          <p className="text-zinc-300 text-center max-w-2xl mx-auto leading-relaxed mb-12">
            I specialize in LLM evaluation, RAG pipelines, and data-driven AI systems.
            My focus is on understanding model behavior beyond accuracy—reasoning quality,
            robustness, and real-world reliability.
          </p>

          {/* ACTIONS */}
          <div className="flex justify-center gap-4 mb-14 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <Download size={14} />
              Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Preview
            </motion.a>

          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent mb-12" />

          {/* SKILLS */}
          <div className="mb-14 text-center">

            <div className="flex items-center justify-center gap-2 text-violet-300 uppercase tracking-widest text-xs mb-8">
              <Code size={14} /> Technical Skills Matrix
            </div>

            <div className="space-y-4 text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed">

              <p>
                <span className="text-white">Programming:</span>{" "}
                Python (Pandas, NumPy, Scikit-learn), SQL, LangChain, Streamlit
              </p>

              <p>
                <span className="text-violet-300">Generative AI & LLMs:</span>{" "}
                Prompt Engineering, LLM Evaluation, QLoRA, ROUGE, BERTScore, Evaluation Pipelines
              </p>

              <p>
                <span className="text-cyan-300">Data Analytics:</span>{" "}
                EDA, Feature Engineering, Trend Analysis, RMSE, R², Anomaly Detection
              </p>

              <p>
                <span className="text-white">Visualization:</span>{" "}
                Power BI, Matplotlib, Excel (Pivot Tables, VLOOKUP)
              </p>

              <p>
                <span className="text-zinc-300">Tools:</span>{" "}
                Git, Streamlit, Claude, Gemini, Perplexity
              </p>

              <p>
                <span className="text-zinc-300">Core Skills:</span>{" "}
                Analytical Thinking, Problem Solving, Research, Documentation
              </p>

            </div>
          </div>

          {/* HACKATHON */}
<div className="mb-14 text-center">

  <div className="flex items-center justify-center gap-2 text-cyan-300 uppercase tracking-widest text-xs mb-6">
    <Trophy size={14} /> Hackathon Achievement
  </div>

  <div className="max-w-3xl mx-auto text-sm text-zinc-400 leading-relaxed space-y-4">

    <p>
      <span className="text-white font-semibold">
        ACM-W Nariyukti National Hackathon 2026 — Finalist
      </span>
    </p>

    <p>
      Our team <span className="text-white">Cognitive Catalysts</span> successfully cleared Round 1 and Round 2 and was selected as a Finalist at the national-level ACM-W Nariyukti Hackathon.
    </p>

    <p>
      The final round was hosted at <span className="text-white">Infosys Campus, Hubballi, Karnataka</span> — a highly inspiring environment known for its innovation-driven engineering culture and large-scale industry exposure.
    </p>

    <p>
      Working inside the Infosys Hubballi campus provided direct exposure to real-world engineering workflows, collaborative problem solving, and product-level thinking under expert evaluation.
    </p>

    <p>
      Built <span className="text-white">Digital Product Passport (DPP)</span> — a sustainability intelligence system designed to improve transparency in product lifecycles.
    </p>

    <p>
      <span className="text-cyan-300">Core Impact:</span> Addressed real-world issues like greenwashing and lack of product traceability using AI-driven sustainability insights, QR-based product identity, and eco-score benchmarking for informed consumer decisions.
    </p>

    <p>
      <span className="text-violet-300">Tech Stack:</span> React, TypeScript, Supabase (PostgreSQL), Tailwind CSS, QR-based product scanning system
    </p>

  </div>
</div>
          {/* CERTIFICATIONS */}
          <div className="text-center">

            <div className="flex items-center justify-center gap-2 text-violet-300 uppercase tracking-widest text-xs mb-6">
              <Award size={14} /> Certifications
            </div>

            <div className="space-y-2 text-sm">
              <a href="https://www.credly.com/badges/08ad862a-4742-4bd9-82eb-d569f96e5245/print"
                 target="_blank"
                 className="block text-zinc-400 hover:text-white transition">
                ▹ AWS Cloud Web Application Builder
              </a>

              <a href="https://www.credly.com/badges/589c3fb1-94a1-4a29-891f-39dc3fb7690a"
                 target="_blank"
                 className="block text-zinc-400 hover:text-white transition">
                ▹ AWS Machine Learning Foundations
              </a>

              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=ED28BDA575CDAF8FD9E745DF4C2C8007828E75B1E81241F06F4323C0DDF0FEEE"
                 target="_blank"
                 className="block text-zinc-400 hover:text-white transition">
                ▹ Oracle AI Foundations Associate
              </a>
            </div>

          </div>

        </div>
      </motion.div>
    </Section>
  );
};
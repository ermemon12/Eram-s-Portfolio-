import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { Send, Github, Linkedin, Check, AlertCircle } from "lucide-react";
import { Section } from "./Section";
import emailjs from "@emailjs/browser";

// --- EmailJS Config ---
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ❗ Initialize EmailJS (CRITICAL FIX)
emailjs.init(PUBLIC_KEY || "");

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS: Missing environment variables!");
    }
  }, []);

  const handleSend = async () => {
    if (!message.trim() || status === "sending") return;

    setStatus("sending");
    setErrorMessage(null);

    try {
      const templateParams = {
        from_name: "Portfolio Visitor",
        message: message,
      };

      console.log("Sending EmailJS request...");

      const result = await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        templateParams,
        PUBLIC_KEY!
      );

      console.log("EmailJS Success:", result.text);

      setStatus("success");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      setErrorMessage(error?.text || error?.message || "Failed to send message");
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Get <span className="hero-gradient-text">in Touch</span>
        </h2>

        <p className="text-zinc-500 mb-12 text-sm">
          Drop a message or reach out directly
        </p>

        {/* Input + Button */}
        <div className="relative glass-panel border border-white/5 bg-zinc-900/20 rounded-2xl p-3 flex flex-col md:flex-row gap-3">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            disabled={status === "sending"}
            className="flex-grow bg-zinc-900/40 rounded-xl px-5 py-4 text-white focus:outline-none placeholder:text-zinc-600 font-mono text-sm border border-white/5"
          />

          <button
            onClick={handleSend}
            disabled={status !== "idle" || !message.trim()}
            className="px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-bold uppercase text-xs flex items-center justify-center gap-2 min-w-[160px] disabled:opacity-40"
          >
            <AnimatePresence mode="wait">

              {status === "idle" && (
                <motion.div key="idle" className="flex items-center gap-2">
                  Send <Send size={14} />
                </motion.div>
              )}

              {status === "sending" && (
                <motion.div key="sending" className="flex items-center gap-2">
                  Sending...
                </motion.div>
              )}

              {status === "success" && (
                <motion.div key="success" className="flex items-center gap-2 text-green-400">
                  Sent <Check size={14} />
                </motion.div>
              )}

              {status === "error" && (
                <motion.div key="error" className="flex items-center gap-2 text-red-400">
                  <span>{errorMessage || "Failed"}</span>
                  <AlertCircle size={14} />
                </motion.div>
              )}

            </AnimatePresence>
          </button>
        </div>

        {/* Email */}
        {/* Email */}
<div className="mt-6 text-sm text-zinc-500 space-y-1">
  <div>
    primary:{" "}
    <a
      href="mailto:erammemon392@gmail.com"
      className="text-white hover:text-violet-400 transition"
    >
      erammemon392@gmail.com
    </a>
  </div>

  <div>
    alternate:{" "}
    <a
      href="mailto:eramm1203@gmail.com"
      className="text-zinc-400 hover:text-white transition"
    >
      eramm1203@gmail.com
    </a>
  </div>
</div>

        {/* Socials */}
        <div className="mt-10 flex gap-6 justify-center">

          <a href="https://github.com/ermemon12" target="_blank">
            <Github className="text-white/50 hover:text-white" />
          </a>

          <a href="https://www.linkedin.com/in/eram-kandhal-46580b310/" target="_blank">
            <Linkedin className="text-white/50 hover:text-white" />
          </a>

        </div>

      </div>
    </Section>
  );
};
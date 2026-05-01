/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GlowBackground } from "./components/GlowBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experiments } from "./components/Experiments";
import { AIPlayground } from "./components/AIPlayground";
import { SystemProfile } from "./components/SystemProfile";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Experiments />
        <AIPlayground />
        <SystemProfile />
        <Contact />
      </main>

      {/* Decorative side text */}
      <div className="fixed left-8 bottom-32 hidden xl:block pointer-events-none">
        <div className="vertical-text-container flex flex-col items-center gap-6 text-[9px] text-zinc-700 font-mono tracking-[0.4em] [writing-mode:vertical-rl] uppercase font-bold">
          <span className="hover:text-zinc-400 transition-colors">SYSTEM: STABLE_V2</span>
          <div className="w-[1px] h-20 bg-white/5"></div>
          <span className="hover:text-zinc-400 transition-colors">NODE: 0x01_EVAL_PIPELINE</span>
        </div>
      </div>

      <div className="fixed right-8 bottom-32 hidden xl:block pointer-events-none">
        <div className="vertical-text-container flex flex-col items-center gap-6 text-[9px] text-zinc-700 font-mono tracking-[0.4em] [writing-mode:vertical-rl] uppercase font-bold">
          <span className="hover:text-zinc-400 transition-colors">LATENCY: OPTIMAL</span>
          <div className="w-[1px] h-12 bg-white/5"></div>
          <div className="w-1 h-1 rounded-full bg-brand-violet animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}


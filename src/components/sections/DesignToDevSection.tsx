"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layout, Code2, Monitor, Sparkles } from "lucide-react";

export default function DesignToDevSection() {
  const [activeTab, setActiveTab] = useState<"FIGMA" | "CODE" | "BROWSER">("FIGMA");

  const tabs = [
    { id: "FIGMA", label: "01. FIGMA SPEC", icon: Layout },
    { id: "CODE", label: "02. COMPONENT CODE", icon: Code2 },
    { id: "BROWSER", label: "03. LIVE BROWSER", icon: Monitor },
  ];

  return (
    <section className="relative z-20 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="w-full space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 06 — DESIGN → IMPLEMENTATION
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            DESIGN SHOULD SURVIVE <br />
            <span className="text-gradient-crimson">CONTACT WITH CODE.</span>
          </h2>
          <p className="text-base sm:text-xl text-zinc-200 font-sans leading-relaxed pt-4 border-t border-white/15">
            My front-end engineering expertise ensures every design is created with real-world implementation in mind—delivering interfaces that are pixel-faithful, responsive, performant, and scalable.
          </p>
        </div>

        {/* Interactive Transformation Stage Viewer */}
        <div className="space-y-6">
          {/* Stage Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-xl font-mono text-xs tracking-widest transition-all duration-300 flex items-center gap-3 border ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white border-transparent shadow-[0_0_20px_rgba(255,42,109,0.5)] font-bold"
                      : "glass-pill text-zinc-300 border-white/15 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Viewer Box */}
          <div className="relative rounded-2xl glass-card border border-white/15 p-6 md:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Top Bar of Viewer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="ml-4 text-zinc-300">
                  {activeTab === "FIGMA"
                    ? "Figma Workspace — Ravinder Design System Spec v2.4"
                    : activeTab === "CODE"
                    ? "src/components/ui/Button.tsx — React + Tailwind"
                    : "https://ravinder.design/live-preview"}
                </span>
              </div>
              <span className="text-[#ff5500] font-semibold">SYNCHRONIZED STATE</span>
            </div>

            {/* Content per Tab */}
            <div className="py-8 font-mono text-xs md:text-sm">
              {activeTab === "FIGMA" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-zinc-300">// Design Tokens & Fluid Grid Layout Specs</span>
                    <span className="text-[#ff2a6d] font-bold">Auto-Layout: 100% Fluid Width</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-zinc-400">Primary Brand Gradient</div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-r from-[#ff0055] to-[#ff6600]" />
                        <span className="text-white font-semibold">#FF0055 → #FF6600</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-zinc-400">Typography</div>
                      <div className="text-white font-semibold">Space Grotesk 800</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-zinc-400">Constraints</div>
                      <div className="text-white font-semibold">Fullwidth Fluid Responsive</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "CODE" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 font-mono text-zinc-200 space-y-2 overflow-x-auto"
                >
                  <div>
                    <span className="text-purple-300 font-semibold">export default function</span>{" "}
                    <span className="text-yellow-300">ActionComponent</span>
                    <span className="text-zinc-300">{"({ label, onClick })"}</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300 font-semibold">return</span> (
                  </div>
                  <div className="pl-8 text-emerald-300">
                    &lt;<span className="text-rose-300 font-bold">button</span> className=
                    <span className="text-sky-300">
                      "w-full px-8 py-4 bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white font-mono rounded-full shadow-lg"
                    </span>
                    &gt;
                  </div>
                  <div className="pl-12 text-white font-semibold">{"{label}"}</div>
                  <div className="pl-8 text-emerald-300">
                    &lt;/<span className="text-rose-300 font-bold">button</span>&gt;
                  </div>
                  <div className="pl-4">);</div>
                  <div>{"}"}</div>
                </motion.div>
              )}

              {activeTab === "BROWSER" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/5 border border-white/10 space-y-4 text-center"
                >
                  <div className="px-8 py-4 bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white font-mono text-xs tracking-widest font-bold rounded-full shadow-[0_0_30px_rgba(255,42,109,0.6)] border border-white/20 animate-pulse">
                    LIVE INTERFACE RENDERED
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-lg">
                    Pixel-perfect execution matching Figma tokens, 60fps responsive animations, accessible interactive states, and production resilience.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>ZERO DESIGN DEBT</span>
              <span className="text-zinc-200 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ff2a6d]" /> 100% FAITHFUL REPRODUCTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

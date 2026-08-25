"use client";

import { motion } from "framer-motion";

export default function AiSection() {
  const steps = [
    { num: "01", label: "IDEA", desc: "Formulating product requirements and prompt architecture" },
    { num: "02", label: "EXPLORE", desc: "Rapid spatial variation search across visual directions" },
    { num: "03", label: "GENERATE", desc: "Synthesizing UI concepts, copy variants & design system tokens" },
    { num: "04", label: "ITERATE", desc: "Refining micro-interactions, layout ergonomics & edge cases" },
    { num: "05", label: "PROTOTYPE", desc: "Building interactive functional models via AI code tools" },
    { num: "06", label: "BUILD", desc: "Deploying production-ready front-end web components" },
  ];

  const aiTools = [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Figma AI",
    "Cursor",
    "Lovable",
  ];

  return (
    <section className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 06 — AI INTEGRATION
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            DESIGNING <br />
            <span className="text-gradient-crimson">WITH AI.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-zinc-200 font-sans leading-relaxed pt-4 border-t border-white/15">
            AI doesn't replace design thinking. It expands the space in which designers can think, explore, prototype and build.
          </p>
        </div>

        {/* AI Workflow Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="glass-card p-6 rounded-2xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_25px_rgba(255,42,109,0.2)]"
            >
              <div>
                <span className="text-xs font-mono text-[#ff5500] font-bold block mb-2">
                  {s.num}
                </span>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors">
                  {s.label}
                </h3>
              </div>
              <p className="text-xs font-sans text-zinc-300 mt-4 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI Toolset Tags */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest block font-semibold">
            AI TOOLSET & PROMPT-DRIVEN WORKFLOWS:
          </span>
          <div className="flex flex-wrap gap-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl glass-pill text-xs font-mono text-zinc-200 border border-white/15 hover:border-[#ff2a6d]/60 hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

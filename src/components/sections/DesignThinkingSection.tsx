"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DesignThinkingSection() {
  const steps = [
    { num: "01", stage: "DISCOVER", desc: "User research, stakeholder alignment & problem framing" },
    { num: "02", stage: "DEFINE", desc: "Information architecture, user personas & system goals" },
    { num: "03", stage: "STRUCTURE", desc: "Wireframes, flowcharts & spatial relationship mapping" },
    { num: "04", stage: "DESIGN", desc: "High-fidelity visual systems, typography & micro-interactions" },
    { num: "05", stage: "PROTOTYPE", desc: "Interactive motion prototypes & usability testing" },
    { num: "06", stage: "BUILD", desc: "Front-end implementation, component tokenization & QA" },
    { num: "07", stage: "REFINE", desc: "Analytics review, conversion optimization & iterative scaling" },
  ];

  return (
    <section className="relative z-20 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="w-full space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 04 — METHODOLOGY & PROCESS
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            FROM COMPLEXITY <br />
            <span className="text-gradient-crimson">TO CLARITY.</span>
          </h2>
          <p className="text-sm md:text-base font-mono text-zinc-300 max-w-xl">
            A structured 7-stage design process transforming complex requirements into clear, scalable digital experiences.
          </p>
        </div>

        {/* Horizontal / Grid Visual Process Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
          {steps.map((s, idx) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative glass-card p-6 rounded-2xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(255,42,109,0.2)]"
            >
              {/* Connector Line for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/20 group-hover:bg-[#ff2a6d] transition-colors z-20" />
              )}

              <div>
                <span className="text-xs font-mono text-[#ff5500] font-bold block mb-2">
                  {s.num}
                </span>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors">
                  {s.stage}
                </h3>
              </div>

              <p className="text-xs font-sans text-zinc-300 mt-4 leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-zinc-400 group-hover:text-[#ff2a6d] transition-colors">
                <span className="text-[10px] font-mono uppercase">STAGE {s.num}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

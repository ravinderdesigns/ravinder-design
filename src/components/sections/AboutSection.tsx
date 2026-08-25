"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
            {/* Portrait Image in refined Black & White Tone */}
            <img
              src="/assets/ravinder_portrait.jpg"
              alt="Ravinder Singh - Creative Director & Senior Product Designer"
              className="w-full h-full object-cover object-top grayscale contrast-110 brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:contrast-125"
            />
            {/* Overlay Gradient for seamless editorial contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#110d16]/85 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl border border-white/15">
              <span className="text-[11px] font-mono text-[#ff5500] uppercase font-bold tracking-wider block">
                VISUAL ANCHOR
              </span>
              <div className="text-base font-display font-bold text-white mt-1">
                RAVINDER SINGH
              </div>
              <div className="text-xs font-mono text-zinc-300">
                Senior UI/UX & Product Designer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 10 — BIOGRAPHY & PERSPECTIVE
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            MORE THAN <br />
            <span className="text-gradient-crimson">PIXELS.</span>
          </h2>

          <div className="space-y-6 text-lg sm:text-2xl text-zinc-200 font-sans leading-relaxed">
            <p className="font-normal text-white">
              I'm a Senior UI/UX & Product Designer with 12+ years of experience turning complex business requirements into simple, scalable digital experiences.
            </p>
            <p className="text-zinc-300 font-normal">
              I work across UX strategy, visual design, design systems and front-end implementation, with a particular interest in using AI to accelerate exploration and prototyping without losing the human side of design.
            </p>
          </div>

          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-zinc-300">
            <div>
              <span className="text-[#ff5500] block font-bold text-base">12+ YEARS</span>
              <span>Total Industry Experience</span>
            </div>
            <div>
              <span className="text-[#ff5500] block font-bold text-base">DESIGN & CODE</span>
              <span>Dual Capability Focus</span>
            </div>
            <div>
              <span className="text-[#ff5500] block font-bold text-base">AI WORKFLOWS</span>
              <span>Accelerated Exploration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

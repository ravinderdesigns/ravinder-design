"use client";

import { motion } from "framer-motion";

export default function LeadershipSection() {
  const stats = [
    { value: "8+", label: "DESIGNERS LED", sub: "Guided cross-functional design teams to launch key product initiatives." },
    { value: "50+", label: "DIGITAL PRODUCTS & WEBSITES", sub: "Delivered high-performing SaaS platforms, web apps & eCommerce experiences." },
    { value: "15+", label: "STAKEHOLDERS COLLABORATED WITH", sub: "Aligned product strategies across C-suite executives, PMs, and engineering." },
    { value: "8", label: "JUNIOR DESIGNERS MENTORED", sub: "Fostered team growth, design craft, and career progression pathways." },
  ];

  return (
    <section className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 05 — CREATIVE LEADERSHIP
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-tight">
            DESIGN IS A <br />
            <span className="text-gradient-crimson">TEAM SPORT.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-zinc-200 font-sans leading-relaxed pt-4 border-t border-white/15">
            I lead, mentor and collaborate with designers, developers, product teams and executive stakeholders to turn complex ideas into scalable digital experiences.
          </p>
        </div>

        {/* Cinematic Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,42,109,0.25)]"
            >
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white group-hover:text-[#ff2a6d] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-mono tracking-widest text-[#ff5500] font-bold mt-4 uppercase">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-zinc-300 mt-4 pt-4 border-t border-white/10 leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

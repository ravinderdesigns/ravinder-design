"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CapabilitiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const capabilities = [
    {
      num: "01",
      title: "PRODUCT DESIGN",
      desc: "Designing digital products from structure and flows to polished interfaces.",
    },
    {
      num: "02",
      title: "UX / UI",
      desc: "Creating intuitive, scalable and conversion-focused experiences.",
    },
    {
      num: "03",
      title: "DESIGN SYSTEMS",
      desc: "Building consistent visual languages that scale across products.",
    },
    {
      num: "04",
      title: "WEB & MOBILE",
      desc: "Designing responsive experiences across websites and mobile applications.",
    },
    {
      num: "05",
      title: "SAAS & DASHBOARDS",
      desc: "Creating complex data-heavy interfaces that remain simple and usable.",
    },
    {
      num: "06",
      title: "DESIGN → DEVELOPMENT",
      desc: "Bridging the gap between design and implementation.",
    },
    {
      num: "07",
      title: "AI-ASSISTED DESIGN",
      desc: "Using AI to accelerate ideation, exploration, prototyping and development.",
    },
    {
      num: "08",
      title: "CREATIVE LEADERSHIP",
      desc: "Leading designers, mentoring teams and establishing stronger design workflows.",
    },
  ];

  return (
    <section
      id="expertise"
      className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10"
    >
      <div className="w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
              // 02 — CORE CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mt-2">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm md:text-base font-mono text-zinc-300 max-w-md">
            8 core dimensions bridging high-level creative direction and product strategy with precision front-end execution.
          </p>
        </div>

        {/* Editorial Capabilities List */}
        <div className="space-y-4">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-8 transition-colors duration-500 hover:border-[#ff2a6d]/60"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 z-10 relative">
                {/* Number & Title */}
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-sm font-mono tracking-widest text-[#ff5500] group-hover:text-[#ff2a6d] transition-colors font-bold">
                    {cap.num}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-zinc-200 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="max-w-xl text-base sm:text-lg text-zinc-300 group-hover:text-white transition-colors font-sans">
                  {cap.desc}
                </div>
              </div>

              {/* Hover Atmospheric Background Fill */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0055]/15 via-[#ff6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

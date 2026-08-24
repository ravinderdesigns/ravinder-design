"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, FileText, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const bottomItems = [
    { num: "# 01", title: "Brand Strategy", sub: "Product Strategy & UX Architecture" },
    { num: "# 02", title: "Brand Identity Design", sub: "UI & Scalable Design Systems" },
    { num: "# 03", title: "Packaging Design", sub: "Front-End & Creative Development" },
    { num: "# 04", title: "Creative Direction", sub: "Product Leadership & AI Integration" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full min-h-screen flex flex-col justify-between overflow-hidden bg-transparent pt-28 md:pt-36 pb-10 sm:pb-14 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24"
    >
      {/* Hero Central Area (Left Stacked Title & Right Statement) */}
      <motion.div
        style={{ opacity, y }}
        className="w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Greeting & Huge Bold Title */}
        <div className="lg:col-span-7 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg sm:text-2xl md:text-3xl text-zinc-100 font-sans font-medium tracking-tight">
              Hey, I'm a
            </span>
            <span className="px-3 py-0.5 rounded-full glass-pill border border-white/20 text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
              RAVINDER SINGH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-white leading-[0.92] drop-shadow-lg"
          >
            Creative <br />
            Director
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 text-xs sm:text-sm font-mono tracking-widest text-zinc-300 uppercase"
          >
            Senior UI/UX · Product Designer · Creative Lead
          </motion.div>
        </div>

        {/* Right Column: Statement & Subtext */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6 xl:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] drop-shadow-md">
              Great design should feel invisible.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-normal leading-relaxed max-w-lg">
              From logo to language, I build brands that connect and convert. 12+ years shaping digital products, design systems, and high-performance user experiences.
            </p>
          </motion.div>

          {/* Quick CTA Actions: Explore Work, Resume, WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#work"
              className="px-6 py-3.5 bg-gradient-to-r from-[#ff0055] to-[#ff6600] hover:brightness-110 text-white font-mono text-xs tracking-widest uppercase font-bold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,42,109,0.5)] hover:scale-105 flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/assets/ravinder_singh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 glass-pill hover:bg-white/15 text-zinc-100 hover:text-white border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 hover:border-[#ff2a6d]/50"
            >
              <FileText className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>RESUME</span>
            </a>

            <a
              href="https://wa.me/919464550630?text=Hi%20Ravinder,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 hover:border-emerald-400 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Horizontal Row with 4 Numbered Focus Areas (Matching reference image) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="w-full pt-8 sm:pt-12 border-t border-white/15 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
      >
        {bottomItems.map((item, idx) => (
          <div
            key={item.num}
            className="group space-y-1.5 cursor-default transition-all duration-300"
          >
            <div className="text-xs sm:text-sm font-mono font-bold text-[#ff5500] group-hover:text-[#ff2a6d] transition-colors tracking-wider">
              {item.num}
            </div>
            <div className="text-sm sm:text-base md:text-lg font-display font-semibold text-white group-hover:translate-x-1 transition-transform">
              {item.title}
            </div>
            <div className="text-[11px] font-sans text-zinc-300 hidden sm:block">
              {item.sub}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

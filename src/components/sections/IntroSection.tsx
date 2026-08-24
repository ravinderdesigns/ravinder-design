"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const title1Opacity = useTransform(scrollYProgress, [0, 0.25], [0.2, 1]);
  const title2Opacity = useTransform(scrollYProgress, [0.25, 0.5], [0.2, 1]);
  const title3Opacity = useTransform(scrollYProgress, [0.5, 0.75], [0.2, 1]);
  const bodyOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0.2, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 w-full min-h-screen flex items-center justify-center py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10"
    >
      <div className="relative z-10 w-full space-y-16">
        <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
          // 01 — PHILOSOPHY & ANCHOR
        </span>

        {/* Big Editorial Headline */}
        <div className="space-y-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-white leading-none">
          <motion.div style={{ opacity: title1Opacity }} className="transition-opacity">
            I DESIGN.
          </motion.div>
          <motion.div style={{ opacity: title2Opacity }} className="text-gradient-crimson transition-opacity">
            I THINK.
          </motion.div>
          <motion.div style={{ opacity: title3Opacity }} className="transition-opacity">
            I BUILD.
          </motion.div>
        </div>

        {/* Narrative Copy */}
        <motion.div
          style={{ opacity: bodyOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg sm:text-2xl md:text-3xl text-zinc-200 font-sans leading-relaxed pt-8 border-t border-white/15"
        >
          <p className="font-normal text-white">
            I'm a Senior UI/UX & Product Designer and Creative Lead focused on turning complex requirements into intuitive, scalable digital experiences.
          </p>
          <p className="text-zinc-300 font-normal">
            My work sits at the intersection of user experience, visual brand identity, design systems, front-end architecture and AI-assisted workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Linkedin,
  Code,
  Github,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";

import InteractiveParticleText from "@/components/ui/InteractiveParticleText";

interface ContactFooterSectionProps {
  onOpenContact: () => void;
}

export default function ContactFooterSection({ onOpenContact }: ContactFooterSectionProps) {
  return (
    <footer
      id="contact"
      className="relative z-10 w-full pt-20 pb-4 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/15 overflow-hidden"
    >
      {/* Deep Radiant Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#ff0055]/30 via-[#ff6600]/25 to-transparent rounded-full blur-[180px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full space-y-12 text-center flex flex-col items-center">
        {/* Final Statement */}
        <div className="space-y-6 max-w-5xl">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 11 — THE DESTINATION
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-white leading-none drop-shadow-2xl">
            GOOD DESIGN <br />
            SHOULD FEEL <br />
            <span className="text-gradient-crimson italic font-normal">INEVITABLE.</span>
          </h2>
          <p className="text-xl sm:text-3xl md:text-4xl text-zinc-200 font-sans pt-6 font-light">
            Let's build something meaningful together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/919464550630?text=Hi%20Ravinder,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-mono text-xs tracking-widest uppercase font-bold rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_rgba(16,185,129,0.8)] flex items-center gap-2.5 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>MESSAGE ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="/assets/ravinder_singh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 glass-card hover:bg-white/15 text-zinc-100 hover:text-white font-mono text-xs tracking-widest uppercase font-bold rounded-full transition-all duration-300 border border-white/20 hover:border-[#ff2a6d]/50 flex items-center gap-2.5 hover:scale-105"
          >
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links Row */}
        <div className="w-full pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-zinc-300">
          <a
            href="https://wa.me/919464550630"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors font-bold"
          >
            <MessageCircle className="w-4 h-4" /> WHATSAPP (+91 94645 50630)
          </a>
          <a
            href="https://www.instagram.com/ravinderdesigner/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#ff2a6d]" /> INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/people/UIUX-Designer-Frontend-Developer/61579447824026/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Facebook className="w-4 h-4 text-[#1877f2]" /> FACEBOOK
          </a>
          <a
            href="https://www.youtube.com/@ravinderdesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Youtube className="w-4 h-4 text-[#ff0000]" /> YOUTUBE
          </a>
          <a
            href="https://behance.net/singhrv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Globe className="w-4 h-4 text-[#0057ff]" /> BEHANCE
          </a>
          <a
            href="https://www.linkedin.com/in/ravinder-singh-b2369624/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2]" /> LINKEDIN
          </a>
          <a
            href="https://github.com/ravinderdesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" /> GITHUB
          </a>
          <a
            href="https://codepen.io/ravinderdesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a6d] flex items-center gap-1.5 transition-colors"
          >
            <Code className="w-4 h-4 text-[#f59e0b]" /> CODEPEN
          </a>
        </div>

        {/* Interactive Particle Physics Text Banner (Framer-style) */}
        <InteractiveParticleText text="RAVINDER SINGH" />
      </div>
    </footer>
  );
}

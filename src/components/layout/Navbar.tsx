"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle, FileText } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "WORK", href: "#work" },
    { name: "CASE STUDIES", href: "#case-studies" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CERTIFICATIONS", href: "#certifications" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between ${
          scrolled
            ? "bg-[#110d16]/70 backdrop-blur-xl border-b border-white/15 py-3 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white font-display tracking-tight text-sm md:text-base font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff0055] shadow-[0_0_12px_#ff0055] group-hover:scale-125 transition-transform" />
          <span className="tracking-widest font-mono text-xs text-zinc-200 group-hover:text-white transition-colors">
            RAVINDER SINGH
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 glass-pill px-6 py-2 rounded-full border border-white/15 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest text-zinc-300 hover:text-white transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff0055] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons (Resume & WhatsApp) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/assets/ravinder_singh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white/20 hover:border-[#ff2a6d] glass-pill text-zinc-200 hover:text-white text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>RESUME</span>
          </a>

          <a
            href="https://wa.me/919464550630?text=Hi%20Ravinder,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-100 text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-1.5 font-bold"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-200 hover:text-white glass-pill rounded-lg border border-white/15"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#110d16]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold tracking-tight text-white hover:text-[#ff2a6d] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href="/assets/ravinder_singh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 glass-card text-white font-mono text-xs tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 border border-white/20"
              >
                <FileText className="w-4 h-4 text-[#ff5500]" />
                <span>VIEW RESUME</span>
              </a>

              <a
                href="https://wa.me/919464550630?text=Hi%20Ravinder,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP (+91 94645 50630)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

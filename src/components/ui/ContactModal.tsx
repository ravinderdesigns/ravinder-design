"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Mail,
  Linkedin,
  Globe,
  Code,
  Github,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-card border border-white/20 p-6 sm:p-10 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-zinc-300 hover:text-white transition-colors rounded-full bg-white/10 border border-white/15 hover:border-[#ff2a6d]/50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase font-semibold">
                // GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white mt-2">
                LET'S BUILD SOMETHING <br className="hidden sm:block" />
                <span className="text-gradient-crimson">EXTRAORDINARY.</span>
              </h2>
              <p className="text-sm text-zinc-300 mt-2 font-sans">
                Available for Senior Product Design roles, Creative Direction & Scalable Front-End Systems.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff0055]/20 border border-[#ff2a6d] flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#ff2a6d]" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">Message Received</h3>
                <p className="text-sm text-zinc-300 mt-1">Thank you! Ravinder will respond promptly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2a6d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2a6d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">PROJECT OR OPPORTUNITY DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, team, or challenge..."
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2a6d] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-xl transition-all shadow-lg hover:brightness-110 flex items-center justify-center gap-2 border border-white/20"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-300">
              <span className="text-[#ff5500] font-semibold">DIRECT CHANNELS:</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/ravinderdesigner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#ff2a6d]" /> INSTAGRAM
                </a>
                <a
                  href="https://www.facebook.com/people/UIUX-Designer-Frontend-Developer/61579447824026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#1877f2]" /> FACEBOOK
                </a>
                <a
                  href="https://www.youtube.com/@ravinderdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5 text-[#ff0000]" /> YOUTUBE
                </a>
                <a
                  href="https://behance.net/singhrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#0057ff]" /> BEHANCE
                </a>
                <a
                  href="https://www.linkedin.com/in/ravinder-singh-b2369624/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /> LINKEDIN
                </a>
                <a
                  href="https://github.com/ravinderdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> GITHUB
                </a>
                <a
                  href="https://codepen.io/ravinderdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a6d] flex items-center gap-1 transition-colors"
                >
                  <Code className="w-3.5 h-3.5 text-[#f59e0b]" /> CODEPEN
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

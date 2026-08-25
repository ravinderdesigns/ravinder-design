"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Layers, Code, Globe, Cpu } from "lucide-react";

export default function SkillMatrixSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "FULL SPECTRUM", icon: Sparkles },
    { id: "DESIGN", label: "DESIGN", icon: Layers },
    { id: "FRONT-END", label: "FRONT-END", icon: Code },
    { id: "PLATFORMS", label: "PLATFORMS", icon: Globe },
    { id: "AI", label: "AI WORKFLOW", icon: Cpu },
  ];

  const tools = [
    // Design
    { name: "Figma", category: "DESIGN", tag: "Design Systems & UI" },
    { name: "Adobe CC", category: "DESIGN", tag: "Creative Suite & Visual Craft" },
    { name: "Design Systems", category: "DESIGN", tag: "Component Architecture & Tokens" },
    { name: "Prototyping", category: "DESIGN", tag: "Interactive Motion & User Flows" },
    { name: "UX Research", category: "DESIGN", tag: "User Journey & Usability Strategy" },

    // Front-End
    { name: "HTML/CSS", category: "FRONT-END", tag: "Semantic Markup & Modern CSS" },
    { name: "JavaScript", category: "FRONT-END", tag: "ES6+ Logic & Dynamic Interfaces" },
    { name: "React", category: "FRONT-END", tag: "Component Architectures & State" },
    { name: "Tailwind", category: "FRONT-END", tag: "Utility-First Design Systems" },
    { name: "GSAP", category: "FRONT-END", tag: "High-Performance Motion & Animation" },

    // Platforms
    { name: "WordPress", category: "PLATFORMS", tag: "Custom Themes & CMS Solutions" },
    { name: "Shopify", category: "PLATFORMS", tag: "eCommerce Storefronts & Liquid" },
    { name: "Webflow", category: "PLATFORMS", tag: "Visual Development & CMS" },

    // AI Workflow
    { name: "ChatGPT", category: "AI", tag: "Prompt Engineering & Product Specs" },
    { name: "Claude", category: "AI", tag: "Architectural Ideation & UX Strategy" },
    { name: "Gemini", category: "AI", tag: "Multimodal Exploration & Logic" },
    { name: "Figma AI", category: "AI", tag: "Automated Layouts & Variations" },
    { name: "Cursor", category: "AI", tag: "AI-Assisted Code Generation" },
    { name: "Lovable", category: "AI", tag: "Rapid Prototyping & MVPs" },
  ];

  const filteredTools =
    activeCategory === "ALL"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <section className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
              // 03 — SYSTEM STACK
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mt-2">
              THE TOOLKIT
            </h2>
          </div>
          <p className="text-sm md:text-base font-mono text-zinc-300 max-w-md">
            Interactive matrix representing cross-functional breadth across product design, engineering, and AI systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white border-transparent shadow-[0_0_25px_rgba(255,42,109,0.5)] font-bold"
                    : "glass-pill text-zinc-300 border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Typographic Tool Matrix */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={tool.name}
              className="group glass-card p-6 rounded-2xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,109,0.25)] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#ff5500] uppercase tracking-wider block font-semibold">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors mt-1">
                    {tool.name}
                  </h3>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-300 font-mono">
                <span>{tool.tag}</span>
                <span className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-[#ff0055] group-hover:shadow-[0_0_10px_#ff0055] transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

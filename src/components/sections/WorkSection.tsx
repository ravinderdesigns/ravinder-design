"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  TreePine,
  ShoppingBag,
  Truck,
  Car,
  Building2,
  Radar,
  Cpu,
  Shirt,
  Bot,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = [
    "ALL",
    "PRODUCT DESIGN",
    "WEB & MOBILE",
    "SAAS / DASHBOARDS",
    "AI PROTOTYPES",
  ];

  const projects = [
    {
      id: "p1",
      title: "BONSAI — Interactive 3D Scrollytelling Experience",
      category: "WEB & MOBILE",
      tag: "3D SCROLLYTELLING",
      desc: "An ultra-premium cinematic 3D scrollytelling web experience exploring the natural growth and temporal evolution of a bonsai tree with 155 interactive visual frames.",
      year: "2024",
      tech: ["Next.js", "WebGL / Canvas", "Framer Motion", "Tailwind CSS", "Scrollytelling"],
      link: "https://bonsai-scrollytelling.vercel.app/",
      icon: TreePine,
      badge: "Featured 3D Experience",
    },
    {
      id: "p2",
      title: "iPhone Motion Interactive Showcase",
      category: "PRODUCT DESIGN",
      tag: "MOTION CHOREOGRAPHY",
      desc: "A cinematic product landing page concept engineered with smooth scrubbed video choreography moving in sync with section scroll navigation for an Apple-inspired reveal.",
      year: "2024",
      tech: ["HTML5 Video", "GSAP ScrollTrigger", "CSS3 Motion", "JavaScript"],
      link: "https://ravinderdesigns.github.io/iphone-motion/",
      icon: Smartphone,
      badge: "Motion UI Lab",
    },
    {
      id: "p3",
      title: "SECTOR35 — Widebody & Performance Garage",
      category: "PRODUCT DESIGN",
      tag: "AUTOMOTIVE MOTION UI",
      desc: "Interactive high-octane automotive garage web showcase featuring dynamic canvas chassis choreography, GT-R aero specs, interactive HUD readout, and responsive layout ergonomics.",
      year: "2024",
      tech: ["HTML5 Canvas", "Tailwind CSS", "Interactive Motion", "UI/UX"],
      link: "https://ravinderdesigns.github.io/car-garage/",
      icon: Car,
      badge: "Automotive Motion Lab",
    },
    {
      id: "p4",
      title: "STS Logistics & White Glove Delivery Platform",
      category: "WEB & MOBILE",
      tag: "COMMERCIAL CMS & LOGISTICS",
      desc: "Commercial logistics platform and prototype designed for premium white-glove furniture delivery, automated quoting workflows, and streamlined client scheduling.",
      year: "2024",
      tech: ["Figma Prototype", "WordPress", "UI/UX Architecture", "Responsive Design"],
      link: "https://ship-sts.com/white-glove-delivery/",
      icon: Truck,
      badge: "Live Platform & Prototype",
    },
    {
      id: "p5",
      title: "EZ Windows Australia — Custom Configurator & Store",
      category: "SAAS / DASHBOARDS",
      tag: "E-COMMERCE & CONFIGURATOR",
      desc: "Enterprise architectural eCommerce platform featuring custom window and door product configurators, instantaneous multi-variant quoting, and streamlined checkout.",
      year: "2023",
      tech: ["WordPress / Elementor", "Custom Configurator", "UI/UX Architecture", "eCommerce"],
      link: "https://www.ezwindows.com.au/",
      icon: ShoppingBag,
      badge: "Enterprise eCommerce",
    },
    {
      id: "p6",
      title: "Discovery Alert — Mining & Mineral Intelligence",
      category: "SAAS / DASHBOARDS",
      tag: "MINING INTELLIGENCE SAAS",
      desc: "Australian mineral exploration and resources intelligence platform delivering real-time drilling alerts, visual mapping data, and market analysis dashboards.",
      year: "2024",
      tech: ["Figma Prototype", "WordPress / PHP", "Data Visualization", "UI/UX Architecture"],
      link: "https://discoveryalert.com.au/",
      icon: Radar,
      badge: "Live SaaS Platform",
    },
    {
      id: "p7",
      title: "Road Runner Scooters — High-Performance E-Scooters",
      category: "WEB & MOBILE",
      tag: "D2C E-COMMERCE",
      desc: "High-performance electric scooter online storefront featuring custom promotional campaign banners, festive seasonal merchandising, and conversion-optimized product pages.",
      year: "2024",
      tech: ["Shopify", "Custom Liquid Theme", "UI/UX Design", "eCommerce Optimization"],
      link: "https://roadrunnerscooters.com/",
      icon: Sparkles,
      badge: "Live Shopify Store",
    },
    {
      id: "p8",
      title: "Jump Higher Overnight — Athletic Training Platform",
      category: "WEB & MOBILE",
      tag: "ATHLETIC TRAINING & FITNESS",
      desc: "High-energy athletic training platform and prototype featuring athlete onboarding workflows, training course modules, and conversion-optimized landing pages.",
      year: "2024",
      tech: ["Figma Prototype", "React", "WordPress", "UI/UX Design"],
      link: "https://www.figma.com/proto/Ohfd44zPivdpSBnC59p024/Jump-Higher-Overnight?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=scale-down-width&mode=design&t=t7vuA9Wh9OZSsWw5-1",
      icon: Sparkles,
      badge: "Figma Prototype & App",
    },
    {
      id: "p9",
      title: "Digitronic — Industrial Automation Systems",
      category: "WEB & MOBILE",
      tag: "INDUSTRIAL TECH & ENGINEERING",
      desc: "Australian industrial automation and electronic engineering solutions website highlighting technical service capabilities, product catalogs, and corporate solutions.",
      year: "2024",
      tech: ["WordPress / Custom CMS", "Dear Systems Integration", "Technical UI", "SEO"],
      link: "https://digitronic.com.au/",
      icon: Cpu,
      badge: "Industrial Tech Platform",
    },
    {
      id: "p10",
      title: "Galaxy Wholesalers — B2B Wholesale Distribution Portal",
      category: "SAAS / DASHBOARDS",
      tag: "B2B WHOLESALE COMMERCE",
      desc: "High-volume B2B wholesale distribution marketplace built for bulk order management, tiered pricing matrices, enterprise quoting, and catalogue search.",
      year: "2023",
      tech: ["WooCommerce / Magento", "B2B eCommerce", "Catalogue Management", "UI/UX"],
      link: "https://galaxywholesalers.com/",
      icon: Building2,
      badge: "B2B Distribution Platform",
    },
    {
      id: "p11",
      title: "Nesheli — Promotional Merchandise & Apparel",
      category: "WEB & MOBILE",
      tag: "CUSTOM MERCHANDISE E-COMMERCE",
      desc: "Comprehensive promotional product catalog, corporate gifting and custom apparel platform featuring extensive product categorization and quotation workflows.",
      year: "2023",
      tech: ["WordPress / WooCommerce", "MidOcean Integration", "Mobile Ergonomics", "eCommerce"],
      link: "https://nesheli.com/",
      icon: Shirt,
      badge: "Live Merchandise Store",
    },
    {
      id: "p12",
      title: "Lovable AI Next-Gen Web Application Alpha",
      category: "AI PROTOTYPES",
      tag: "AI PROTOTYPING & RAPID APP",
      desc: "Full-stack interactive web application prototype built using modern AI prompt architecture, iterative component generation, and rapid deployment.",
      year: "2025",
      tech: ["Lovable AI", "React", "Tailwind CSS", "AI Prompt Engineering"],
      link: "https://lovable.dev/preview/TbHRzLDaNsSqvaQD6yYY8JAXuKXzsDug",
      icon: Bot,
      badge: "Live AI Prototype",
    },
    {
      id: "p13",
      title: "Lovable AI Product Experience Beta",
      category: "AI PROTOTYPES",
      tag: "AI PRODUCT WORKFLOW",
      desc: "Next-generation SaaS workflow prototype synthesized with AI rapid prototyping, featuring interactive live state management and dynamic UI components.",
      year: "2025",
      tech: ["Lovable AI", "AI Code Synthesizer", "React", "Design Systems"],
      link: "https://lovable.dev/preview/EWGolQadgYCBWDdGrhtJZnfAx5OSqTbK",
      icon: Sparkles,
      badge: "Live AI Prototype",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10"
    >
      <div className="w-full space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
              // 07 — SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mt-2">
              FEATURED PROJECTS
            </h2>
            <p className="text-sm md:text-base text-zinc-300 font-sans mt-2">
              Live web applications, interactive motion experiences, eCommerce platforms, and AI prototypes ({projects.length} curated works).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white border border-transparent shadow-[0_0_20px_rgba(255,42,109,0.5)] font-bold"
                    : "glass-pill text-zinc-300 border border-white/15 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modular Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group glass-card p-8 sm:p-10 rounded-3xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,42,109,0.3)] flex flex-col justify-between block cursor-pointer"
              >
                <div>
                  {/* Top Banner with Project Branding */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 flex flex-col items-center justify-center p-6 text-center overflow-hidden mb-6 group-hover:border-[#ff2a6d]/50 transition-colors">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#ff0055]/30 group-hover:border-[#ff2a6d] transition-all duration-300 shadow-xl">
                      <Icon className="w-8 h-8 text-[#ff2a6d]" />
                    </div>
                    <span className="text-xs font-mono text-zinc-200 tracking-widest uppercase font-bold">
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 mt-1 flex items-center gap-1.5 truncate max-w-[85%]">
                      <ExternalLink className="w-3 h-3 text-[#ff5500] shrink-0" /> {project.link.replace("https://", "").replace("www.", "")}
                    </span>

                    {/* Live Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.badge}</span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#ff5500] font-semibold">
                    <span>{project.category}</span>
                    <span className="text-zinc-400">{project.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors mt-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-zinc-300 mt-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Technologies & Link */}
                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-zinc-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-[#ff2a6d] transition-colors">
                    <span>LAUNCH PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

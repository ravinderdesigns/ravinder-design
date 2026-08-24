"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, BookOpen, Layers, Cpu, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function CertificationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal scroll movement as the user scrolls past the section
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const certifications = [
    {
      id: "c1",
      title: "Generative AI & ChatGPT Masterclass",
      issuer: "SkillNation",
      category: "AI & GENAI",
      issueDate: "Verified Credential",
      skills: ["Prompt Engineering", "AI Design Workflows", "LLM Integration", "Automation"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: Cpu,
      badge: "AI Mastery",
      description: "Comprehensive mastery in generative AI prompt architecture, automated workflow synthesis, and AI-accelerated product prototyping.",
    },
    {
      id: "c2",
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      category: "UI/UX & PRODUCT",
      issueDate: "Verified Credential",
      skills: ["UX Research", "Figma Design Systems", "Wireframing", "Usability Testing"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: Award,
      badge: "Google Certified",
      description: "End-to-end UX lifecycle covering user empathy, wireframing, high-fidelity interactive prototyping, and multi-platform design systems.",
    },
    {
      id: "c3",
      title: "Human-Computer Interaction & UX Design",
      issuer: "Interaction Design Foundation (IxDF)",
      category: "UI/UX & PRODUCT",
      issueDate: "Verified Credential",
      skills: ["Information Architecture", "Heuristic Evaluation", "Interaction Design", "Cognitive Ergonomics"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: BookOpen,
      badge: "Accredited UX",
      description: "Advanced interaction principles, mental models, cognitive ergonomics, and accessibility compliance across modern digital interfaces.",
    },
    {
      id: "c4",
      title: "Advanced Responsive Web & Design Systems",
      issuer: "Meta / Web Development Guild",
      category: "FRONT-END & CMS",
      issueDate: "Verified Credential",
      skills: ["Modern CSS3", "Responsive Architecture", "Design Tokens", "a11y Standards"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: Layers,
      badge: "Front-End Systems",
      description: "Modular component engineering, scalable design tokens, responsive typography scaling, and high-performance layout optimization.",
    },
    {
      id: "c5",
      title: "Conversion Rate Optimization (CRO) & Inbound UX",
      issuer: "HubSpot Academy",
      category: "UI/UX & PRODUCT",
      issueDate: "Verified Credential",
      skills: ["Conversion Funnels", "Landing Page UX", "A/B Testing", "Behavioral Analytics"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: ShieldCheck,
      badge: "Growth & CRO",
      description: "Data-driven conversion funnel design, user journey friction reduction, and behavioral UX optimization for web platforms.",
    },
    {
      id: "c6",
      title: "Enterprise CMS & eCommerce Architecture",
      issuer: "Shopify & WordPress Ecosystem",
      category: "FRONT-END & CMS",
      issueDate: "Verified Credential",
      skills: ["Custom Shopify Liquid", "WordPress CMS", "Performance Tuning", "Storefronts"],
      credentialUrl: "https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/",
      icon: Sparkles,
      badge: "eCommerce Certified",
      description: "Architectural mastery of custom CMS theme development, eCommerce storefront optimization, and fast headless web architectures.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative z-10 w-full py-32 bg-transparent border-t border-white/10 overflow-hidden"
    >
      <div className="w-full space-y-12">
        {/* Header with full width padding */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
              // 09 — LICENSES & CERTIFICATIONS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              VERIFIED <br />
              <span className="text-gradient-crimson">CREDENTIALS.</span>
            </h2>
            <p className="text-sm md:text-base font-mono text-zinc-300">
              Scroll-driven horizontal showcase of accredited qualifications spanning AI workflows, Google UX design, and front-end architecture.
            </p>
          </div>

          {/* LinkedIn Verified Direct Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ravinder-singh-b2369624/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-[0_0_25px_rgba(255,42,109,0.4)] hover:shadow-[0_0_35px_rgba(255,42,109,0.7)] flex items-center gap-2 border border-white/20"
            >
              <span>VIEW LINKEDIN CERTIFICATIONS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator Sub-bar */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff0055] animate-ping" />
            <span className="text-zinc-300 uppercase font-semibold">SCROLL-DRIVEN MOTION TRACK</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <span>Scroll vertically to traverse credentials</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#ff5500]" />
          </div>
        </div>

        {/* Single-Row Horizontal Moving Track on Scroll */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-6 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 w-max cursor-grab active:cursor-grabbing"
          >
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-[340px] sm:w-[420px] md:w-[460px] shrink-0 glass-card p-8 sm:p-9 rounded-3xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,42,109,0.3)] block"
                >
                  <div className="space-y-4">
                    {/* Top Bar with Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#ff0055]/30 group-hover:border-[#ff2a6d] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#ff2a6d]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/10 border border-white/15 text-zinc-200 group-hover:text-white group-hover:border-[#ff2a6d]/40 transition-colors flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {cert.badge}
                      </span>
                    </div>

                    {/* Issuer & Title */}
                    <div>
                      <span className="text-xs font-mono text-[#ff5500] uppercase font-bold tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors mt-1 leading-snug">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Link */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#ff5500] font-bold group-hover:text-[#ff2a6d] transition-colors">
                      <span>VERIFY ON LINKEDIN</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

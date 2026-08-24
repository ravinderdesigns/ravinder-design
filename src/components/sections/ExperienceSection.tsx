"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Lead UI/UX & Front-End Designer",
      company: "Oriental Outsourcing Consultants (P) Ltd.",
      period: "Nov 2020 – Present",
      location: "Mohali, India",
      status: "Current Leadership Role",
      bullets: [
        "Directed a team of 8+ designers to deliver 50+ web and mobile applications.",
        "Streamlined design workflows using Figma, reducing project turnaround by 30%.",
        "Collaborated with 15+ stakeholders to create responsive dashboards and AI-enhanced designs.",
        "Mentored 8 junior designers in Graphics/Web and accessibility best practices.",
        "Designed 50+ website high-fidelity UI mockups for clients using Figma/Adobe XD, ensuring alignment with brand guidelines.",
      ],
    },
    {
      role: "Senior UI/UX/Front-End Designer",
      company: "83ideas",
      period: "April 2019 – Nov 2020",
      location: "Mohali, India",
      bullets: [
        "Created 30+ website mockups for clients using Adobe XD, ensuring alignment with brand guidelines.",
        "Resolved 20+ design issues in CMS platforms (WordPress, Shopify), enhancing site performance by 30% and reducing load time by 2–3 seconds.",
        "Supervised end-to-end CMS projects, including template customization and graphics optimization.",
        "Collaborated with developers to bridge design-to-code workflows, reducing revision cycles.",
      ],
    },
    {
      role: "UI/UX/Front-End Designer",
      company: "Designs Visions",
      period: "March 2018 – April 2019",
      location: "Mohali, India",
      bullets: [
        "Developed 20+ responsive website mockups and customized CMS themes (WordPress/Shopify) for clients.",
        "Led end-to-end client projects, ensuring brand consistency and mobile-first optimization that increased user engagement by 25%.",
      ],
    },
    {
      role: "Senior Web & Graphics Designer",
      company: "Bytecode Technologies",
      period: "March 2015 – Jan 2018",
      location: "Mohali, India",
      bullets: [
        "Established the company's first visual identity, designing its original logo, brand guidelines, and flagship website—core assets later adopted by 2-3 subsidiary branches as the company scaled.",
        "Served as sole designer for all creative needs (UI/UX, marketing collateral, CMS development), enabling the startup's expansion to 3 branches within 2 years.",
        "Delivered 20+ projects (CMS/Graphics) with 95% on-time completion, aligning branding and mobile optimization.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10"
    >
      <div className="w-full space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
            // 08 — PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mt-2">
            CAREER EVOLUTION
          </h2>
          <p className="text-sm md:text-base font-mono text-zinc-300">
            A continuous progression from brand & web design to Senior Product Design & Creative Leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/15 pl-6 md:pl-12 space-y-12 ml-2 md:ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-2 w-4 h-4 rounded-full bg-[#1a1424] border-2 border-white/40 group-hover:border-[#ff2a6d] group-hover:bg-[#ff0055] group-hover:shadow-[0_0_15px_#ff0055] transition-all duration-300" />

              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 hover:border-[#ff2a6d]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,109,0.25)] space-y-6">
                {/* Role & Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base sm:text-lg font-mono text-[#ff5500] font-semibold mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Timestamp & Location Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-200">
                      <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-300">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.status && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{exp.status}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 font-sans text-sm sm:text-base text-zinc-200">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055] mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

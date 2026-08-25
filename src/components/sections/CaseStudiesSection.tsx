"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ShoppingBag,
  Radar,
  Truck,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface CaseStudyStep {
  stage: string;
  title: string;
  summary: string;
  details: string[];
}

interface CaseStudy {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  role: string;
  year: string;
  link: string;
  icon: any;
  overview: string;
  keyPillars: string[];
  metrics: { value: string; label: string }[];
  steps: CaseStudyStep[];
}

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "cs-ezwindows",
      num: "01",
      title: "EZ Windows Australia",
      subtitle: "Product Configurator & Architectural eCommerce",
      client: "EZ Windows (Australia)",
      category: "CONFIGURATOR & E-COMMERCE",
      role: "Lead UI/UX & Design Systems Architect",
      year: "2023 – 2024",
      link: "https://www.ezwindows.com.au/",
      icon: ShoppingBag,
      overview:
        "Engineered an enterprise-grade architectural product configurator allowing homeowners and builders to customize, visualize, and price custom windows and doors across 20+ architectural variants in real-time.",
      keyPillars: [
        "Interactive 2D/3D Configurator",
        "Dynamic Real-Time Pricing Logic",
        "Mobile-First Dimension Steppers",
        "Design Tokens & Atomic System",
      ],
      metrics: [
        { value: "+42%", label: "Conversion Rate Increase" },
        { value: "-65%", label: "Quoting Inquiries (Self-Served)" },
        { value: "3.2x", label: "Faster Checkout Completion" },
        { value: "$2.4M+", label: "Configured Orders Processed" },
      ],
      steps: [
        {
          stage: "01. CHALLENGE",
          title: "High Drop-off in Complex Custom Ordering",
          summary:
            "Ordering custom aluminum windows involves over 20 intricate parameters: glazing type, frame color, reveals, locks, handing, and custom millimeter dimensions. Non-technical users were overwhelmed, leading to a 68% cart drop-off rate.",
          details: [
            "Technical jargon alienated residential homeowners and renovators.",
            "Lack of instant price feedback forced users to wait days for offline quotes.",
            "Mobile ordering was nearly impossible due to dense multi-field desktop forms.",
          ],
        },
        {
          stage: "02. UX AUDIT",
          title: "Identifying Cognitive Load & Heuristic Gaps",
          summary:
            "Conducted heat-mapping, funnel analysis, and 14 user interviews with both residential renovators and commercial builders to isolate primary abandonment triggers.",
          details: [
            "Users experienced choice paralysis when presented with all 20 options simultaneously.",
            "Dimension error rate was high due to ambiguous measurement instructions.",
            "No persistent visual representation existed showing what the custom window looked like.",
          ],
        },
        {
          stage: "03. USER FLOW",
          title: "Streamlined 4-Step Progressive Disclosure",
          summary:
            "Restructured the entire purchasing architecture into a linear, progressive disclosure wizard that simplifies high-dimensional choices into intuitive micro-decisions.",
          details: [
            "Step 1: Style & Configuration (Sliding, Awning, Bifold, Double Hung).",
            "Step 2: Spatial Dimensions with visual bounding box guide.",
            "Step 3: Glass, Finish & Hardware selection with instant price delta badges.",
            "Step 4: Real-time dynamic quotation summary and 1-click add to cart.",
          ],
        },
        {
          stage: "04. WIREFRAMES",
          title: "Low-Fidelity Spatial Layout & Sticky Spec Summary",
          summary:
            "Iterated wireframes featuring a persistent dual-pane layout: sticky live specification summary and price readout on the right, progressive option selector on the left.",
          details: [
            "Created responsive layouts maintaining viewport visibility on mobile screens.",
            "Engineered quick-validation prompts before advancing to subsequent stages.",
            "Built error-prevention guards for out-of-spec structural architectural combinations.",
          ],
        },
        {
          stage: "05. UI & VISUAL CRAFT",
          title: "High-Contrast Visual Feedback & Vector Previews",
          summary:
            "Designed a crisp, modern aesthetic using high-contrast typography, clear micro-interaction states, and real-time SVG previews that reflect color and frame choices instantaneously.",
          details: [
            "Realistic finish swatch rendering for powder-coat color selections.",
            "Dynamic dimension callout lines that update dynamically with numeric inputs.",
            "Accessible touch targets (48px+) optimized for tablet and mobile tap precision.",
          ],
        },
        {
          stage: "06. DESIGN SYSTEM",
          title: "Modular Atomic Component Tokens in Figma",
          summary:
            "Constructed a scalable Figma design system comprising over 120+ modular UI components, auto-layout tokens, and reusable spec panels.",
          details: [
            "Design tokens covering typography scales, color palettes, and elevation shadows.",
            "Reusable stepper components, quantity selectors, and floating quote bars.",
            "Comprehensive documentation enabling 100% fidelity handoff to engineering.",
          ],
        },
        {
          stage: "07. DEVELOPMENT",
          title: "Front-End Implementation & Real-Time Price Engine",
          summary:
            "Collaborated closely with developers on WordPress/WooCommerce to implement custom client-side calculation algorithms and smooth transition states.",
          details: [
            "Instantaneous JS-powered price computation with zero server latency.",
            "Fluid responsive breakpoints ensuring desktop parity on iOS and Android.",
            "Integrated cross-browser QA and automated a11y testing suite.",
          ],
        },
        {
          stage: "08. RESULT",
          title: "Measurable Revenue Growth & Operational Efficiency",
          summary:
            "The redesigned configurator transformed EZ Windows from a manual quote bottleneck into Australia's leading digital-first custom window platform.",
          details: [
            "+42% boost in overall eCommerce checkout conversion rate.",
            "65% reduction in customer support calls requesting quote clarifications.",
            "3.2x faster average time-to-order completion.",
          ],
        },
      ],
    },
    {
      id: "cs-discoveryalert",
      num: "02",
      title: "Discovery Alert",
      subtitle: "Mineral Intelligence SaaS & Complex Data Platform",
      client: "Discovery Alert (Australia)",
      category: "SAAS & DATA VISUALIZATION",
      role: "Senior Product Designer & Information Architect",
      year: "2024",
      link: "https://discoveryalert.com.au/",
      icon: Radar,
      overview:
        "Designed the complete UX architecture and analytical cockpit for an Australian mineral exploration SaaS platform, translating high-dimensional geochemical drill assays, geospatial tenement maps, and real-time market alerts into actionable intelligence.",
      keyPillars: [
        "Complex Information Architecture",
        "Interactive Geochemical Charting",
        "Geospatial Tenement Map Viewer",
        "Real-Time Alert Filtering SaaS",
      ],
      metrics: [
        { value: "+180%", label: "Daily Active User Engagement" },
        { value: "94%", label: "Drill Alert Open & Interaction Rate" },
        { value: "<2 sec", label: "Query Retrieval Time Across 50k+ Assays" },
        { value: "4.9/5", label: "Subscriber Satisfaction Rating" },
      ],
      steps: [
        {
          stage: "01. CHALLENGE",
          title: "Information Overload Across Unstructured Reports",
          summary:
            "Geologists, fund managers, and mining investors were overwhelmed by hundreds of 50+ page ASX technical PDF releases daily, missing critical mineral discoveries due to fragmented reporting formats.",
          details: [
            "Complex tabular drill intercepts (e.g., 52m @ 2.8g/t Au) were buried in appendices.",
            "No unified spatial tool existed to compare mineral discoveries against neighboring tenements.",
            "Investors lacked customizable notification filters for specific commodities (Gold, Lithium, Copper, Uranium).",
          ],
        },
        {
          stage: "02. UX ARCHITECTURE",
          title: "Multi-Commodity Taxonomy & Hierarchical Filtering",
          summary:
            "Engineered a robust information hierarchy that normalizes disparate technical terminology across precious metals, battery materials, and critical mineral categories.",
          details: [
            "Structured a 4-tier filtering hierarchy: Commodity → Geological Basin → Assay Grade Cutoff → Market Cap.",
            "Designed multi-element comparative views for polymetallic drill results.",
            "Established unified data schemas for high-speed keyword and coordinate search.",
          ],
        },
        {
          stage: "03. DASHBOARD DESIGN",
          title: "High-Density 3-Pane Analytical Cockpit",
          summary:
            "Created an intuitive yet dense analytics dashboard organizing real-time market stream, geospatial exploration map, and drill hole grade visualizer on a single viewport.",
          details: [
            "Left Pane: Real-time discovery feed with visual significance badges (High Grade, Bonanza, Step-out).",
            "Center Pane: Interactive WebGL tenement map with active drilling rigs and mineral occurrences.",
            "Right Pane: Deep-dive drill hole assay inspector and historical intersection comparisons.",
          ],
        },
        {
          stage: "04. DATA VISUALIZATION",
          title: "Custom Drill Hole Grade-Thickness Visualizers",
          summary:
            "Translated complex 3D geological drill hole intercepts into clean, intuitive horizontal grade-thickness bar charts and depth profiles.",
          details: [
            "Color-coded mineral grade spectrum based on standard JORC mineral reporting standards.",
            "Interactive hover tooltips revealing depth from surface, true width, and gold-equivalent values.",
            "Synchronized map-to-table cross-filtering with zero UI lag.",
          ],
        },
        {
          stage: "05. SAAS RETENTION",
          title: "Custom Watchlists, Notification Triggers & Monetization",
          summary:
            "Designed high-retention SaaS product workflows including instant SMS/Email discovery triggers, user watchlists, saved queries, and frictionless tiered paywall onboarding.",
          details: [
            "User-defined threshold alerts (e.g. 'Notify me when >20g/t Au intercepted in Western Australia').",
            "Clean tiered subscription checkout workflow with instant team seat provisioning.",
            "Exportable visual reporting cards optimized for instant investor sharing.",
          ],
        },
        {
          stage: "06. RESULT",
          title: "Leading Market Adoption Across Mining Capital Funds",
          summary:
            "Discovery Alert became the benchmark analytical tool for ASX exploration investors, securing institutional adoption across Australia and North America.",
          details: [
            "+180% surge in daily active session duration.",
            "94% open and engagement rate on real-time drilling notification alerts.",
            "Rapidly adopted by top Australian resource hedge funds and retail investors.",
          ],
        },
      ],
    },
    {
      id: "cs-sts",
      num: "03",
      title: "STS Logistics & White Glove Delivery",
      subtitle: "Enterprise B2B Workflow & Operational Logistics Platform",
      client: "Ship STS (North America)",
      category: "B2B & OPERATIONAL UX",
      role: "Senior UI/UX & Systems Designer",
      year: "2024",
      link: "https://ship-sts.com/white-glove-delivery/",
      icon: Truck,
      overview:
        "Designed the end-to-end B2B quoting engine, dispatcher portal, and mobile-first driver inspection workflow for a specialized North American white-glove furniture delivery and high-value freight network.",
      keyPillars: [
        "B2B Multi-Party Workflow",
        "Operational Driver & Dispatch UX",
        "Instant Freight Quoting Engine",
        "Milestone Tracking & Proof-of-Delivery",
      ],
      metrics: [
        { value: "-50%", label: "Quoting & Booking Turnaround" },
        { value: "99.2%", label: "Milestone Delivery Compliance" },
        { value: "100%", label: "Digital COI & Sign-Off Auditing" },
        { value: "$10M+", label: "Freight Volume Orchestrated" },
      ],
      steps: [
        {
          stage: "01. CHALLENGE",
          title: "Operational Blind Spots in High-Touch Delivery",
          summary:
            "White-glove logistics requires delicate coordination between furniture manufacturers, freight dispatchers, assembly teams, building managers (COI requirements), and high-end retail customers. Manual spreadsheets created errors and scheduling delays.",
          details: [
            "High manual overhead in quoting room-of-choice, unboxing, and debris removal services.",
            "Lack of digital proof-of-condition created liability disputes during residential installations.",
            "No transparent real-time tracking existed for commercial retail partners.",
          ],
        },
        {
          stage: "02. OPERATIONAL RESEARCH",
          title: "Mapping the 7-Stage White Glove Freight Lifecycle",
          summary:
            "Shadowed logistics dispatchers, warehouse managers, and two-man residential delivery crews to map every operational friction point and regulatory requirement.",
          details: [
            "Mapped end-to-end touchpoints: Order Intake → COI Verification → Scheduling → En Route → On-Site Assembly → Digital Sign-off → Invoice.",
            "Identified driver mobile ergonomic needs when handling deliveries in freight elevators and tight hallways.",
            "Established compliance requirements for Certificate of Insurance (COI) document automation.",
          ],
        },
        {
          stage: "03. WORKFLOW DESIGN",
          title: "B2B Enterprise Portal & Instant Dimensional Quoting",
          summary:
            "Engineered an enterprise booking interface allowing commercial partners to input multi-piece dimensional freight, select accessorial services, and receive instant guaranteed rates.",
          details: [
            "Automated dimensional weight and accessorial rate calculator.",
            "Multi-stop scheduling calendar with automated elevator booking time slots.",
            "Bulk order CSV import with automated address geocoding and route grouping.",
          ],
        },
        {
          stage: "04. MOBILE DRIVER UX",
          title: "Frictionless On-Site Inspection & Digital Proof-of-Delivery",
          summary:
            "Designed a dedicated high-contrast mobile web interface for delivery crews to document pre-existing packaging damage, complete room checklists, and capture digital client signatures.",
          details: [
            "Single-thumb navigation with 52px touch targets for gloved operation.",
            "Offline-resilient photo upload queue for basement and underground parking deliveries.",
            "Instant digital bill-of-lading (e-BOL) generation and automatic customer receipt dispatch.",
          ],
        },
        {
          stage: "05. SYSTEM POLISH",
          title: "High-Visibility Status System & Milestone Tracking",
          summary:
            "Created a unified visual language with color-coded status badges, real-time shipment milestone timelines, and executive reporting views.",
          details: [
            "Live progress tracking links with interactive ETA map for residential clients.",
            "Automated exception flagging when delays or accessorial requirement changes occur.",
            "Clean, branded invoice breakdown with full transparent audit trail.",
          ],
        },
        {
          stage: "06. RESULT",
          title: "50% Faster Booking & Elimination of Liability Disputes",
          summary:
            "The STS platform transformed white-glove operations, dramatically shortening booking cycles, boosting partner trust, and handling multi-million dollar freight volume with zero tracking blind spots.",
          details: [
            "50% reduction in average freight booking and dispatch confirmation turnaround.",
            "99.2% on-time milestone delivery compliance across 10,000+ specialized drop-offs.",
            "Zero disputed damage claims due to mandatory photo-condition inspection logs.",
          ],
        },
      ],
    },
  ];

  const [activeStudyId, setActiveStudyId] = useState<string>("cs-ezwindows");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStudy =
    caseStudies.find((c) => c.id === activeStudyId) || caseStudies[0];

  const handleSelectStudy = (id: string) => {
    setActiveStudyId(id);
    setActiveStepIndex(0);
  };

  const IconComponent = activeStudy.icon;

  return (
    <section
      id="case-studies"
      className="relative z-10 w-full py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent border-t border-white/10 overflow-hidden"
    >
      {/* Radiant Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#ff0055]/15 via-[#ff6600]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#ff5500] uppercase block font-semibold">
              // 08 — DEEP DIVES & METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              FEATURED <br />
              <span className="text-gradient-crimson">CASE STUDIES.</span>
            </h2>
            <p className="text-sm md:text-base font-mono text-zinc-300">
              In-depth architectural breakdowns demonstrating end-to-end product design — from UX audits and user flows to design systems, front-end delivery, and measurable business outcomes.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>3 IN-DEPTH PRODUCT BREAKDOWNS</span>
          </div>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((study) => {
            const StudyIcon = study.icon;
            const isSelected = activeStudyId === study.id;
            return (
              <button
                key={study.id}
                onClick={() => handleSelectStudy(study.id)}
                className={`group text-left p-6 sm:p-7 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-br from-white/15 via-white/5 to-transparent border-[#ff2a6d] shadow-[0_0_35px_rgba(255,42,109,0.3)]"
                    : "glass-card border-white/15 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#ff5500]">
                      CASE STUDY {study.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                        isSelected
                          ? "bg-[#ff0055] border-[#ff2a6d] text-white shadow-[0_0_15px_#ff0055]"
                          : "bg-white/10 border-white/15 text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      <StudyIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#ff2a6d] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-300 mt-1">
                    {study.subtitle}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{study.category}</span>
                  <span
                    className={`flex items-center gap-1 font-bold ${
                      isSelected ? "text-[#ff2a6d]" : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    <span>EXPLORE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detailed Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Top Overview & Impact Banner */}
            <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#ff0055]/20 to-[#ff6600]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/20 text-[#ff5500] font-bold uppercase">
                      {activeStudy.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {activeStudy.role} · {activeStudy.year}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                    {activeStudy.title}
                  </h3>

                  <p className="text-base sm:text-lg text-zinc-200 font-sans leading-relaxed">
                    {activeStudy.overview}
                  </p>

                  {/* Key Pillars */}
                  <div className="pt-3 flex flex-wrap gap-2">
                    {activeStudy.keyPillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-zinc-300 flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#ff5500]" />
                        {pillar}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={activeStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff0055] to-[#ff6600] text-white font-mono text-xs tracking-wider uppercase font-bold shadow-[0_0_20px_rgba(255,42,109,0.5)] hover:scale-105 transition-all"
                    >
                      <span>VIEW LIVE PLATFORM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Impact Metrics Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  {activeStudy.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                    >
                      <div className="text-3xl sm:text-4xl font-display font-extrabold text-white text-gradient-crimson">
                        {m.value}
                      </div>
                      <div className="text-xs font-mono text-zinc-300 mt-2 leading-snug">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* End-to-End Architectural Process Track (Step-by-Step Interactive Pipeline) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#ff5500] uppercase font-bold tracking-wider block">
                    PROCESS & METHODOLOGY BREAKDOWN
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    End-to-End Execution Sequence
                  </h4>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  Select any stage to inspect design deliverables & strategy:
                </div>
              </div>

              {/* Process Navigation Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
                {activeStudy.steps.map((step, idx) => (
                  <button
                    key={step.stage}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase shrink-0 transition-all duration-300 flex items-center gap-2 border ${
                      activeStepIndex === idx
                        ? "bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        : "glass-pill text-zinc-300 border-white/15 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className={activeStepIndex === idx ? "text-[#ff0055] font-black" : "text-[#ff5500]"}>
                      {idx + 1}.
                    </span>
                    <span>{step.stage.split(". ")[1] || step.stage}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Deep-Dive Card */}
              <motion.div
                key={`${activeStudy.id}-step-${activeStepIndex}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 sm:p-10 rounded-3xl border border-white/20 space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-[#ff5500] uppercase font-bold tracking-widest block">
                      STAGE {activeStudy.steps[activeStepIndex].stage}
                    </span>
                    <h5 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                      {activeStudy.steps[activeStepIndex].title}
                    </h5>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl text-xs font-mono border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                    >
                      PREV STAGE
                    </button>
                    <button
                      disabled={activeStepIndex === activeStudy.steps.length - 1}
                      onClick={() =>
                        setActiveStepIndex((prev) =>
                          Math.min(activeStudy.steps.length - 1, prev + 1)
                        )
                      }
                      className="px-4 py-2 rounded-xl text-xs font-mono bg-white/10 border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 font-bold"
                    >
                      <span>NEXT STAGE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-zinc-200 font-sans leading-relaxed">
                  {activeStudy.steps[activeStepIndex].summary}
                </p>

                {/* Key Deliverables & Insights */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                    Key Execution Highlights & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeStudy.steps[activeStepIndex].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans text-zinc-200 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

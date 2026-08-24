"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ContactModal from "@/components/ui/ContactModal";
import CinematicBackground from "@/components/layout/CinematicBackground";

import HeroSection from "@/components/hero/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import SkillMatrixSection from "@/components/sections/SkillMatrixSection";
import DesignThinkingSection from "@/components/sections/DesignThinkingSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import AiSection from "@/components/sections/AiSection";
import WorkSection from "@/components/sections/WorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationSection from "@/components/sections/CertificationSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  return (
    <main className="relative min-h-screen bg-transparent text-editorial-white overflow-x-hidden selection:bg-[#ff0055] selection:text-white">
      {/* Persistent Site-Wide Cinematic Video/Canvas Background */}
      <CinematicBackground />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Contact Drawer / Modal */}
      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />

      {/* Content Sections */}
      <div className="relative z-10">
        <HeroSection onOpenContact={handleOpenContact} />
        <IntroSection />
        <CapabilitiesSection />
        <SkillMatrixSection />
        <DesignThinkingSection />
        <LeadershipSection />
        <AiSection />
        <WorkSection />
        <ExperienceSection />
        <CertificationSection />
        <AboutSection />
        <ContactFooterSection onOpenContact={handleOpenContact} />
      </div>
    </main>
  );
}

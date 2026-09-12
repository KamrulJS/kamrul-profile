"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DossierSection from "@/components/DossierSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="main-container">
      {/* Floating Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Dossier & Metrics */}
      <DossierSection />

      {/* Experience Journey */}
      <ExperienceSection />

      {/* Academia & Certifications */}
      <EducationSection />

      {/* Domain Expertise */}
      <ExpertiseSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Portfolio Showcase */}
      <PortfolioSection />

      {/* Contact & Inquiry */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}

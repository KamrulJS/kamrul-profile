"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBanner from "@/components/MetricsBanner";
import DossierSection from "@/components/DossierSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkflowSection from "@/components/WorkflowSection";
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

      {/* Metrics Banner (Between First and Second Section) */}
      <MetricsBanner />

      {/* Featured Portfolio Showcase (Section 02) */}
      <PortfolioSection />

      {/* Dossier & Tech Stack (Section 03) */}
      <DossierSection />

      {/* Project Workflow (Section 04) */}
      <WorkflowSection />

      {/* Experience Journey (Section 05) */}
      <ExperienceSection />

      {/* Technical Expertise (Section 06) */}
      <ExpertiseSection />

      {/* Contact & Inquiry (Section 07) */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}

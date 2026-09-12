"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section id="overview" className="hero-section swiss-grid-pattern">
      <div className="container-custom relative z-10">
        <div className="hero-grid">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-left-col hero-content"
          >
            {/* Developer Badge */}
            <div className="hero-badge-wrap">
              <span className="swiss-badge bg-white">
                <span className="badge-dot" />
                <span>WEB, SHOPIFY & WORDPRESS DEVELOPER</span>
              </span>
            </div>

            {/* Swiss Heading */}
            <h1 className="hero-title">
              KAMRUL <br />
              <span className="hero-title-highlight">
                ISLAM
              </span>
            </h1>

            {/* Subtitle Badge Strip */}
            <div className="hero-subtitle-strip">
              <span className="hero-subtitle-pill">
                SHOPIFY DEVELOPER
              </span>
              <span className="hero-subtitle-pill">
                WORDPRESS & E-COMMERCE
              </span>
              <span className="hero-subtitle-pill">
                REACT & TAILWINDCSS
              </span>
            </div>

            {/* Executive Bio */}
            <p className="hero-bio">
              Web Developer crafting high-quality digital experiences with Shopify, WordPress, React and modern front-end technologies. Specializes in custom Shopify Liquid code, PageFly, GemPages, WooCommerce, Elementor Pro, and interactive React interfaces backed by clean CSS3 and GSAP animations.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="#contact"
                className="swiss-button-primary"
              >
                <span>GET IN TOUCH</span>
                <ArrowDownRight className="w-4 h-4 ml-2" />
              </a>

              <button
                onClick={onOpenResume}
                className="swiss-button-secondary"
              >
                <FileText className="w-4 h-4 mr-2 text-[#E63946]" />
                <span>VIEW CURRICULUM VITAE</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Avatar Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-right-col hero-avatar-wrap"
          >
            <div className="hero-avatar-circle group">
              <span className="avatar-initials">
                KI
              </span>
              <span className="hero-portfolio-tag">
                PORTFOLIO 2026
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

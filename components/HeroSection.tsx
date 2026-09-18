"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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
                <span className="badge-dot" />
                <span>FULL-STACK DEVELOPER</span>
            </div>

            {/* Swiss Heading */}
            <h1 className="hero-title">
              I'M KAMRUL <br />
              <span className="hero-title-highlight">
                ISLAM
              </span>
            </h1>

            {/* Subtitle Badge Strip */}
            <div className="hero-subtitle-strip">
              <span className="hero-subtitle-pill">
                APPLICATION DEVELOPER
              </span>
              <span className="hero-subtitle-pill">
                E-COMMERCE EXPERT
              </span>
            </div>

            {/* Executive Bio */}
            <p className="hero-bio">
              Web Developer crafting high-quality digital experiences with Shopify, WordPress, React and modern front-end technologies. Specializes in custom Shopify Liquid code, PageFly, GemPages, WooCommerce, Elementor Pro, and interactive React interfaces backed by clean CSS3 and GSAP animations.
            </p>

            {/* Action Buttons & Social Links */}
            <div className="hero-actions-container">
              {/* Left Side: Social Media Icons */}
              <div className="hero-social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  title="Twitter"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>

              {/* Right Side: Get In Touch Button */}
              <a
                href="#contact"
                className="swiss-button-primary"
              >
                <span>GET IN TOUCH</span>
                <ArrowDownRight className="w-4 h-4 ml-2" />
              </a>
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
             <img src="https://images.unsplash.com/photo-1705645930353-0e335311ef20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

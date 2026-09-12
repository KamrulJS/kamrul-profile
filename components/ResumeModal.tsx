"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, CheckCircle, Mail, MapPin, Award, Building, GraduationCap } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob([
      `KAMRUL ISLAM\n` +
      `Web Developer · Shopify Developer · WordPress Developer · Front-End Developer\n` +
      `Email: kamrul.dev.contact@gmail.com\n` +
      `Location: Dhaka, Bangladesh\n\n` +
      `PROFESSIONAL SUMMARY:\n` +
      `Web Developer crafting high-quality digital experiences with Shopify, WordPress, React and modern front-end technologies. Specializes in custom Shopify Liquid code, PageFly, GemPages, WooCommerce, Elementor Pro builds, and dynamic React interfaces backed by clean CSS and GSAP animations.\n\n` +
      `PROFESSIONAL EXPERIENCE:\n` +
      `1. Front-End Developer / WordPress Developer — Gendler & Schmitz Unternehmeragentur GmbH (Jan 2022 – Apr 2022 | Germany)\n` +
      `- WordPress customization & development\n` +
      `- Custom CSS styling & responsive layouts\n` +
      `- WooCommerce & Elementor Pro site builds\n\n` +
      `2. WordPress Developer — Serviceslash (Aug 2023 | Dhaka)\n` +
      `- WordPress customization & e-commerce site development\n` +
      `- Custom design & Elementor Pro Loop builds\n` +
      `- WooCommerce catalog & checkout customization\n\n` +
      `EDUCATION:\n` +
      `Bachelor of Science in Textile Engineering\n` +
      `University of Dhaka / NITER (2018 – 2022 · CGPA 3.25 / 4.00)\n\n` +
      `CORE TECHNICAL SKILLS:\n` +
      `- Front-End: HTML5, CSS3, JavaScript ES6+, React.js, TailwindCSS\n` +
      `- Shopify: Shopify Development, PageFly, GemPages, Custom Shopify Code, Liquid\n` +
      `- WordPress: WordPress Development, WooCommerce, Elementor Pro, Custom CSS, Loop Build\n` +
      `- Animation: GSAP Motion & Scroll Animations\n` +
      `- Professional: Project Management, Problem Solving, Design Analysis, Communication, Working Under Pressure\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Kamrul_Islam_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="modal-backdrop"
          />

          {/* Swiss Style Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-card"
          >
            {/* Swiss Header Toolbar */}
            <div className="modal-toolbar">
              <div className="modal-toolbar-left">
                <span className="modal-indicator-dot" />
                <span className="modal-doc-title">
                  DOCUMENT PREVIEW — KAMRUL_ISLAM_CV.PDF
                </span>
              </div>

              <div className="modal-actions">
                <button
                  onClick={handlePrint}
                  className="swiss-button-secondary"
                >
                  <Printer className="w-4 h-4 mr-1.5 inline" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="swiss-button-primary"
                >
                  {downloaded ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1.5 inline" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-1.5 inline" />
                      <span>Download CV</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="icon-btn-box"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="resume-body font-sans">
              
              {/* Header Info */}
              <div className="resume-header-block">
                <div>
                  <h1 className="resume-candidate-name">
                    Kamrul Islam
                  </h1>
                  <p className="resume-candidate-title">
                    Web Developer · Shopify Developer · WordPress Developer · Front-End
                  </p>
                  <p className="resume-summary-text">
                    Web Developer crafting high-quality digital experiences with Shopify, WordPress, React and modern front-end technologies. Specializes in custom Shopify Liquid code, PageFly, GemPages, WooCommerce, Elementor Pro, and interactive React interfaces.
                  </p>
                </div>

                <div className="resume-contact-box">
                  <div className="contact-row-item">
                    <Mail className="w-4 h-4 text-[#E63946]" />
                    <span>kamrul.dev.contact@gmail.com</span>
                  </div>
                  <div className="contact-row-item">
                    <MapPin className="w-4 h-4 text-[#E63946]" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="resume-section-title">
                  <Building className="w-4 h-4 text-[#E63946]" />
                  <span>PROFESSIONAL EXPERIENCE</span>
                </h3>

                <div className="resume-jobs-stack">
                  {/* Job 1 */}
                  <div className="resume-job-card">
                    <div className="job-role-row">
                      <h4 className="job-role-title">Front-End Developer / WordPress Developer</h4>
                      <span className="swiss-badge-red">
                        JAN 2022 — APR 2022
                      </span>
                    </div>
                    <p className="job-company-sub">Gendler & Schmitz Unternehmeragentur GmbH — Germany</p>
                    
                    <ul className="resume-bullet-list">
                      <li>WordPress customization & custom theme development for agency clients.</li>
                      <li>Custom CSS styling, WooCommerce store builds, and Elementor Pro page creation.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="resume-job-card">
                    <div className="job-role-row">
                      <h4 className="job-role-title">WordPress Developer</h4>
                      <span className="swiss-badge-red">
                        AUG 2023
                      </span>
                    </div>
                    <p className="job-company-sub">Serviceslash — Dhaka, Bangladesh</p>
                    
                    <ul className="resume-bullet-list">
                      <li>WordPress customization & responsive e-commerce site development.</li>
                      <li>Custom design execution, Elementor Pro Loop Builder integration, and WooCommerce catalog setup.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="resume-section-title">
                  <GraduationCap className="w-4 h-4 text-[#E63946]" />
                  <span>ACADEMIC DEGREES</span>
                </h3>

                <div className="resume-job-card">
                  <div className="job-role-row">
                    <h5 className="font-bold text-[17px]">Bachelor of Science in Textile Engineering</h5>
                    <span className="swiss-badge">2018 — 2022</span>
                  </div>
                  <p className="degree-institution">University of Dhaka / NITER</p>
                  <p className="font-mono text-[15px] mt-2">Academic Result: CGPA 3.25 / 4.00</p>
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="resume-section-title">
                  <Award className="w-4 h-4 text-[#E63946]" />
                  <span>CORE SKILLS & TECHNOLOGIES</span>
                </h3>

                <div className="resume-skills-grid">
                  <div className="resume-skill-box">
                    <span className="skill-box-title">Front-End</span>
                    <p className="skill-box-text">HTML5, CSS3, TailwindCSS, JavaScript ES6+, React.js</p>
                  </div>

                  <div className="resume-skill-box">
                    <span className="skill-box-title">Shopify</span>
                    <p className="skill-box-text">Shopify Development, PageFly, GemPages, Custom Shopify Code, Liquid</p>
                  </div>

                  <div className="resume-skill-box">
                    <span className="skill-box-title">WordPress</span>
                    <p className="skill-box-text">WordPress Development, WooCommerce, Elementor Pro, Custom CSS, Loop Build</p>
                  </div>

                  <div className="resume-skill-box">
                    <span className="skill-box-title">Professional Skills</span>
                    <p className="skill-box-text">Project Management, Problem Solving, Design Analysis, Communication, Working Under Pressure</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Toolbar */}
            <div className="modal-bottom-bar">
              <span>Kamrul Islam — Official CV</span>
              <button
                onClick={onClose}
                className="close-btn-text"
              >
                Close Preview [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

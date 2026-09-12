"use client";

import { User, MapPin, Mail, Briefcase, GraduationCap, Code2, Globe2 } from "lucide-react";

export default function DossierSection() {
  const metrics = [
    { label: "PRIMARY FOCUS", value: "WEB DEV", detail: "Shopify, WordPress & Front-End Engineering" },
    { label: "CORE PLATFORMS", value: "SHOPIFY / WP", detail: "Custom Liquid, PageFly, GemPages, WooCommerce" },
    { label: "ACADEMIC DEGREE", value: "B.SC ENG.", detail: "University of Dhaka / NITER (CGPA 3.25 / 4.00)" },
    { label: "QUALITY SCORE", value: "100%", detail: "Pixel-perfect responsive & cross-browser standard" },
  ];

  const dossierMetadata = [
    { icon: User, label: "FULL NAME", value: "Kamrul Islam" },
    { icon: Briefcase, label: "PROFESSIONAL POSITIONING", value: "Web Developer · Shopify Developer · WordPress Developer" },
    { icon: MapPin, label: "LOCATION", value: "Dhaka, Bangladesh" },
    { icon: Mail, label: "EMAIL ADDRESS", value: "kamrul.dev.contact@gmail.com" },
    { icon: GraduationCap, label: "EDUCATION", value: "B.Sc in Textile Engineering — University of Dhaka / NITER (2018–2022)" },
    { icon: Code2, label: "TECHNICAL SPECIALIZATION", value: "Shopify Liquid, PageFly, GemPages, WordPress, WooCommerce, Elementor Pro, React, GSAP" },
    { icon: Globe2, label: "PROFESSIONAL SKILLS", value: "Project Management, Problem Solving, Design Analysis, Communication" },
  ];

  return (
    <section id="summary" className="dossier-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 02 — EXECUTIVE SUMMARY
          </div>
          <h2>
            METRICS & PROFESSIONAL DOSSIER
          </h2>
        </div>

        {/* Counter Metrics Row */}
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="metric-card"
            >
              <div className="metric-value">
                {metric.value}
              </div>
              <div className="metric-label">
                {metric.label}
              </div>
              <div className="metric-detail">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Metadata Dossier Grid */}
        <div className="dossier-card">
          <div className="dossier-header">
            <h3 className="dossier-card-title">
              VERIFIED CANDIDATE SPECIFICATIONS
            </h3>
          </div>

          <div className="dossier-grid">
            {dossierMetadata.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="dossier-item">
                  <div className="dossier-icon-box">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="dossier-item-label">
                      {item.label}
                    </span>
                    <span className="dossier-item-value">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

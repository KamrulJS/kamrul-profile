"use client";

import { MapPin, Calendar, Building2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "gendler-schmitz",
      role: "FRONT-END DEVELOPER / WORDPRESS DEVELOPER",
      company: "Gendler & Schmitz Unternehmeragentur GmbH",
      period: "JAN 2022 — APR 2022",
      location: "Germany (Remote)",
      type: "PROFESSIONAL AGENCY ROLE",
      summary: "Developed custom WordPress layouts, WooCommerce storefronts, and front-end interface enhancements for agency client projects.",
      bullets: [
        "Executed WordPress website development and custom theme customization according to strict client design specs.",
        "Created tailored WooCommerce e-commerce setups with custom styling and Elementor Pro page builds.",
        "Wrote custom CSS3 overrides and responsive media queries to refine design layouts across devices.",
        "Collaborated with international agency teams to deliver robust WordPress solutions on schedule."
      ],
      technologies: ["WordPress", "WordPress Customization", "Custom CSS", "WooCommerce", "Elementor Pro", "Front-End Development"]
    },
    {
      id: "serviceslash",
      role: "WORDPRESS DEVELOPER",
      company: "Serviceslash",
      period: "AUG 2023",
      location: "Dhaka, Bangladesh",
      type: "DEVELOPMENT ROLE",
      summary: "Built high-converting e-commerce sites and custom WordPress solutions with advanced Elementor Pro Loop builds.",
      bullets: [
        "Built responsive e-commerce websites utilizing WordPress and WooCommerce integration.",
        "Implemented custom design layouts and Elementor Pro Loop Builder components for dynamic post and product displays.",
        "Handled WordPress customization, custom CSS modifications, and CMS structural configurations.",
        "Ensured pixel-perfect alignment and seamless user navigation across mobile and desktop devices."
      ],
      technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Loop Build", "Custom Design", "Custom CSS", "E-commerce"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 03 — WORK HISTORY
          </div>
          <h2>
            PROFESSIONAL AGENCY EXPERIENCE
          </h2>
        </div>

        {/* Work Timeline Card Stack */}
        <div className="experience-stack">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              
              {/* Top Role Header */}
              <div className="experience-role-header">
                <div className="experience-title-wrap">
                  <h3>
                    {exp.role}
                  </h3>
                  <span className="swiss-badge-red">
                    {exp.type}
                  </span>
                </div>

                <div className="experience-company-strip">
                  <span className="company-name">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </span>
                  <span className="location-name">
                    <MapPin className="w-4 h-4 text-[#111111]" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <div className="experience-date-wrap">
                  <div className="swiss-badge bg-[#F4F4F0]">
                    <Calendar className="w-4 h-4 mr-2 text-[#E63946] inline" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="experience-summary">
                {exp.summary}
              </p>

              {/* Bullet List */}
              <div className="experience-bullets-wrap">
                <h4 className="deliverables-heading">
                  DELIVERABLES & KEY RESPONSIBILITIES:
                </h4>
                
                <ul className="experience-bullet-list">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="experience-bullet-item">
                      <span className="bullet-square" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="tech-tags-flex">
                <span className="tech-tags-label">
                  TECHNOLOGY & TOOLKIT USED:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="swiss-badge-sm">
                    #{tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

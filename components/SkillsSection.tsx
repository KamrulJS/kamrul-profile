"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle2, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const proficiencyMeters = [
    { skill: "Shopify & Custom Liquid Code", level: 95 },
    { skill: "PageFly & GemPages Page Builders", level: 94 },
    { skill: "WordPress & Elementor Pro Builds", level: 96 },
    { skill: "WooCommerce & E-Commerce Setups", level: 92 },
    { skill: "HTML5, CSS3 & TailwindCSS", level: 95 },
    { skill: "JavaScript (ES6+) & React.js", level: 90 },
    { skill: "GSAP Motion & Animations", level: 88 },
  ];

  const skillGroups = [
    {
      category: "FRONT-END",
      skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "TailwindCSS"],
    },
    {
      category: "SHOPIFY",
      skills: [
        "Shopify Development",
        "PageFly",
        "GemPages",
        "Custom Shopify Code",
        "E-commerce Development",
      ],
    },
    {
      category: "WORDPRESS",
      skills: [
        "WordPress Development",
        "WooCommerce",
        "Elementor Pro",
        "Custom CSS",
        "Loop Build",
      ],
    },
    {
      category: "ANIMATION / INTERACTION",
      skills: ["GSAP Timeline Motion", "Micro-Interactions", "Scroll Animations"],
    },
    {
      category: "PROFESSIONAL SKILLS",
      skills: [
        "Project Management",
        "Problem Solving",
        "Design Analysis",
        "Communication Skills",
        "Ability to Work Under Pressure",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 06 — INTERACTIVE TOOLKIT
          </div>
          <h2>
            SKILL METRICS & CATEGORIZED TOOL MATRIX
          </h2>
        </div>

        <div className="skills-grid">
          
          {/* Left Column: Progress Meters */}
          <div className="skills-left-col">
            <div className="skills-left-card">
              <h3 className="skills-card-title">
                <Sparkles className="w-5 h-5 text-[#E63946]" />
                <span>DEVELOPMENT PROFICIENCY METERS</span>
              </h3>

              <div className="meters-stack">
                {proficiencyMeters.map((item, idx) => (
                  <div key={idx} className="meter-item">
                    <div className="meter-label-row">
                      <span className="text-[#111111]">{item.skill}</span>
                      <span className="text-[#E63946]">{item.level}%</span>
                    </div>

                    <div className="skill-meter-bg">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.08 }}
                        className="skill-meter-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Groups */}
          <div className="skills-right-col">
            <div className="skills-right-card">
              <div className="skills-matrix-header">
                <Wrench className="w-5 h-5 text-[#E63946]" />
                <h3 className="text-xl font-extrabold uppercase">
                  CATEGORIZED SKILL MATRIX
                </h3>
              </div>

              {/* Skill Groups Stack */}
              <div>
                {skillGroups.map((group) => (
                  <div key={group.category} className="skill-group-box">
                    <div className="skill-group-category">
                      <span className="bullet-dot" />
                      <span>{group.category}</span>
                    </div>

                    <div className="skill-tags-flex">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="swiss-badge-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E63946] inline mr-1" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

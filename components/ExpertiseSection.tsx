"use client";

import { Layout, Code2, Zap, Settings } from "lucide-react";

export default function ExpertiseSection() {
  const domainExpertise = [
    {
      num: "01",
      title: "SHOPIFY & E-COMMERCE",
      icon: Layout,
      scope: "Specializing in custom Shopify store development, high-converting PageFly landing pages, GemPages customized section layouts, and tailored Liquid code extensions.",
      skills: [
        "Shopify Development & Storefront Setup",
        "PageFly & GemPages Page Builder Customization",
        "Custom Shopify Liquid Code & Theme Sections",
        "E-commerce Conversion & Cart Optimization"
      ],
      pills: ["Shopify", "PageFly", "GemPages", "Custom Shopify Code", "Liquid"]
    },
    {
      num: "02",
      title: "WORDPRESS & WOOCOMMERCE",
      icon: Settings,
      scope: "Building responsive corporate and e-commerce websites with WordPress, WooCommerce, Elementor Pro, advanced Loop Builders, and custom CSS overrides.",
      skills: [
        "WordPress Development & Theme Customization",
        "WooCommerce Store & Catalog Customization",
        "Elementor Pro & Dynamic Loop Builder Setup",
        "Custom CSS Layout Tweaks & Styling"
      ],
      pills: ["WordPress", "WooCommerce", "Elementor Pro", "Loop Build", "Custom CSS"]
    },
    {
      num: "03",
      title: "FRONT-END & REACT",
      icon: Code2,
      scope: "Writing standards-compliant, semantic HTML5, CSS3, and ES6+ JavaScript, paired with modern utility frameworks like TailwindCSS and React.js for component UI.",
      skills: [
        "Semantic HTML5 & Modern CSS3 Standards",
        "JavaScript (ES6+) & DOM Logic",
        "React.js Component-Based Interfaces",
        "TailwindCSS Utility & Responsive Styling"
      ],
      pills: ["HTML5", "CSS3", "TailwindCSS", "JavaScript ES6+", "React.js"]
    },
    {
      num: "04",
      title: "ANIMATION & PROFESSIONAL SKILLS",
      icon: Zap,
      scope: "Creating engaging micro-animations with GSAP while leading projects through systematic design analysis, analytical problem solving, and effective communication.",
      skills: [
        "GSAP Timeline & Scroll Animations",
        "Structured Technical Project Management",
        "Design Analysis & Pixel-Perfect QA",
        "Problem Solving & Ability to Work Under Pressure"
      ],
      pills: ["GSAP", "Project Management", "Problem Solving", "Design Analysis", "Communication"]
    }
  ];

  return (
    <section id="skills" className="expertise-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 06 — TECHNICAL EXPERTISE
          </div>
          <h2>
            CORE CAPABILITIES & SPECIALIZATIONS
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="expertise-grid">
          {domainExpertise.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={domain.num}
                className="domain-card"
              >
                <div>
                  {/* Header Tag */}
                  <div className="domain-card-header">
                    <span className="swiss-badge-red">
                      DOMAIN [{domain.num}]
                    </span>

                    <div className="domain-icon-box">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="domain-title">
                    {domain.title}
                  </h3>
                  
                  <p className="domain-scope">
                    {domain.scope}
                  </p>

                  {/* Skills Checklist */}
                  <div className="domain-checklist">
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="checklist-item">
                        <span className="checklist-dot" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Pills */}
                <div className="domain-pills-wrap">
                  {domain.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="swiss-badge-sm">
                      #{pill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

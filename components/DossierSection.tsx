"use client";

import Image from "next/image";
import {
  MessageSquare,
  FileText,
  Code2,
  MonitorCheck,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Wrench,
} from "lucide-react";

export default function DossierSection() {
  const workflowSteps = [
    {
      badge: "01",
      icon: MessageSquare,
      title: "MEETING DISCUSS",
      desc: "We talk about your goals, ideas and requirements. I'll suggest the best solution for your needs.",
    },
    {
      badge: "02",
      icon: FileText,
      title: "DESIGN PLANING",
      desc: "I create a clear project plan, timeline and scope so you know exactly what to expect before we start.",
    },
    {
      badge: "03",
      icon: Code2,
      title: "DEVELOPMENT",
      desc: "I build your website or store with clean code, modern design and best practices for performance and SEO.",
    },
    {
      badge: "04",
      icon: MonitorCheck,
      title: "TEST & LAUNCH",
      desc: "You'll get a preview to check everything. I'll make revisions until it's perfect for you.",
    },
  ];

  const techCategories = [
    {
      title: "01. FRONTEND",
      items: [
        { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
        { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      ],
    },
    {
      title: "02. BACKEND",
      items: [
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
        { name: "Django", logo: "https://cdn.simpleicons.org/django/092E20" },
        { name: "Express.js", logo: "https://cdn.simpleicons.org/express/000000" },
        { name: "REST API", logo: "https://cdn.simpleicons.org/fastapi/009688" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
      ],
    },
    {
      title: "03. CMS & PLATFORMS",
      items: [
        { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
        { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96BF48" },
        { name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce/96588A" },
        { name: "Squarespace", logo: "https://cdn.simpleicons.org/squarespace/000000" },
        { name: "Wix", logo: "https://cdn.simpleicons.org/wix/000000" },
      ],
    },
    {
      title: "04. E-COMMERCE & MARKETING",
      items: [
        { name: "Klaviyo", logo: "https://cdn.simpleicons.org/klaviyo/000000" },
        { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
        { name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/0467DF" },
        { name: "SEO", logo: "https://cdn.simpleicons.org/googlesearchconsole/4285F4" },
      ], 
    },
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
            PROFESSIONAL DOSSIER & SPECIFICATIONS
          </h2>
        </div>

        {/* PART 1: DEVELOPMENT WORKFLOW & PROCESS */}
        <div className="workflow-wrap">
          <div className="space-y-1">
            <h3 className="section-heading-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#E63946]" />
              <span>DEVELOPMENT WORKFLOW & PROCESS</span>
            </h3>
            <p className="workflow-subtitle">
              A simple and effective process to turn your ideas into a high-quality website or online store.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="workflow-card">
                  <div className="workflow-badge">
                    {step.badge}
                  </div>

                  <div>
                    <div className="workflow-icon-box">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="workflow-title">
                      {step.title}
                    </h4>
                    <p className="workflow-desc">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow Arrow Connector between steps */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="workflow-connector-line">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* PART 2: CATEGORIZED TECH STACK & TOOLS WITH OFFICIAL LOGOS */}
        <div className="tech-stack-section-wrap">
          <div className="space-y-1">
            <h3 className="section-heading-lg flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#E63946]" />
              <span>CATEGORIZED TECH STACK & TOOLS I USE</span>
            </h3>
            <p className="workflow-subtitle">
              I work with modern tools and technologies to build fast, secure and scalable web applications and eCommerce stores.
            </p>
          </div>

          <div className="tech-stack-grid">
            {techCategories.map((group, idx) => (
              <div key={idx} className="tech-group-card">
                <div className="tech-group-header">
                  <h4 className="tech-group-title">
                    {group.title}
                  </h4>
                  <span className="swiss-badge-red text-[11px] py-0.5 px-2">
                    {group.items.length}
                  </span>
                </div> 

                <div className="tech-items-flex">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="tech-item-badge">
                      {/* Brand Logo Image */}
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="tech-item-logo"
                        unoptimized
                      />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

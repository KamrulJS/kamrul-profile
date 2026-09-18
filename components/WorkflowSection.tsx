"use client";

import {
  MessageSquare,
  FileText,
  Code2,
  MonitorCheck,
  ArrowRight,
} from "lucide-react";

export default function WorkflowSection() {
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

  return (
    <section id="workflow" className="workflow-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 04 — PROJECT WORKFLOW
          </div>
          <h2>
            DEVELOPMENT WORKFLOW & PROCESS
          </h2>
          <p className="workflow-subtitle">
            A simple and effective process to turn your ideas into a high-quality website or online store.
          </p>
        </div>

        {/* Workflow Grid with Dotted Curve Connectors */}
        <div className="workflow-grid-container">
          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="workflow-card-wrap">
                  <div className="workflow-card">
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
                  </div>

                  {/* Desktop Dotted Curve Connector between Cards */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="workflow-connector-curve-desktop">
                      <svg
                        width="70"
                        height="40"
                        viewBox="0 0 70 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                      >
                        {/* Curved dotted line */}
                        <path
                          d={isEven ? "M 2 28 Q 35 2, 68 28" : "M 2 12 Q 35 38, 68 12"}
                          stroke={isEven ? "#E63946" : "#111111"}
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                          fill="none"
                        />
                        {/* Arrow Head */}
                        <polygon
                          points={isEven ? "61,31 69,28 65,20" : "61,9 69,12 65,20"}
                          fill={isEven ? "#E63946" : "#111111"}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Mobile Vertical Dotted Connector */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="workflow-connector-curve-mobile">
                      <svg
                        width="30"
                        height="44"
                        viewBox="0 0 30 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 15 2 Q 28 22, 15 42"
                          stroke="#E63946"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <polygon points="10,34 15,42 20,34" fill="#E63946" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Layout, Code2, Zap, Settings } from "lucide-react";
import { getServices } from "@/lib/dataService";

const iconMap = {
  Layout: Layout,
  Settings: Settings,
  Code2: Code2,
  Zap: Zap,
};

export default function ExpertiseSection() {
  const [domainExpertise, setDomainExpertise] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLiveServices() {
      try {
        const live = await getServices();
        if (live && live.length > 0) {
          setDomainExpertise(live);
        }
      } catch (err) {
        console.warn("Could not load live services from Supabase:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLiveServices();
  }, []);

  return (
    <section id="skills" className="expertise-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 05 — TECHNICAL EXPERTISE
          </div>
          <h2>
            CORE CAPABILITIES & SPECIALIZATIONS
          </h2>
        </div>

        {/* 4 Cards Grid / Skeletons */}
        <div className="expertise-grid">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="domain-card-skeleton">
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="skeleton-box" style={{ width: "6rem", height: "1.5rem" }} />
                    <div className="skeleton-box" style={{ width: "2.5rem", height: "2.5rem" }} />
                  </div>
                  <div className="skeleton-box" style={{ width: "75%", height: "1.5rem" }} />
                  <div className="skeleton-box" style={{ width: "100%", height: "3.5rem" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                    <div className="skeleton-box" style={{ width: "90%", height: "1rem" }} />
                    <div className="skeleton-box" style={{ width: "85%", height: "1rem" }} />
                    <div className="skeleton-box" style={{ width: "80%", height: "1rem" }} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  <div className="skeleton-box" style={{ width: "4rem", height: "1.25rem" }} />
                  <div className="skeleton-box" style={{ width: "4.5rem", height: "1.25rem" }} />
                  <div className="skeleton-box" style={{ width: "3.5rem", height: "1.25rem" }} />
                </div>
              </div>
            ))
          ) : (
            domainExpertise.map((domain) => {
              const IconComponent = iconMap[domain.iconName] || iconMap[domain.icon_name] || Layout;
              return (
                <div
                  key={domain.id || domain.num}
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
                      {(domain.skills || []).map((skill, sIdx) => (
                        <div key={sIdx} className="checklist-item">
                          <span className="checklist-dot" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-Pills */}
                  <div className="domain-pills-wrap">
                    {(domain.pills || []).map((pill, pIdx) => (
                      <span key={pIdx} className="swiss-badge-sm">
                        #{pill}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}

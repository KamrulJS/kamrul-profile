"use client";

import { useState, useEffect } from "react";
import { getMetrics } from "@/lib/dataService";

export default function MetricsBanner() {
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLiveMetrics() {
      try {
        const live = await getMetrics();
        if (live && live.length > 0) {
          setMetrics(live);
        }
      } catch (err) {
        console.warn("Could not load live metrics from Supabase:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLiveMetrics();
  }, []);

  return (
    <section className="metrics-banner-section">
      <div className="container-custom">
        <div className="metrics-grid">
          {isLoading ? (
            // 4 Skeletons while loading
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="metric-card-skeleton">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div className="skeleton-box" style={{ width: "65%", height: "2.5rem" }} />
                  <div className="skeleton-box" style={{ width: "85%", height: "1rem" }} />
                </div>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <div className="skeleton-box" style={{ width: "3.5rem", height: "1.25rem" }} />
                  <div className="skeleton-box" style={{ width: "4rem", height: "1.25rem" }} />
                  <div className="skeleton-box" style={{ width: "5rem", height: "1.25rem" }} />
                </div>
              </div>
            ))
          ) : (
            metrics.map((metric, idx) => (
              <div key={metric.id || idx} className="metric-card">
                <div>
                  <div className="metric-value">
                    {metric.value}
                  </div>
                  <div className="metric-label">
                    {metric.label}
                  </div>
                </div>

                <div className="metric-tags-flex">
                  {(metric.tags || []).map((tag, tIdx) => (
                    <span key={tIdx} className="swiss-badge-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

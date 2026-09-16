"use client";

export default function MetricsBanner() {
  const metrics = [
    {
      value: "3+ YEARS",
      label: "PROFESSIONAL EXPERIENCE",
      tags: ["Fiverr", "Upwork", "Direct Agency"],
    },
    {
      value: "50+",
      label: "WEBSITES DEV",
      tags: ["Fashion", "Accessories", "Real Estate", "E-Commerce"],
    },
    {
      value: "eCommerce",
      label: "DEVELOPMENT CAPABILITY",
      tags: ["Shopify", "WooCommerce", "Amazon"],
    },
    {
      value: "GLOBAL",
      label: "CLIENT COLLABORATION",
      tags: ["UK", "USA", "Germany", "Netherlands", "Canada"],
    },
  ];

  return (
    <section className="metrics-banner-section">
      <div className="container-custom">
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div>
                <div className="metric-value">
                  {metric.value}
                </div>
                <div className="metric-label">
                  {metric.label}
                </div>
              </div>

              <div className="metric-tags-flex">
                {metric.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="swiss-badge-sm">
                    #{tag}
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

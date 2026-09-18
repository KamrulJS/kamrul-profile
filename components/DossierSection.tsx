"use client";

import Image from "next/image";
import { Wrench } from "lucide-react";

export default function DossierSection() {


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
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
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
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Etsy", logo: "https://cdn.simpleicons.org/etsy/F1641E" }, 
        { name: "Klaviyo", logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23111111'><rect width='24' height='24' rx='3'/><path d='M6 5h3v14H6zm4 0h3.5v5.5L17 5h4.2l-5.2 7.2L21.5 19H17l-4-6.2V19H10z' fill='%23ffffff'/></svg>" },
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
            SECTION 03 — EXECUTIVE SUMMARY
          </div>
          <h2>
            PROFESSIONAL TECH STACK & TOOLS
          </h2>
        <div className="space-y-1">
            <p className="workflow-subtitle">
              I work with modern tools and technologies to build fast, secure and scalable web applications and eCommerce stores.
            </p>
          </div>
        </div>



        {/* PART 2: CATEGORIZED TECH STACK & TOOLS WITH OFFICIAL LOGOS */}
        <div className="tech-stack-section-wrap">


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

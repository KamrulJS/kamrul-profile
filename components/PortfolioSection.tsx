"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Layers, ExternalLink } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export default function PortfolioSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="portfolio-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="portfolio-header-flex">
          <div>
            <div className="swiss-badge-red mb-2">
              SECTION 07 — SELECTED CASE STUDIES
            </div>
            <h2>
              FEATURED PORTFOLIO SHOWCASE
            </h2>
          </div>

          <div>
            <Link
              href="/projects"
              className="swiss-button-secondary"
            >
              <FolderGit2 className="w-4 h-4 text-[#E63946] mr-2" />
              <span>VIEW ALL PROJECTS ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="portfolio-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group"
            >
              <div>
                {/* Image Box */}
                <div className="portfolio-card-media">
                  <Image
                    src={project.images.hero}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  
                  <div className="category-overlay-badge">
                    <span className="swiss-badge-red">
                      {project.category}
                    </span>
                  </div>

                  <div className="platform-overlay-badge">
                    <span className="swiss-badge bg-white">
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">
                    {project.title}
                  </h3>

                  <p className="portfolio-card-summary">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="tech-tags-flex">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="swiss-badge-sm">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="portfolio-card-footer">
                <Link
                  href={`/projects/${project.slug}`}
                  className="swiss-button-primary swiss-button-full mt-4"
                >
                  <Layers className="w-4 h-4 mr-1.5" />
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="portfolio-bottom-banner">
          <div>
            <h4 className="text-lg font-extrabold font-display uppercase">
              LOOKING FOR MORE PROJECT DEMOS & SHOPIFY/WORDPRESS CASE STUDIES?
            </h4>
            <p className="hero-subtitle">
              Explore the dedicated project index filtered by platform, tech stack, and storefront architecture.
            </p>
          </div>

          <Link
            href="/projects"
            className="swiss-button-secondary"
          >
            <span>OPEN PORTFOLIO DIRECTORY</span>
            <ExternalLink className="icon-sm icon-red icon-ml" />
          </Link>
        </div>

      </div>
    </section>
  );
}

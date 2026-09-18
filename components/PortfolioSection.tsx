"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, RotateCw } from "lucide-react";
import { getAllProjects, CATEGORIES } from "@/data/projects";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL STACKS");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const allProjects = getAllProjects();

  const filteredProjects =
    selectedCategory === "ALL STACKS" || selectedCategory === "ALL"
      ? allProjects
      : allProjects.filter((project) => {
          const target = selectedCategory.toUpperCase();
          const catUpper = project.category.toUpperCase();
          const platformUpper = project.platform.toUpperCase();
          
          if (catUpper.includes(target) || platformUpper.includes(target) || target.includes(catUpper)) return true;
          if (target.includes("REACT") && (catUpper.includes("REACT") || platformUpper.includes("REACT"))) return true;
          if (target.includes("CUSTOM") && (catUpper.includes("CUSTOM") || platformUpper.includes("CUSTOM"))) return true;
          if (target.includes("UI/UX") && (catUpper.includes("UI/UX") || platformUpper.includes("DESIGN"))) return true;
          
          return project.technologies.some((tech) => tech.toUpperCase().includes(target));
        });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 400);
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="portfolio-header-flex">
          <div className="top-title-area">
            <div className="swiss-badge-red mb-2">
              SECTION 02 — SELECTED CASE STUDIES
            </div>
            <h2>
              PORTFOLIO SHOWCASE
            </h2>
          </div>

          {/* Top Right Header Tab Filters (All Categories) */}
          <div className="filter-btn-flex">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`filter-btn ${isActive ? "active" : "inactive"}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Framer Motion */}
        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="portfolio-card group block h-full"
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
                        <span>
                          {project.category}
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
                      <div className="tech-tags-flex mt-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="swiss-badge-sm">
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions (Hover Reveal Button) */}
                  <div className="portfolio-card-footer">
                    <span className="swiss-button-primary">
                      <span>PROJECT STUDY</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" />
                    </span>
                  </div>

                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Trigger with Spinner */}
        {visibleCount < filteredProjects.length && (
          <div className="load-btn">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="swiss-button-primary inline-flex items-center gap-2 py-2 px-6 cursor-pointer"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#FFFFFF]" />
                  <span>LOADING MORE PROJECTS...</span>
                </>
              ) : (
                <>
                  <RotateCw className="w-4 h-4 text-[#FFFFFF]" />
                  <span>LOAD MORE PROJECTS [{filteredProjects.length - visibleCount} REMAINING]</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom Banner CTA (#E63946 Background) */}
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
            <span>VIEW ALL PROJECTS ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}

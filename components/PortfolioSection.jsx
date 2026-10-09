"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, Loader2, RotateCw } from "lucide-react";
import { CATEGORIES, getProjects } from "@/lib/dataService";
import ProjectCardV1 from "./ProjectGrids/ProjectCardV1";
import "./ProjectGrids/projectGrids.css";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL STACKS");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    async function loadLiveProjects() {
      try {
        const liveProjects = await getProjects();
        if (liveProjects && liveProjects.length > 0) {
          setAllProjects(liveProjects);
        }
      } catch (err) {
        console.warn("Could not load live projects from Supabase:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLiveProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "ALL STACKS" || selectedCategory === "ALL"
      ? allProjects
      : allProjects.filter((project) => {
          const target = selectedCategory.toUpperCase();
          const catUpper = (project.category || "").toUpperCase();
          const platformUpper = (project.platform || "").toUpperCase();
          
          if (catUpper.includes(target) || platformUpper.includes(target) || target.includes(catUpper)) return true;
          if (target.includes("REACT") && (catUpper.includes("REACT") || platformUpper.includes("REACT"))) return true;
          if (target.includes("CUSTOM") && (catUpper.includes("CUSTOM") || platformUpper.includes("CUSTOM"))) return true;
          if (target.includes("UI/UX") && (catUpper.includes("UI/UX") || platformUpper.includes("DESIGN"))) return true;
          
          return (project.technologies || []).some((tech) => tech.toUpperCase().includes(target));
        });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    if (gridRef.current && !isLoading) {
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [selectedCategory, visibleCount, isLoading]);

  const handleCategorySelect = (category) => {
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

          {/* Top Right Header Tab Filters */}
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

        {/* Project Cards Grid / Skeleton Loading */}
        <div ref={gridRef} className="portfolio-grid">
          {isLoading ? (
            // 6 Card Skeletons while loading
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="project-card-skeleton">
                {/* Top Controls Skeleton */}
                <div style={{ position: "absolute", top: "1rem", left: "1rem", right: "1rem", display: "flex", justifyContent: "space-between", zIndex: 10 }}>
                  <div className="skeleton-box" style={{ width: "5rem", height: "1.5rem" }} />
                  <div className="skeleton-box" style={{ width: "2.25rem", height: "2.25rem" }} />
                </div>
                {/* Media Image Shimmer */}
                <div className="skeleton-box" style={{ width: "100%", height: "100%" }} />
                {/* Bottom Title & Tag Shimmer */}
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem", zIndex: 10 }}>
                  <div className="skeleton-box-dark" style={{ width: "70%", height: "1.5rem" }} />
                  <div style={{ display: "flex", gap: "0.35rem" }}>
                    <div className="skeleton-box-dark" style={{ width: "3.5rem", height: "1rem" }} />
                    <div className="skeleton-box-dark" style={{ width: "4rem", height: "1rem" }} />
                    <div className="skeleton-box-dark" style={{ width: "3rem", height: "1rem" }} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            displayedProjects.map((project, idx) => (
              <ProjectCardV1 key={project.id || idx} project={project} index={idx} />
            ))
          )}
        </div>

        {/* Load More Trigger */}
        {!isLoading && visibleCount < filteredProjects.length && (
          <div className="load-btn">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="swiss-button-primary inline-flex items-center gap-2 py-2 px-6 cursor-pointer"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#FFFFFF]" />
                  <span>LOADING MORE...</span>
                </>
              ) : (
                <>
                  <RotateCw className="w-2 h-2 text-[#FFFFFF]" />
                  <span>MORE PROJECTS [{filteredProjects.length - visibleCount}]</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom Banner CTA */}
        <div className="portfolio-bottom-banner">
          <div>
            <h4 className="text-lg font-extrabold font-display uppercase">
              LOOKING FOR MORE PROJECT CASE STUDIES?
            </h4>
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

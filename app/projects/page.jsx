"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, FolderGit2, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import { CATEGORIES, getProjects } from "@/lib/dataService";
import ProjectCardV1 from "@/components/ProjectGrids/ProjectCardV1";
import "@/components/ProjectGrids/projectGrids.css";

export default function ProjectsPage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL STACKS");
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <main className="main-container">
      {/* Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Header Container */}
      <div className="projects-header-banner">
        <div className="container-custom space-y-4 text-left">
          <div>
            <Link href="/" className="swiss-button-secondary">
              <ArrowLeft className="icon-sm icon-red icon-mr" />
              <span>RETURN TO HOMEPAGE</span>
            </Link>
          </div>

          <div className="directory-header-flex">
            <div>
              <div className="swiss-badge-red mb-2">
                COMPLETE PROJECT DIRECTORY
              </div>
              <h1 className="hero-title">
                PORTFOLIO & CASE STUDIES
              </h1>
            </div>

            <p className="hero-subtitle max-w-md">
              Data-driven archive of Shopify stores, WordPress customizations, e-commerce platforms, React web applications, and custom front-end builds.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Toolbar & Directory */}
      <section className="section-padding swiss-grid-pattern">
        <div className="container-custom space-y-10">
          
          {/* Category Filters Bar */}
          <div className="filter-toolbar">
            <div className="filter-toolbar-header">
              <Filter className="icon-sm" />
              <span>
                {isLoading
                  ? "LOADING PROJECT CATEGORIES..."
                  : `CATEGORY FILTER INDEX [${filteredProjects.length} MATCHES]`}
              </span>
            </div>

            <div className="filter-btn-flex">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-btn ${isActive ? "active" : "inactive"}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid with Variation 01 Classic Editorial Cards or Skeletons */}
          <div className="portfolio-grid">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="project-card-skeleton">
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", right: "1rem", display: "flex", justifyContent: "space-between", zIndex: 10 }}>
                    <div className="skeleton-box" style={{ width: "5rem", height: "1.5rem" }} />
                    <div className="skeleton-box" style={{ width: "2.25rem", height: "2.25rem" }} />
                  </div>
                  <div className="skeleton-box" style={{ width: "100%", height: "100%" }} />
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
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <ProjectCardV1 key={project.id || idx} project={project} index={idx} />
              ))
            ) : (
              <div className="no-projects-box">
                <FolderGit2 className="no-projects-icon" />
                <h3 className="section-heading-lg">
                  NO PROJECTS FOUND IN THIS CATEGORY
                </h3>
                <p className="hero-subtitle">
                  Try selecting &quot;ALL STACKS&quot; or another category filter to explore projects.
                </p>
                <div>
                  <button
                    onClick={() => setSelectedCategory("ALL STACKS")}
                    className="swiss-button-primary"
                  >
                    RESET FILTER TO ALL STACKS
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}

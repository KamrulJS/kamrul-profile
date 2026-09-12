"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FolderGit2, Layers, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import { getAllProjects, CATEGORIES } from "@/data/projects";

export default function ProjectsPage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const allProjects = getAllProjects();

  const filteredProjects =
    selectedCategory === "ALL"
      ? allProjects
      : allProjects.filter((p) => {
          const catUpper = p.category.toUpperCase();
          const target = selectedCategory.toUpperCase();
          if (catUpper.includes(target) || target.includes(catUpper)) return true;
          return p.technologies.some((t) => t.toUpperCase().includes(target));
        });

  return (
    <main className="main-container">
      {/* Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Header Container */}
      <div className="projects-header-banner">
        <div className="container-custom space-y-4 text-left">
          
          <div>
            <Link
              href="/"
              className="swiss-button-secondary"
            >
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
              <span>CATEGORY FILTER INDEX [{filteredProjects.length} MATCHES]</span>
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

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="portfolio-card group"
                >
                  <div>
                    {/* Image Aspect Box */}
                    <div className="portfolio-card-media">
                      <Image
                        src={project.images.hero}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="image-cover"
                      />
                      
                      <div className="category-overlay-badge">
                        <span className="swiss-badge-red">
                          {project.category}
                        </span>
                      </div>

                      <div className="platform-overlay-badge">
                        <span className="swiss-badge">
                          {project.platform}
                        </span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="portfolio-card-content">
                      <h2 className="portfolio-card-title">
                        {project.title}
                      </h2>

                      <p className="portfolio-card-summary">
                        {project.shortDescription}
                      </p>

                      {/* Tech Badges */}
                      <div className="tech-tags-flex">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="swiss-badge-sm">
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="portfolio-card-footer">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="swiss-button-primary swiss-button-full mt-4"
                    >
                      <Layers className="icon-sm icon-mr" />
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="icon-sm icon-ml" />
                    </Link>
                  </div>

                </div>
              ))
            ) : (
              <div className="no-projects-box">
                <FolderGit2 className="no-projects-icon" />
                <h3 className="section-heading-lg">
                  NO PROJECTS FOUND IN THIS CATEGORY
                </h3>
                <p className="hero-subtitle">
                  Try selecting &quot;ALL&quot; or another category filter to explore projects.
                </p>
                <div>
                  <button
                    onClick={() => setSelectedCategory("ALL")}
                    className="swiss-button-primary"
                  >
                    RESET FILTER TO ALL
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

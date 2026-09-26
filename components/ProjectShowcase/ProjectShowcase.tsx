"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, LayoutGrid, Sliders } from "lucide-react";
import { placeholderProjects, ShowcaseProject } from "./projectData";
import ProjectCard from "./ProjectCard";
import "./projectShowcase.css";

export default function ProjectShowcase() {
  const [activeVersion, setActiveVersion] = useState<"v1" | "v2">("v1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const projects = placeholderProjects;

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeVersion]);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          x: -nextIdx * 360,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          x: -prevIdx * 360,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <section id="showcase" className="project-showcase-section">
      <div className="container-custom">
        
        {/* Section Header with Version Comparison Toggle */}
        <div className="showcase-header-flex">
          <div>
            <div className="swiss-badge-red mb-2">
              SECTION 07 — INTERACTIVE SHOWCASE DEMO
            </div>
            <h2>
              PROJECT SHOWCASE VARIATIONS
            </h2>
            <p className="workflow-subtitle mt-1">
              Toggle between two distinct showcase layouts to compare design presentation options.
            </p>
          </div>

          {/* Version Switcher Buttons */}
          <div className="version-toggle-container">
            <button
              onClick={() => setActiveVersion("v1")}
              className={`version-toggle-btn ${activeVersion === "v1" ? "active" : ""}`}
            >
              <Sliders className="w-3.5 h-3.5 inline mr-1.5" />
              <span>VERSION 1: HORIZONTAL DRAG SLIDER</span>
            </button>

            <button
              onClick={() => setActiveVersion("v2")}
              className={`version-toggle-btn ${activeVersion === "v2" ? "active" : ""}`}
            >
              <LayoutGrid className="w-3.5 h-3.5 inline mr-1.5" />
              <span>VERSION 2: SWISS RETRO GRID</span>
            </button>
          </div>
        </div>

        {/* Dynamic Version Container */}
        <div ref={containerRef}>
          {activeVersion === "v1" ? (
            /* VERSION 1: HORIZONTAL CAROUSEL / DRAG SLIDER */
            <div>
              <div className="showcase-carousel-wrap">
                <div ref={trackRef} className="showcase-track">
                  {projects.map((project) => (
                    <div key={project.id} className="showcase-card-slide">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation & Counter */}
              <div className="flex items-center justify-between mt-4">
                <div className="slider-indicator-text">
                  SLIDE {currentIndex + 1} OF {projects.length} — DRAG OR USE CONTROLS
                </div>

                <div className="slider-controls-flex">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="slider-nav-btn disabled:opacity-40"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === projects.length - 1}
                    className="slider-nav-btn disabled:opacity-40"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* VERSION 2: SWISS RETRO GRID LAYOUT */
            <div className="showcase-grid-wrap">
              {projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

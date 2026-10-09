"use client";

import { useState, useEffect } from "react";
import { getFeaturedProjects } from "@/lib/dataService";
import ProjectRow from "./ProjectRow";
import ProjectLightbox from "./ProjectLightbox";
import "./projectShowcase.css";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLiveFeatured() {
      try {
        const live = await getFeaturedProjects();
        if (live && live.row1 && live.row1.length > 0) {
          setRow1(live.row1);
        }
        if (live && live.row2 && live.row2.length > 0) {
          setRow2(live.row2);
        }
      } catch (err) {
        console.warn("Could not load live showcase projects from Supabase:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLiveFeatured();
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <section id="showcase" className="project-showcase-section">
      <div className="container-custom">
        
        {/* Section Header following Swiss Retro Visual Language */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 06 — FEATURED WORK GALLERY
          </div>
          <h2>
            FEATURED PROJECTS & CASE STUDIES
          </h2>
          <p className="workflow-subtitle mt-1">
            Continuous gallery showcase. Hover over any row to pause movement, or click a project card to launch the interactive full-screen gallery lightbox.
          </p>
        </div>

      </div>

      {/* Marquee Rows or Skeleton Placeholder */}
      <div className="marquee-rows-stack mt-4">
        {isLoading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "0 1.5rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", overflow: "hidden" }}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="skeleton-box"
                  style={{ width: "320px", height: "240px", flexShrink: 0, border: "1px solid #111", boxShadow: "2px 2px 0 #111" }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "1.5rem", overflow: "hidden" }}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="skeleton-box"
                  style={{ width: "320px", height: "240px", flexShrink: 0, border: "1px solid #111", boxShadow: "2px 2px 0 #111" }}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* ROW 1: RIGHT -> LEFT */}
            {row1.length > 0 && (
              <ProjectRow
                projects={row1}
                direction="left"
                speed={45}
                onSelectProject={handleSelectProject}
              />
            )}

            {/* ROW 2: LEFT -> RIGHT */}
            {row2.length > 0 && (
              <ProjectRow
                projects={row2}
                direction="right"
                speed={45}
                onSelectProject={handleSelectProject}
              />
            )}
          </>
        )}
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={handleCloseLightbox}
      />

    </section>
  );
}

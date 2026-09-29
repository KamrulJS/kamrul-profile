"use client";

import { useState } from "react";
import { placeholderProjectsRow1, placeholderProjectsRow2, ShowcaseProject } from "./projectData";
import ProjectRow from "./ProjectRow";
import ProjectLightbox from "./ProjectLightbox";
import "./projectShowcase.css";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const handleSelectProject = (project: ShowcaseProject) => {
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

      {/* Two Horizontal Infinite Marquee Rows Container */}
      <div className="marquee-rows-stack mt-4">
        
        {/* ROW 1: RIGHT -> LEFT */}
        <ProjectRow
          projects={placeholderProjectsRow1}
          direction="left"
          speed={45}
          onSelectProject={handleSelectProject}
        />

        {/* ROW 2: LEFT -> RIGHT */}
        <ProjectRow
          projects={placeholderProjectsRow2}
          direction="right"
          speed={45}
          onSelectProject={handleSelectProject}
        />

      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={handleCloseLightbox}
      />

    </section>
  );
}

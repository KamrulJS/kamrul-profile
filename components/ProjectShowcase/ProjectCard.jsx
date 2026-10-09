"use client";

import Image from "next/image";

export default function ProjectCard({ project, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(project);
  };

  const mainImage = project.images[0] || "";

  return (
    <div
      onClick={handleClick}
      className="marquee-card-wrap group relative cursor-pointer select-none"
    >
      {/* Outer Card Container */}
      <div className="marquee-card-box select-none">
        
        {/* Project Image */}
        <div className="marquee-card-image-wrapper select-none">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="marquee-card-image select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Category Overlay Tag */}
        <div className="marquee-category-tag select-none pointer-events-none">
          <span>{project.category}</span>
        </div>

        {/* Hover Translucent Blur Overlay */}
        <div className="marquee-hover-overlay select-none pointer-events-none">
          <div className="marquee-hover-content">
            <h4 className="marquee-hover-title">
              {project.title}
            </h4>

            {/* Tech Stack List */}
            <p className="marquee-hover-tech font-mono">
              {project.techStack.join(" / ")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

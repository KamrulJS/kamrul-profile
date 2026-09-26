"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ShowcaseProject } from "./projectData";

interface ProjectCardProps {
  project: ShowcaseProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="showcase-card">
      {/* Mockup Card Media Header */}
      <div className="showcase-card-media">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="showcase-card-image"
        />
      </div>

      {/* Card Details Body */}
      <div className="showcase-card-body">
        <div>
          <span className="showcase-card-category">
            {project.category}
          </span>
          <h3 className="showcase-card-title">
            {project.title}
          </h3>
          <p className="showcase-card-desc">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="showcase-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="showcase-tech-pill">
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Meta Strip */}
        <div className="showcase-card-footer">
          <span>CLIENT: {project.client}</span>
          <div className="flex items-center gap-1 text-[#E63946] font-bold">
            <span>DEMO VIEW</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

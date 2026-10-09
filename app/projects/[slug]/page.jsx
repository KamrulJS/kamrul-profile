import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import NavbarWrapper from "./NavbarWrapper";
import Footer from "@/components/Footer";
import ProjectGalleryLightbox from "./ProjectGalleryLightbox";
import { getProjectBySlug, getProjects } from "@/lib/dataService";
import "./projectDetail.css";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="main-container">
      {/* Navbar Client Wrapper */}
      <NavbarWrapper />

      {/* 1. PROJECT HERO & SPECIFICATIONS SECTION */}
      <section className="project-detail-hero-section swiss-grid-pattern">
        <div className="container-custom">
          
          {/* Top Bar Navigation & Live Demo CTA */}
          <div className="project-detail-top-nav">
            <Link
              href="/projects"
              className="swiss-button-secondary"
            >
              <ArrowLeft className="icon-sm icon-red icon-mr" />
              <span>BACK TO PROJECTS DIRECTORY</span>
              
            </Link>

            <div className="project-detail-nav-actions">
              <span className="swiss-badge-red text-xs py-1 px-2.5">
                {project.category} 
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary"
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="icon-sm icon-ml ml-1.5" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Headline */}
          <div className="project-detail-header-block">
            
              <span className="swiss-badge text-xs py-1 px-2.5">
                {project.platform}
              </span>
            <h1 className="project-page-title">
              {project.title}
            </h1>
            <p className="project-page-subtitle">
              {project.shortDescription}
            </p>
          </div>

          {/* Interactive 2-Column Split: Image Gallery & Project Specifications */}
          <ProjectGalleryLightbox project={project} />

        </div>
      </section>

      {/* 2. OVERVIEW & TECHNICAL FEATURES */}
      <section className="project-overview-section">
        <div className="container-custom">
          
          <div>
            <div className="swiss-badge-red mb-2">
              SECTION 02 — ARCHITECTURAL OVERVIEW
            </div>
            <h2 className="section-heading-xl text-2xl md:text-3xl font-extrabold text-[#111111] uppercase mb-4">
              PROJECT OVERVIEW & SCOPE
            </h2>
            <p className="hero-subtitle text-base text-[#333333] leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div className="pt-8 mt-8">
              <h3 className="section-heading-md flex items-center gap-2 text-lg font-bold text-[#111111] uppercase mb-4">
                <span>KEY TECHNICAL FEATURES</span>
              </h3>

              <div className="features-grid">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feature-box">
                    <CheckCircle2 className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span className="feature-box-text">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. QUALITATIVE RESULTS & DELIVERED OUTCOMES */}
      {project.resultsHighlights && project.resultsHighlights.length > 0 && (
        <section className="project-outcomes-section">
          <div className="container-custom">
            <div>
              <div className="swiss-badge-red mb-2">
                SECTION 03 — DELIVERED OUTCOMES
              </div>
              <h2 className="section-heading-xl text-2xl md:text-3xl font-extrabold text-[#111111] uppercase flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#E63946]" />
                <span>PROJECT HIGHLIGHTS & OUTCOMES</span>
              </h2>
            </div>

            <div className="outcomes-grid">
              {project.resultsHighlights.map((hl, idx) => (
                <div key={idx} className="outcome-card">
                  <span className="swiss-badge-red text-[10px] py-0.5 px-2 self-start">
                    RESULT [0{idx + 1}]
                  </span>
                  <p className="outcome-text">
                    {hl}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}

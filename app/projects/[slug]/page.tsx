import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  Lightbulb,
  Globe2,
} from "lucide-react";
import NavbarWrapper from "./NavbarWrapper";
import Footer from "@/components/Footer";
import ProjectGalleryLightbox from "./ProjectGalleryLightbox";
import { getProjectBySlug, getAllProjects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="main-container">
      {/* Navbar Client Wrapper */}
      <NavbarWrapper />

      {/* 1. PROJECT HERO & SPECIFICATIONS SECTION */}
      <section className="project-detail-hero swiss-grid-pattern pt-8 pb-12">
        <div className="container-custom space-y-6 text-left">
          
          {/* Top Bar Navigation & Live Demo CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#111111] pb-4">
            <Link
              href="/projects"
              className="swiss-button-secondary inline-flex items-center"
            >
              <ArrowLeft className="icon-sm icon-red icon-mr" />
              <span>BACK TO PROJECTS DIRECTORY</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="swiss-badge-red text-xs py-1 px-2.5">
                {project.category}
              </span>
              <span className="swiss-badge text-xs py-1 px-2.5">
                {project.platform}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary inline-flex items-center"
                >
                  <span>VISIT LIVE DEMO SITE</span>
                  <ExternalLink className="icon-sm icon-ml ml-1.5" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Headline */}
          <div className="space-y-2 max-w-4xl pt-2">
            <h1 className="hero-title text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase">
              {project.title}
            </h1>
            <p className="hero-subtitle text-base md:text-lg text-[#444444]">
              {project.shortDescription}
            </p>
          </div>

          {/* 3/5 Gallery and 2/5 Specifications Split Grid Client Component */}
          <ProjectGalleryLightbox project={project} />

        </div>
      </section>

      {/* 2. OVERVIEW & TECHNICAL FEATURES */}
      <section className="section-padding bg-white border-bottom border-t border-[#111111]">
        <div className="container-custom text-left space-y-8">
          
          <div className="space-y-6">
            <div>
              <div className="swiss-badge-red mb-2">
                SECTION 02 -- ARCHITECTURAL OVERVIEW
              </div>
              <h2 className="section-heading-xl text-2xl font-extrabold text-[#111111] uppercase">
                PROJECT OVERVIEW & SCOPE
              </h2>
            </div>

            <p className="hero-subtitle text-base text-[#333333] leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="section-heading-md flex items-center gap-2 text-lg font-bold text-[#111111]">
                <Sparkles className="icon-md icon-red text-[#E63946]" />
                <span>KEY TECHNICAL FEATURES</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="feature-item-card flex items-start gap-3 p-3.5 bg-[#F4F4F0] border border-[#111111] rounded-md"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span className="feature-item-text text-xs md:text-sm font-medium text-[#111111]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. BRAINPOWER / APPROACH & THOUGHT PROCESS */}
      {project.brainstorming && project.brainstorming.length > 0 && (
        <section className="section-padding bg-cream border-bottom border-b border-[#111111]">
          <div className="container-custom text-left space-y-8">
            <div>
              <div className="swiss-badge-red mb-2">
                SECTION 03 -- DEVELOPMENT METHODOLOGY
              </div>
              <h2 className="section-heading-xl text-2xl font-extrabold text-[#111111] uppercase flex items-center gap-3">
                <Lightbulb className="icon-lg icon-red text-[#E63946]" />
                <span>BRAINSTORMING & DEVELOPMENT APPROACH</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.brainstorming.map((step, idx) => (
                <div
                  key={idx}
                  className="brainstorm-step-box p-5 bg-white border border-[#111111] shadow-[4px_4px_0px_0px_#111111] rounded-lg space-y-2"
                >
                  <div className="brainstorm-step-title font-mono font-bold text-sm text-[#E63946] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                    <span>STEP 0{idx + 1} -- {step.title}</span>
                  </div>
                  <p className="brainstorm-step-desc text-xs text-[#444444] leading-relaxed font-sans">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. QUALITATIVE RESULTS & HIGHLIGHTS */}
      {project.resultsHighlights && project.resultsHighlights.length > 0 && (
        <section className="section-padding bg-white border-bottom border-b border-[#111111]">
          <div className="container-custom text-left space-y-8">
            <div>
              <div className="swiss-badge-red mb-2">
                SECTION 04 -- DELIVERED OUTCOMES
              </div>
              <h2 className="section-heading-xl text-2xl font-extrabold text-[#111111] uppercase flex items-center gap-3">
                <Layers className="icon-lg icon-red text-[#E63946]" />
                <span>PROJECT HIGHLIGHTS & OUTCOMES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.resultsHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="result-card-box p-4 bg-[#F4F4F0] border border-[#111111] rounded-lg shadow-[4px_4px_0px_0px_#111111] space-y-2"
                >
                  <span className="swiss-badge-red text-[10px] py-0.5 px-2">
                    RESULT [0{idx + 1}]
                  </span>
                  <p className="feature-item-text text-xs font-semibold text-[#111111] leading-snug">
                    {hl}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. LIVE WEBSITE CTA BOTTOM BANNER */}
      {project.liveUrl && (
        <section className="section-padding bg-cream py-16">
          <div className="container-custom text-center">
            <div className="project-cta-card p-8 bg-white border-2 border-[#111111] shadow-[8px_8px_0px_0px_#111111] rounded-lg max-w-3xl mx-auto space-y-4">
              <Globe2 className="w-12 h-12 text-[#E63946] mx-auto" />
              <h3 className="section-heading-xl text-2xl font-extrabold text-[#111111]">
                READY TO SEE THE LIVE PROJECT IN ACTION?
              </h3>
              <p className="hero-subtitle text-sm text-[#555555] max-w-xl mx-auto">
                Explore the responsive user interface, custom Shopify/WordPress interactions, and storefront workflow on the live target site.
              </p>
              
              <div className="cta-actions-row flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary"
                >
                  <span>VISIT LIVE DEMO SITE</span>
                  <ExternalLink className="icon-sm icon-ml ml-2" />
                </a>

                <Link
                  href="/projects"
                  className="swiss-button-secondary"
                >
                  <span>BACK TO PROJECTS</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
  Sparkles,
  Lightbulb,
  Globe2,
} from "lucide-react";
import NavbarWrapper from "./NavbarWrapper";
import Footer from "@/components/Footer";
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

      {/* 1. PROJECT HERO SECTION */}
      <section className="project-detail-hero swiss-grid-pattern">
        <div className="container-custom space-y-6 text-left">
          
          <div className="flex-between">
            <Link
              href="/projects"
              className="swiss-button-secondary"
            >
              <ArrowLeft className="icon-sm icon-red icon-mr" />
              <span>BACK TO PROJECTS DIRECTORY</span>
            </Link>

            <div className="space-x-2">
              <span className="swiss-badge-red">
                {project.category}
              </span>
              <span className="swiss-badge">
                {project.platform}
              </span>
            </div>
          </div>

          {/* Title & Headline */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="hero-title">
              {project.title}
            </h1>
            <p className="hero-subtitle">
              {project.shortDescription}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex-row-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="swiss-button-primary"
              >
                <span>VISIT LIVE DEMO SITE</span>
                <ExternalLink className="icon-sm icon-ml" />
              </a>
            )}

            <div className="badge-role">
              ROLE: <span className="spec-val-red icon-ml">{project.role}</span>
            </div>
          </div>

          {/* Hero Banner Image Box */}
          <div className="project-hero-media">
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="image-cover"
            />
          </div>

        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & METADATA GRID */}
      <section className="section-padding bg-cream border-bottom">
        <div className="container-custom">
          <div className="grid-12col">
            
            {/* Left Main Overview */}
            <div className="col-span-8 space-y-6">
              <div className="swiss-card card-padding space-y-4">
                <div className="swiss-badge-red badge-inline">
                  SECTION 01 — PROJECT OVERVIEW
                </div>
                <h2 className="section-heading-lg">
                  EXECUTIVE SUMMARY & SCOPE
                </h2>
                <p className="section-body-text">
                  {project.description}
                </p>
              </div>

              {/* 4. Project Key Features Box */}
              <div className="swiss-card card-padding space-y-4">
                <div className="swiss-badge badge-inline">
                  DEVELOPMENT HIGHLIGHTS
                </div>
                <h3 className="section-heading-md space-x-2">
                  <Sparkles className="icon-md icon-red" />
                  <span>KEY TECHNICAL FEATURES</span>
                </h3>

                <div className="grid-2col-compact">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="feature-item-card"
                    >
                      <CheckCircle2 className="icon-sm icon-red" />
                      <span className="feature-item-text">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta Specifications Sidebar */}
            <div className="col-span-4">
              <div className="project-specs-card">
                <h3 className="section-heading-md border-bottom space-x-2">
                  <Code2 className="icon-md icon-red" />
                  <span>PROJECT SPECIFICATIONS</span>
                </h3>

                <div className="space-y-4 font-mono">
                  <div className="spec-item-box">
                    <span className="spec-label">
                      PLATFORM
                    </span>
                    <span className="spec-val-black">
                      {project.platform}
                    </span>
                  </div>

                  <div className="spec-item-box">
                    <span className="spec-label">
                      CATEGORY
                    </span>
                    <span className="spec-val-red">
                      {project.category}
                    </span>
                  </div>

                  <div className="spec-item-box">
                    <span className="spec-label">
                      MY ROLE
                    </span>
                    <span className="spec-val-black">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="border-top space-y-2">
                  <span className="spec-label">
                    TECHNOLOGIES USED:
                  </span>
                  <div className="tech-tags-flex">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="swiss-badge-sm">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISUAL GALLERY SECTION */}
      <section className="section-padding bg-white border-bottom">
        <div className="container-custom text-left space-y-8">
          <div>
            <div className="swiss-badge-red mb-2">
              SECTION 02 — VISUAL DISPLAY
            </div>
            <h2 className="section-heading-xl">
              PROJECT SCREENSHOTS & UI GALLERY
            </h2>
          </div>

          <div className="grid-2col">
            {project.images.gallery.map((item, idx) => (
              <div
                key={idx}
                className="project-gallery-card"
              >
                <div className="gallery-image-box">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="image-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="section-heading-md">
                    {item.title}
                  </h4>
                  {item.caption && (
                    <p className="hero-subtitle">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAINPOWER / APPROACH & THOUGHT PROCESS */}
      {project.brainstorming && project.brainstorming.length > 0 && (
        <section className="section-padding bg-cream border-bottom">
          <div className="container-custom text-left space-y-8">
            <div>
              <div className="swiss-badge-red mb-2">
                SECTION 03 — ARCHITECTURAL THINKING
              </div>
              <h2 className="section-heading-xl space-x-3">
                <Lightbulb className="icon-lg icon-red" />
                <span>BRAINSTORMING & DEVELOPMENT APPROACH</span>
              </h2>
            </div>

            <div className="grid-2col">
              {project.brainstorming.map((step, idx) => (
                <div
                  key={idx}
                  className="brainstorm-step-box"
                >
                  <div className="brainstorm-step-title">
                    <span className="bullet-dot" />
                    <span>STEP 0{idx + 1} — {step.title}</span>
                  </div>
                  <p className="brainstorm-step-desc">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. QUALITATIVE RESULTS & HIGHLIGHTS */}
      <section className="section-padding bg-white border-bottom">
        <div className="container-custom text-left space-y-8">
          <div>
            <div className="swiss-badge-red mb-2">
              SECTION 04 — DELIVERED OUTCOMES
            </div>
            <h2 className="section-heading-xl space-x-3">
              <Layers className="icon-lg icon-red" />
              <span>PROJECT HIGHLIGHTS & OUTCOMES</span>
            </h2>
          </div>

          <div className="grid-4col">
            {project.resultsHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="result-card-box"
              >
                <div className="result-card-content">
                  <span className="swiss-badge-red">
                    RESULT [0{idx + 1}]
                  </span>
                  <p className="feature-item-text">
                    {hl}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LIVE WEBSITE CTA BOTTOM BANNER */}
      {project.liveUrl && (
        <section className="section-padding bg-cream">
          <div className="container-custom text-center">
            <div className="project-cta-card">
              <Globe2 className="cta-globe-icon" />
              <h3 className="section-heading-xl">
                READY TO SEE THE LIVE PROJECT IN ACTION?
              </h3>
              <p className="hero-subtitle max-w-xl">
                Explore the responsive user interface, custom Shopify/WordPress interactions, and storefront workflow on the live target site.
              </p>
              
              <div className="cta-actions-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary"
                >
                  <span>VISIT LIVE DEMO SITE</span>
                  <ExternalLink className="icon-sm icon-ml" />
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

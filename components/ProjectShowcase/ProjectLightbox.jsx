"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectLightbox({
  project,
  initialImageIndex = 0,
  onClose,
}) {
  const [activeImgIndex, setActiveImgIndex] = useState(initialImageIndex);
  const [prevProject, setPrevProject] = useState(project);
  const overlayRef = useRef(null);
  const modalBoxRef = useRef(null);

  if (project !== prevProject) {
    setPrevProject(project);
    setActiveImgIndex(initialImageIndex);
  }

  useEffect(() => {
    if (project) {
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" }
        );
      }
      if (modalBoxRef.current) {
        gsap.fromTo(
          modalBoxRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.2)" }
        );
      }
    }
  }, [project]);

  const handleClose = () => {
    if (overlayRef.current && modalBoxRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(modalBoxRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 15,
        duration: 0.2,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const images = project?.images || [];
  const currentImage = images[activeImgIndex] || project?.images[0] || "";

  const handleNext = () => {
    if (images.length > 0) {
      setActiveImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, activeImgIndex]);

  if (!project) return null;

  return (
    <div className="lightbox-overlay-wrap">
      {/* Dark Translucent Backdrop */}
      <div
        ref={overlayRef}
        onClick={handleClose}
        className="lightbox-backdrop"
      />

      {/* Main Lightbox Box in #F4F4F0 Swiss Retro Canvas */}
      <div ref={modalBoxRef} className="lightbox-modal-card">
        
        {/* Header Toolbar */}
        <div className="lightbox-toolbar">
          <div className="lightbox-header-left">
            <span className="lightbox-category-badge">
              {project.category}
            </span>
            <h3 className="lightbox-project-title">
              {project.title}
            </h3>
          </div>

          <div className="lightbox-header-right">
            <span className="lightbox-counter-badge">
              IMG {String(activeImgIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>

            <button
              onClick={handleClose}
              className="lightbox-close-btn"
              aria-label="Close Lightbox"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Image Stage */}
        <div className="lightbox-image-stage">
          <Image
            src={currentImage}
            alt={`${project.title} - view ${activeImgIndex + 1}`}
            fill
            sizes="95vw"
            className="lightbox-main-img"
            priority
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="lightbox-nav-arrow lightbox-nav-prev"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="lightbox-nav-arrow lightbox-nav-next"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Info Strip */}
        <div className="lightbox-footer">
          <div className="lightbox-footer-content">
            <p className="lightbox-project-desc">
              {project.description}
            </p>
            <div className="lightbox-tags-wrap">
              {(project.techStack || []).map((tech, i) => (
                <span
                  key={i}
                  className="lightbox-tag-pill"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lightbox-footer-meta">
            <div className="lightbox-meta-box">
              <div className="lightbox-meta-row">
                <span className="lightbox-meta-label">CLIENT:</span>
                <span className="lightbox-meta-value">{project.client}</span>
              </div>
              <div className="lightbox-meta-row">
                <span className="lightbox-meta-label">YEAR:</span>
                <span className="lightbox-meta-value">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

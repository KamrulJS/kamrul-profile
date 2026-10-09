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
          <div className="lightbox-title-area">
            <span className="swiss-badge-red text-[11px] py-0.5 px-2 font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="font-extrabold text-[#111111] text-[16px] uppercase tracking-wide">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-[#111111] bg-[#F4F4F0] border border-[#111111] px-2.5 py-1 rounded uppercase tracking-wider">
              IMG {String(activeImgIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>

            <button
              onClick={handleClose}
              className="w-8 h-8 rounded border border-[#111111] bg-[#111111] text-white hover:bg-[#E63946] hover:border-[#E63946] transition-colors flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Image Stage */}
        <div className="lightbox-image-stage" style={{ position: "relative" }}>
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
                className="lightbox-nav-arrow left-4"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="lightbox-nav-arrow right-4"
                aria-label="Next Image"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Footer Info Strip */}
        <div className="lightbox-footer">
          <div>
            <p className="text-[14px] text-[#111111] font-semibold mb-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[10.5px] font-bold text-[#111111] bg-[#F4F4F0] border border-[#111111] px-2 py-0.5 rounded"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right flex-shrink-0 ml-6 font-mono text-[11px] font-bold text-[#111111] uppercase tracking-wider space-y-0.5">
            <div><span className="text-[#E63946]">CLIENT:</span> {project.client}</div>
            <div><span className="text-[#E63946]">YEAR:</span> {project.year}</div>
          </div>
        </div>

      </div>
    </div>
  );
}

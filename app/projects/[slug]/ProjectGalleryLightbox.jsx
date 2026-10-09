"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Code2,
  ExternalLink,
} from "lucide-react";
import "./projectDetail.css";

export default function ProjectGalleryLightbox({ project }) {
  // Combine hero image and gallery images into a strictly deduplicated array
  const heroUrl = project.images?.hero || project.image || project.hero_image || "";
  const galleryList = Array.isArray(project.images?.gallery) ? project.images.gallery : [];

  const rawImages = [
    ...(heroUrl ? [{ url: heroUrl, title: project.title, caption: project.shortDescription }] : []),
    ...galleryList.map((item) =>
      typeof item === "string" ? { url: item, title: project.title } : item
    ),
  ];

  const seenUrls = new Set();
  const allImages = [];
  for (const img of rawImages) {
    if (img && img.url && !seenUrls.has(img.url)) {
      seenUrls.add(img.url);
      allImages.push(img);
    }
  }

  if (allImages.length === 0) {
    allImages.push({ url: heroUrl || "/placeholder.jpg", title: project.title });
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Lightbox Zoom & Pan State
  const [zoomScale, setZoomScale] = useState(1);
  const [panPos, setPanPos] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const startPanRef = useRef({ x: 0, y: 0 });

  const currentImg = allImages[activeIndex] || allImages[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    resetZoom();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
    resetZoom();
  };

  const resetZoom = () => {
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPos({ x: 0, y: 0 });
      return next;
    });
  };

  // Prevent body scrolling when Lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      resetZoom();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, activeIndex]);

  // Pan Mouse Handlers
  const handleMouseDown = (e) => {
    if (zoomScale <= 1) return;
    setIsPanning(true);
    startPanRef.current = { x: e.clientX - panPos.x, y: e.clientY - panPos.y };
  };

  const handleMouseMove = (e) => {
    if (!isPanning || zoomScale <= 1) return;
    setPanPos({
      x: e.clientX - startPanRef.current.x,
      y: e.clientY - startPanRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return (
    <>
      {/* 2-Column Split: Gallery Left (60%), Specs Right (40%) */}
      <div className="project-split-layout">
        
        {/* LEFT COLUMN: Image Gallery Stage */}
        <div className="gallery-wrapper">
          
          {/* Main Display Image Frame */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="gallery-main-frame"
            title="Click to open fullscreen lightbox"
          >
            <Image
              src={currentImg.url}
              alt={currentImg.title || project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="gallery-main-image"
            />

            {/* Click to Enlarge Badge */}
            <div className="gallery-hover-badge">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULLSCREEN</span>
            </div>
          </div>

          {/* Gallery Navigation Controls Bar */}
          <div className="gallery-controls-bar">
            <button
              type="button"
              onClick={handlePrev}
              className="gallery-nav-btn"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-[#E63946]" />
              <span>PREVIOUS</span>
            </button>

            <div className="gallery-counter-badge">
              <span>IMAGE</span>
              <span className="gallery-counter-current">
                {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="gallery-nav-btn"
              aria-label="Next image"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-[#E63946]" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {allImages.length > 1 && (
            <div className="gallery-thumbnails-row">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                    resetZoom();
                  }}
                  className={`gallery-thumb-btn ${idx === activeIndex ? "active" : ""}`}
                  aria-label={`View slide ${idx + 1}`}
                >
                  <Image
                    src={img.url}
                    alt={img.title || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="90px"
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Technical Specifications Card */}
        <div>
          <div className="specs-card-container">
            <h3 className="specs-card-heading">
              <Code2 className="w-5 h-5 text-[#E63946]" />
              <span>PROJECT SPECIFICATIONS</span>
            </h3>

            <div className="specs-list">
              <div className="spec-row">
                <span className="spec-key">PLATFORM</span>
                <span className="spec-val">{project.platform}</span>
              </div>

              <div className="spec-row">
                <span className="spec-key">PROJECT TYPE</span>
                <span className="spec-val highlight">{project.category}</span>
              </div>

              <div className="spec-row">
                <span className="spec-key">MY ROLE</span>
                <span className="spec-val">{project.role}</span>
              </div>

              <div className="spec-row">
                <span className="spec-key">YEAR</span>
                <span className="spec-val">2026</span>
              </div>
            </div>

            {/* Overview description */}
            <div className="specs-overview-block">
              <span className="specs-section-label">PROJECT OVERVIEW:</span>
              <p className="specs-overview-text">
                {project.shortDescription}
              </p>
            </div>

            {/* Technology Stack Tags */}
            <div className="specs-tech-block">
              <span className="specs-section-label">TECHNOLOGY STACK:</span>
              <div className="tech-tags-flex">
                {(project.technologies || []).map((tech, idx) => (
                  <span key={idx} className="swiss-badge-sm">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo CTA Button */}
            {project.liveUrl && (
              <div className="pt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary specs-cta-btn"
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="lightbox-backdrop">
          
          {/* Top Control Bar */}
          <div className="lightbox-toolbar-top">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="swiss-badge-red" style={{ fontSize: "11px", padding: "0.2rem 0.5rem" }}>
                {project.category}
              </span>
              <span style={{ fontWeight: 700, color: "#FFFFFF" }}>
                {project.title}
              </span>
            </div>

            <div style={{ fontWeight: 800, color: "#FFFFFF", background: "#222222", padding: "0.25rem 0.75rem", border: "1px solid #444" }}>
              {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={handleZoomIn}
                className="gallery-nav-btn"
                style={{ padding: "0.35rem 0.5rem", background: "#222", color: "#fff", borderColor: "#444" }}
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleZoomOut}
                className="gallery-nav-btn"
                style={{ padding: "0.35rem 0.5rem", background: "#222", color: "#fff", borderColor: "#444" }}
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {zoomScale > 1 && (
                <button
                  type="button"
                  onClick={resetZoom}
                  className="gallery-nav-btn"
                  style={{ padding: "0.35rem 0.5rem", background: "#222", color: "#fff", borderColor: "#444" }}
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="swiss-button-primary"
                style={{ padding: "0.35rem 0.65rem", marginLeft: "0.5rem" }}
                title="Close Lightbox (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Stage */}
          <div
            className="lightbox-stage"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: zoomScale > 1 ? (isPanning ? "grabbing" : "grab") : "default" }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="swiss-button-secondary"
              style={{ position: "absolute", left: "1.5rem", zIndex: 10002, padding: "0.75rem" }}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#E63946]" />
            </button>

            <div
              className="lightbox-image-container"
              style={{
                transform: `scale(${zoomScale}) translate(${panPos.x / zoomScale}px, ${panPos.y / zoomScale}px)`,
                transition: isPanning ? "none" : "transform 0.15s ease-out",
              }}
            >
              <Image
                src={currentImg.url}
                alt={currentImg.title || project.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
                draggable={false}
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="swiss-button-secondary"
              style={{ position: "absolute", right: "1.5rem", zIndex: 10002, padding: "0.75rem" }}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 text-[#E63946]" />
            </button>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="lightbox-footer-bar">
            <span style={{ color: "#E63946", fontWeight: 700, textTransform: "uppercase" }}>
              {currentImg.title || project.title}
            </span>
            <span style={{ color: "#9CA3AF" }}>
              Use keyboard arrows ← → to navigate · Esc to close
            </span>
            <span style={{ fontWeight: 700 }}>
              {zoomScale > 1 ? `${Math.round(zoomScale * 100)}% ZOOM` : "100% FIT"}
            </span>
          </div>

        </div>
      )}
    </>
  );
}

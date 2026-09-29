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
import { Project } from "@/data/projects";

interface ProjectGalleryLightboxProps {
  project: Project;
}

export default function ProjectGalleryLightbox({ project }: ProjectGalleryLightboxProps) {
  // Combine hero image and gallery images into a unified array
  const allImages = [
    { url: project.images.hero, title: project.title, caption: project.shortDescription },
    ...(project.images.gallery || []),
  ];

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

    const handleKeyDown = (e: KeyboardEvent) => {
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
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsPanning(true);
    startPanRef.current = { x: e.clientX - panPos.x, y: e.clientY - panPos.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
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
      {/* 5-Column Split Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pt-2">
        
        {/* LEFT: 3/5 Width - Project Image Gallery */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Main Display Image Frame */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="group relative w-full h-[360px] sm:h-[480px] bg-white border border-[#111111] shadow-[6px_6px_0px_0px_#111111] overflow-hidden rounded-lg cursor-pointer transition-all duration-200 hover:border-[#E63946]"
            style={{ position: "relative" }}
          >
            <Image
              src={currentImg.url}
              alt={currentImg.title || project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
            />

            {/* Click to Enlarge Hover Badge */}
            <div className="absolute top-4 right-4 bg-[#111111] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded flex items-center gap-1.5 opacity-90 group-hover:bg-[#E63946] transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULLSCREEN LIGHTBOX</span>
            </div>
          </div>

          {/* Gallery Bottom Navigation Control Bar */}
          <div className="flex items-center justify-between p-3 bg-white border border-[#111111] shadow-[2px_2px_0px_0px_#111111] rounded-lg select-none font-mono text-xs">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="swiss-button-secondary py-1.5 px-3 text-xs flex items-center gap-1 hover:bg-[#111111] hover:text-white transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-4 h-4 text-[#E63946]" />
              <span>PREVIOUS</span>
            </button>

            {/* Image Counter Badge */}
            <div className="flex items-center gap-2 font-extrabold text-[#111111] tracking-widest bg-[#F4F4F0] px-3 py-1 border border-[#111111] rounded">
              <span>IMAGE</span>
              <span className="text-[#E63946]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="swiss-button-secondary py-1.5 px-3 text-xs flex items-center gap-1 hover:bg-[#111111] hover:text-white transition-colors"
              aria-label="Next Image"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-[#E63946]" />
            </button>
          </div>

          {/* Thumbnail Strip for Quick Navigation */}
          {allImages.length > 1 && (
            <div className="flex flex-wrap gap-2.5 pt-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    resetZoom();
                  }}
                  className={`w-20 h-14 rounded border transition-all overflow-hidden bg-white ${
                    idx === activeIndex
                      ? "border-2 border-[#E63946] shadow-[2px_2px_0px_0px_#E63946] scale-105"
                      : "border-[#111111] opacity-75 hover:opacity-100 hover:border-[#111111]"
                  }`}
                  style={{ position: "relative" }}
                >
                  <Image
                    src={img.url}
                    alt={img.title || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT: 2/5 Width - Project Specifications Card */}
        <div className="lg:col-span-2">
          <div className="project-specs-card bg-white border border-[#111111] shadow-[6px_6px_0px_0px_#111111] p-6 rounded-lg space-y-5">
            
            <h3 className="section-heading-md border-b border-[#111111] pb-3 flex items-center gap-2 text-base font-extrabold text-[#111111] uppercase tracking-wide">
              <Code2 className="w-5 h-5 text-[#E63946]" />
              <span>PROJECT SPECIFICATIONS</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="spec-item-box flex justify-between items-center p-2.5 bg-[#F4F4F0] border border-[#111111] rounded">
                <span className="spec-label text-gray-600 font-bold uppercase">PLATFORM</span>
                <span className="spec-val-black font-extrabold text-[#111111]">{project.platform}</span>
              </div>

              <div className="spec-item-box flex justify-between items-center p-2.5 bg-[#F4F4F0] border border-[#111111] rounded">
                <span className="spec-label text-gray-600 font-bold uppercase">PROJECT TYPE</span>
                <span className="spec-val-red text-[#E63946] font-extrabold">{project.category}</span>
              </div>

              <div className="spec-item-box flex justify-between items-center p-2.5 bg-[#F4F4F0] border border-[#111111] rounded">
                <span className="spec-label text-gray-600 font-bold uppercase">MY ROLE</span>
                <span className="spec-val-black font-extrabold text-[#111111]">{project.role}</span>
              </div>

              <div className="spec-item-box flex justify-between items-center p-2.5 bg-[#F4F4F0] border border-[#111111] rounded">
                <span className="spec-label text-gray-600 font-bold uppercase">YEAR</span>
                <span className="spec-val-black font-extrabold text-[#111111]">2026</span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="space-y-1.5 pt-1">
              <span className="spec-label font-mono text-xs font-bold text-gray-500 uppercase">PROJECT OVERVIEW:</span>
              <p className="text-xs text-[#333333] leading-relaxed font-sans">
                {project.shortDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="border-t border-[#111111] pt-4 space-y-2">
              <span className="spec-label font-mono text-xs font-bold text-gray-500 uppercase">TECHNOLOGY STACK:</span>
              <div className="tech-tags-flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="swiss-badge-sm">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo CTA */}
            {project.liveUrl && (
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button-primary w-full flex items-center justify-center py-2.5 font-mono text-xs"
                >
                  <span>VISIT LIVE DEMO SITE</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-[#0A0A0A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none">
          
          {/* Lightbox Top Control Toolbar */}
          <div className="flex items-center justify-between text-white font-mono text-xs z-[1010] bg-[#111111]/80 px-4 py-3 rounded-lg border border-[#333333]">
            <div className="flex items-center gap-3">
              <span className="bg-[#E63946] text-white font-extrabold px-2.5 py-0.5 rounded text-[11px] uppercase">
                {project.category}
              </span>
              <span className="font-bold text-gray-200 hidden sm:inline uppercase">
                {project.title}
              </span>
            </div>

            {/* Center Counter */}
            <div className="font-extrabold tracking-widest text-[#F4F4F0] bg-[#222222] px-3 py-1 rounded border border-[#444444]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
            </div>

            {/* Right Controls: Zoom In, Zoom Out, Reset, Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-1.5 bg-[#222222] hover:bg-[#E63946] border border-[#444444] rounded text-white transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={handleZoomOut}
                className="p-1.5 bg-[#222222] hover:bg-[#E63946] border border-[#444444] rounded text-white transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {zoomScale > 1 && (
                <button
                  onClick={resetZoom}
                  className="p-1.5 bg-[#222222] hover:bg-[#E63946] border border-[#444444] rounded text-white transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 bg-[#E63946] hover:bg-red-700 border border-[#E63946] rounded text-white transition-colors ml-2"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Viewport */}
          <div
            className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 z-[1010] p-3 bg-[#111111]/80 hover:bg-[#E63946] border border-[#444444] rounded-lg text-white transition-colors shadow-lg"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container with Dynamic Zoom & Pan */}
            <div
              className="relative w-full h-full max-w-6xl max-h-[82vh] transition-transform duration-100 ease-out"
              style={{
                position: "relative",
                transform: `scale(${zoomScale}) translate(${panPos.x / zoomScale}px, ${panPos.y / zoomScale}px)`,
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

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-[1010] p-3 bg-[#111111]/80 hover:bg-[#E63946] border border-[#444444] rounded-lg text-white transition-colors shadow-lg"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Footer Caption */}
          <div className="text-center font-mono text-xs text-gray-300 bg-[#111111]/80 py-2.5 px-4 rounded-lg border border-[#333333] z-[1010] flex items-center justify-between">
            <span className="text-[#E63946] font-bold uppercase truncate max-w-[40%] text-left">
              {currentImg.title || project.title}
            </span>
            <span className="text-gray-400 hidden sm:inline text-center">
              Use ← → arrows to navigate | +/- to zoom | Esc to close
            </span>
            <span className="text-gray-400 font-bold text-right">
              {zoomScale > 1 ? `${Math.round(zoomScale * 100)}% ZOOM` : "100% FIT"}
            </span>
          </div>

        </div>
      )}
    </>
  );
}
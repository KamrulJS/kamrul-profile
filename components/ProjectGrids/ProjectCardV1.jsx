"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

/**
 * VERSION 01 — CLASSIC EDITORIAL CARD
 * Characteristics:
 * - Clean rectangular composition
 * - Category badge at top-left
 * - Arrow button at top-right
 * - Smooth bottom dark gradient on hover
 * - Title and tech stack revealed smoothly at the bottom
 */
export default function ProjectCardV1({ project, index = 0 }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const gradientRef = useRef(null);
  const titleRef = useRef(null);
  const techRef = useRef(null);
  const arrowRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    // Initial GSAP setup
    gsap.set(gradientRef.current, { opacity: 0 });
    gsap.set(titleRef.current, { opacity: 0, y: 16 });
    gsap.set(techRef.current, { opacity: 0, y: 12 });
    gsap.set(arrowRef.current, { x: 0, y: 0, scale: 1 });
    gsap.set(imageRef.current, { scale: 1, filter: "brightness(100%)" });

    return () => {
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    // Forward hover animation
    gsap.killTweensOf([
      imageRef.current,
      gradientRef.current,
      titleRef.current,
      techRef.current,
      arrowRef.current,
    ]);

    gsap.to(imageRef.current, {
      // scale: 1,
      filter: "brightness(95%)",
      duration: 0.55,
      ease: "power2.out",
    });

    gsap.to(gradientRef.current, {
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power2.out",
    });

    gsap.to(techRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      delay: 0.06,
      ease: "power2.out",
    });

    gsap.to(arrowRef.current, {
      x: 3,
      y: -3,
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // Reverse hover animation smoothly
    gsap.killTweensOf([
      imageRef.current,
      gradientRef.current,
      titleRef.current,
      techRef.current,
      arrowRef.current,
    ]);

    gsap.to(imageRef.current, {
      scale: 1,
      filter: "brightness(100%)",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(gradientRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.35,
      ease: "power2.in",
    });

    gsap.to(techRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <article
      ref={cardRef}
      className="v1-editorial-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
      aria-label={`${project.title} - ${project.category}`}
    >
      <Link
        href={`/projects/${project.slug || ""}`}
        className="v1-card-inner-link"
      >
        {/* Top Controls: Category Badge & Arrow Button */}
        <div className="v1-top-controls">
          <span className="v1-category-badge">
            {project.category}
          </span>
          <div ref={arrowRef} className="v1-arrow-btn">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Media Box */}
        <div className="v1-media-box">
          <div ref={imageRef} className="v1-image-wrapper">
            <Image
              src={project.image || (project.images && project.images.hero) || project.hero_image || "/placeholder.jpg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Bottom Gradient Overlay (Smooth dark shadow) */}
          <div ref={gradientRef} className="v1-gradient-overlay" />

          {/* Bottom Content Area: Title + Tech Stack revealed on hover */}
          <div className="v1-bottom-content">
            <h3 ref={titleRef} className="v1-project-title">
              {project.title}
            </h3>
            <div ref={techRef} className="v1-tech-stack">
              {(project.techStack || project.technologies || []).slice(0, 4).map((tech, idx) => (
                <span key={idx} className="v1-tech-tag">
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

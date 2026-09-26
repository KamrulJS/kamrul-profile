"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShowcaseProject } from "./projectData";
import ProjectCard from "./ProjectCard";

interface ProjectRowProps {
  projects: ShowcaseProject[];
  direction: "left" | "right";
  speed?: number; // pixels per second
  onSelectProject: (project: ShowcaseProject) => void;
}

export default function ProjectRow({
  projects,
  direction,
  speed = 45,
  onSelectProject,
}: ProjectRowProps) {
  const rowTrackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);

  const positionXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  // Duplicating project array 4 times for seamless infinite wrap across large viewports
  const duplicatedProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ];

  const updateWidth = () => {
    if (!rowTrackRef.current) return;
    const track = rowTrackRef.current;
    const computedStyle = window.getComputedStyle(track);
    const computedGap = parseFloat(computedStyle.gap) || 24;
    const totalWidth = track.scrollWidth + computedGap;
    singleSetWidthRef.current = totalWidth / 4;
  };

  useEffect(() => {
    updateWidth();

    // Recalculate on image loads & window resizes to ensure width precision
    window.addEventListener("resize", updateWidth);
    const imgElements = rowTrackRef.current?.querySelectorAll("img");
    imgElements?.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", updateWidth);
      }
    });

    let lastTime = gsap.ticker.time;

    const tick = () => {
      const currentTime = gsap.ticker.time;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const singleWidth = singleSetWidthRef.current;
      if (!singleWidth || singleWidth <= 0 || !rowTrackRef.current) return;

      if (!isDraggingRef.current && !isHoveredRef.current) {
        const dirModifier = direction === "left" ? -1 : 1;
        const deltaX = dirModifier * speed * deltaTime;

        let newX = positionXRef.current + deltaX;
        newX = gsap.utils.wrap(-singleWidth, 0, newX);
        positionXRef.current = newX;

        gsap.set(rowTrackRef.current, { x: newX });
      }
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("resize", updateWidth);
      imgElements?.forEach((img) => {
        img.removeEventListener("load", updateWidth);
      });
      gsap.ticker.remove(tick);
    };
  }, [direction, speed]);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Primary mouse button or touch contact only
    if (e.button !== undefined && e.button !== 0) return;

    isDraggingRef.current = true;
    const initialClientX = e.clientX;
    const initialPositionX = positionXRef.current;
    dragDistanceRef.current = 0;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current || !rowTrackRef.current) return;

      const deltaX = moveEvent.clientX - initialClientX;
      dragDistanceRef.current = Math.abs(deltaX);

      const singleWidth = singleSetWidthRef.current;
      let targetX = initialPositionX + deltaX;

      if (singleWidth > 0) {
        targetX = gsap.utils.wrap(-singleWidth, 0, targetX);
      }

      positionXRef.current = targetX;
      gsap.set(rowTrackRef.current, { x: targetX });
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const handleCardClick = (project: ShowcaseProject) => {
    if (dragDistanceRef.current < 6) {
      onSelectProject(project);
    }
  };

  return (
    <div
      className="marquee-row-wrapper cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
    >
      <div ref={rowTrackRef} className="marquee-row-track">
        {duplicatedProjects.map((proj, idx) => (
          <div key={`${proj.id}-${idx}`} className="marquee-row-slide">
            <ProjectCard project={proj} onClick={() => handleCardClick(proj)} />
          </div>
        ))}
      </div>
    </div>
  );
}

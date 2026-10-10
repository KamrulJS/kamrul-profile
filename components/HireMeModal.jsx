"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { X, ArrowUpRight } from "lucide-react";
import { hirePlatforms } from "./hirePlatforms";
import "./HireMeModal.css";

// Official Platform Logos as SVG components
const DribbbleLogo = () => (
  <svg viewBox="0 0 640 640" fill="#EA4C89" aria-label="Dribbble" className="w-full h-full">
    <path d="M320 640C143.529 640 0 496.494 0 320S143.482 0 320 0c176.471 0 320 143.482 320 320S496.494 640 320 640zm269.873-276.228c-9.354-3-84.65-25.359-170.246-11.646 35.752 98.234 50.245 178.242 53.127 194.884 61.24-41.48 105-107.127 117.12-183.238zM426.761 572.003c-4.122-24.012-19.878-107.517-58.23-207.239-.637.248-1.24.366-1.759.638-154.23 53.752-209.636 160.644-214.479 170.636 46.37 36.118 104.647 57.768 167.766 57.768 37.89 0 74.009-7.76 106.761-21.756l-.059-.047zm-309.89-68.883c6.248-10.642 81.249-134.754 222.121-180.357 3.52-1.11 7.122-2.232 10.76-3.236-6.874-15.52-14.362-31.11-22.122-46.359-136.36 40.879-268.87 39.119-280.87 39-.13 2.765-.13 5.517-.13 8.363 0 70.111 26.646 134.234 70.24 182.636v-.047zm-64.36-238.75c12.25.117 124.88.625 252.76-33.25-45.225-80.516-94.123-148.23-101.363-158.115-76.513 36.107-133.761 106.643-151.36 191.365h-.036zM256.008 54.65c7.512 10.11 57.237 77.765 102 159.994 97.242-36.366 138.357-91.773 143.247-98.765-48.249-42.874-111.757-68.882-181.242-68.882-21.992.118-43.524 2.763-63.993 7.63l-.012.023zm275.637 92.99c-5.764 7.748-51.65 66.52-152.648 107.765 6.354 12.992 12.508 26.244 18.118 39.638 1.996 4.76 4.004 9.354 5.882 14.114 90.993-11.35 181.36 6.886 190.372 8.752-.638-64.477-23.764-123.757-61.76-170.246l.035-.023z" />
  </svg>
);

const UpworkLogo = () => (
  <svg viewBox="0 0 512 512" aria-label="Upwork" className="w-full h-full">
    <ellipse cx="256" cy="256" rx="250" ry="250" fill="#14A800" />
    <path
      d="M345.516 181.708c-42.168 0-65.774 27.481-72.532 55.773-7.658-14.416-13.335-33.698-17.75-51.628H196.94v72.531c0 26.31-11.984 45.772-35.41 45.772-23.427 0-36.852-19.462-36.852-45.772l.27-72.531H91.34v72.531c0 21.174 6.848 40.366 19.372 54.061 12.884 14.146 30.454 21.534 50.817 21.534 40.545 0 68.837-31.085 68.837-75.595V209.64c4.235 16.038 14.326 46.853 33.608 73.884l-18.02 102.625h34.148l11.893-72.712c3.875 3.244 8.02 6.127 12.434 8.74 11.443 7.208 24.508 11.263 38.023 11.713 0 0 2.073.09 3.154.09 41.807 0 75.054-32.346 75.054-76.045 0-43.7-33.337-76.226-75.144-76.226m0 122.358c-25.86 0-42.979-20.003-47.754-27.752 6.127-49.015 24.057-64.512 47.754-64.512 23.426 0 41.626 18.741 41.626 46.132 0 27.39-18.2 46.132-41.626 46.132"
      fill="#FFFFFF"
      fillRule="nonzero"
    />
  </svg>
);

const FiverrLogo = () => (
  <svg viewBox="0 0 508.02 508.02" aria-label="Fiverr" className="w-full h-full">
    <circle fill="#1DBF73" cx="254.01" cy="254.01" r="254.01" />
    <circle fill="#FFFFFF" cx="315.97" cy="162.19" r="26.87" />
    <path
      fill="#FFFFFF"
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

const BehanceLogo = () => (
  <svg viewBox="0 0 640 640" fill="#0057FF" aria-label="Behance" className="w-full h-full">
    <path d="M185.577 119.517c18.862 0 35.847 1.642 51.331 5.008 15.52 3.236 28.63 8.752 39.757 16.24 10.996 7.512 19.476 17.516 25.748 29.989 6 12.354 9 27.862 9 46.229 0 19.878-4.476 36.355-13.512 49.63-9.118 13.24-22.358 24-40.122 32.516 24.236 6.993 42.118 19.24 54.118 36.627 11.989 17.516 17.753 38.504 17.753 63.225 0 19.996-3.886 37.11-11.469 51.615-7.748 14.634-18.248 26.492-31.11 35.634-12.993 9.236-27.993 15.992-44.753 20.363-16.642 4.346-33.756 6.626-51.45 6.626H0V119.553l185.601.012-.023-.048zm232.042 31.76h159.616v38.883l-159.616-.012v-38.883.012zm35.469 293.448c11.764 11.469 28.63 17.233 50.646 17.233 15.745 0 29.516-4.016 40.867-12.012 11.35-7.996 18.248-16.465 20.882-25.229l68.965.012c-11.126 34.347-27.874 58.749-50.859 73.5-22.642 14.753-50.35 22.241-82.5 22.241-22.524 0-42.627-3.65-60.757-10.772-18.119-7.24-33.237-17.35-45.993-30.638-12.366-13.24-22.11-28.984-28.996-47.493-6.756-18.354-10.229-38.752-10.229-60.744 0-21.367 3.52-41.245 10.477-59.623 7.122-18.52 16.878-34.359 29.87-47.753 12.98-13.382 28.229-24 46.24-31.748 17.883-7.76 37.631-11.646 59.505-11.646 24.107 0 45.225 4.642 63.356 14.126 18 9.355 32.87 21.993 44.492 37.749 11.646 15.768 19.878 33.874 25.004 54.107 5.126 20.232 6.875 41.35 5.469 63.508H433.706c0 22.359 7.512 43.76 19.358 55.1l.024.082zm89.871-149.707c-9.236-10.24-25.122-15.874-44.233-15.874-12.52 0-22.866 2.114-31.11 6.366-8.115 4.229-14.752 9.473-19.878 15.745-4.997 6.248-8.516 13.004-10.465 20.102-1.996 6.874-3.236 13.24-3.65 18.756l127.502-.012c-1.878-19.984-8.752-34.736-18.118-45.106l-.047.023zm-368.662-16.524c15.355 0 28.099-3.65 38.091-11.008 9.992-7.24 14.752-19.24 14.752-35.752 0-9.106-1.63-16.76-4.878-22.642-3.354-5.87-7.76-10.512-13.37-13.748-5.516-3.355-11.74-5.646-19.099-6.886-7.122-1.358-14.634-1.984-22.24-1.984H86.576v91.973h87.745l-.024.047zm4.748 167.59c8.528 0 16.642-.757 24.213-2.528 7.748-1.748 14.634-4.359 20.363-8.35 5.752-3.887 10.641-8.989 14.114-15.745 3.52-6.638 5.126-15.118 5.126-25.477 0-20.232-5.764-34.748-17.114-43.512-11.351-8.646-26.47-12.874-45.214-12.874H86.552V445.93l92.493-.012v.165z" />
  </svg>
);

const logoMap = {
  dribbble: DribbbleLogo,
  upwork: UpworkLogo,
  fiverr: FiverrLogo,
  behance: BehanceLogo,
};

export default function HireMeModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(null);

  const backdropRef = useRef(null);
  const modalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Sync visibility with isOpen for smooth entrance/exit
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (modalRef.current && backdropRef.current) {
      gsap.killTweensOf([modalRef.current, backdropRef.current]);

      gsap.to(modalRef.current, {
        opacity: 0,
        y: prefersReduced ? 0 : 20,
        scale: 0.98,
        duration: prefersReduced ? 0.05 : 0.25,
        ease: "power2.in",
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: prefersReduced ? 0.05 : 0.2,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          isAnimatingRef.current = false;
          onClose();
        },
      });
    } else {
      setIsVisible(false);
      isAnimatingRef.current = false;
      onClose();
    }
  }, [onClose]);

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Entrance animation
  useEffect(() => {
    if (isOpen && isVisible && modalRef.current && backdropRef.current) {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.killTweensOf([modalRef.current, backdropRef.current]);

      // Backdrop fade in
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: prefersReduced ? 0.05 : 0.35, ease: "power2.out" }
      );

      // Modal card entrance
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          y: prefersReduced ? 0 : 25,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: prefersReduced ? 0.05 : 0.45,
          ease: "power3.out",
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        }
      );

      // Stagger cards
      if (!prefersReduced) {
        const staggerItems = modalRef.current.querySelectorAll(".hire-stagger-item");
        if (staggerItems.length > 0) {
          gsap.fromTo(
            staggerItems,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.05,
              ease: "power2.out",
              delay: 0.1,
            }
          );
        }
      }
    }
  }, [isOpen, isVisible]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Card hover animations
  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const arrow = card.querySelector(".hire-card-arrow-box");
    const logo = card.querySelector(".hire-logo-box");

    gsap.to(card, {
      y: -3,
      boxShadow: "5px 5px 0px 0px #111111",
      duration: 0.25,
      ease: "power2.out",
    });
    if (arrow) {
      gsap.to(arrow, {
        x: 2,
        y: -2,
        backgroundColor: "#E63946",
        color: "#FFFFFF",
        borderColor: "#E63946",
        duration: 0.25,
      });
    }
    if (logo) {
      gsap.to(logo, { scale: 1.08, duration: 0.25 });
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const arrow = card.querySelector(".hire-card-arrow-box");
    const logo = card.querySelector(".hire-logo-box");

    gsap.to(card, {
      y: 0,
      boxShadow: "3px 3px 0px 0px #111111",
      duration: 0.25,
      ease: "power2.out",
    });
    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        y: 0,
        backgroundColor: "#FFFFFF",
        color: "#111111",
        borderColor: "#111111",
        duration: 0.25,
      });
    }
    if (logo) {
      gsap.to(logo, { scale: 1, duration: 0.25 });
    }
  };

  const handleCardClick = (e, platform) => {
    e.stopPropagation();
    const hasValidUrl =
      Boolean(platform.url) &&
      platform.url.trim() !== "" &&
      !platform.url.includes("YOUR_") &&
      platform.url !== "#";

    if (!hasValidUrl) {
      e.preventDefault();
      setCopiedNotice(`${platform.name} profile link will be linked soon.`);
      setTimeout(() => setCopiedNotice(null), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="hire-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      {/* Translucent Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="hire-modal-backdrop"
      />

      {/* Main Swiss Retro Modal Card */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="hire-modal-card"
      >
        {/* Header */}
        <div className="hire-modal-header hire-stagger-item">
          <div className="hire-modal-header-content">
            <span className="hire-modal-badge">
              DIRECT CHANNELS
            </span>
            <h2 id="hire-modal-title" className="hire-modal-title">
              LET&apos;S CONNECT
            </h2>
            <p className="hire-modal-subtitle">
              Choose a platform to explore my work or discuss your next project.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="hire-modal-close-btn"
            title="Close (Esc)"
            aria-label="Close Hire Me Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {copiedNotice && (
          <div
            style={{
              backgroundColor: "#FFFBEB",
              border: "1px solid #F59E0B",
              color: "#92400E",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              padding: "0.5rem 0.75rem",
              borderRadius: "0",
            }}
          >
            ℹ️ {copiedNotice}
          </div>
        )}

        {/* 4 Platform Cards Grid */}
        <div className="hire-platforms-grid">
          {hirePlatforms.map((platform) => {
            const LogoComponent = logoMap[platform.id] || DribbbleLogo;
            const hasValidUrl =
              Boolean(platform.url) &&
              platform.url.trim() !== "" &&
              !platform.url.includes("YOUR_") &&
              platform.url !== "#";

            return (
              <a
                key={platform.id}
                href={hasValidUrl ? platform.url : "#"}
                target={hasValidUrl ? "_blank" : undefined}
                rel={hasValidUrl ? "noopener noreferrer" : undefined}
                onClick={(e) => handleCardClick(e, platform)}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                className={`hire-platform-card hire-stagger-item ${!hasValidUrl ? "disabled" : ""}`}
                aria-label={`Open ${platform.name} profile`}
              >
                <div>
                  <div className="hire-card-top">
                    <div className="hire-logo-title-group">
                      <div className="hire-logo-box">
                        <LogoComponent />
                      </div>
                      <h3 className="hire-platform-name">
                        {platform.name}
                      </h3>
                    </div>

                    <div className="hire-card-arrow-box">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="hire-platform-desc mt-2">
                    {platform.description}
                  </p>
                </div>

                <div className="hire-card-bottom">
                  <span className="hire-action-text">
                    {hasValidUrl ? "VISIT PROFILE" : "PROFILE DIRECT"}
                  </span>
                  <span className="hire-action-status">
                    {hasValidUrl ? "LIVE LINK" : "OFFICIAL"}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

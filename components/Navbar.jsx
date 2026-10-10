"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import HireMeModal from "./HireMeModal";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const mobileDrawerRef = useRef(null);

  const navLinks = [
    { name: "OVERVIEW", href: "/#overview" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "SUMMARY", href: "/#summary" },
    { name: "WORKFLOW", href: "/#workflow" },
    { name: "SKILLS", href: "/#skills" },
    { name: "SHOWCASE", href: "/#showcase" },
    { name: "CONTACT", href: "/#contact" }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileDrawerRef.current) {
      gsap.fromTo(
        mobileDrawerRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = (cb) => {
    if (mobileDrawerRef.current) {
      gsap.to(mobileDrawerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setMobileMenuOpen(false);
          if (cb) cb();
        },
      });
    } else {
      setMobileMenuOpen(false);
      if (cb) cb();
    }
  };

  return (
    <>
      <header className={`site-header swiss-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container-custom navbar-inner">
          
          {/* Brand Mark */}
          <Link href="/" className="brand-mark">
            <div className="brand-logo-box">
              KI
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">
                KAMRUL
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button
              type="button"
              onClick={() => setIsHireMeOpen(true)}
              className="swiss-button-primary"
              aria-label="Open Hire Me platforms modal"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="icon-sm icon-ml" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="mobile-nav-trigger">
            <button onClick={onOpenResume} className="icon-btn-box" aria-label="Open resume preview">
              <FileText className="icon-sm" />
            </button>

            <button
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
              className="icon-btn-box"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div ref={mobileDrawerRef} className="mobile-menu-drawer">
          <div className="swiss-card mobile-menu-card">

            <div className="menu-grid">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => closeMobileMenu()}
                  className="mobile-menu-item"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-actions-stack">
              <button
                type="button"
                onClick={() => closeMobileMenu(onOpenResume)}
                className="swiss-button-secondary swiss-button-full"
              >
                <FileText className="icon-sm icon-red icon-mr" />
                <span>VIEW FULL CV DOCUMENT</span>
              </button>

              <button
                type="button"
                onClick={() => closeMobileMenu(() => setIsHireMeOpen(true))}
                className="swiss-button-primary swiss-button-full"
              >
                <span>HIRE ME</span>
                <ArrowUpRight className="icon-sm icon-ml" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hire Me Platform Modal */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
    </>
  );
}

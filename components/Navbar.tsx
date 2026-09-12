"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const navLinks = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "SUMMARY", href: "#summary" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "EDUCATION", href: "#education" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
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

  return (
    <>
      <header className={`site-header swiss-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container-custom navbar-inner">
          
          {/* Brand Mark */}
          <a href="#overview" className="brand-mark">
            <div className="brand-logo-box">
              KI
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">
                KAMRUL ISLAM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (No outer box) */}
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
              onClick={onOpenResume}
              className="swiss-button-secondary"
            >
              <FileText className="icon-sm icon-red icon-mr" />
              <span>RESUME / CV</span>
            </button>

            <a
              href="#contact"
              className="swiss-button-primary"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="icon-sm icon-ml" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="mobile-nav-trigger">
            <button onClick={onOpenResume} className="icon-btn-box">
              <FileText className="icon-sm" />
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="icon-btn-box">
              {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu-drawer"
          >
            <div className="swiss-card mobile-menu-card">
              <div className="mobile-menu-header">
                <span className="swiss-badge-red">NAVIGATION INDEX</span>
              </div>

              <div className="menu-grid">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-menu-item"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mobile-actions-stack">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="swiss-button-secondary swiss-button-full"
                >
                  <FileText className="icon-sm icon-red icon-mr" />
                  <span>VIEW FULL CV DOCUMENT</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="swiss-button-primary swiss-button-full"
                >
                  <span>CONTACT KAMRUL</span>
                  <ArrowUpRight className="icon-sm icon-ml" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

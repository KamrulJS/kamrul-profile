"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { X, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import "./heroContactForm.css";

const PROJECT_TYPE_OPTIONS = [
  "Website Development",
  "Shopify / E-commerce",
  "Custom Application",
  "Product Design",
  "Other",
];

export default function HeroContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const wrapperRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const nameInputRef = useRef(null);

  // Sync open state with visibility and GSAP reveal / exit animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isOpen && isVisible) {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      gsap.killTweensOf(wrapperRef.current);

      // Smooth Bottom-to-Top entrance animation
      gsap.fromTo(
        wrapperRef.current,
        {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 50,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: prefersReducedMotion ? 0.05 : 0.7,
          ease: "power3.out",
          onComplete: () => {
            isAnimatingRef.current = false;
            if (nameInputRef.current) {
              nameInputRef.current.focus({ preventScroll: true });
            }
          },
        }
      );

      // Subtle stagger on form elements
      if (!prefersReducedMotion) {
        const staggerElements = wrapperRef.current.querySelectorAll(".hero-form-stagger");
        if (staggerElements.length > 0) {
          gsap.fromTo(
            staggerElements,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.04,
              ease: "power2.out",
              delay: 0.1,
            }
          );
        }
      }
    } else if (!isOpen && isVisible) {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      gsap.killTweensOf(wrapperRef.current);

      // Smooth downwards exit animation
      gsap.to(wrapperRef.current, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40,
        scale: 0.98,
        duration: prefersReducedMotion ? 0.05 : 0.35,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          isAnimatingRef.current = false;
        },
      });
    }
  }, [isOpen, isVisible]);

  // Handle ESC key to dismiss form
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Client-side validations
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!trimmedSubject) {
      setErrorMessage("Please enter a subject.");
      return;
    }

    if (!trimmedMessage) {
      setErrorMessage("Please enter your message details.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const formattedSubject = formData.projectType
      ? `[${formData.projectType}] ${trimmedSubject}`
      : trimmedSubject;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: formattedSubject,
          message: trimmedMessage,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.5 },
          });
        } catch (err) {
          // confetti fallback
        }
        setFormData({
          name: "",
          email: "",
          subject: "",
          projectType: "",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. You can also email kamrulmk2016@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  if (!isVisible) return null;

  return (
    <div
      ref={wrapperRef}
      id="hero-contact-panel"
      className="hero-contact-wrapper"
      role="dialog"
      aria-modal="false"
      aria-label="Direct Contact Form"
    >
      <div className="hero-contact-card">
        {/* Header Strip */}
        <div className="hero-contact-header hero-form-stagger">
          <div className="hero-contact-header-left">
            <div className="hero-contact-badge-wrap">
              <span className="hero-contact-badge">
                DIRECT INQUIRY
              </span>
              <span className="hero-contact-status-dot" />
              <span className="hero-contact-status-text">AVAILABLE</span>
            </div>

            <h3 className="hero-contact-title">
              LET&apos;S WORK TOGETHER
            </h3>
            <p className="hero-contact-subtitle">
              Tell me about your project & requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="hero-contact-close-btn"
            title="Close Form (Esc)"
            aria-label="Close Contact Form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {isSubmitted ? (
          <div className="hero-contact-success hero-form-stagger">
            <CheckCircle2 className="w-12 h-12 text-[#E63946]" />
            <h4 className="hero-contact-success-title">INQUIRY TRANSMITTED!</h4>
            <p className="hero-contact-success-desc">
              Thank you! Your inquiry was sent to <strong>kamrulmk2016@gmail.com</strong>. I will review your requirements and respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="swiss-button-secondary mt-2 text-xs py-2 px-4"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="hero-contact-form" noValidate>
            {errorMessage && (
              <div className="hero-form-error-msg hero-form-stagger" role="alert">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="hero-form-row hero-form-stagger">
              <div className="hero-form-group">
                <label htmlFor="hero-name" className="hero-form-label">
                  <span>Name</span>
                  <span className="hero-form-required">*</span>
                </label>
                <input
                  id="hero-name"
                  ref={nameInputRef}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="hero-form-input"
                  autoComplete="name"
                />
              </div>

              <div className="hero-form-group">
                <label htmlFor="hero-email" className="hero-form-label">
                  <span>Email</span>
                  <span className="hero-form-required">*</span>
                </label>
                <input
                  id="hero-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="sarah@agency.com"
                  className="hero-form-input"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Row 2: Subject & Project Type */}
            <div className="hero-form-row hero-form-stagger">
              <div className="hero-form-group">
                <label htmlFor="hero-subject" className="hero-form-label">
                  <span>Subject</span>
                  <span className="hero-form-required">*</span>
                </label>
                <input
                  id="hero-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="e.g. Shopify Store Build"
                  className="hero-form-input"
                />
              </div>

              <div className="hero-form-group">
                <label htmlFor="hero-project-type" className="hero-form-label">
                  <span>Project Type</span>
                </label>
                <select
                  id="hero-project-type"
                  value={formData.projectType}
                  onChange={(e) => handleChange("projectType", e.target.value)}
                  className="hero-form-select"
                >
                  <option value="">Select scope...</option>
                  {PROJECT_TYPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="hero-form-group hero-form-stagger">
              <label htmlFor="hero-message" className="hero-form-label">
                <span>Message Details</span>
                <span className="hero-form-required">*</span>
              </label>
              <textarea
                id="hero-message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Describe your project scope, timeline, and goals..."
                className="hero-form-textarea"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="swiss-button-primary hero-form-submit-btn hero-form-stagger"
            >
              {isSubmitting ? (
                <span>TRANSMITTING MESSAGE...</span>
              ) : (
                <>
                  <span>SUBMIT MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

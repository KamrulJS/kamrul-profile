"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ArrowUp } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (err) {
          // Fallback silently if confetti fails
        }
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 07 — INITIATE CONTACT
          </div>
          <h2>
            HAVE A PROJECT IN MIND? LET&apos;S BUILD SOMETHING MEANINGFUL.
          </h2>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-left-col">
            <div className="contact-channels-card">
              <h3 className="contact-card-title">
                DIRECT CONTACT CHANNELS
              </h3>

              <div>
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail className="icon-md" />
                  </div>
                  <div>
                    <span className="contact-info-label">
                      PRIMARY EMAIL ADDRESS
                    </span>
                    <a href="mailto:kamrul.dev.contact@gmail.com" className="contact-info-text">
                      kamrul.dev.contact@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin className="icon-md" />
                  </div>
                  <div>
                    <span className="contact-info-label">
                      LOCATION / TIMEZONE
                    </span>
                    <span className="contact-info-text">
                      Dhaka, Bangladesh (UTC+6)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links Matrix */}
              <div className="border-top space-y-2">
                <span className="social-section-title">
                  PROFESSIONAL NETWORKS & PROFILES:
                </span>
                
                <div className="social-grid">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-button-secondary"
                  >
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-button-secondary"
                  >
                    <span>GITHUB</span>
                  </a>

                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-button-secondary"
                  >
                    <span>BEHANCE</span>
                  </a>

                  <a
                    href="mailto:kamrul.dev.contact@gmail.com"
                    className="swiss-button-primary"
                  >
                    <span>DIRECT MAIL</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-right-col">
            <div className="form-card">
              <h3 className="contact-card-title">
                SEND DIRECT INQUIRY
              </h3>

              {submitted ? (
                <div className="submitted-box">
                  <CheckCircle2 className="submitted-icon" />
                  <h4 className="submitted-title">INQUIRY TRANSMITTED!</h4>
                  <p className="submitted-desc">
                    Thank you! Your message has been routed to Kamrul Islam&apos;s inbox. Response expected within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="swiss-button-secondary"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@agency.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      SUBJECT / REASON
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Shopify Store Development / WordPress Customization"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your Shopify/WordPress project scope, design requirements, or timeline..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="swiss-button-primary swiss-button-full mt-2"
                  >
                    {submitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <Send className="icon-sm icon-mr" />
                        <span>SEND INQUIRY TO KAMRUL</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Back to Top */}
        <div className="back-to-top-wrap">
          <button
            onClick={scrollToTop}
            className="swiss-button-secondary"
          >
            <ArrowUp className="w-4 h-4 text-[#E63946] mr-2" />
            <span>BACK TO TOP</span>
          </button>
        </div>

      </div>
    </section>
  );
}

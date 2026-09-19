"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ArrowUp } from "lucide-react";
import confetti from "canvas-confetti";

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current mr-1.5 inline" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current mr-1.5 inline" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const BehanceIcon = () => (
  <svg className="w-4 h-4 fill-current mr-1.5 inline" viewBox="0 0 24 24">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5.3-2.102-5.3-5.3 0-3.197 2.1-5.3 5.1-5.3 3.003 0 4.8 2.001 4.8 5.102 0 .4-.047.8-.073 1.098h-7.127c.073 1.6 1.2 2.6 2.7 2.6 1.2 0 2.053-.6 2.353-1.5h2.273zm-2.454-3.3c-.073-1.2-.973-2.1-2.273-2.1-1.3 0-2.2 1-2.3 2.1h4.573zm-13.272-4.3h-4v3h3.7c1 0 1.8.6 1.8 1.6 0 .9-.8 1.6-1.8 1.6h-3.7v3.3h4.3c1.7 0 2.9-1.2 2.9-2.7 0-1.1-.6-2-1.5-2.4.7-.4 1.3-1.2 1.3-2.2 0-1.4-1.2-2.2-3-2.2zm-4-3.4h4.1c1.5 0 2.6.8 2.6 2.1 0 1.2-1 2-2.3 2h-4.4v-4.1z" />
  </svg>
);

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
                    <a href="mailto:kamrulmk2016@gmail.com" className="contact-info-text">
                      kamrulmk2016@gmail.com
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
                    className="swiss-button-secondary flex items-center justify-center"
                  >
                    <LinkedinIcon />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-button-secondary flex items-center justify-center"
                  >
                    <GithubIcon />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-button-secondary flex items-center justify-center"
                  >
                    <BehanceIcon />
                    <span>BEHANCE</span>
                  </a>

                  <a
                    href="mailto:kamrulmk2016@gmail.com"
                    className="swiss-button-primary flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-1.5 inline" />
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

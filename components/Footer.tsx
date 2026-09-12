"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-custom footer-container">
        
        {/* Left Info */}
        <div className="footer-brand">
          <div className="footer-logo-box">
            KI
          </div>
          <div>
            <span className="footer-name">KAMRUL ISLAM</span>
            <span className="footer-sub">Web, Shopify & WordPress Developer</span>
          </div>
        </div>

        {/* Center Legal / Copyright */}
        <div className="footer-copy">
          <p>© {currentYear} KAMRUL ISLAM. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Right Nav Links */}
        <div className="footer-nav-links">
          <a href="#overview">TOP</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

      </div>
    </footer>
  );
}

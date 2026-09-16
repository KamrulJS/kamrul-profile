"use client";

import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = {
    degree: "BACHELOR OF SCIENCE IN TEXTILE ENGINEERING",
    institution: "University of Dhaka / NITER",
    year: "2018 — 2022",
    cgpa: "CGPA 3.25 / 4.00"
  };

  const languages = [
    { name: "BANGLA", level: "Native / Mother Tongue" },
    { name: "ENGLISH", level: "Professional Working Proficiency" }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 04 — ACADEMIC BACKGROUND
          </div>
          <h2>
            EDUCATION & LANGUAGES
          </h2>
        </div>

        <div className="education-grid">
          
          {/* Degree Card */}
          <div className="degree-col">
            <div className="degree-card">
              <div>
                <div className="degree-card-header">
                  <div className="degree-icon-title">
                    <div className="degree-icon-box">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="degree-type-label">
                      B.SC DEGREE
                    </span>
                  </div>
                  <span className="swiss-badge-red">
                    {education.year}
                  </span>
                </div>

                <h3 className="degree-title">
                  {education.degree}
                </h3>
                <p className="degree-institution">
                  {education.institution}
                </p>

                <div className="swiss-badge degree-result-badge">
                  ACADEMIC RESULT: <span className="result-highlight">{education.cgpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="languages-col">
            <div className="languages-card">
              <div>
                <div className="languages-header">
                  <h3>
                    SPOKEN LANGUAGES
                  </h3>
                </div>

                <div className="languages-list">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="language-box">
                      <span className="language-name">
                        {lang.name}
                      </span>
                      <span className="language-level">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="languages-footer-note">
                Communication: Ready for global international client projects.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

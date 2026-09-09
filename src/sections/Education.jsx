import React from 'react';
import './Education.css';
import { education, languages } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const [sectionRef, isRevealed] = useScrollReveal();

  return (
    <section id="education" className="education-section section-padding" ref={sectionRef}>
      <div className={`container reveal ${isRevealed ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-content">
          <div className="education-card">
            <div className="education-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="education-details">
              <h3 className="education-degree">{education[0].degree}</h3>
              <p className="education-institution">{education[0].institution}</p>
              <p className="education-faculty">{education[0].faculty}</p>
              <div className="education-meta">
                <span className="education-location">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {education[0].location}
                </span>
                <span className="education-status">{education[0].status}</span>
                <span className="education-year">{education[0].expectedGraduation}</span>
              </div>
            </div>
          </div>

          <div className="languages-container">
            <h4 className="languages-title">Languages</h4>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-card">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

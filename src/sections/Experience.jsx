import React from 'react';
import './Experience.css';
import { experiences } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className={`section-header ${isRevealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Development Experience</h2>
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => {
            return (
              <div 
                key={index} 
                className={`timeline-item ${isRevealed ? 'revealed' : ''}`}
              >
                <div className="timeline-content">
                  <div className="exp-card">
                    <div className="exp-header">
                      <div className="exp-title-group">
                        <h3 className="exp-title">{exp.title}</h3>
                        {exp.type && <span className="exp-type-badge">{exp.type}</span>}
                      </div>
                      <span className="exp-duration">{exp.startDate} — {exp.endDate}</span>
                    </div>
                    
                    <h4 className="exp-organization">{exp.organization}</h4>
                    
                    {exp.description && <p className="exp-description">{exp.description}</p>}
                    
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="exp-highlights">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

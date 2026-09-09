import React from 'react';
import './WhyMe.css';
import { whyWorkWithMe } from '../data/personal';
import { useScrollReveal } from '../hooks/useScrollReveal';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'puzzle':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322-.059.648-.029.975.114 1.281 1.188 2.222 2.453 2.148l.128-.006c.015.545-.034 1.094-.15 1.631-.564 2.614-2.88 4.417-5.553 4.654-.424.038-.853.031-1.277-.024-1.123-.146-2.193-1.042-2.128-2.316l.006-.113c.045-1.144-.81-2.115-1.93-2.193a2.035 2.035 0 0 0-2.142 1.341c-.48 1.272-1.895 1.947-3.197 1.545C2.868 14.618 1.258 11.666 1.83 8.78c.319-1.603 1.38-2.923 2.856-3.626 1.145-.547 2.502-.2 3.109.896l.061.121c.567 1.218 2.08 1.688 3.327 1.037.953-.497 1.498-1.572 1.378-2.65l-.014-.131c-.102-1.096.536-2.14 1.558-2.527 2.378-.902 5.097.234 6.136 2.535.158.35.281.714.368 1.085.048.204.09.41.127.618v.007z"/></svg>
      );
    case 'server':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      );
    case 'layers':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
      );
    case 'growth':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      );
  }
};

const WhyMe = () => {
  const [sectionRef, isRevealed] = useScrollReveal();

  return (
    <section id="why-me" className="whyme-section section-padding" ref={sectionRef}>
      <div className={`container reveal ${isRevealed ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">Why Work With Me</span>
          <h2 className="section-title">What I Bring to the Table</h2>
        </div>

        <div className="whyme-grid">
          {whyWorkWithMe.map((item, index) => (
            <div 
              key={index} 
              className="whyme-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="whyme-icon-wrapper">
                {getIcon(item.icon)}
              </div>
              <h3 className="whyme-card-title">{item.title}</h3>
              <p className="whyme-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;

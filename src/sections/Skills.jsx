import React from 'react';
import './Skills.css';
import { skillCategories } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className={`section-header ${isRevealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            // Visually emphasize Backend category based on typical portfolio data structure
            const isBackend = category.category.toLowerCase().includes('backend');
            const isDatabase = category.category.toLowerCase().includes('database');
            
            return (
              <div 
                key={index} 
                className={`skill-category-card ${isBackend ? 'backend-card' : ''} ${isDatabase ? 'database-card' : ''} ${isRevealed ? 'revealed' : ''}`}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-name">{category.category}</h3>
                </div>
                <div className="tech-badges">
                  {category.technologies.map((tech, skillIdx) => (
                    <span key={skillIdx} className="tech-badge">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import './About.css';
import { highlights } from '../data/personal';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [revealRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="about-section">
      <div className="container" ref={revealRef}>
        <div className={`section-header ${isVisible ? 'reveal' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Getting to Know Me</h2>
        </div>

        <div className="about-content">
          <div className={`about-text-container ${isVisible ? 'reveal' : ''}`}>
            <div className="text-accent-line"></div>
            <div className="about-text">
              <p>
                I'm a Computer Science student at Cairo University, currently building practical development experience through the Digital Egypt Pioneers Initiative (DEPI) Full Stack .NET track.
              </p>
              <p>
                My primary focus is backend development — I work with C#, ASP.NET Core, Entity Framework Core, REST APIs, and SQL Server to build the server-side logic and data layers that power modern web applications.
              </p>
              <p>
                I also bring frontend experience from building React-based interfaces, which gives me a practical understanding of how backend systems connect to create complete, user-facing products.
              </p>
              <p>
                Whether it's designing a clean API, structuring a database, or wiring up application logic, I focus on writing reliable, maintainable code that solves real problems.
              </p>
              <p>
                I'm looking to work with startups, small businesses, and development teams who need structured, data-driven web applications.
              </p>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`highlight-card ${isVisible ? 'reveal' : ''}`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <span className="highlight-label">{highlight.label}</span>
                <span className="highlight-value">{highlight.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

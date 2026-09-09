import React from 'react';
import './Services.css';
import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Icon components mapped from service.icon
const ServerIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 10L16 6"></path>
    <path d="M8 14L16 18"></path>
    <circle cx="5" cy="12" r="3"></circle>
    <circle cx="19" cy="5" r="3"></circle>
    <circle cx="19" cy="19" r="3"></circle>
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 12 12 17 22 12"></polyline>
    <polyline points="2 17 12 22 22 17"></polyline>
  </svg>
);

const IconResolver = ({ iconName }) => {
  switch (iconName) {
    case 'server':
      return <ServerIcon />;
    case 'api':
      return <ApiIcon />;
    case 'database':
      return <DatabaseIcon />;
    case 'layers':
      return <LayersIcon />;
    default:
      return <LayersIcon />;
  }
};

const Services = () => {
  const [revealRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" className="services-section">
      <div className="container" ref={revealRef}>
        <div className={`section-header ${isVisible ? 'reveal' : ''}`}>
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            I use .NET technologies, REST APIs, and SQL databases to build reliable backend systems and complete web applications.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${isVisible ? 'reveal' : ''}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="card-accent-border"></div>
              <div className="service-icon-container">
                <IconResolver iconName={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-client-value">
                <span className="value-indicator">→</span>
                <span>{service.clientValue}</span>
              </div>
              
              <div className="service-tech-badges">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

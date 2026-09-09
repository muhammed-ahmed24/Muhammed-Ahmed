import React, { useState } from 'react';
import './ProjectCard.css';

// SVG Icons
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ChevronIcon = ({ expanded }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  if (project.status === 'coming-soon') {
    return (
      <div className="project-card coming-soon-card">
        <div className="card-content">
          <div className="card-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="coming-soon-badge">Coming Soon</span>
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="tech-badges">
            {project.technologies?.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
          <div className="in-development-indicator">
            <span className="pulse-dot"></span>
            In Development
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    subtitle,
    year,
    role,
    summary,
    context,
    approach,
    technologies,
    contributions,
    outcome,
    repo,
    image
  } = project;

  return (
    <div className="project-card completed-card">
      <div className="project-image-area">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <FolderIcon />
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        
        <div className="project-meta">
          {year && <span className="meta-badge">{year}</span>}
          {role && <span className="meta-badge">{role}</span>}
        </div>

        <p className="project-summary">{summary}</p>

        <div className="tech-badges">
          {technologies?.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <ul className="contributions-list">
          {contributions?.slice(0, 4).map((contrib, i) => (
            <li key={i}>
              <ArrowRightIcon />
              <span>{contrib}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GitHubIcon />
              View Repository
            </a>
          )}
          <button className="btn-details" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Hide Details' : 'View Details'}
            <ChevronIcon expanded={expanded} />
          </button>
        </div>

        <div className={`expanded-section ${expanded ? 'is-expanded' : ''}`}>
          <div className="expanded-content">
            {context && (
              <div className="expanded-block">
                <h4>Context & Challenge</h4>
                <p>{context}</p>
              </div>
            )}
            
            {approach && (
              <div className="expanded-block">
                <h4>Approach</h4>
                <p>{approach}</p>
              </div>
            )}
            
            {contributions && contributions.length > 0 && (
              <div className="expanded-block">
                <h4>Full Contributions</h4>
                <ul className="full-contributions">
                  {contributions.map((contrib, i) => (
                    <li key={i}>{contrib}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {outcome && (
              <div className="expanded-block">
                <h4>Outcome</h4>
                <p>{outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

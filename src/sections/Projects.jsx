import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  const completedProjects = projects.filter(p => p.status === 'completed');
  const comingSoonProjects = projects.filter(p => p.status === 'coming-soon');

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className={`projects-container ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real projects I have built — showcasing practical development skills and collaborative experience.
          </p>
        </div>

        <div className="projects-grid featured-projects">
          {completedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-wrapper"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {comingSoonProjects.length > 0 && (
          <div className="coming-soon-container">
            <h3 className="coming-soon-header">In Development</h3>
            <div className="projects-grid coming-soon-projects">
              {comingSoonProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-wrapper"
                  style={{ transitionDelay: `${(completedProjects.length + index) * 150}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

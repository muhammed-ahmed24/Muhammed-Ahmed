import React from 'react';
import { personalInfo } from '../data/personal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

const Hero = () => {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section id="home" className="hero-section" ref={revealRef}>
      {/* Decorative background elements */}
      <div className="hero-bg-decoration">
        <div className="glow-circle top-left"></div>
        <div className="glow-circle bottom-right"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="section-label eyebrow">Hi, I'm Muhammed Ahmed</span>
          <h1 className="hero-title">
            Building Reliable Backend Systems <br />
            <span className="gradient-text">.NET & Modern Web Technologies</span>
          </h1>
          <p className="hero-description">
            Computer Science student and Backend-Focused Full Stack .NET Developer. I use C#, ASP.NET Core, Entity Framework Core, REST APIs, and SQL Server to build structured, data-driven web applications — with the frontend skills to bring them to life.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Work Together
            </a>
            {personalInfo?.resumeUrl && (
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline download-cv">
                Download CV
              </a>
            )}
          </div>

          <div className="hero-socials">
            <a href={personalInfo?.github || "https://github.com"} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={personalInfo?.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={`mailto:${personalInfo?.email || "email@example.com"}`} aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <div className="dot close"></div>
              <div className="dot minimize"></div>
              <div className="dot maximize"></div>
            </div>
            <div className="code-card-body">
              <pre>
                <code>
<span className="code-comment">// api/controllers</span>
<br />
<span className="code-keyword">[HttpGet]</span>
<br />
<span className="code-keyword">public async</span> <span className="code-type">Task</span>&lt;<span className="code-type">IActionResult</span>&gt;
<br />
<span className="code-function">GetProducts</span>()
<br />
&#123;
<br />
&nbsp;&nbsp;<span className="code-keyword">var</span> products = <span className="code-keyword">await</span>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;_service.<span className="code-function">GetAllAsync</span>();
<br />
&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-function">Ok</span>(products);
<br />
&#125;
                </code>
              </pre>
            </div>
          </div>
          
          {/* Floating dots decoration */}
          <div className="floating-dots">
            <div className="decor-dot dot-1"></div>
            <div className="decor-dot dot-2"></div>
            <div className="decor-dot dot-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

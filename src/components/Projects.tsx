import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../utils/constants';
import { ProjectCard } from './ProjectCard';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        {/* Section Header */}
        <div className="section-header fade-in-up">
          <span className="section-tag">Featured Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Explore my latest projects and experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more">
          <a
            href="https://github.com/Lengereh777"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            View All Projects
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Projects };
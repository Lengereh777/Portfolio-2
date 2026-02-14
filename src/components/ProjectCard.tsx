import React, { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const card = cardRef.current;
    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setTilt({
        x: deltaX * 10,
        y: deltaY * 10,
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card ${isVisible ? 'fade-in-up' : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="project-image"
        style={{
          transform: 'translateZ(100px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="project-image-glow"></div>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <div className="project-overlay">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-overlay-link"
            >
              <Github size={16} />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-overlay-link"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div
        className="project-content"
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">
          {project.description}
        </p>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };

import React, { useEffect, useRef, useState } from 'react';
import { Code, Server } from 'lucide-react';
import { SKILLS } from '../utils/constants';
import '../styles/About.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'react':
      case 'javascript':
      case 'typescript':
      case 'nodejs':
      case 'python':
      case 'tailwind':
      case 'firebase':
      case 'git':
      case 'nextjs':
      case 'mongodb':
      case 'postgresql':
      case 'docker':
        return <Code size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-content">
        {/* Section Header */}
        <div className={`section-header fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0s' }}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Passionate about building exceptional digital experiences
          </p>
        </div>

        <div className="about-grid">
          {/* About Image */}
          <div className={`about-image fade-in-left ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="about-avatar">
              <img
                src="./assets/images/amanuel.jpg"
                alt="Amanuel Kebede - Full Stack Developer"
                loading="lazy"
              />
              <div className="avatar-glow"></div>
              <div className="avatar-ring"></div>
            </div>
            <div className="about-decor"></div>
            <div className="about-decor"></div>
            <div className="about-decor"></div>
          </div>

          {/* About Text */}
          <div className={`about-text fade-in-right ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="about-intro">
              I'm a full-stack developer with a passion for creating scalable and user-friendly web applications.
              I specialize in React, Node.js, and modern JavaScript frameworks, with a strong focus on clean code and
              user experience.
            </div>

            <div className="about-description">
              <p>
                With extensive experience in building complex applications like Amazon Clone, Netflix Clone, and Evangadi
                Forum, I've developed a deep understanding of the entire development lifecycle from concept to deployment.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only
                meet business requirements but also exceed user expectations. I thrive in collaborative environments and
                enjoy turning challenges into opportunities.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Section */}
            <div className="about-skills">
              <h3 className="about-skills-title">
                <Code size={20} />
                Technical Skills
              </h3>
              <div className="skills-grid">
                {SKILLS.map((skill, index) => (
                  <div
                    key={skill.id}
                    className={`skill-item ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="skill-icon">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
              <h3 className="about-cta-title">Ready to Work Together?</h3>
              <p className="about-cta-text">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can create
                something amazing together.
              </p>
              <button className="about-cta-button" onClick={handleContactMe}>
                Get in Touch
                <Server size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
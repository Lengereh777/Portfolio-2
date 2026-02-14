import React, { useEffect, useRef, useState } from 'react';
import { Github, Mail, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / 50;
      const deltaY = (e.clientY - centerY) / 50;

      const avatar = hero.querySelector('.hero-avatar') as HTMLElement;
      const floatingElements = hero.querySelectorAll('.floating-element') as NodeListOf<HTMLElement>;

      if (avatar) {
        avatar.style.transform = `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px) rotateY(${deltaX * 0.5}deg) rotateX(${-deltaY * 0.5}deg)`;
      }

      floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translate(${deltaX * speed}px, ${deltaY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Animated Background Grid */}
      <div className="hero-background-grid">
        <div className="grid-lines"></div>
        <div className="grid-dots"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="hero-content">
        {/* Hero Text */}
        <div className="hero-text fade-in-up">
          <div className="hero-greeting">
            Hi, I'm
          </div>
          <h1 className="hero-title">
            Amanuel Kebede
            <span className="hero-highlight"> | Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            Building scalable web applications with modern technologies. I transform ideas into
            digital experiences that users love.
          </p>

          <div className="hero-buttons">
            <MagneticButton
              className="hero-btn hero-btn-primary"
              onClick={handleScrollToProjects}
            >
              View My Work
              <ArrowRight size={20} />
            </MagneticButton>
            <MagneticButton
              className="hero-btn hero-btn-secondary"
              onClick={handleContactMe}
            >
              Contact Me
              <Mail size={20} />
            </MagneticButton>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Lengereh777"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image fade-in-up">
          <div className="hero-avatar-container">
            <div className="hero-avatar perspective-1000 transform-3d floating-element">
              <img
                src="/profile.jpg"
                alt="Amanuel Kebede - Full Stack Developer"
                loading="eager"
              />
              <div className="avatar-glow"></div>
              <div className="avatar-ring avatar-ring-1"></div>
              <div className="avatar-ring avatar-ring-2"></div>
              <div className="avatar-ring avatar-ring-3"></div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="floating-particles">
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '0s' }}>
              <span>React</span>
            </div>
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '0.5s' }}>
              <span>TypeScript</span>
            </div>
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '1s' }}>
              <span>Node.js</span>
            </div>
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '1.5s' }}>
              <span>UI/UX</span>
            </div>
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '2s' }}>
              <span>Next.js</span>
            </div>
            <div className="floating-particle floating-element" style={{ ['--delay' as any]: '2.5s' }}>
              <span>Tailwind</span>
            </div>
          </div>

          {/* Mouse follow effect */}
          <div
            className="hero-follow-effect"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`
            }}
          ></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator bounce">
        <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
      </div>
    </section>
  );
};

export { Hero };

import React, { useState } from 'react';
import { Github, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    setNewsletterStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setNewsletterStatus('success');
      setEmail('');

      // Reset status after 5 seconds
      setTimeout(() => {
        setNewsletterStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setNewsletterStatus('error');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <div className="gradient-bg"></div>
              </div>
              <div className="footer-logo-text">
                AMANUEL<span style={{ color: '#fbbf24' }}>.</span>
              </div>
            </div>
            <p className="footer-description">
              Building exceptional digital experiences that drive innovation and growth.
              Specializing in modern web technologies and user-centric design.
            </p>
            <div className="footer-social">
              <a
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#home"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  <ArrowRight size={16} />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  <ArrowRight size={16} />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <ArrowRight size={16} />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  <ArrowRight size={16} />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-section">
            <h4>Featured Projects</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/Lengereh777/Amazon-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ExternalLink size={16} />
                  Amazon Clone
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lengereh777/Netflix-Clone-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ExternalLink size={16} />
                  Netflix Clone
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lengereh777/Evangadi-Forum-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ExternalLink size={16} />
                  Evangadi Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="footer-description" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Subscribe to get updates on my latest projects and tech insights.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="newsletter-input"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                required
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <div className="newsletter-message success">
                <span>✅</span>
                Thank you for subscribing!
              </div>
            )}
            {newsletterStatus === 'error' && (
              <div className="newsletter-message error">
                <span>❌</span>
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 Amanuel Kebede. All rights reserved.
          </div>
           <div className="footer-credits">
            <a 
              href="https://github.com/Lengereh777" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
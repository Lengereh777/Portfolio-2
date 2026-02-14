import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import '../styles/Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const isActive = (id: string) => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const currentIndex = sections.indexOf(id);

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const sectionsTop = [
      homeSection?.offsetTop || 0,
      aboutSection?.offsetTop || 0,
      projectsSection?.offsetTop || 0,
      contactSection?.offsetTop || 0
    ];

    const scrollPosition = window.scrollY + 150;

    if (currentIndex === sections.length - 1) {
      return scrollPosition >= sectionsTop[currentIndex];
    }

    return scrollPosition >= sectionsTop[currentIndex] && scrollPosition < sectionsTop[currentIndex + 1];
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">
            <div className="gradient-bg"></div>
          </div>
          <span>AMANUEL<span style={{ color: 'var(--primary-color)' }}>.</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={`nav-link ${isActive('home') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${isActive('about') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${isActive('projects') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${isActive('contact') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Language Switcher */}
          <button
            className="language-switcher"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            aria-label="Switch language"
          >
            <Globe size={20} color={darkMode ? '#fbbf24' : '#6366f1'} />
            <span className="language-text">{language.toUpperCase()}</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun size={20} color="#fbbf24" />
            ) : (
              <Moon size={20} color="#6366f1" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#home"
              className={`mobile-nav-link ${isActive('home') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`mobile-nav-link ${isActive('about') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`mobile-nav-link ${isActive('projects') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`mobile-nav-link ${isActive('contact') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
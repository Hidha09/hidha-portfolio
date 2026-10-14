import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-charcoal-200/80 shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 transition-transform duration-200"
          >
            <span className="w-9 h-9 rounded-xl bg-charcoal-900 text-surface flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-lavender-600 transition-colors">
              H
            </span>
            <div className="flex flex-col">
              <span className="text-base font-bold text-charcoal-900 tracking-tight group-hover:text-lavender-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-charcoal-500 font-medium hidden sm:inline-block">
                AI / ML Graduate
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/80 p-1.5 rounded-full border border-charcoal-200/70 shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-700 hover:text-lavender-700 bg-surface border border-charcoal-200 hover:border-lavender-300 px-3.5 py-2 rounded-xl transition-all duration-200 shadow-subtle hover:shadow-sm"
              title="Download Hidha's Curriculum Vitae"
            >
              <FileDown className="w-3.5 h-3.5 text-lavender-600" />
              <span>CV</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-charcoal-900 hover:bg-lavender-600 px-4 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1 text-xs font-semibold text-charcoal-700 bg-surface border border-charcoal-200 px-2.5 py-1.5 rounded-lg"
              aria-label="Download CV"
            >
              <FileDown className="w-3.5 h-3.5 text-lavender-600" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-charcoal-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-charcoal-200/80 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-charcoal-900 hover:bg-lavender-600 transition-colors"
              >
                Contact Hidha
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

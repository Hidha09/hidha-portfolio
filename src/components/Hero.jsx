import React from 'react';
import { ArrowDown, FileDown, Sparkles, MapPin, CheckCircle2, ChevronRight, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-lavender-100/40 via-lavender-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accentBlue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-charcoal-200/80 shadow-subtle mb-8 hover:border-lavender-300 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender-600"></span>
            </span>
            <span className="text-xs font-semibold text-charcoal-700 tracking-wide">
              {personalInfo.locationStatus}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 tracking-tightest leading-[1.12] mb-6">
            Hi, I'm <span className="text-charcoal-900">{personalInfo.name}</span>.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 via-charcoal-800 to-accentBlue-600">
              Aspiring AI Engineer
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-lg sm:text-xl text-charcoal-600 font-normal leading-relaxed mb-8 max-w-2xl">
            {personalInfo.tagline}
          </p>

          <p className="text-sm sm:text-base text-charcoal-500 font-normal leading-relaxed mb-10 max-w-2xl">
            Graduated with an <strong className="font-semibold text-charcoal-800">Integrated M.Sc. in Computer Science</strong> (specialising in Artificial Intelligence & Machine Learning, 2026). Seeking entry-level roles across <span className="text-charcoal-800 font-medium">AI/ML Engineering, Python Development, Data Analytics,</span> and <span className="text-charcoal-800 font-medium">Software Engineering</span> in the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-900 text-white font-semibold text-sm hover:bg-lavender-600 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface text-charcoal-800 font-semibold text-sm border border-charcoal-200 hover:border-lavender-300 hover:text-lavender-700 transition-all duration-200 shadow-subtle hover:shadow hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-lavender-600" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <span>Get in touch</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Highlights / Quick Credibility Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-charcoal-200/70">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/60 border border-charcoal-200/50">
              <div className="p-1.5 rounded-lg bg-lavender-50 text-lavender-600 mt-0.5">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-charcoal-900">Integrated M.Sc.</div>
                <div className="text-[11px] text-charcoal-500 font-medium">CS with AI/ML (2026)</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/60 border border-charcoal-200/50">
              <div className="p-1.5 rounded-lg bg-lavender-50 text-lavender-600 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-charcoal-900">United Arab Emirates</div>
                <div className="text-[11px] text-charcoal-500 font-medium">Immediate Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

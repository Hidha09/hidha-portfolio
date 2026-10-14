import React from 'react';
import { Brain, Eye, Database, Code, Target, Sparkles, Compass } from 'lucide-react';
import { aboutData, personalInfo, careerGoalData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Brain: Brain,
    Eye: Eye,
    Database: Database,
    Code: Code,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-surface/50 border-t border-b border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender-100/70 text-lavender-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Bridging foundational computer science with applied machine intelligence.
          </h2>
        </div>

        {/* Narrative & Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-charcoal-600 text-base leading-relaxed">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            {/* Career Goals Card */}
            <div className="mt-8 p-6 rounded-2xl bg-surface border border-charcoal-200/90 shadow-card">
              <div className="flex items-center gap-2 mb-3 text-charcoal-900 font-bold text-sm">
                <Target className="w-4 h-4 text-lavender-600" />
                <span>Target Opportunities in the UAE</span>
              </div>
              <p className="text-xs text-charcoal-500 mb-4">
                Open to full-time junior and associate positions across the United Arab Emirates:
              </p>
              <div className="flex flex-wrap gap-2">
                {careerGoalData.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg bg-surfaceMuted text-charcoal-800 text-xs font-medium border border-charcoal-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutData.pillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Brain;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-surface border border-charcoal-200/80 shadow-subtle hover:shadow-card hover:border-lavender-300 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-50 border border-lavender-100 flex items-center justify-center text-lavender-600 mb-3.5 group-hover:bg-lavender-600 group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal-900 mb-1.5 group-hover:text-lavender-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

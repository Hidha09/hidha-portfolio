import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender-100/70 text-lavender-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Integrated Master of Science in Computer Science.
          </h2>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl p-8 sm:p-10 rounded-3xl bg-surface border border-charcoal-200/90 shadow-card">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-charcoal-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-50 border border-lavender-200/70 text-lavender-700 text-xs font-bold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Specialisation: {educationData.specialisation}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                {educationData.degree}
              </h3>
              <p className="text-sm font-semibold text-charcoal-600 mt-1">
                {educationData.duration}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-charcoal-900 text-white text-xs font-semibold self-start shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-lavender-300" />
              <span>{educationData.year}</span>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-lavender-600" />
              <span>Core Subject Areas & Theoretical Foundations</span>
            </h4>

            <p className="text-xs sm:text-sm text-charcoal-600 mb-6 leading-relaxed">
              {educationData.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationData.coreFocusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surfaceMuted/60 border border-charcoal-200/60 flex items-center gap-2.5 text-xs text-charcoal-800"
                >
                  <CheckCircle className="w-4 h-4 text-lavender-600 shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

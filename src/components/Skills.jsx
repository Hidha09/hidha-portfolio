import React, { useState } from 'react';
import { Cpu, Terminal, CheckCircle2, Layers, Filter } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.categories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender-100/70 text-lavender-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Tools, frameworks, and scientific methodologies.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surfaceMuted border border-charcoal-200/80 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-surface text-charcoal-900 shadow-sm border border-charcoal-200'
                    : 'text-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle hover:shadow-card hover:border-lavender-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-charcoal-100">
                  <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lavender-600"></span>
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-medium text-charcoal-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-all duration-150 ${
                        skill.highlight
                          ? 'bg-lavender-50/40 border-lavender-200/70 hover:border-lavender-400'
                          : 'bg-surfaceMuted/50 border-charcoal-200/60 hover:border-charcoal-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-charcoal-900">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-semibold text-lavender-700 bg-lavender-100/80 px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-charcoal-500 line-clamp-1">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-charcoal-100/60 flex items-center gap-2 text-[11px] text-charcoal-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-lavender-600" />
                <span>Applied in hands-on academic & pipeline projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Core Callout */}
        <div className="mt-8 p-4 rounded-xl bg-lavender-50/60 border border-lavender-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-charcoal-700">
          <div className="flex items-center gap-2 font-medium">
            <span className="font-bold text-lavender-900">Primary Technical Focus:</span>
            <span>Python, Scikit-Learn, Keras/TensorFlow, MediaPipe, OpenCV, SQL</span>
          </div>
          <span className="text-charcoal-500 text-[11px]">
            Ready to integrate into established ML and software stacks
          </span>
        </div>
      </div>
    </section>
  );
}

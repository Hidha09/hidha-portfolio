import React, { useState } from 'react';
import { Sparkles, Layers, ArrowUpRight, Activity, ShieldCheck, Hand, Eye, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'skin-cancer-detection':
        return <Eye className="w-5 h-5 text-lavender-600" />;
      case 'bank-fraud-detection':
        return <ShieldCheck className="w-5 h-5 text-accentBlue-600" />;
      case 'hand-gesture-recognition':
        return <Hand className="w-5 h-5 text-lavender-600" />;
      default:
        return <Layers className="w-5 h-5 text-lavender-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-surface/40 border-t border-b border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender-100/70 text-lavender-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Technical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-4">
            Applied Machine Learning, Computer Vision & Systems.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-500">
            Selected academic and laboratory projects demonstrating end-to-end data pipelines, custom neural architectures, and robust interaction design.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="p-7 sm:p-9 rounded-3xl bg-surface border border-charcoal-200/90 shadow-card hover:shadow-card-hover hover:border-lavender-300 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                      <div className="p-2 rounded-xl bg-lavender-50 border border-lavender-100">
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="text-xs font-bold text-lavender-700 bg-lavender-50 px-2.5 py-1 rounded-md border border-lavender-100">
                        {project.badge}
                      </span>
                      <span className="text-xs font-medium text-charcoal-400">
                        {project.date}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 tracking-tight mb-1 group-hover:text-lavender-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-charcoal-500 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Key Highlights Bullets */}
                    <div className="space-y-2 mb-6">
                      {project.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Deep Dive */}
                  <div className="pt-4 border-t border-charcoal-100 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-lavender-600 transition-all duration-200 shadow-sm"
                    >
                      <span>Explore Architecture & Pipeline</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-charcoal-600 hover:text-charcoal-900 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Full Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Architectural Highlights & Stack */}
                <div className="lg:col-span-5 bg-surfaceMuted/60 p-6 rounded-2xl border border-charcoal-200/70 flex flex-col justify-between space-y-6">
                  {/* Metric callout if present (e.g. 97.39% for fraud detection) */}
                  {project.metric ? (
                    <div className="p-4 rounded-xl bg-surface border border-accentBlue-200/80 shadow-subtle">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider">
                          Evaluation Metric
                        </span>
                        <span className="text-xs font-semibold text-accentBlue-600 bg-accentBlue-50 px-2 py-0.5 rounded">
                          Validated
                        </span>
                      </div>
                      <div className="text-3xl font-black text-charcoal-900 tracking-tight">
                        {project.metric.value}
                      </div>
                      <div className="text-xs font-bold text-charcoal-800 mt-0.5">
                        {project.metric.label}
                      </div>
                      <p className="text-[11px] text-charcoal-500 mt-1 leading-snug">
                        {project.metric.detail}
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-surface border border-charcoal-200/60 shadow-subtle">
                      <div className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider mb-1.5">
                        Core Mechanism
                      </div>
                      <div className="text-sm font-bold text-charcoal-900 mb-1">
                        {project.id === 'skin-cancer-detection'
                          ? 'VGG16 Transfer Learning'
                          : 'Hold-to-Confirm & Smoothing'}
                      </div>
                      <p className="text-xs text-charcoal-600 leading-relaxed">
                        {project.id === 'skin-cancer-detection'
                          ? 'Pretrained weights on ImageNet fine-tuned with dense regularized classification heads for multi-class skin lesion diagnosis on HAM10000.'
                          : 'Temporal smoothing window rejects transient jitter; actions are confirmed only after continuous landmark threshold duration.'}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Box */}
                  <div>
                    <div className="text-[11px] font-bold text-charcoal-400 uppercase tracking-wider mb-2.5">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-surface text-charcoal-800 text-xs font-medium border border-charcoal-200/80 shadow-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Methodology Steps Sneak Peek */}
                  <div className="space-y-1.5 text-xs text-charcoal-500">
                    <div className="text-[11px] font-bold text-charcoal-400 uppercase tracking-wider mb-1">
                      Pipeline Stages
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      {project.methodology.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2 rounded-lg bg-surface border border-charcoal-200/50 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 shrink-0" />
                          <span className="font-semibold text-charcoal-800 truncate">
                            {m.step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

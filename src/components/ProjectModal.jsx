import React, { useEffect } from 'react';
import { X, CheckCircle, Cpu, GitBranch, Database, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-surface rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-charcoal-100 flex items-start justify-between bg-surface sticky top-0 z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lavender-100 text-lavender-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
              {project.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-charcoal-600 text-sm leading-relaxed">
          {/* Key Metric if present */}
          {project.metric && (
            <div className="p-4 rounded-xl bg-lavender-50 border border-lavender-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-lavender-600 text-white flex items-center justify-center font-black text-lg">
                %
              </div>
              <div>
                <div className="text-2xl font-black text-charcoal-900">
                  {project.metric.value}
                </div>
                <div className="text-xs font-semibold text-lavender-800">
                  {project.metric.label}
                </div>
                <div className="text-[11px] text-charcoal-500 mt-0.5">
                  {project.metric.detail}
                </div>
              </div>
            </div>
          )}

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2">
              Project Overview
            </h4>
            <p className="text-charcoal-700">
              {project.overview}
            </p>
          </div>

          {/* Methodology / Pipeline Stages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3">
              Engineering Architecture & Pipeline
            </h4>
            <div className="space-y-2.5">
              {project.methodology.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surfaceMuted/80 border border-charcoal-200/70"
                >
                  <div className="text-xs font-bold text-charcoal-900 flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-charcoal-900 text-white text-[10px] flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span>{m.step}</span>
                  </div>
                  <p className="text-xs text-charcoal-600 pl-7">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2.5">
              Technical Highlights & Key Implementations
            </h4>
            <ul className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                  <CheckCircle className="w-4 h-4 text-lavender-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-charcoal-100 text-charcoal-800 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-charcoal-100 bg-surface flex items-center justify-between">
          <span className="text-[11px] text-charcoal-400">
            Academic Project &bull; Documented Architecture
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-lavender-600 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

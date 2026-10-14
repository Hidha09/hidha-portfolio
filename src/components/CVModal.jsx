import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cvPath = `/${personalInfo.cvFileName || 'cv.pdf'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-surface rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-charcoal-100 flex items-center justify-between bg-surface">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-lavender-50 text-lavender-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-charcoal-900">
                Curriculum Vitae
              </h3>
              <p className="text-xs text-charcoal-500">
                {personalInfo.name} &bull; AI/ML Graduate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
            aria-label="Close CV modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm text-charcoal-600">
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Download the official CV detailing academic curriculum (Integrated M.Sc. in Computer Science - AI/ML, 2026), technical project architectures, and machine learning competencies.
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={cvPath}
              download="Hidha_CH_CV.pdf"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-lavender-600 transition-colors shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface border border-charcoal-200 text-charcoal-800 text-xs font-semibold hover:border-lavender-300 hover:text-lavender-700 transition-colors shadow-subtle"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview in Browser</span>
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-surfaceMuted border border-charcoal-200/80 text-[11px] text-charcoal-500 leading-relaxed">
            <div className="font-bold text-charcoal-700 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-lavender-600" />
              <span>Official Document</span>
            </div>
            Download or preview the complete curriculum vitae in PDF format.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-charcoal-100 bg-surface flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

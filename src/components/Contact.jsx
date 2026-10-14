import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link to open user's default email client with input text
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentMessage(true);
    setTimeout(() => setSentMessage(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/50 border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender-100/70 text-lavender-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-4">
            Let's discuss entry-level roles and collaborations.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-500">
            I am actively seeking full-time positions across the UAE in AI/ML, Python Development, Data Analytics, and Software Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-surface border border-charcoal-200/90 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-charcoal-400 uppercase tracking-wider">
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-600 hover:text-lavender-700 bg-surfaceMuted px-2.5 py-1 rounded-lg border border-charcoal-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-base sm:text-lg font-bold text-charcoal-900 hover:text-lavender-700 transition-colors break-all"
              >
                {personalInfo.contact.email}
              </a>
              <p className="text-xs text-charcoal-500 mt-2">
                Click to open your mail client, or copy the address directly.
              </p>
            </div>

            {/* Social & Professional Profiles */}
            <div className="p-6 rounded-2xl bg-surface border border-charcoal-200/90 shadow-card">
              <span className="text-xs font-bold text-charcoal-400 uppercase tracking-wider block mb-4">
                Profiles & Repositories
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surfaceMuted/50 hover:bg-lavender-50/60 border border-charcoal-200/60 hover:border-lavender-200 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-charcoal-200 flex items-center justify-center text-charcoal-700 group-hover:text-lavender-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900 group-hover:text-lavender-700">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-charcoal-400">
                        Professional Network
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-lavender-600 transition-colors" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surfaceMuted/50 hover:bg-lavender-50/60 border border-charcoal-200/60 hover:border-lavender-200 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-charcoal-200 flex items-center justify-center text-charcoal-700 group-hover:text-lavender-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900 group-hover:text-lavender-700">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-charcoal-400">
                        Code repositories & notebooks
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-lavender-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Availability Status */}
            <div className="p-5 rounded-2xl bg-surface border border-charcoal-200/90 shadow-card flex items-start gap-3">
              <div className="p-2 rounded-xl bg-lavender-50 text-lavender-600 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-charcoal-900">
                  Location & Mobility
                </div>
                <div className="text-xs text-charcoal-600 mt-0.5">
                  Based in {personalInfo.location}. Open to relocation and on-site / hybrid roles throughout the UAE.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-surface border border-charcoal-200/90 shadow-card">
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-charcoal-500 mb-6">
                Fill in your details to start a conversation regarding opportunities or inquiries.
              </p>

              {sentMessage && (
                <div className="p-4 mb-6 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Draft opened in your email client. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Al-Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 bg-surface text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-lavender-500/20 focus:border-lavender-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 bg-surface text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-lavender-500/20 focus:border-lavender-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI/ML Role Opportunity / Interview Request"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 bg-surface text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-lavender-500/20 focus:border-lavender-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about the role, team, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 bg-surface text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-lavender-500/20 focus:border-lavender-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-lavender-600 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

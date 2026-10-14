import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenCV = () => {
    setIsCVOpen(true);
  };

  const handleCloseCV = () => {
    setIsCVOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-charcoal-900 flex flex-col selection:bg-lavender-200 selection:text-lavender-900">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCV={handleOpenCV} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCV={handleOpenCV} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Download / Preview Modal */}
      <CVModal isOpen={isCVOpen} onClose={handleCloseCV} />
    </div>
  );
}

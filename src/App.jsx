import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import confetti from 'canvas-confetti';

function App() {
  const [currentMode, setCurrentMode] = useState('sde');

  const toggleMode = () => {
    const nextMode = currentMode === 'sde' ? 'mle' : 'sde';
    setCurrentMode(nextMode);

    // Fire dual-corner confetti explosion for mode-shift reward!
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.8 },
      colors: nextMode === 'sde' ? ['#6366f1', '#8b5cf6'] : ['#10b981', '#06b6d4']
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.8 },
      colors: nextMode === 'sde' ? ['#6366f1', '#8b5cf6'] : ['#10b981', '#06b6d4']
    });
  };

  useEffect(() => {
    // Dynamic body styling configuration
    const bodyEl = document.getElementById('app-body');
    if (bodyEl) {
      if (currentMode === 'sde') {
        bodyEl.className = 'bg-slate-950 text-slate-100 antialiased font-sans transition-colors duration-500 overflow-x-hidden';
      } else {
        bodyEl.className = 'bg-[#020804] text-slate-100 antialiased font-sans transition-colors duration-500 overflow-x-hidden';
      }
    }
  }, [currentMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${
      currentMode === 'sde' ? 'grid-bg-sde' : 'grid-bg-mle'
    }`}>
      
      {/* Navbar Section */}
      <Navbar currentMode={currentMode} toggleMode={toggleMode} />

      {/* Hero Header Section */}
      <Hero currentMode={currentMode} onToggleMode={toggleMode} />

      <main className="relative">
        
        {/* About & Education */}
        <About currentMode={currentMode} />

        {/* Technical Skills */}
        <Skills currentMode={currentMode} />

        {/* Timeline Work Experience */}
        <Experience currentMode={currentMode} />

        {/* Filters and Projects grid */}
        <Projects currentMode={currentMode} />

        {/* Contact form & direct email links */}
        <Contact currentMode={currentMode} />

      </main>

      {/* Page Footer */}
      <Footer currentMode={currentMode} toggleMode={toggleMode} />

    </div>
  );
}

export default App;

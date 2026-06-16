import React from 'react';
import { ArrowUp, Code, Brain } from 'lucide-react';

export default function Footer({ currentMode, toggleMode }) {
  const accentColor = currentMode === 'sde' ? 'text-indigo-400 hover:text-indigo-300' : 'text-emerald-400 hover:text-emerald-300';
  const dotColor = currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white">
            Priyanjul Sonkar
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} • Handcrafted with React & Tailwind CSS
          </p>
        </div>

        {/* Dynamic Mode Helper Trigger */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">Active Portfolio Profile:</span>
          <button 
            onClick={toggleMode}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-slate-800 bg-slate-900 transition-colors ${
              currentMode === 'sde' ? 'text-indigo-300 hover:border-indigo-500/30' : 'text-emerald-300 hover:border-emerald-500/30'
            }`}
            id="footer-toggle-btn"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
            {currentMode === 'sde' ? 'Software Engineer' : 'Machine Learning'}
          </button>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          id="scroll-to-top-btn"
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}

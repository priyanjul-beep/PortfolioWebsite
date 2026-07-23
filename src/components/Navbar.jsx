import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, Mail } from 'lucide-react';

const Github = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar({ currentMode, toggleMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const themeColor = currentMode === 'sde' ? 'indigo' : 'emerald';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Priyanjul <span className={currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400'}>Sonkar</span>
              </span>
              <span className={`text-[10px] uppercase font-bold tracking-widest -mt-1 ${
                currentMode === 'sde' ? 'text-indigo-400/80' : 'text-emerald-400/80'
              }`}>
                {currentMode === 'sde' ? 'Software Engineer' : 'Machine Learning Engineer'}
              </span>
            </a>
          </div>

          {/* Desktop Links & Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    currentMode === 'sde' ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-300 hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Profile Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-full relative">
              <button
                id="toggle-sde-desktop"
                onClick={() => { if(currentMode !== 'sde') toggleMode(); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
                  currentMode === 'sde' 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code size={14} />
                SDE
              </button>
              <button
                id="toggle-mle-desktop"
                onClick={() => { if(currentMode !== 'mle') toggleMode(); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
                  currentMode === 'mle' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Brain size={14} />
                MLE
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
              <a 
                href="https://github.com/priyanjul-beep" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                id="navbar-github-link"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/priyanjul-sonkar-073277282" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                id="navbar-linkedin-link"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile hamburger & toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Quick Mobile Toggle */}
            <button
              id="mobile-toggle-btn"
              onClick={toggleMode}
              className={`p-2 rounded-full border transition-all duration-300 ${
                currentMode === 'sde'
                  ? 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400 hover:bg-indigo-950/60'
                  : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/60'
              }`}
              title="Toggle Profile Mode"
            >
              {currentMode === 'sde' ? <Code size={18} /> : <Brain size={18} />}
            </button>

            <button
              id="hamburger-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-slate-950/95 border-b border-slate-900`}>
        <div className="px-4 pt-2 pb-6 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-900 flex justify-around">
            <a 
              href="https://github.com/priyanjul-beep" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-2 text-sm"
              id="mobile-nav-github-link"
            >
              <Github size={18} /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/priyanjul-sonkar-073277282" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-2 text-sm"
              id="mobile-nav-linkedin-link"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

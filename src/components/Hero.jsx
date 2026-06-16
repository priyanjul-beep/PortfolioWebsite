import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Brain, Terminal, ChevronRight } from 'lucide-react';

export default function Hero({ currentMode, onToggleMode }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const titles = currentMode === 'sde' 
    ? ['Full-Stack Developer', 'Backend Specialist', 'System Designer'] 
    : ['Machine Learning Engineer', 'Data Scientist', 'Model Deployment Specialist'];
  
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset typing on mode change
    setTypedTitle('');
    setTitleIdx(0);
    setIsDeleting(false);
  }, [currentMode]);

  useEffect(() => {
    const activeText = titles[titleIdx];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedTitle(activeText.substring(0, typedTitle.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedTitle(activeText.substring(0, typedTitle.length + 1));
      }, 100);
    }

    if (!isDeleting && typedTitle === activeText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && typedTitle === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, titleIdx, currentMode]);

  // Terminal mock content based on mode
  const sdeCode = `// Deep Packet Inspection Engine
#include <iostream>
#include <pcap.h>

void packetHandler(u_char* args, const struct pcap_pkthdr* header, const u_char* packet) {
    // Extract layers, track 5-tuple hash flow
    Flow flow = parseFlow(packet);
    if (flow.isTLS()) {
        std::string sni = extractSNI(packet);
        std::cout << "[TLS SNI] Found Application: " << sni << std::endl;
    }
}`;

  const mleCode = `# Anomaly Detection & Fraud Pipeline
import xgboost as xgb
from imblearn.over_sampling import SMOTE
import shap

def train_pipeline(X, y):
    # SMOTE to handle cybersecurity class imbalance
    X_res, y_res = SMOTE().fit_resample(X, y)
    model = xgb.XGBClassifier(max_depth=6, n_estimators=100)
    model.fit(X_res, y_res)
    
    # SHAP interpretability
    explainer = shap.TreeExplainer(model)
    return model, explainer`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full filter blur-[80px] opacity-20 animate-pulse-slow transition-colors duration-500 bg-indigo-500" />
      <div className={`absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full filter blur-[80px] opacity-20 animate-pulse-slow transition-colors duration-500 ${
        currentMode === 'sde' ? 'bg-violet-500' : 'bg-emerald-500'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
            
            {/* Greet Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 border border-slate-800 backdrop-blur">
              <span className={`w-2 h-2 rounded-full ${
                currentMode === 'sde' ? 'bg-indigo-500 animate-ping' : 'bg-emerald-500 animate-ping'
              }`} />
              <span className="text-slate-300">Open for Opportunities</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <span className={currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400'}>Priyanjul Sonkar</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 h-12">
                <span className="text-slate-400">I am a </span>
                <span className={`underline decoration-2 underline-offset-4 ${
                  currentMode === 'sde' ? 'text-indigo-400 decoration-indigo-500/50' : 'text-emerald-400 decoration-emerald-500/50'
                }`}>
                  {typedTitle}
                </span>
                <span className={`animate-pulse ${
                  currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400'
                }`}>|</span>
              </h2>
            </div>

            {/* Profile Intro Descriptions */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              {currentMode === 'sde' 
                ? "SDE Intern at AppsForBharat with hand-on experience delivering end-to-end CMS architectures, caching pipelines, and high-performance packet analysis. Proficient in C++, Node.js, React, and AWS." 
                : "AI/ML Intern at Jayadhi Limited with experience implementing XGBoost, SMOTE, and SHAP explainability. Built real-time anomaly-detection APIs, Streamlit auditing dashboards, and protocol simulators."
              }
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg ${
                  currentMode === 'sde' 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                }`}
                id="hero-view-projects-btn"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 text-white"
                id="hero-contact-btn"
              >
                Let's Connect
              </a>

              {/* Mode switch helper bubble */}
              <button
                onClick={onToggleMode}
                className={`flex items-center gap-2 px-4 py-2 text-xs rounded-full border border-dashed transition-colors duration-300 ${
                  currentMode === 'sde'
                    ? 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40'
                    : 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20 hover:bg-indigo-950/40'
                }`}
                id="hero-mode-switch-helper"
              >
                {currentMode === 'sde' ? <Brain size={12} /> : <Code size={12} />}
                Switch to {currentMode === 'sde' ? 'ML Profile' : 'SDE Profile'}
              </button>
            </div>

          </div>

          {/* Right Interactive Card / Code Terminal */}
          <div className="lg:col-span-5 w-full animate-fade-in delay-150">
            <div className="w-full max-w-lg mx-auto rounded-xl border border-slate-800/80 bg-slate-950 shadow-2xl overflow-hidden relative group">
              
              {/* Glow accent */}
              <div className={`absolute inset-0 -z-10 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500 ${
                currentMode === 'sde' ? 'bg-indigo-500/10' : 'bg-emerald-500/10'
              }`} />

              {/* Terminal Title Bar */}
              <div className="bg-slate-900/90 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal size={12} />
                  <span>{currentMode === 'sde' ? 'dpi_engine.cpp' : 'fraud_detection.py'}</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-left overflow-x-auto bg-[#030712] max-h-72">
                <pre className="text-slate-300">
                  {currentMode === 'sde' ? (
                    <code>
                      <span className="text-pink-400">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span>{'\n'}
                      <span className="text-pink-400">#include</span> <span className="text-orange-400">&lt;pcap.h&gt;</span>{'\n'}{'\n'}
                      <span className="text-sky-400">void</span> <span className="text-yellow-400 font-bold">packetHandler</span>(u_char* args, <span className="text-sky-400">const</span> <span className="text-emerald-400">struct</span> pcap_pkthdr* header, <span className="text-sky-400">const</span> u_char* packet) {'{'} {'\n'}
                      {'    '}<span className="text-slate-500">// Extract layers, track 5-tuple flow</span>{'\n'}
                      {'    '}Flow flow = <span className="text-yellow-400">parseFlow</span>(packet);{'\n'}
                      {'    '}<span className="text-pink-400">if</span> (flow.<span className="text-yellow-400">isTLS</span>()) {'{'}{'\n'}
                      {'        '}std::string sni = <span className="text-yellow-400">extractSNI</span>(packet);{'\n'}
                      {'        '}std::cout &lt;&lt; <span className="text-emerald-400">"[TLS SNI] Found App: "</span> &lt;&lt; sni &lt;&lt; std::endl;{'\n'}
                      {'    '}{'}'}{'\n'}
                      {'}'}
                    </code>
                  ) : (
                    <code>
                      <span className="text-pink-400">import</span> xgboost <span className="text-pink-400">as</span> xgb{'\n'}
                      <span className="text-pink-400">from</span> imblearn.over_sampling <span className="text-pink-400">import</span> SMOTE{'\n'}
                      <span className="text-pink-400">import</span> shap{'\n'}{'\n'}
                      <span className="text-sky-400">def</span> <span className="text-yellow-400 font-bold">train_pipeline</span>(X, y):{'\n'}
                      {'    '}<span className="text-slate-500"># SMOTE to handle cybersecurity class imbalance</span>{'\n'}
                      {'    '}X_res, y_res = SMOTE().fit_resample(X, y){'\n'}
                      {'    '}model = xgb.XGBClassifier(max_depth=<span className="text-purple-400">6</span>, n_estimators=<span className="text-purple-400">100</span>){'\n'}
                      {'    '}model.fit(X_res, y_res){'\n'}{'\n'}
                      {'    '}<span className="text-slate-500"># SHAP interpretability</span>{'\n'}
                      {'    '}explainer = shap.TreeExplainer(model){'\n'}
                      {'    '}<span className="text-pink-400">return</span> model, explainer
                    </code>
                  )}
                </pre>
              </div>

              {/* Terminal Status Bar */}
              <div className="bg-slate-900/60 px-4 py-2 flex items-center gap-2 text-[10px] text-slate-500 font-mono border-t border-slate-800/50">
                <ChevronRight size={10} className={currentMode === 'sde' ? 'text-indigo-500' : 'text-emerald-500'} />
                <span>Status: Compiled & active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

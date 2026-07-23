import React, { useState } from 'react';
import { ExternalLink, Layers, X, Code, Calendar, ShieldAlert } from 'lucide-react';

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

export default function Projects({ currentMode }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'quake-route',
      title: 'QuakeRoute - Disaster Resource Allocation',
      category: 'systems',
      tag: 'Systems & Hackathon',
      demo: null,
      github: 'https://github.com/Shreyansh-sen/QuakeRoute',
      techs: ['React.js', 'FastAPI', 'Zustand', 'Recharts', 'NetworkX', 'OpenStreetMap', 'Qiskit'],
      prioritySde: 1,
      priorityMle: 3,
      desc: 'Developed during QuantumX Hackathon 2026 (5th Position), QuakeRoute is a quantum-ready disaster resource allocation platform for emergency supplies and route optimization.',
      bullets: [
        'Built interactive disaster-management dashboards using React.js, FastAPI, OpenStreetMap, Zustand, and Recharts for real-time visualization.',
        'Implemented graph-based emergency route planning and allocation decisions using A* Search, Dijkstra, and NetworkX.',
        'Contributed to the HAQRA (Hybrid Adaptive Quantum-Ready Resource Allocation) pipeline and a QUBO/QAOA-compatible architecture for future optimization using Qiskit-based solvers.'
      ]
    },
    {
      id: 'dpi-engine',
      title: 'Deep Packet Inspection (DPI) Engine',
      category: 'systems',
      tag: 'Systems / C++',
      demo: null,
      github: 'https://github.com/PriyanjulSonkar/Packet-Inspection',
      techs: ['C++', 'Pcap Lib', 'Multi-threading', 'Five-Tuple Hashing', 'TLS SNI Extraction'],
      prioritySde: 2,
      priorityMle: 4,
      desc: 'High-performance network packet sniffer and analyzer built in C++ capable of stateful session tracking and layer inspection.',
      bullets: [
        'Parses PCAP files and live network packets at Ethernet, IP, TCP/UDP, and Application layers.',
        'Employs Five-Tuple hashing for flow-based stateful connection mapping across multiple packets.',
        'Built a custom TLS SNI extraction module to inspect HTTPS Client Hello packets and identify encrypted traffic targets (e.g. YouTube, GitHub).',
        'Implemented both single-threaded and multi-threaded parsing modes using producer-consumer patterns and thread-safe queues.'
      ]
    },
    {
      id: 'forever-ecom',
      title: 'Forever - Full-Stack E-Commerce',
      category: 'web',
      tag: 'Web Development',
      demo: null,
      github: 'https://github.com/PriyanjulSonkar/Ecommerce-clothes',
      techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay / Stripe', 'Tailwind CSS'],
      prioritySde: 3,
      priorityMle: 5,
      desc: 'Modern full-stack e-commerce store with secure payment gateways, role-based workflows, and a responsive catalog.',
      bullets: [
        'Supports multiple product categories including Menswear and Kidswear with customized role-based user navigation.',
        'Integrates Razorpay, Stripe, and Cash on Delivery workflows for secure transactions.',
        'Developed modular backend APIs handling product management, cart caching, and order verification.',
        'Built modern layouts with smooth checkout states and instant order updates.'
      ]
    },
    {
      id: 'protocol-stack',
      title: 'OSI Protocol Stack Simulator',
      category: 'systems',
      tag: 'Systems / C++',
      demo: null,
      github: 'https://github.com/PriyanjulSonkar/NETWORKING',
      techs: ['C++', 'OSI Modeling', 'RIP Routing', 'Flow Control (Selective Repeat)', 'CRC Error Checking'],
      prioritySde: 4,
      priorityMle: 6,
      desc: 'Simulated network protocol stack modeling nodes, switches, and routers with packet encapsulation and reliable delivery algorithms.',
      bullets: [
        'Architected core OSI layer simulation (ARP, DHCP, RIP, HTTP, DNS) in C++ (2000+ LOC).',
        'Implemented reliability mechanisms: Stop-and-Wait, Selective Repeat, and Go-Back-N flow control.',
        'Configured CRC-based frame error checking and automatic retransmission logic.',
        'Generates active connection topologies and prints decapsulation sequences frame-by-frame.'
      ]
    },
    {
      id: 'movie-recommender',
      title: 'Movie Recommender System',
      category: 'ml',
      tag: 'Machine Learning',
      demo: 'https://movie-recommender-yq9k.onrender.com', // simulated or actual demo link
      github: 'https://github.com/PriyanjulSonkar/Movie-Recommender-System',
      techs: ['Python', 'Pandas', 'Scikit-learn', 'Cosine Similarity', 'Streamlit'],
      prioritySde: 5,
      priorityMle: 1,
      desc: 'Interactive content-based recommendation tool analyzing movie metadata vectors to yield real-time suggestions.',
      bullets: [
        'Built content-based filtering algorithm powered by cosine similarity matching on metadata properties.',
        'Preprocessed datasets using Pandas and Scikit-learn to vectorize textual tags.',
        'Created a fast, lightweight dashboard using Streamlit to accept user queries and showcase results.',
        'Optimized pipeline configurations to reduce recommendation retrieval latency.'
      ]
    },
    {
      id: 'bengaluru-house',
      title: 'Bengaluru House Price Prediction',
      category: 'ml',
      tag: 'Machine Learning',
      demo: 'https://benguluru-house-price-prediction-073.onrender.com',
      github: 'https://github.com/PriyanjulSonkar/Benguluru-House-Price-Prediction',
      techs: ['Python', 'Linear Regression', 'Random Forest', 'Flask', 'Data Cleaning'],
      prioritySde: 6,
      priorityMle: 2,
      desc: 'Supervised machine learning model trained to estimate real estate valuations across Bengaluru districts.',
      bullets: [
        'Utilized Linear Regression and Random Forest models achieving an R2 score of 0.82.',
        'Performed comprehensive data preparation, outlier mitigation, and feature scaling.',
        'Deployed the model via Flask server with a clean user dashboard inputting regional parameters.'
      ]
    },
    {
      id: 'support-ticket',
      title: 'Real-Time Support Ticket System',
      category: 'web',
      tag: 'Web Development',
      demo: 'https://support-ticket-system-wmil.onrender.com',
      github: 'https://github.com/priyanjul-beep/support-ticket-system',
      techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT Auth'],
      prioritySde: 7,
      priorityMle: 7,
      desc: 'Full-stack customer service tracking tool implementing dynamic status updates via persistent web sockets.',
      bullets: [
        'Secured with JWT authentication and custom middleware-driven authorization routes.',
        'Role-Based Access Control: customers manage their tickets while admins view and reply to all requests.',
        'Leveraged WebSockets for real-time ticket status updates and MongoDB for persistence.'
      ]
    },
    {
      id: 'ai-finance-tracker',
      title: 'AI Finance Tracker',
      category: 'web',
      tag: 'Full-Stack / AI',
      demo: 'https://ai-finance-tracker-2-q25a.onrender.com',
      github: 'https://github.com/priyanjul-beep/Ai-Finance-Tracker',
      techs: ['Go', 'Gin', 'Next.js 14', 'PostgreSQL', 'Redis', 'Gemini AI', 'Asynq', 'JWT', 'Docker'],
      prioritySde: 8,
      priorityMle: 8,
      desc: 'Production-grade AI-powered personal finance assistant with expense tracking, budget management, receipt OCR, voice input, and real-time spending predictions.',
      bullets: [
        'Built Go (Gin) REST API following Clean Architecture — domain, repository, usecase, handler layers — with JWT (access + refresh) and Google OAuth 2.0 authentication.',
        'Integrated Google Gemini AI for natural-language expense parsing, smart categorization, spending insights, next-month predictions, and a live financial health score.',
        'Implemented Redis-cached notification center with Asynq background workers for budget-alert emails (90% / exceeded thresholds) and welcome notifications on signup.',
        'Engineered full analytics suite: monthly/yearly reports, AI-driven forecasts, Prometheus metrics, and a Next.js 14 App Router dashboard with Recharts visualizations and TanStack Query v5.'
      ]
    },
    {
      id: 'candidate-transformer',
      title: 'Multi-Source Candidate Data Transformer',
      category: 'ml',
      tag: 'Machine Learning / Python',
      demo: 'https://candidate-data-transformer-sn4wmpxrabbdhbsrqbbbfg.streamlit.app',
      github: 'https://github.com/priyanjul-beep/candidate-data-transformer',
      techs: ['Python', 'Streamlit', 'Pandas', 'Pytest', 'CLI', 'NLP', 'Data Pipeline'],
      prioritySde: 9,
      priorityMle: 9,
      desc: 'End-to-end candidate profile transformer that merges structured (CSV, JSON) and unstructured (TXT recruiter notes) sources into a canonical record with dynamic provenance and confidence tracking.',
      bullets: [
        'Architected a modular pipeline (extractors → normalizers → merger → projector → validator) that processes recruiter CSV, ATS JSON, and free-text notes without crashing on missing sources.',
        'Implemented dynamic provenance and confidence tracking: skill sources reflect actual contributors (single vs. multi-source), and all raw evidence is preserved for full transparency.',
        'Built a Streamlit UI with an interactive projection modal — supports field search, select-all/clear-all checkboxes, auto-generated config, and a JSON editor for manual field mapping.',
        'Delivered a Python CLI and programmatic API with comprehensive Pytest coverage; output is fully configurable (E164 phone normalization, canonical skill names, on_missing: null/omit/error).'
      ]
    },
    {
      id: 'vault-os',
      title: 'VAULT OS – Biometric Media Engine',
      category: 'web',
      tag: 'Full-Stack / AI / Biometrics',
      demo: 'https://vault-os-xi.vercel.app/',
      github: 'https://github.com/PriyanjulSonkar/face-based-media-system',
      techs: ['Next.js 15', 'AWS Rekognition', 'PostgreSQL', 'Prisma ORM', 'Amazon S3', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
      prioritySde: 10,
      priorityMle: 10,
      desc: 'High-performance biometric-driven media engine for exclusive events — guests find their photos via face recognition with real-time liveness detection and zero-password access.',
      bullets: [
        'Built a Live-Blink Biometric Handshake using AWS Rekognition FaceId vectoring: guests are authenticated purely by face, with canvas-overlay liveness scanning that prevents photo-of-photo spoofing.',
        'Engineered real-time S3 asset zipping and streaming via Node.js Streams, enabling bulk vault downloads without memory exhaustion for large event media libraries.',
        'Designed security-first architecture: facial vectors (not raw images) stored in Rekognition Collections, all assets served via Pre-Signed S3 URLs with 3600s TTL, and automatic EXIF metadata scrubbing on upload.',
        'Delivered a brutalist Framer Motion UI with terminal-style text descrambling, 60fps shared-element gallery transitions, and an optimized masonry archive grid with zero layout shift.'
      ]
    },
    {
      id: 'mern-marketplace',
      title: 'MERN Marketplace',
      category: 'web',
      tag: 'Web Development',
      demo: 'https://mern-marketplace-ledj.onrender.com/',
      github: 'https://github.com/PriyanjulSonkar/Mern-MarketPlace',
      techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Socket.io'],
      prioritySde: 11,
      priorityMle: 11,
      desc: 'Full-featured online marketplace with seller accounts, product search, shopping cart, order management, Razorpay payment processing, and live auction powered by Socket.io.',
      bullets: [
        'Built multi-role architecture supporting separate seller and buyer accounts with product listing, search suggestions, and category-based browsing.',
        'Integrated Razorpay payment gateway for secure checkout with order confirmation and payment verification workflows.',
        'Implemented real-time live auction feature using Socket.io, enabling synchronized bidding across all connected clients with instant price updates.',
        'Developed full order management system with cart persistence, order history, and seller fulfillment tracking.'
      ]
    }
  ];

  // Dynamic sorting based on mode
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (currentMode === 'sde') {
      return a.prioritySde - b.prioritySde;
    } else {
      return a.priorityMle - b.priorityMle;
    }
  });

  // Apply filters
  const filteredProjects = activeFilter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'systems', label: 'Systems & C++' },
    { key: 'web', label: 'Web Dev' },
    { key: 'ml', label: 'Machine Learning' }
  ];

  const accentColor = currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400';
  const accentBorder = currentMode === 'sde' ? 'border-indigo-500/30' : 'border-emerald-500/30';
  const filterBtnStyle = (isActive) => {
    if (isActive) {
      return currentMode === 'sde' 
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
        : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20';
    }
    return 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white';
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-900 bg-slate-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className={accentColor}>Projects</span>
          </h2>
          <div className={`h-1 w-12 mx-auto mt-3 rounded-full ${
            currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
          }`} />
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Hover over any project for details, or select category filters to explore specific areas. Click on a project to view detailed documentation.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                filterBtnStyle(activeFilter === f.key)
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className={`glass-card p-6 rounded-xl border border-slate-800/80 transition-all duration-300 group hover:-translate-y-1 hover:border-slate-700 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                    currentMode === 'sde' ? 'bg-indigo-950/60 text-indigo-400' : 'bg-emerald-950/60 text-emerald-400'
                  }`}>
                    {p.tag}
                  </span>
                  <Layers size={14} className="text-slate-500" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              {/* Technologies & Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techs.slice(0, 3).map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-850 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                  {p.techs.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-500 font-bold">
                      +{p.techs.length - 3}
                    </span>
                  )}
                </div>

                <div className={`text-xs font-semibold flex items-center gap-1 group-hover:underline ${accentColor}`}>
                  Read Documentation
                  <ExternalLink size={12} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          
          <div 
            className={`glass-card max-w-2xl w-full rounded-2xl border ${accentBorder} overflow-hidden shadow-2xl relative animate-fade-in-up`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-900/90 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded ${
                  currentMode === 'sde' ? 'bg-indigo-950 text-indigo-400' : 'bg-emerald-950 text-emerald-400'
                }`}>
                  {selectedProject.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                id="modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Summary</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.desc}</p>
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Implementation</h4>
                <ul className="space-y-2">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 ${
                        currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
                      }`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded bg-slate-900 border border-slate-850 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-900/60 border-t border-slate-800/80 px-6 py-4 flex items-center justify-end gap-3">
              {selectedProject.github && (
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white transition-colors"
                  id="modal-github-btn"
                >
                  <Github size={14} />
                  View Code
                </a>
              )}
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white transition-colors ${
                    currentMode === 'sde' ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                  id="modal-demo-btn"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

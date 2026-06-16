import React from 'react';
import { Briefcase, Calendar, MapPin, Zap, Shield, Sparkles } from 'lucide-react';

export default function Experience({ currentMode }) {
  
  const sdeExperience = [
    {
      company: 'AppsForBharat',
      role: 'Software Development Engineer Intern (On-site)',
      duration: 'Jan 2026 – Present',
      location: 'Bengaluru, India',
      logo: 'AFB',
      metrics: [
        { label: 'Latency Reduced', value: '800ms ➔ 50ms' },
        { label: 'Conversion Uplift', value: '+3.47%' },
        { label: 'Trust Engagement', value: '+4.3%' }
      ],
      bullets: [
        'Built backend projects including a notification system and a Splitwise-style expense-sharing service, gaining hands-on experience with Docker, Amazon ECR/ECS, and CI/CD pipelines using GitHub Actions.',
        'Engineered high-traffic frontend pages for the SriMandir platform, including the Kundli Generator and Dosha Calculator, with emphasis on SEO optimization and performance at scale for millions of active users.',
        'Reduced backend API response latency from 800ms to 50ms and configured real-time monitoring using AWS CloudWatch, Prometheus, and Grafana for observability.',
        'Architected and maintained the internal CMS platform for SriMandir, delivering batch fulfillment workflows, store creation systems, multi-temple store linking, and multi-category filter mapping.',
        'Owned the internal CMS for Daily Dharma, implementing hierarchical category management, dynamic filter creation, and comprehensive REST APIs (GET, POST, PATCH, DELETE) deployed through Gatekeeper infrastructure.',
        'Applied the Adapter Design Pattern across fulfillment systems Ares and Aura, improving modularity and extensibility of backend integrations.',
        'Developed reusable components for SriMandir ePuja platform (video-testimonial modules, progressive disclosure See More/Less with mobile-first optimizations), improving conversion rate by 1.38%.'
      ]
    },
    {
      company: 'Jayadhi Limited (UK)',
      role: 'AI/ML Intern (Remote)',
      duration: 'June 2025 – July 2025',
      location: 'London, UK (Remote)',
      logo: 'JL',
      metrics: [
        { label: 'Model Accuracy', value: '80% ➔ 95%' },
        { label: 'Recall Rate', value: '100% (Perfect)' }
      ],
      bullets: [
        'Built a cybersecurity-focused insurance fraud detection system using XGBoost, establishing a baseline accuracy of 80% on SVM, Logistic Regression, and Decision Trees.',
        'Resolved severe class imbalance using SMOTE and conducted extensive hyperparameter tuning, boosting model accuracy to 95%.',
        'Integrated SHAP explainability into the machine learning pipeline to deliver transparent and interpretable prediction insights.',
        'Deployed the fraud detection system to production, actively serving real users through the Live Platform.'
      ]
    }
  ];

  const mleExperience = [
    {
      company: 'AppsForBharat',
      role: 'Software Development Engineer Intern (On-site)',
      duration: 'Jan 2026 – Present',
      location: 'Bengaluru, India',
      logo: 'AFB',
      metrics: [
        { label: 'API Optimization', value: '800ms ➔ 50ms' },
        { label: 'Experiments Done', value: 'Analytics-driven UX' }
      ],
      bullets: [
        'Reduced backend API response latency to 50ms and configured real-time monitoring using AWS CloudWatch, Prometheus, and Grafana for observability and performance tracking.',
        'Engineered high-traffic frontend calculators (Kundli Generator, Dosha Calculator) with strict performance guidelines for millions of active users.',
        'Designed content-based filter linking, dynamic filter creation, and hierarchical category management for the Daily Dharma structured content platform.',
        'Executed analytics-driven UX experiments by reordering high-intent content sections based on user behavior insights, reducing friction in conversion paths.'
      ]
    },
    {
      company: 'Jayadhi Limited (UK) – Cybersecurity AI',
      role: 'AI/ML Intern (Remote)',
      duration: 'Jun 2025 – Jul 2025',
      location: 'London, UK (Remote)',
      logo: 'JL',
      metrics: [
        { label: 'Fraud Detection Accuracy', value: '95%' },
        { label: 'Anomaly Models', value: '4 Configured' }
      ],
      bullets: [
        'Engineered an end-to-end fraud-detection pipeline using XGBoost with SMOTE and hyperparameter tuning, achieving 95% test accuracy and perfect recall.',
        'Implemented SHAP-based model interpretability to surface high-impact features and strengthen transparency for insurance compliance.',
        'Constructed multiple anomaly-detection models (Isolation Forest, One-Class SVM, LOF, DBSCAN) to increase robustness across diverse cyber-threat patterns.',
        'Built and deployed a production-ready Flask API enabling real-time anomaly predictions with integrated preprocessing, validation, and error handling.',
        'Architected a Streamlit-based monitoring dashboard featuring model inference, automated logging, and real-time prediction audit trails.',
        'Generated PCA- and UMAP-based visualizations to examine anomaly clusters, improving interpretability and evaluating model performance across datasets.',
        'Improved pipeline reliability by integrating OrdinalEncoder and StandardScaler consistently across training and inference workflows.'
      ]
    }
  ];

  const experiences = currentMode === 'sde' ? sdeExperience : mleExperience;
  const accentColor = currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400';
  const borderTheme = currentMode === 'sde' ? 'border-indigo-500/20' : 'border-emerald-500/20';
  const bgBadge = currentMode === 'sde' ? 'bg-indigo-950/40 text-indigo-300' : 'bg-emerald-950/40 text-emerald-300';
  const timelineDot = currentMode === 'sde' ? 'bg-indigo-500 ring-indigo-500/20' : 'bg-emerald-500 ring-emerald-500/20';

  return (
    <section id="experience" className="py-20 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work <span className={accentColor}>Experience</span>
          </h2>
          <div className={`h-1 w-12 mx-auto mt-3 rounded-full ${
            currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
          }`} />
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Hands-on professional experience building features at scale for millions of active users and developing cybersecurity-focused AI models.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-950 ${timelineDot} ring-4 transition-transform duration-300 group-hover:scale-125 z-10`} />

              {/* Experience Card */}
              <div className={`glass-card p-6 sm:p-8 rounded-xl border ${borderTheme} hover:shadow-xl transition-all duration-300`}>
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400 mt-1">
                      <span className={`font-semibold ${accentColor}`}>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1"><Calendar size={13} /> {exp.duration}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1"><MapPin size={13} /> {exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Company Logo Initials */}
                  <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-850 font-extrabold text-lg text-slate-300`}>
                    {exp.logo}
                  </div>
                </div>

                {/* Metrics highlights */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {exp.metrics.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-slate-800 ${bgBadge}`}
                    >
                      <Zap size={12} className={accentColor} />
                      <span>{m.label}: {m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Job Bullets */}
                <ul className="space-y-3 text-left">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 ${
                        currentMode === 'sde' ? 'bg-indigo-500/80' : 'bg-emerald-500/80'
                      }`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

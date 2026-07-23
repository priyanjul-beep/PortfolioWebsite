import React from 'react';
import { Terminal, Database, Server, Layout, Cloud, BarChart, Settings, BrainCircuit } from 'lucide-react';

export default function Skills({ currentMode }) {
  
  // Categorized SDE skills
  const sdeCategories = [
    {
      title: 'Backend Engineering',
      icon: <Server size={20} />,
      skills: ['Node.js','Golang','Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware Architecture', 'API Gateway']
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={20} />,
      skills: ['MongoDB', 'MySQL', 'Postgre SQL','Schema Modeling', 'Database Indexing', 'Query Optimization', 'Caching Strategies']
    },
    {
      title: 'System Design & DevOps',
      icon: <Cloud size={20} />,
      skills: ['Distributed Systems', 'API Design', 'RBAC', 'Docker', 'AWS (ECR/ECS)', 'CI/CD (GitHub Actions)']
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={20} />,
      skills: ['React.js','Next.js', 'TypeScript', 'Tailwind CSS', 'State Management (Zustand/Redux)', 'Component-Based Architecture']
    },
    {
      title: 'Monitoring & Observability',
      icon: <BarChart size={20} />,
      skills: ['Prometheus', 'Grafana', 'Log Aggregation', 'Application Metrics', 'AWS CloudWatch']
    },
    {
      title: 'Languages & Core Tools',
      icon: <Terminal size={20} />,
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'Git / GitHub', 'Postman', 'VS Code']
    }
  ];

  // Categorized MLE skills
  const mleCategories = [
    {
      title: 'Machine Learning Tooling',
      icon: <BrainCircuit size={20} />,
      skills: ['scikit-learn', 'XGBoost', 'LightGBM', 'SHAP Explainability', 'imbalanced-learn (SMOTE)', 'Pandas', 'NumPy']
    },
    {
      title: 'Deep Learning',
      icon: <Server size={20} />,
      skills: ['Neural Networks', 'CNNs', 'RNNs', 'LSTMs', 'Autoencoders', 'TensorFlow', 'Keras']
    },
    {
      title: 'Data Science & Core ML',
      icon: <BarChart size={20} />,
      skills: ['Regression / Classification', 'Clustering (K-Means)', 'Cross-Validation', 'Ensemble Learning', 'Feature Engineering', 'Model Evaluation']
    },
    {
      title: 'MLOps, APIs & Cloud',
      icon: <Cloud size={20} />,
      skills: ['FastAPI', 'Flask', 'Model Deployment (Streamlit, Cloud)', 'AWS (EC2/S3)', 'Docker', 'CI/CD (Basic Familiarity)']
    },
    {
      title: 'Data Science Pipelines',
      icon: <Database size={20} />,
      skills: ['Data Cleaning', 'EDA (Exploratory Data Analysis)', 'Matplotlib', 'Seaborn', 'Statistical Modeling', 'MySQL', 'MongoDB', 'CSV/JSON Pipelines']
    },
    {
      title: 'Languages & Dev Tools',
      icon: <Terminal size={20} />,
      skills: ['Python', 'C++', 'Java', 'SQL', 'Git / GitHub', 'Jupyter Notebook', 'VS Code', 'Postman']
    }
  ];

  const categories = currentMode === 'sde' ? sdeCategories : mleCategories;
  const accentColor = currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400';
  const borderHover = currentMode === 'sde' ? 'hover:border-indigo-500/40' : 'hover:border-emerald-500/40';
  const dotColor = currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500';
  const glowShadow = currentMode === 'sde' ? 'group-hover:shadow-indigo-500/10' : 'group-hover:shadow-emerald-500/10';

  return (
    <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950/20 relative">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full filter blur-[120px] opacity-10 bg-indigo-500/30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-[120px] opacity-10 bg-emerald-500/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className={accentColor}>Skills</span>
          </h2>
          <div className={`h-1 w-12 mx-auto mt-3 rounded-full ${
            currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
          }`} />
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            {currentMode === 'sde'
              ? 'Comprehensive toolkit for full-stack application development, backend microservices, robust API modeling, and system architectures.'
              : 'Specialized toolkit for machine learning models, deep learning networks, data engineering pipelines, explainability analytics, and inference deployments.'
            }
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div 
              key={idx}
              className={`glass-card p-6 rounded-xl border border-slate-800/80 transition-all duration-300 group hover:-translate-y-1 ${borderHover} hover:shadow-xl ${glowShadow}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded bg-slate-950 border border-slate-850 group-hover:scale-110 transition-transform duration-300 ${accentColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-950/80 border border-slate-850 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

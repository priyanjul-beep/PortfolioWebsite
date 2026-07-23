import React from 'react';
import { Award, BookOpen, Trophy, Cpu, Code2, Database } from 'lucide-react';

export default function About({ currentMode }) {
  const cgpa = '8.7';
  
  const stats = [
        { label: 'LeetCode Problems', value: '850+', icon: <Code2 size={20} /> },
        { label: 'GeeksforGeeks solved', value: '400+', icon: <Trophy size={20} /> },
        { label: 'SQL Problems', value: '100+', icon: <Database size={20} /> }
      ];

  const scholarships = [
    { year: '2025', rank: 'All India Rank 604', desc: 'Improved standing in Nationwide Engineering Scholarship.' },
    { year: '2024', rank: 'All India Rank 917', desc: 'Secured Nationwide engineering scholarship for outstanding academic performance.' }
  ];

  const accentColor = currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400';
  const accentBorder = currentMode === 'sde' ? 'border-indigo-500/20' : 'border-emerald-500/20';
  const accentBg = currentMode === 'sde' ? 'bg-indigo-950/20' : 'bg-emerald-950/20';

  return (
    <section id="about" className="py-20 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About <span className={accentColor}>Me</span>
          </h2>
          <div className={`h-1 w-12 mx-auto mt-3 rounded-full ${
            currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
          }`} />
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            B.Tech student in Information Technology at the National Institute of Technology, Srinagar. Passionate about engineering high-efficiency software architectures, machine learning models, and real-time distributed systems.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education & Scholarships */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Education Card */}
            <div className={`glass-card p-6 rounded-xl text-left border ${accentBorder}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${accentBg} ${accentColor}`}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">National Institute of Technology, Srinagar</h3>
                  <p className="text-slate-300 text-sm mt-0.5">B.Tech. in Information Technology (IT)</p>
                  <p className="text-slate-500 text-xs mt-1">Timeline: 2022 – 2026</p>
                  
                  {/* CGPA Badge */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs text-slate-400">Current CGPA:</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      currentMode === 'sde' ? 'bg-indigo-900/40 text-indigo-300' : 'bg-emerald-900/40 text-emerald-300'
                    }`}>
                      {cgpa} / 10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className={`glass-card p-6 rounded-xl text-left border ${accentBorder} flex-grow mt-6 lg:mt-0`}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className={accentColor} size={20} />
                Academic Honors & Scholarships
              </h3>
              
              <div className="space-y-4">
                {scholarships.map((s, idx) => (
                  <div key={idx} className="flex gap-3 border-l-2 border-slate-800 pl-4 py-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          currentMode === 'sde' ? 'bg-indigo-950 text-indigo-300' : 'bg-emerald-950 text-emerald-300'
                        }`}>
                          {s.year}
                        </span>
                        <h4 className="text-sm font-bold text-slate-200">{s.rank}</h4>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
                
                {/* Code Mania */}
                <div className="flex gap-3 border-l-2 border-slate-800 pl-4 py-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        currentMode === 'sde' ? 'bg-indigo-950 text-indigo-300' : 'bg-emerald-950 text-emerald-300'
                      }`}>
                        Win
                      </span>
                      <h4 className="text-sm font-bold text-slate-200">Code Mania – Debugging Competition</h4>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Awarded 2nd Prize for excellence in debugging and rapid problem-solving.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Stats & Problems Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className={`glass-card p-6 rounded-xl text-left border ${accentBorder} h-full flex flex-col justify-between`}>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Trophy className={accentColor} size={20} />
                  Problem Solving & Coding Metrics
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Highly active solver across algorithms, data structures, and database query challenges.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-grow justify-center">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-4 rounded-lg bg-slate-900/40 border border-slate-800/60 transition-transform hover:-translate-y-0.5`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded bg-slate-950 ${accentColor}`}>
                        {stat.icon}
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{stat.label}</span>
                    </div>
                    <span className={`text-lg font-extrabold tracking-tight ${accentColor}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-[11px] text-slate-500 italic text-center font-mono">
                *Verified problem status on LeetCode & GeeksforGeeks
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

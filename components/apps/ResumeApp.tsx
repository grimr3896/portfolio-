
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const SKILLS_DATA = [
  { name: 'AI Automation', level: 98, color: '#00aba9', info: 'Expertise in n8n, OpenAI, and custom Gemini agents.' },
  { name: 'React / TS', level: 96, color: '#2673ec', info: 'Scalable frontend architecture and OS-style UI development.' },
  { name: 'Node.js', level: 88, color: '#00a300', info: 'Robust backend systems and real-time socket integration.' },
  { name: 'UI / UX Design', level: 92, color: '#9f00a7', info: 'Focus on high-engagement nostalgic and futurist UI/UX.' },
  { name: 'Python', level: 85, color: '#ffc40d', info: 'Scripting for AI, scraping, and workflow logic.' },
];

const ResumeApp: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [hoverSkill, setHoverSkill] = useState<string | null>(null);
  const [counts, setCounts] = useState({ projects: 0, hours: 0, users: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        projects: Math.min(prev.projects + 1, 15),
        hours: Math.min(prev.hours + 5, 250),
        users: Math.min(prev.users + 25, 1200),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Scrollable Container covering Header + Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        
        {/* 1. Header with Live Background - Now inside scroll container */}
        <div className="relative overflow-hidden bg-[#00a300] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shrink-0">
          <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
            <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-white/20 metro-float"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-96 h-96 bg-white/10 metro-float" style={{ animationDelay: '-8s' }}></div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">Tony Langat</h1>
            <h2 className="text-lg md:text-xl font-light uppercase tracking-[0.4em] opacity-90">System Designer & AI Architect</h2>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-widest text-white/70">
              <span className="flex items-center gap-1"><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-envelope"></i> tony@example.com</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-link"></i> tonylangat.dev</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 relative z-10 w-full md:w-auto">
            <button className="bg-white text-[#00a300] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl">
              <i className="fa-solid fa-file-pdf text-lg"></i> Download PDF
            </button>
            <div className="flex gap-2 justify-center">
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded transition-all"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded transition-all"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
        </div>

        {/* 2. Main Content Sections */}
        <div className="max-w-5xl mx-auto p-8 md:p-12 space-y-20">
          
          {/* Summary Section */}
          <section className="animate-fade-in">
            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest mb-6 border-l-8 border-[#00a300] pl-4">Career Summary</h3>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              I specialize in <span className="text-[#00a300] font-bold">AI-driven automation</span>, interactive web systems, and <span className="text-gray-900 font-medium">immersive digital experiences</span>. I build platforms that are both functional and visually engaging, with a relentless focus on <span className="italic">efficiency and scalability</span>.
            </p>
          </section>

          {/* Impact Highlights Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
            <div className="bg-gray-50 p-6 border group hover:border-[#00a300] transition-all">
              <span className="text-4xl font-black text-[#00a300] block mb-1">{counts.projects}+</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Major Projects Delivered</span>
            </div>
            <div className="bg-gray-50 p-6 border group hover:border-[#2d89ef] transition-all">
              <span className="text-4xl font-black text-[#2d89ef] block mb-1">{counts.hours}+</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Hours Saved via Automation</span>
            </div>
            <div className="bg-gray-50 p-6 border group hover:border-[#9f00a7] transition-all">
              <span className="text-4xl font-black text-[#9f00a7] block mb-1">{counts.users}+</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Active System Users</span>
            </div>
          </section>

          {/* Work Experience */}
          <section className="animate-fade-in">
            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest mb-8 border-l-8 border-[#2d89ef] pl-4">Experience</h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  role: 'Digital Systems Designer (Freelance)',
                  company: 'Nairobi, Kenya',
                  dates: '2024 - Present',
                  bullets: [
                    'Built interactive AI portfolios with multi-modality support.',
                    'Developed multi-user marketplaces with real-time sync.',
                    'Integrated AI voice assistants for interactive digital platforms.'
                  ],
                  metrics: 'Delivered 5+ high-stakes projects for regional tech firms.'
                },
                {
                  id: 2,
                  role: 'Junior Web Developer (Intern)',
                  company: 'TechStart Solutions',
                  dates: '2023 - 2024',
                  bullets: [
                    'Developed responsive React + TailwindCSS interfaces for scale.',
                    'Assisted in Node.js backend optimization and DB architecture.',
                    'Implemented dashboard visualizations for client data.'
                  ],
                  metrics: 'Successfully deployed 3 core features within first quarter.'
                }
              ].map((exp) => (
                <div 
                  key={exp.id} 
                  className={`bg-white border transition-all duration-300 ${expandedExp === exp.id ? 'shadow-2xl ring-1 ring-[#2d89ef]' : 'hover:border-[#2d89ef]'}`}
                >
                  <button 
                    onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <div>
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight">{exp.role}</h4>
                      <p className="text-sm font-bold text-[#2d89ef]">{exp.company} • {exp.dates}</p>
                    </div>
                    <i className={`fa-solid fa-chevron-${expandedExp === exp.id ? 'up' : 'down'} text-gray-300`}></i>
                  </button>
                  {expandedExp === exp.id && (
                    <div className="px-6 pb-8 pt-2 border-t border-gray-50 animate-fade-in">
                      <ul className="space-y-4">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-4 text-sm text-gray-600">
                            <i className="fa-solid fa-circle-check text-[#00a300] mt-1 text-xs"></i>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 p-4 bg-gray-50 border-l-4 border-[#00a300] italic text-xs text-gray-500">
                        <span className="not-italic font-black text-gray-900 uppercase block mb-1">Key Impact:</span>
                        {exp.metrics}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education Timeline */}
          <section className="animate-fade-in">
            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest mb-12 border-l-8 border-[#ffc40d] pl-4">Education</h3>
            <div className="relative border-l-4 border-gray-100 pl-10 ml-4 space-y-16">
              {[
                { 
                  title: 'Diploma in Software Engineering', 
                  inst: 'Nairobi Technical College', 
                  year: '2024 - 2026', 
                  desc: 'Focus on AI Automation, Structured Programming, and Web Systems.',
                  color: 'bg-[#ffc40d]',
                  achievement: 'Top 10% of cohort in Systems Architecture.'
                },
                { 
                  title: 'Diploma in Secondary Education', 
                  inst: 'Nairobi Teaching Institute', 
                  year: '2024', 
                  desc: 'Focus on Communication Skills, Leadership, and Professional Ethics.',
                  color: 'bg-[#00a300]',
                  achievement: 'Awarded "Best Communicator" 2024.'
                },
              ].map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -left-[54px] top-1 w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all ${edu.color} group-hover:scale-125`}></div>
                  <div className="bg-white p-6 border group-hover:shadow-xl transition-all group-hover:-translate-y-1">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">{edu.year}</span>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-2">{edu.title}</h4>
                    <p className="text-sm font-bold text-[#00a300] mb-3">{edu.inst}</p>
                    <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">{edu.desc}</p>
                    <div className="text-[10px] font-black uppercase text-gray-400 flex items-center gap-2">
                       <i className="fa-solid fa-medal text-yellow-500"></i> {edu.achievement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Visualization */}
          <section className="animate-fade-in pb-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest border-l-8 border-[#9f00a7] pl-4">Technical Skills</h3>
              {hoverSkill && (
                <div className="bg-[#9f00a7] text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest animate-pulse">
                  {hoverSkill}
                </div>
              )}
            </div>
            <div className="bg-white border p-6 md:p-10 shadow-inner">
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SKILLS_DATA} layout="vertical" margin={{ left: 30, right: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={100} 
                      fontSize={11} 
                      stroke="#333" 
                      fontWeight="bold" 
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: '#f8f8f8' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          setHoverSkill(data.info);
                          return (
                            <div className="bg-white border-2 border-black/10 p-4 shadow-xl">
                              <p className="text-xs font-black uppercase mb-1">{data.name}</p>
                              <div className="flex items-center gap-2">
                                <div className="h-1 flex-1 bg-gray-100"><div className="h-full bg-black" style={{ width: `${data.level}%` }}></div></div>
                                <span className="text-[10px] font-black">{data.level}%</span>
                              </div>
                            </div>
                          );
                        }
                        setHoverSkill(null);
                        return null;
                      }}
                    />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]}>
                      {SKILLS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
                {[
                  { icon: 'fa-git-alt', label: 'Git / CI-CD' },
                  { icon: 'fa-figma', label: 'Figma' },
                  { icon: 'fa-docker', label: 'Docker' },
                  { icon: 'fa-aws', label: 'AWS Services' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 flex items-center justify-center text-gray-200 group-hover:text-gray-900 transition-colors mb-2">
                       <i className={`fa-brands ${s.icon} text-3xl`}></i>
                    </div>
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer / Quote - Stays fixed at the bottom of the window */}
      <div className="bg-gray-100 border-t py-4 px-8 flex justify-between items-center shrink-0">
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">RESUME REV 2025.04.12</span>
        <div className="flex gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Available for Hire</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;

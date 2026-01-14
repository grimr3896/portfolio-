
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

type AboutSection = 'bio' | 'skills' | 'timeline' | 'personality';

interface Trait {
  id: string;
  label: string;
  icon: string;
  color: string;
  desc: string;
  achievement: string;
  metric: string;
}

const TRAITS: Trait[] = [
  { id: 't1', label: 'Problem Solver', icon: 'fa-puzzle-piece', color: 'bg-[#00aba9]', desc: 'I analyze challenges and create efficient, scalable solutions.', achievement: 'Solved complex workflow automation for logistics clients.', metric: 'Reduced manual work by 60%' },
  { id: 't2', label: 'Innovative Thinker', icon: 'fa-lightbulb', color: 'bg-[#ffc40d]', desc: 'Pushing boundaries with AI-driven interface paradigms.', achievement: 'Created a browser-based OS portfolio with live tiles.', metric: '5+ cutting-edge systems built' },
  { id: 't3', label: 'Lifelong Learner', icon: 'fa-graduation-cap', color: 'bg-[#603cba]', desc: 'Constant growth through certifications and side-projects.', achievement: 'Completed AI Automation & Software Engineering diplomas.', metric: '10+ certs in 2024-25' },
  { id: 't4', label: 'Creative Designer', icon: 'fa-palette', color: 'bg-[#e67171]', desc: 'Where engineering logic meets artistic execution.', achievement: 'Designed gamified analytics for financial literacy.', metric: '75% increase in engagement' },
  { id: 't5', label: 'Adaptive & Resilient', icon: 'fa-bolt', color: 'bg-[#00a300]', desc: 'Pivoting effectively when requirements or tech stacks shift.', achievement: 'Pivoted legacy CRM to modern AI-agent stack in 2 weeks.', metric: 'Zero downtime migration' },
  { id: 't6', label: 'Analytical Mindset', icon: 'fa-chart-pie', color: 'bg-[#2d89ef]', desc: 'Data-driven decision making for system architecture.', achievement: 'Built real-time tracking for multi-user marketplaces.', metric: 'Handled 1k+ concurrent events' },
  { id: 't7', label: 'Team Collaborator', icon: 'fa-users', color: 'bg-[#9f00a7]', desc: 'Stronger as a team, building for communities.', achievement: 'Led multi-disciplinary dev teams at Tech Expo 2025.', metric: 'Co-authored 5 core features' },
  { id: 't8', label: 'Mentor / Teacher', icon: 'fa-chalkboard-user', color: 'bg-[#ee1111]', desc: 'Sharing knowledge to elevate the tech ecosystem.', achievement: 'Guided 3 interns into full-time engineering roles.', metric: '20+ hours mentoring monthly' },
  { id: 't9', label: 'Visionary Planner', icon: 'fa-rocket', color: 'bg-[#004a7c]', desc: 'Designing long-term scalable systems.', achievement: 'Architected automated digital marketplace infrastructure.', metric: 'Built for 10x scale growth' },
];

const SKILLS_RADAR = [
  { subject: 'Creativity', A: 92, fullMark: 100 },
  { subject: 'Logic', A: 98, fullMark: 100 },
  { subject: 'Speed', A: 95, fullMark: 100 },
  { subject: 'Teamwork', A: 88, fullMark: 100 },
  { subject: 'Adaptability', A: 96, fullMark: 100 },
  { subject: 'Innovation', A: 94, fullMark: 100 },
];

const AboutApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AboutSection>('bio');
  const [hoverKeyword, setHoverKeyword] = useState<string | null>(null);
  const [selectedTrait, setSelectedTrait] = useState<Trait | null>(null);

  const renderBio = () => (
    <div className="space-y-12 animate-fade-in pb-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-gray-800 uppercase tracking-widest border-l-8 border-[#2673ec] pl-4">Mission Statement</h3>
        <p className="text-2xl text-gray-600 leading-relaxed font-light">
          Hi! I’m Tony Langat. I specialize in 
          <span 
            className="mx-1 font-bold text-[#2673ec] cursor-pointer hover:bg-[#2673ec]/10 rounded px-1 transition-colors"
            onMouseEnter={() => setHoverKeyword('AI')}
            onMouseLeave={() => setHoverKeyword(null)}
          >AI automation</span>, 
          <span 
            className="mx-1 font-bold text-[#2673ec] cursor-pointer hover:bg-[#2673ec]/10 rounded px-1 transition-colors"
            onMouseEnter={() => setHoverKeyword('Systems')}
            onMouseLeave={() => setHoverKeyword(null)}
          >interactive web systems</span>, 
          and 
          <span 
            className="mx-1 font-bold text-[#2673ec] cursor-pointer hover:bg-[#2673ec]/10 rounded px-1 transition-colors"
            onMouseEnter={() => setHoverKeyword('UI')}
            onMouseLeave={() => setHoverKeyword(null)}
          >UI/UX design</span>. 
          I design digital experiences that are <span className="text-gray-900 font-medium">both functional and visually engaging</span>. 
          From portfolio systems to marketplaces and AI-driven platforms, I focus on delivering 
          <span className="italic text-[#2673ec]"> polished, scalable, and innovative solutions</span>.
        </p>
      </div>

      {hoverKeyword && (
        <div className="p-6 bg-[#eff4ff] border-2 border-dashed border-[#2673ec] rounded-xl animate-bounce-slow">
          <h4 className="font-black text-[#2673ec] uppercase text-sm mb-2">Featured {hoverKeyword} Project</h4>
          <p className="text-sm text-gray-600">
            {hoverKeyword === 'AI' && "AI Portfolio System: Integrating Gemini for smart context-aware navigation."}
            {hoverKeyword === 'Systems' && "Multi-user Marketplace: A high-concurrency e-commerce engine."}
            {hoverKeyword === 'UI' && "Metro Design System: A library of 50+ Windows-inspired components."}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-gray-50 border hover:bg-white hover:shadow-xl transition-all group">
          <i className="fa-solid fa-rocket text-4xl text-[#2673ec] mb-4 group-hover:scale-110 transition-transform"></i>
          <h4 className="text-lg font-black uppercase mb-2">Fast Deployment</h4>
          <p className="text-sm text-gray-500">I prioritize optimized workflows that get production-ready code into user hands quickly.</p>
        </div>
        <div className="p-8 bg-gray-50 border hover:bg-white hover:shadow-xl transition-all group">
          <i className="fa-solid fa-shield-halved text-4xl text-green-500 mb-4 group-hover:scale-110 transition-transform"></i>
          <h4 className="text-lg font-black uppercase mb-2">Reliable Architecture</h4>
          <p className="text-sm text-gray-500">Scalability isn't an afterthought. Every system is built to handle growth and high traffic.</p>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="flex flex-col md:flex-row gap-12 animate-fade-in pb-12">
      <div className="flex-1 bg-white p-6 border rounded shadow-inner min-h-[400px]">
        <h3 className="text-xl font-black text-gray-800 uppercase tracking-widest mb-8 border-b-4 border-[#2673ec] inline-block">Technical Radar</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_RADAR}>
              <PolarGrid stroke="#eee" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#333', fontSize: 12, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Tony" dataKey="A" stroke="#2673ec" fill="#2673ec" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full md:w-1/3 space-y-4">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Core Frameworks</h4>
        {[
          { cat: 'Development', skills: 'React, Next.js, TypeScript, Node', color: 'bg-blue-500' },
          { cat: 'Data', skills: 'PostgreSQL, Prisma, Supabase', color: 'bg-indigo-500' },
          { cat: 'Automation', skills: 'n8n, Python, Zapier, Make', color: 'bg-orange-500' },
          { cat: 'AI', skills: 'Gemini API, OpenAI, LangChain', color: 'bg-cyan-500' },
        ].map((item, i) => (
          <div key={i} className="p-4 border bg-gray-50 hover:bg-white transition-colors cursor-default">
            <div className="flex items-center gap-3 mb-1">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              <h5 className="font-bold text-sm text-gray-900">{item.cat}</h5>
            </div>
            <p className="text-[11px] text-gray-500 pl-5">{item.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="p-4 animate-fade-in pb-12">
      <h3 className="text-xl font-black text-gray-800 uppercase tracking-widest mb-12 border-b-4 border-yellow-400 inline-block">The Journey</h3>
      <div className="relative border-l-4 border-gray-100 pl-8 ml-4 space-y-12 pb-12">
        {[
          { year: '2026', title: 'Enterprise Automation Systems', desc: 'Designing multi-user AI workflows for regional logistics firms.', active: true },
          { year: '2025', title: 'Best Interactive Portfolio', desc: 'Award winner at Tech Expo Nairobi for innovative OS-style design.', active: false },
          { year: '2025', title: 'AI Portfolio Launch', desc: 'Released the first version of the WinPortfolio OS framework.', active: false },
          { year: '2024', title: 'TechStart Solutions Internship', desc: 'Developed responsive dashboards and optimized serverless functions.', active: false },
          { year: '2024', title: 'Diploma in Software Engineering', desc: 'Graduated top of class from Nairobi Technical College.', active: false },
        ].map((item, i) => (
          <div key={i} className="relative group cursor-pointer">
            <div className={`absolute -left-[44px] top-1 w-7 h-7 rounded-full border-4 border-white shadow-md transition-all ${item.active ? 'bg-[#2673ec] scale-125' : 'bg-gray-300 group-hover:bg-[#2673ec]'}`}></div>
            <div className="bg-white p-6 border group-hover:shadow-lg transition-all group-hover:-translate-y-1">
              <span className="text-xs font-black text-[#2673ec] uppercase tracking-widest mb-1 block">{item.year}</span>
              <h4 className="text-lg font-black text-gray-900 uppercase tracking-tighter mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonality = () => (
    <div className="space-y-12 animate-fade-in pb-12 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {TRAITS.map((trait) => (
          <button 
            key={trait.id} 
            onClick={() => setSelectedTrait(trait)}
            className={`${trait.color} p-6 flex flex-col justify-between aspect-square text-white group relative overflow-hidden transition-all duration-75 active:scale-95 hover:outline hover:outline-2 hover:outline-white/70 shadow-sm`}
          >
            <i className={`fa-solid ${trait.icon} text-4xl opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all drop-shadow-lg`}></i>
            <div className="text-left">
              <h4 className="font-black uppercase text-[10px] tracking-widest mb-1">{trait.label}</h4>
              <p className="text-[10px] opacity-0 group-hover:opacity-80 leading-tight transition-opacity duration-300 line-clamp-2">
                {trait.desc}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
          </button>
        ))}
      </div>

      <div className="p-8 bg-gray-50 border rounded shadow-inner">
        <h3 className="text-xl font-black text-gray-800 uppercase tracking-widest mb-8 border-b-4 border-cyan-500 inline-block">Character Radar</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_RADAR}>
              <PolarGrid stroke="#ddd" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#333', fontSize: 11, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Character" dataKey="A" stroke="#00aba9" fill="#00aba9" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trait Detail Modal */}
      {selectedTrait && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedTrait(null)}
        >
          <div 
            className="bg-white w-full max-w-lg shadow-2xl animate-scale-up overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className={`${selectedTrait.color} p-8 text-white relative`}>
              <button 
                onClick={() => setSelectedTrait(null)}
                className="absolute top-4 right-4 w-10 h-10 hover:bg-white/20 flex items-center justify-center text-xl transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <i className={`fa-solid ${selectedTrait.icon} text-6xl opacity-30 absolute -bottom-4 -right-4`}></i>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{selectedTrait.label}</h3>
              <p className="text-sm opacity-80 font-bold uppercase tracking-widest">Trait Profile</p>
            </div>
            <div className="p-8 space-y-8">
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed italic border-l-4 border-gray-100 pl-4">
                  "{selectedTrait.desc}"
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 border">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Key Achievement</h4>
                  <p className="text-xs font-bold text-gray-900">{selectedTrait.achievement}</p>
                </div>
                <div className="p-4 bg-gray-50 border">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Real-world Metric</h4>
                  <p className="text-xs font-bold text-[#2673ec]">{selectedTrait.metric}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTrait(null)}
                className="w-full bg-[#2673ec] text-white py-4 font-black uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Scrollable Container covering Header + Nav + Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        {/* Level 1 Header with Live Background */}
        <div className="relative overflow-hidden bg-[#2673ec] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shrink-0">
          {/* Live Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-white/10 metro-float"></div>
            <div className="absolute top-[40%] left-[60%] w-48 h-48 bg-white/10 metro-float" style={{ animationDelay: '-5s' }}></div>
            <div className="absolute bottom-[-15%] right-[5%] w-96 h-96 bg-white/10 metro-float" style={{ animationDelay: '-10s' }}></div>
            <div className="absolute top-[10%] right-[30%] w-32 h-32 bg-white/5 metro-float" style={{ animationDelay: '-15s' }}></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" 
                  alt="Tony Langat" 
                  className="w-32 h-32 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-[#2673ec]"></div>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">Tony Langat</h1>
                <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.3em] opacity-80">Digital Agent</h2>
            </div>
          </div>
          <div className="flex gap-4 relative z-10">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-all group">
              <i className="fa-brands fa-linkedin text-xl group-hover:scale-125 transition-transform"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-all group">
              <i className="fa-brands fa-github text-xl group-hover:scale-125 transition-transform"></i>
            </a>
            <button className="bg-white text-[#2673ec] px-6 py-2 rounded font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              PDF Resume
            </button>
          </div>
        </div>

        {/* Nav Tabs - Made Sticky to top of the scroll container */}
        <div className="sticky top-0 z-20 flex bg-white/90 backdrop-blur-md border-b overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'bio', label: 'Overview', icon: 'fa-user' },
            { id: 'skills', label: 'Capabilities', icon: 'fa-bolt' },
            { id: 'timeline', label: 'Experience', icon: 'fa-clock-rotate-left' },
            { id: 'personality', label: 'Personality', icon: 'fa-heart' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as AboutSection)}
              className={`px-8 py-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border-b-4 ${
                activeSection === tab.id ? 'bg-white border-[#2673ec] text-[#2673ec]' : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <i className={`fa-solid ${tab.icon} text-sm`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            {activeSection === 'bio' && renderBio()}
            {activeSection === 'skills' && renderSkills()}
            {activeSection === 'timeline' && renderTimeline()}
            {activeSection === 'personality' && renderPersonality()}
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="p-4 bg-gray-50 border-t text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] shrink-0">
        "Creating functional digital elegance since 2024"
      </div>
    </div>
  );
};

export default AboutApp;


import React, { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  category: 'Web' | 'AI' | 'Design' | 'Automation';
  desc: string;
  longDesc: string;
  problem: string;
  impact: string;
  tech: string[];
  img: string;
  gallery: string[];
  stats?: string;
  size: 'medium' | 'wide';
}

const PROJECTS: Project[] = [
  // --- AI & AUTOMATION ---
  {
    id: 'ai1',
    title: "AI Portfolio OS",
    category: 'AI',
    size: 'wide',
    desc: "Browser-based OS using Gemini for task management.",
    longDesc: "A complete desktop environment simulation built with React and the Gemini API. It handles window management, dynamic live tiles, and features a built-in AI assistant.",
    problem: "Static portfolios fail to engage high-end recruiters looking for technical depth and creative UI/UX thinking.",
    impact: "Showcased to 500+ developers; widely praised for OS-level state management complexity.",
    tech: ["React", "TypeScript", "Gemini API", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"],
    stats: "Featured Project"
  },
  {
    id: 'ai2',
    title: "n8n Workflow Builder",
    category: 'Automation',
    size: 'medium',
    desc: "Complex enterprise lead management automation.",
    longDesc: "A multi-platform automation suite connecting CRM systems, communication tools, and proprietary AI agents to score leads.",
    problem: "Manual lead processing was costing the client over 20 hours per week in clerical errors and delays.",
    impact: "Saved over 100+ hours monthly for sales teams; increased lead conversion by 15%.",
    tech: ["n8n", "OpenAI", "PostgreSQL", "Slack API"],
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'ai3',
    title: "AI Video Clipper",
    category: 'AI',
    size: 'medium',
    desc: "Auto-detection of viral moments in long videos.",
    longDesc: "Used computer vision and audio analysis to identify high-sentiment peaks in video streams for automatic social media clipping.",
    problem: "Content creators spend 70% of their time editing rather than strategizing or filming.",
    impact: "Increased content output by 5x for key beta testers.",
    tech: ["Python", "PyTorch", "FFmpeg", "FastAPI"],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'ai4',
    title: "Support Bot 24/7",
    category: 'AI',
    size: 'medium',
    desc: "Multilingual AI support with RAG integration.",
    longDesc: "A chatbot that uses Retrieval Augmented Generation to answer complex technical support questions from documentation.",
    problem: "High volume of repetitive support tickets was overwhelming the human support team.",
    impact: "Reduced support ticket volume by 60%; 90% accuracy in answering FAQ queries.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'ai5',
    title: "Smart Inbox AI",
    category: 'Automation',
    size: 'medium',
    desc: "AI-driven email categorization and auto-reply.",
    longDesc: "Analyzes incoming email sentiment and intent to provide suggested drafts and automatic folder routing.",
    problem: "C-suite executives spending 3+ hours daily just sorting through internal and external noise.",
    impact: "Reduced 'Inbox Zero' time by 45% for initial user base.",
    tech: ["Python", "Google Workspace API", "Mistral 7B"],
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400"]
  },

  // --- WEB DEVELOPMENT ---
  {
    id: 'web1',
    title: "Digital Marketplace",
    category: 'Web',
    size: 'wide',
    desc: "Scalable E-commerce for digital assets.",
    longDesc: "Full-stack marketplace with Stripe integration, instant delivery via signed URLs, and vendor analytics dashboards.",
    problem: "Existing marketplaces took excessive commissions and lacked modern interactive seller tools.",
    impact: "Processed $50k+ in GMV during initial 3-month pilot.",
    tech: ["Next.js", "Supabase", "Stripe", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"],
    stats: "10k+ Downloads"
  },
  {
    id: 'web2',
    title: "LMS Pro",
    category: 'Web',
    size: 'medium',
    desc: "Interactive learning with progress tracking.",
    longDesc: "A Learning Management System featuring video lessons, interactive quizzes, and automated certificate generation.",
    problem: "Corporate training engagement was below 20% due to uninspired and clunky platforms.",
    impact: "Increased training completion rates by 400% for Beta corp partners.",
    tech: ["React", "PostgreSQL", "AWS S3", "Express"],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'web3',
    title: "Faceless Video Hub",
    category: 'Web',
    size: 'medium',
    desc: "AI avatar generator for tutorial videos.",
    longDesc: "Integrates deepfake and TTS technology to create educational videos without requiring a camera-presenter.",
    problem: "Production costs for training videos were prohibitively high due to studio and talent fees.",
    impact: "Reduced production costs by 90% while maintaining high viewer retention.",
    tech: ["Node.js", "Synthesia API", "React", "MongoDB"],
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'web4',
    title: "Dynamic Portfolios",
    category: 'Web',
    size: 'medium',
    desc: "Drag-and-drop builder for creative resumes.",
    longDesc: "Allows users to generate full websites from their LinkedIn profiles in under 2 minutes.",
    problem: "Junior devs struggle with web design, leading to unprofessional first impressions.",
    impact: "Helping 200+ students launch their first professional site.",
    tech: ["Vue.js", "Firebase", "Puppeteer", "Tailwind"],
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'web5',
    title: "Booking Engine",
    category: 'Web',
    size: 'medium',
    desc: "Real-time scheduling for healthcare.",
    longDesc: "A secure patient portal for booking appointments, managing records, and tele-health integration.",
    problem: "Phone-based booking resulted in 30% no-show rates and scheduling conflicts.",
    impact: "Reduced no-show rates to under 5% via automated SMS/Email nudges.",
    tech: ["Next.js", "Prisma", "Twilio", "Zoom API"],
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"]
  },

  // --- UI/UX & DESIGN ---
  {
    id: 'des1',
    title: "Metro Design System",
    category: 'Design',
    size: 'wide',
    desc: "Comprehensive component library for OS-like apps.",
    longDesc: "A full design system focusing on typography, grid hierarchy, and bold motion primitives inspired by Microsoft's Metro.",
    problem: "Most 'modern' design systems feel identical; there is a lack of high-engagement nostalgic-futurist UI assets.",
    impact: "Adopted by 3 enterprise internal dashboard teams for new data suites.",
    tech: ["Figma", "Storybook", "React", "CSS Modules"],
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: 'des2',
    title: "Gamified Dashboard",
    category: 'Design',
    size: 'medium',
    desc: "RPG-inspired financial tracking UI.",
    longDesc: "Turns savings goals into 'quests' and spending into 'boss battles' to improve financial literacy in youth.",
    problem: "Traditional banking apps are intimidating and unengaging for younger demographics.",
    impact: "Increased daily app check-ins by 75% compared to standard finance UIs.",
    tech: ["Figma", "Adobe After Effects", "Spline"],
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'des3',
    title: "AI Co-Designer",
    category: 'Design',
    size: 'medium',
    desc: "LLM plugin for rapid layout brainstorming.",
    longDesc: "A Figma plugin that generates full layout mockups based on a text prompt describing user personas.",
    problem: "The 'blank canvas' phase of design takes up 30% of project timelines.",
    impact: "Reduced initial wireframing time by 50% for surveyed design teams.",
    tech: ["OpenAI", "Figma API", "React"],
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'des4',
    title: "Immersive Stories",
    category: 'Design',
    size: 'medium',
    desc: "WebGL scroll-triggered narrative experience.",
    longDesc: "A web-based storytelling platform that uses shaders and 3D models to guide users through complex histories.",
    problem: "Educational content on the web is often static and fails to captivate visual learners.",
    impact: "Average session duration increased from 45 seconds to over 6 minutes.",
    tech: ["Three.js", "GSAP", "React-Three-Fiber"],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: 'des5',
    title: "Custom Dash Templates",
    category: 'Design',
    size: 'medium',
    desc: "Marketplace for high-density data views.",
    longDesc: "Pre-built, accessible dashboard layouts for complex industrial IoT monitoring.",
    problem: "Industrial UIs are often built without accessibility or UX in mind, leading to operator fatigue.",
    impact: "Used in 2 smart factory pilot projects to reduce operator error rates.",
    tech: ["React", "D3.js", "WCAG 2.1"],
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400",
    gallery: ["https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=400"]
  }
];

const ProjectsApp: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter || (filter === 'Automation' && p.category === 'Automation'));
  }, [filter]);

  return (
    <div className="h-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Category Header */}
      <div className="bg-white border-b px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex gap-1">
          {['All', 'Web', 'AI', 'Automation', 'Design'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all ${
                filter === cat ? 'bg-[#2d89ef] text-white' : 'bg-transparent text-gray-400 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative group flex-1 max-w-[180px]">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-gray-100 border-none px-3 py-1.5 text-[10px] outline-none focus:ring-1 focus:ring-[#2d89ef] transition-all"
          />
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 auto-rows-[120px] md:auto-rows-[160px]">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className={`
                group relative cursor-pointer overflow-hidden transition-all duration-200 active:scale-95
                ${p.size === 'wide' ? 'col-span-2' : 'col-span-1'}
              `}
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-[#2d89ef]/80 transition-colors"></div>
              
              <div className="absolute bottom-2 left-3 right-3 text-white">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60 block mb-1">{p.category}</span>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-tight leading-tight">{p.title}</h3>
              </div>

              {p.stats && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[8px] font-black px-1.5 py-0.5 uppercase tracking-tighter">
                  {p.stats}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 bg-black/70 backdrop-blur-md animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Left/Top: Visuals */}
            <div className="lg:w-3/5 relative bg-black">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-contain" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {selectedProject.gallery.map((g, i) => (
                  <div key={i} className="w-12 h-12 border border-white/20 opacity-50 hover:opacity-100 cursor-pointer overflow-hidden">
                    <img src={g} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right/Bottom: Content */}
            <div className="lg:w-2/5 p-8 lg:p-12 space-y-8 flex flex-col bg-white overflow-y-auto">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-black text-[#2d89ef] uppercase tracking-[0.4em] mb-3 block">{selectedProject.category}</span>
                  <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  <i className="fa-solid fa-xmark text-3xl"></i>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">The Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedProject.longDesc}</p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Problem Solved</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-orange-400 pl-4">"{selectedProject.problem}"</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Real-world Impact</h4>
                  <p className="text-gray-900 font-bold text-sm leading-relaxed">{selectedProject.impact}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="bg-gray-50 border border-gray-100 px-2 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 flex gap-3 mt-auto">
                <button className="flex-1 bg-black text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2d89ef] transition-colors">
                  View Demo
                </button>
                <button className="flex-1 border border-gray-200 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:border-black transition-colors">
                  Source
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsApp;

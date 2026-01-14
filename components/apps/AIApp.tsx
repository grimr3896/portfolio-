
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIApp: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hello! I'm Cortana, Tony's digital agent. I can tell you about his expertise in AI automation, his recent projects in Nairobi, or details from his CV!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are Cortana, a helpful AI assistant for Tony Langat's portfolio. Tony is a Digital Agent and System Designer from Nairobi, Kenya. He is an expert in React, TypeScript, Node.js, and AI automation (n8n, OpenAI). He won 'Best Interactive Portfolio' at Tech Expo Nairobi 2025. Answer professionally and focus on Tony's technical skills and achievements.",
        },
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "System Error: Unable to connect to neural link." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#001e30] text-white">
      <div className="flex-1 overflow-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-sm text-sm ${
              m.role === 'user' ? 'bg-[#00aba9] text-white' : 'bg-white/10 text-gray-200 border border-white/10'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-3 rounded-sm animate-pulse flex gap-1">
              <div className="w-1.5 h-1.5 bg-[#00aba9] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#00aba9] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#00aba9] rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Tony's work..."
          className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm focus:ring-1 focus:ring-[#00aba9] outline-none"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="w-10 h-10 bg-[#00aba9] flex items-center justify-center hover:brightness-110 disabled:opacity-50 transition-all"
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default AIApp;

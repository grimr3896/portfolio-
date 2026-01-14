
import React, { useState } from 'react';

const ContactApp: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
          <i className="fa-solid fa-check"></i>
        </div>
        <h2 className="text-2xl font-bold">Message Sent!</h2>
        <p className="text-gray-600">I'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setSent(false)}
          className="text-blue-500 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Your Name</label>
            <input 
              required
              type="text" 
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
          <select className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm">
            <option>General Inquiry</option>
            <option>Project Collaboration</option>
            <option>Job Opportunity</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
          <textarea 
            required
            rows={4}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none" 
            placeholder="Hi Jane, I'd like to talk about..."
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-paper-plane"></i> Send Message
        </button>
      </form>

      <div className="mt-12 flex justify-center gap-6 border-t pt-8">
        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-xl">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactApp;

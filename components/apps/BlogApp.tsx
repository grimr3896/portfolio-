
import React from 'react';

const BLOG_POSTS = [
  {
    title: "The Future of Web Interfaces",
    date: "Oct 24, 2024",
    excerpt: "Exploring how AI-driven adaptive UIs are changing the way we interact with the web.",
    category: "Design"
  },
  {
    title: "Mastering TypeScript Generics",
    date: "Sep 12, 2024",
    excerpt: "A deep dive into complex generic patterns for robust enterprise applications.",
    category: "Development"
  },
  {
    title: "Serverless Architecture at Scale",
    date: "Aug 05, 2024",
    excerpt: "Lessons learned from migrating a high-traffic e-commerce platform to Lambda.",
    category: "Cloud"
  }
];

const BlogApp: React.FC = () => {
  return (
    <div className="p-6 bg-white min-h-full">
      <header className="mb-8 border-b pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-gray-900 uppercase">The Dev Log</h1>
          <p className="text-gray-500 text-sm">Thoughts on engineering and design.</p>
        </div>
        <div className="flex gap-2">
           <button className="p-2 text-gray-400 hover:text-blue-500"><i className="fa-solid fa-magnifying-glass"></i></button>
           <button className="p-2 text-gray-400 hover:text-blue-500"><i className="fa-solid fa-bell"></i></button>
        </div>
      </header>
      
      <div className="space-y-8">
        {BLOG_POSTS.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                {post.category}
              </span>
              <time className="text-[10px] font-medium text-gray-400 uppercase">
                {post.date}
              </time>
            </div>
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              READ MORE <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </article>
        ))}
      </div>
      
      <footer className="mt-12 pt-8 border-t text-center">
        <button className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
          VIEW ALL POSTS
        </button>
      </footer>
    </div>
  );
};

export default BlogApp;

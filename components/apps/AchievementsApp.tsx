
import React from 'react';

const ACHIEVEMENTS = [
  { title: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2023" },
  { title: "Top Contributor", issuer: "GitHub Universe", date: "2022" },
  { title: "Innovator Award", issuer: "TechCorp", date: "2021" },
  { title: "B.S. Computer Science", issuer: "Stanford University", date: "2020" },
];

const AchievementsApp: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ACHIEVEMENTS.map((ach, i) => (
        <div key={i} className="bg-white p-4 border flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{ach.title}</h3>
            <p className="text-xs text-gray-500">{ach.issuer} • {ach.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsApp;

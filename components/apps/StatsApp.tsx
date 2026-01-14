
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA = [
  { name: 'React', level: 95, color: '#61dafb' },
  { name: 'TypeScript', level: 90, color: '#3178c6' },
  { name: 'Node.js', level: 85, color: '#68a063' },
  { name: 'AWS', level: 80, color: '#ff9900' },
  { name: 'UI Design', level: 75, color: '#f24e1e' },
  { name: 'Python', level: 70, color: '#3776ab' },
];

const StatsApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6 h-full flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Uptime', value: '99.9%', color: 'text-green-600' },
          { label: 'Caffeine', value: 'High', color: 'text-yellow-600' },
          { label: 'Bugs', value: '4', color: 'text-red-600' },
          { label: 'Commit Count', value: '1.2k', color: 'text-blue-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-3 rounded border text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-4 rounded border">
        <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase flex items-center gap-2">
          <i className="fa-solid fa-microchip"></i> Processor Capability (Skills)
        </h3>
        <div className="h-full min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={80} fontSize={12} stroke="#333" />
              <Tooltip 
                cursor={{ fill: '#f3f4f6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="level" radius={[0, 4, 4, 0]}>
                {DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsApp;

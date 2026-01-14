
import React from 'react';

const DELETED_ITEMS = [
  { name: 'OldPortfolio_v1.zip', size: '24 MB', date: '2 years ago' },
  { name: 'PHP_Guestbook.php', size: '12 KB', date: '5 years ago' },
  { name: 'Legacy_API_Server', size: '1.2 GB', date: '1 year ago' },
];

const RecycleBinApp: React.FC = () => {
  return (
    <div className="p-0 bg-white h-full flex flex-col">
      <div className="bg-gray-100 p-2 text-xs font-bold border-b flex justify-between px-4 text-gray-500">
        <span>Name</span>
        <div className="flex gap-12">
          <span>Size</span>
          <span>Deleted On</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {DELETED_ITEMS.map((item, i) => (
          <div key={i} className="flex justify-between items-center p-3 hover:bg-blue-50 border-b px-4 text-sm group cursor-default">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-file text-gray-400 group-hover:text-blue-500"></i>
              <span className="text-gray-700">{item.name}</span>
            </div>
            <div className="flex gap-10 text-gray-400">
              <span className="w-16 text-right">{item.size}</span>
              <span className="w-24 text-right">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 border-t flex justify-end">
        <button className="text-xs font-bold text-red-600 hover:bg-red-50 px-3 py-1 rounded">Empty Recycle Bin</button>
      </div>
    </div>
  );
};

export default RecycleBinApp;

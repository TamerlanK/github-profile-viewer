// Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-t-[3px] border border-t-slate-900 border-slate-400 rounded-full w-12 h-12 animate-spin mb-4"></div>
      <p className="text-gray-300 text-lg font-semibold">Loading user details...</p>
    </div>
  );
};

export default Loader;

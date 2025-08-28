import { company } from "@/data/company";
import React from "react";

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-800 text-center bg-clip-text text-transparent mb-6">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* MISSION */}
            <div className="relative"></div>
          </div>
          {/* Quotes */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

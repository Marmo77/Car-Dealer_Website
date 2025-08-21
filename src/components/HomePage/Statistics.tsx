import React from "react";
// import { statistics } from "@/data/company";
interface StatisticsItem {
  id: number;
  title: string;
  value: string;
}

interface StatisticsProps {
  stats: StatisticsItem[];
}

const Statistics = ({ stats }: StatisticsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {item.value}
              </div>
              <div className="text-gray-600 font-montserrat">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

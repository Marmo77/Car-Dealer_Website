import React from "react";
import {
  type StatisticsItem,
  type StatsGuaranteesProps,
} from "@/data/statistics";

interface StatisticsProps {
  stats: StatisticsItem[];
  Guarantees: StatsGuaranteesProps[];
}

const Statistics = ({ stats, Guarantees }: StatisticsProps) => {
  return (
    // <section className="py-16 bg-gray-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    //       {stats.map((item) => (
    //         <div className="text-center">
    //           <div className="text-3xl font-bold text-gray-900 mb-2">
    //             {item.value}
    //           </div>
    //           <div className="text-gray-600 font-montserrat">{item.title}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 bg-popover">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold space-x-0.5 font-montserrat mb-2">
                <span>{stat.value}</span>
                <span className="text-highlight">{stat.prefix}</span>
              </div>
              <p className="text-light font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-7xl flex mx-auto justify-center">
          <ul className="grid md:grid-cols-2 md:gap-6 grid-cols-1 gap-8 lg:grid-cols-4 w-full text-center">
            {Guarantees.map((stat) => (
              <li key={stat.id} className="font-medium space-x-2 font-raleway">
                <span className="text-highlight">✓</span>
                <span>{stat.testimonial}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

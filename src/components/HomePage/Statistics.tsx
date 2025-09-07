import React from "react";
import { CheckCircle } from "lucide-react";
import {
  type StatisticsItem,
  type StatsGuaranteesProps,
} from "@/types/Statistics";

interface StatisticsProps {
  stats: StatisticsItem[];
  Guarantees: StatsGuaranteesProps[];
}

const Statistics = ({ stats, Guarantees }: StatisticsProps) => {
  return (
    <section className="py-16 bg-popover">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold space-x-0.5 font-montserrat mb-2">
                <span>{stat.value}</span>
                <span className="text-highlight">{stat.suffix ?? "+"}</span>
              </div>
              <p className="text-light font-montserrat text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-7xl flex mx-auto justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {Guarantees.map((stat) => (
              <li
                key={stat.id}
                className="flex items-start gap-2 justify-center text-center"
              >
                <CheckCircle className="h-6 w-6 text-highlight flex-shrink-0 mt-0.5" />
                <span className="font-raleway font-medium text-[15px] sm:text-[16px] leading-relaxed">
                  {stat.testimonial}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

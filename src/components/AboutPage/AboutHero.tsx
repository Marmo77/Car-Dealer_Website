import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import AboutStats from "@/assets/imgs/About_stats.jpg";
import { statistics } from "@/data/statistics";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {company[0].companyName}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              For over a decade, we've been connecting car buyers with their
              perfect vehicles, building trust through transparency, quality,
              and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {}}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 group cursor-pointer"
              >
                Explore Our Cars
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => {}}
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white hover:text-blue-600 px-8 py-4"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="relative">
            <img
              src={AboutStats}
              alt="Modern car showroom"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold">
                {statistics[3].value}
                {statistics[3].suffix}
              </div>
              <div className="text-sm opacity-90">
                {statistics[3].label.split(" ").slice(0, 1)} of{" "}
                {statistics[3].label.split(" ").slice(1).join(" ")}
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white/15 flex flex-col items-end backdrop-blur-md text-card p-4 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">
                {statistics[1].value}
                {statistics[1].suffix}
              </div>
              <div className="text-sm opacity-90">
                Satisfied {statistics[1].label.split(" ").slice(0, 1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

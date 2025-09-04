import React from "react";
import { Card, CardContent } from "../ui/card";
import { coreValues } from "@/data/achievements";

const CoreValues = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-raleway text-3xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every interaction and drive our commitment
            to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="group">
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-8 text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 duration-300 transition-colors">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-raleway text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-montserrat">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

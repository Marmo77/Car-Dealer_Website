import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { achievements } from "@/data/achievements";

const Awards = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-raleway text-3xl font-bold text-gray-900 mb-6">
            Awards & Recognition
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders
            and satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="group">
                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-raleway text-xl font-bold text-gray-900">
                            {achievement.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-600 hover:bg-blue-100"
                          >
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="font-montserrat text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
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

export default Awards;

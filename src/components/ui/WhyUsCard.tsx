import React from "react";
import { Card, CardContent } from "./card";
import { type BenefitsProps } from "@/data/benefits";

const WhyUsCard = ({ title, description, icon }: BenefitsProps) => {
  const Icon = icon;
  return (
    <Card className="w-full text-center shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="font-raleway text-xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 leading-relaxed font-montserrat px-6">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default WhyUsCard;

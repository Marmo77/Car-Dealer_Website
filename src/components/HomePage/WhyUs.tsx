import { useEffect } from "react";
import WhyUsCard from "../ui/whyusCard";
import { company } from "@/data/company";
import { benefits } from "@/data/benefits";

export const WhyUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose {company[0].companyName}?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're committed to providing an exceptional car buying experience with
          transparency, quality, and customer satisfaction at the forefront.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* const Icon = benefit.icon */}
        {benefits.map((benefits, index) => (
          <WhyUsCard key={index} {...benefits} />
        ))}
      </div>
    </section>
  );
};
export default WhyUs;

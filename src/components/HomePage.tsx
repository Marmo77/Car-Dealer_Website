import React from "react";
import Hero from "./HomePage/Hero";
import Statistics from "./HomePage/Statistics";

import { statistics, StatsGuarantees } from "@/data/statistics";
import Partners from "./HomePage/Partners";
import FeaturedCars from "./HomePage/FeaturedCars";
import WhyUs from "./HomePage/WhyUs";
import CTAhome from "./HomePage/CTAhome";

interface HomePageProps {
  featuredCars: any[];
  isLoading: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ featuredCars, isLoading }) => {
  return (
    <section className="flex grow flex-col gap-2">
      <Hero />
      <Statistics stats={statistics} Guarantees={StatsGuarantees} />{" "}
      {/* tutaj featrued cars */}
      <FeaturedCars featuredCars={featuredCars} isLoading={isLoading} />
      {/*z tego zrobic funkcje do searchingin <CarSelling /> */}
      {/* Why choose us? + cta to aboutUs */}
      <WhyUs />
      {/* Partnerzy */}
      <Partners />
      {/* CTA - "ready to find your next car, "discover all car" + Contact specialist (cta to /contact)" */}
      <CTAhome />
      {/* Newsletter */}
    </section>
  );
};

export default HomePage;

import React from "react";
import CarSelling from "./HomePage/CarSelling";
import Hero from "./HomePage/Hero";
import Statistics from "./HomePage/Statistics";

import { statistics, StatsGuarantees } from "@/data/company";
import Partners from "./HomePage/Partners";
import FeaturedCars from "./HomePage/FeaturedCars";
import WhyUs from "./HomePage/WhyUs";

const HomePage = () => {
  return (
    <section className="flex grow flex-col gap-2">
      <Hero />
      <Statistics stats={statistics} Guarantees={StatsGuarantees} />{" "}
      {/* Do zmiany - bardziej zachęcająco */}
      {/* tutaj featrued cars */} <FeaturedCars />
      {/*z tego zrobic funkcje do searchingin <CarSelling /> */}
      {/* Why choose us? + cta to aboutUs */} <WhyUs />
      <Partners />
      {/* CTA - "ready to find your next car, "discover all car" + Contact specialist (cta to /contact)" */}
      {/* Newsletter */}
    </section>
  );
};

export default HomePage;

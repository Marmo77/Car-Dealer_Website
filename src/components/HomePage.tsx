import React from "react";
import CarSelling from "./HomePage/CarSelling";
import Hero from "./HomePage/Hero";
import Statistics from "./HomePage/Statistics";

import { statistics } from "@/data/company";
import Partners from "./HomePage/Partners";
import FeaturedCars from "./HomePage/FeaturedCars";

const HomePage = () => {
  return (
    <section className="flex grow flex-col gap-2">
      <Hero />
      {/* <CarSelling /> */}
      <Statistics stats={statistics} /> {/* Do zmiany - bardziej zachęcająco */}
      {/* tutaj featrued cars */} <FeaturedCars />
      {/* <CarSelling /> */}
      {/* Why choose us? + cta to aboutUs */}
      <Partners />
      {/* CTA - "ready to find your next car, "discover all car" + Contact specialist (cta to /contact)" */}
      {/* Newsletter */}
    </section>
  );
};

export default HomePage;

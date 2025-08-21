import React from "react";
import CarSelling from "./HomePage/CarSelling";
import Hero from "./HomePage/Hero";
import Statistics from "./HomePage/Statistics";

import { statistics } from "@/data/company";
import Partners from "./HomePage/Partners";

const HomePage = () => {
  return (
    <section className="flex grow flex-col gap-2">
      <Hero />
      {/* <CarSelling /> */}
      <Statistics stats={statistics} />
      {/* tutaj featrued cars */}
      {/* <CarSelling /> */}
      <Partners />
    </section>
  );
};

export default HomePage;

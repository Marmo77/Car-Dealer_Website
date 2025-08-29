import React from "react";
import CarCard from "./CarCard";
import { Button } from "../ui/button";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";

import type { Car } from "@/types/Car";
import Loading from "../ui/loading";

interface FeaturedCarsProps {
  featuredCars: Car[];
  isLoading: boolean;
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({
  featuredCars,
  isLoading,
}) => {
  const handleNavigation = useNavigateHandler();
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Premium Cars
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Handpicked selection of our finest vehicles, each one thoroughly
            inspected and certified for your peace of mind.
          </p>
        </div>
        {isLoading ? (
          <Loading text="Loading featured cars..." />
        ) : (
          <div className="flex max-md:flex-col gap-6 justify-center">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        )}
        <div className="py-12 text-center">
          <Button
            variant={"custom1"}
            className="px-7 py-5"
            onClick={() => handleNavigation("/listings")}
          >
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;

import { featuredCars } from "@/appwrite";
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCars = () => {
  const [featureCars, setFeatureCars] = useState<any[]>();

  useEffect(() => {
    const fetch_cars = async () => {
      const result = await featuredCars();
      setFeatureCars(result);
    };
    fetch_cars();
  }, []);

  const navigation = useNavigate();

  const handleAllCars = () => {
    navigation("/listings");
  };
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
        <div className="flex max-md:flex-col gap-6 justify-center">
          {featureCars?.map((car, index) => (
            <CarCard id={index} {...car} />
          ))}
        </div>
        <div className="py-12 text-center">
          <Button
            variant={"custom1"}
            className="px-7 py-5"
            onClick={handleAllCars}
          >
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;

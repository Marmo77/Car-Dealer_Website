import React from "react";
import CarSelling from "../HomePage/CarSelling";
import { company } from "@/data/company";
import type { CarDocument } from "@/types/Car";

const AllCars = ({
  searchTerm,
  sortBy,
  filters,
  isLoading,
  setIsLoading,
  setTotalCars,
  viewMode,
}: {
  searchTerm: string;
  sortBy: string;
  filters: {
    brand: string[];
    priceRange: [number, number];
  };
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalCars: React.Dispatch<React.SetStateAction<number>>;
  viewMode: "grid" | "list";
}) => {
  return (
    <div className="col-span-2">
      <div>
        <CarSelling
          limit={company[0].limitCarLoad}
          searchTerm={searchTerm}
          sortBy={sortBy}
          filters={filters}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setTotalCars={setTotalCars}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default AllCars;

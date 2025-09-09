import React from "react";
import CarSelling from "../HomePage/CarSelling";
import { company } from "@/data/company";

const AllCars = ({
  searchTerm,
  sortBy,
  filters,
  isLoading,
  setIsLoading,
  setTotalCars,
  viewMode,
  extraFilters,
}: {
  searchTerm: string;
  sortBy: string;
  filters: {
    brand: string[];
    priceRange: [number, number];
  };
  extraFilters: {
    mileage: number;
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
          extraFilters={extraFilters}
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

import React from "react";
import CarSelling from "../HomePage/CarSelling";
import { company } from "@/data/company";
import type { CarDocument } from "@/types/Car";

const AllCars = ({
  searchTerm,
  sortBy,
  filters,
}: {
  searchTerm: string;
  sortBy: string;
  filters: {
    brand: string[];
    priceRange: [number, number];
  };
}) => {
  return (
    <div className="col-span-2">
      <div>
        <CarSelling
          limit={company[0].limitCarLoad}
          searchTerm={searchTerm}
          sortBy={sortBy}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default AllCars;

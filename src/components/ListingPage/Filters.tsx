import React from "react";
import { Card, CardContent } from "../ui/card";
import { Filter } from "lucide-react";
import { FilterContent } from "./FilterContent";

const Filters = ({
  filters,
  setFilters,
  clearFilters,
}: {
  filters: {
    brand: string[];
    priceRange: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      brand: string[];
      priceRange: [number, number];
    }>
  >;
  clearFilters: () => void;
}) => {
  // LITTLE BONUS RANDOM THING :D
  // const FilterRollOut = () => {
  //   const doc = document.querySelector(".filters");
  //   doc?.classList.toggle("rotate-90");
  //   const brandFilter = document.querySelector(".brand-filter");
  //   brandFilter?.classList.toggle("hidden");
  // };
  return (
    <div className="flex flex-col gap-8 sticky top-25">
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Card className="">
          <CardContent className="px-6 py-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <Filter
                className="h-5 w-5 text-gray-500 filters transition-all duration-300
                ease-in-out cursor-pointer"
                // onClick={() => FilterRollOut()}
              />
            </div>
            <div className="brand-filter ease-in-out duration-500">
              <FilterContent
                filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Mobile Filters */}
      <div className="lg:hidden">
        <div className="mt-6">
          <FilterContent
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

import React, { useState } from "react";
import BrowseMenu from "./ListingPage/BrowseMenu";
import Filters from "./ListingPage/Filters";
import AllCars from "./ListingPage/AllCars";

const ListingPage = () => {
  const [totalCars, setTotalCars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // filters
  const [filters, setFilters] = React.useState<{
    brand: string[];
    priceRange: number[];
  }>({
    brand: [],
    priceRange: [0, 250000],
  });

  const clearFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, 250000],
    });
  };
  return (
    <section className="bg-card py-16 mx-auto w-full">
      <div className="max-w-7xl px-12 sm:px-6 mx-auto grid grid-cols-4">
        <div className="col-span-4">
          <BrowseMenu
            totalCars={totalCars}
            isLoading={isLoading}
            setTotalCars={setTotalCars}
            setIsLoading={setIsLoading}
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </div>
        <div className="col-span-1">
          <Filters
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
          />
        </div>
        <div className="col-span-3">
          <AllCars totalCars={totalCars!} />
        </div>
      </div>
    </section>
  );
};

export default ListingPage;

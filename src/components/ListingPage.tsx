import { useEffect, useState } from "react";
import BrowseMenu from "./ListingPage/BrowseMenu";
import Filters from "./ListingPage/Filters";
import AllCars from "./ListingPage/AllCars";
import { useSearchParams } from "react-router-dom";

const ListingPage = () => {
  // ########## DRIVING STATE TO URL

  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<{
    brand: string[];
    priceRange: [number, number];
  }>({
    brand: searchParams.getAll("brand"),
    priceRange: [
      Number(searchParams.get("min") ?? 0),
      Number(searchParams.get("max") ?? 250000),
    ],
  });
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") ?? ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") ?? "price-low");

  //push state to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (sortBy) params.append("sort", sortBy);
    params.append("min", filters.priceRange[0].toString());
    params.append("max", filters.priceRange[1].toString());
    for (let b of filters.brand) params.append("brand", b);
    if (searchTerm) params.append("search", searchTerm);
    setSearchParams(params);
  }, [filters, searchTerm, sortBy]);

  //###########################
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // clear All Filters
  const clearFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, 250000],
    });
    setSortBy("price-low");
    setSearchTerm("");
    setSearchParams({});
  };

  return (
    <section className="bg-card py-16 mx-auto w-full">
      <div className="max-w-7xl px-12 sm:px-6 mx-auto grid grid-cols-4">
        <div className="col-span-4">
          <BrowseMenu
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
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
          <AllCars searchTerm={searchTerm} sortBy={sortBy} filters={filters} />
        </div>
      </div>
    </section>
  );
};

export default ListingPage;

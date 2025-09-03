import { useEffect, useState } from "react";
import BrowseMenu from "./ListingPage/BrowseMenu";
import Filters from "./ListingPage/Filters";
import AllCars from "./ListingPage/AllCars";
import { useSearchParams } from "react-router-dom";
import ScrollTopButton from "./ui/scrolltop";

const ListingPage = () => {
  //viewport scroll top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    for (let b of filters.brand) params.append("brand", b.toLowerCase());
    if (searchTerm) params.append("search", searchTerm);
    setSearchParams(params);
  }, [filters, searchTerm, sortBy]);

  //###########################
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // view mode
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // clear All Filters
  const clearFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, 250000],
    });
    setSortBy("price-low");
    setSearchTerm("");
    setViewMode("grid");
    setSearchParams({});
  };

  // Total Cars Number
  const [totalCars, setTotalCars] = useState<number>(0);

  return (
    <>
      <section className="bg-card py-16 mx-auto w-full">
        <div className="max-w-7xl px-12 sm:px-6 mx-auto grid grid-cols-4">
          <div className="col-span-4">
            <BrowseMenu
              sortBy={sortBy}
              setSortBy={setSortBy}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              totalCars={totalCars}
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
          <div className={`col-span-3`}>
            <AllCars
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
      </section>
      <ScrollTopButton showScrollTop={showScrollTop} />
    </>
  );
};

export default ListingPage;

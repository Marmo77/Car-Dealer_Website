import { useEffect, useState } from "react";
import BrowseMenu from "./ListingPage/BrowseMenu";
import Filters from "./ListingPage/Filters";
import AllCars from "./ListingPage/AllCars";
import { useSearchParams } from "react-router-dom";
import ScrollTopButton from "./ui/scrolltop";
import { company } from "@/data/company";
import Paging from "./ListingPage/Paging";

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

  const [extraFilters, setExtraFilters] = useState({
    mileage: Number(searchParams.get("mileage") ?? 0),
  });

  // Pagination state (1-based)
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page") ?? 1) || 1
  );

  //push state to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (sortBy) params.append("sort", sortBy);
    params.append("min", filters.priceRange[0].toString());
    params.append("max", filters.priceRange[1].toString());
    for (let b of filters.brand) params.append("brand", b.toLowerCase());
    if (searchTerm) params.append("search", searchTerm);
    if (extraFilters.mileage !== 0) {
      params.append("mileage", extraFilters.mileage.toString());
    }
    // push page to URL, always
    params.append("page", String(page));
    setSearchParams(params);
  }, [filters, searchTerm, sortBy, extraFilters, page]);
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchTerm, sortBy, extraFilters]);
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
    setExtraFilters({ mileage: 0 });
  };

  // Total Cars Number
  const [totalCars, setTotalCars] = useState<number>(0);
  const totalPages = Math.max(
    1,
    Math.ceil(totalCars / company[0].limitCarLoad)
  );

  return (
    <>
      <section className="bg-card py-16 mx-auto w-full">
        <div className="max-w-7xl max-md:flex max-md:flex-col px-12 sm:px-6 mx-auto lg:grid lg:grid-cols-4">
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
            <div className="flex items-center justify-between mt-2">
              <Paging page={page} totalPages={totalPages} setPage={setPage} />
            </div>
          </div>
          <div className="col-span-1">
            <Filters
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
              extraFilters={extraFilters}
              setExtraFilters={setExtraFilters}
              // applyExtraFilters={applyExtraFilters}
            />
          </div>
          <div className={`col-span-3`}>
            <AllCars
              searchTerm={searchTerm}
              sortBy={sortBy}
              filters={filters}
              extraFilters={extraFilters}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setTotalCars={setTotalCars}
              viewMode={viewMode}
              page={page}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <Paging page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </section>
      <ScrollTopButton showScrollTop={showScrollTop} />
    </>
  );
};

export default ListingPage;

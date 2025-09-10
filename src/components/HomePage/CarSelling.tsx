import { getFilteredCars } from "@/appwrite";
import CarCard from "@/components/HomePage/CarCard";
import { useEffect, useState, useMemo, useCallback } from "react";
import type { CarDocument } from "@/types/Car";
import Loading from "../ui/loading";

const CarSkeleton = ({ viewMode }: { viewMode: "grid" | "list" }) => (
  <div
    className={`animate-pulse bg-card rounded-xl shadow-lg ${
      viewMode === "list" ? "flex" : ""
    }`}
  >
    <div
      className={`bg-gray-300 rounded-t-xl ${
        viewMode === "list" ? "w-48 h-32" : "h-48"
      }`}
    ></div>
    <div className="p-4 flex-1">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

export default function CarSelling({
  limit,
  searchTerm,
  sortBy,
  filters,
  isLoading,
  setIsLoading,
  setTotalCars,
  viewMode,
  extraFilters,
  page,
}: {
  limit: number;
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
  extraFilters: {
    mileage: number;
  };
  page: number;
}) {
  const [cars, setCars] = useState<CarDocument[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Memoize filter params to prevent unnecessary re-renders
  const filterParams = useMemo(
    () => ({
      brand: filters.brand,
      searchTerm,
      priceRange: filters.priceRange,
      sortBy,
      mileage: extraFilters.mileage,
      page,
      limit,
    }),
    [
      filters.brand,
      searchTerm,
      filters.priceRange,
      sortBy,
      extraFilters.mileage,
      page,
      limit,
    ]
  );

  // Memoized fetch function
  const fetchCars = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getFilteredCars(
        filterParams.brand,
        filterParams.searchTerm,
        filterParams.priceRange,
        filterParams.sortBy,
        filterParams.mileage,
        filterParams.page,
        filterParams.limit
      );

      const totalCars = (result as any)?.total ?? 0;
      setTotalCars(totalCars);

      if (result && Array.isArray((result as any).documents)) {
        const typedCars = (result as any).documents.map(
          (doc: any) => doc as CarDocument
        );
        setCars(typedCars);
      } else {
        setCars([]);
      }
    } catch (err) {
      console.error("Failed to fetch cars", err);
      setError("Failed to load cars. Please try again.");
      setCars([]);
      setTotalCars(0);
    } finally {
      setIsLoading(false);
    }
  }, [filterParams, setIsLoading, setTotalCars]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  // Memoized grid classes
  const gridClasses = useMemo(() => {
    const baseClasses = "grid gap-4 transition-opacity duration-300";
    const columns =
      viewMode === "grid"
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1";
    return `${baseClasses} ${columns} ${
      isLoading ? "opacity-50" : "opacity-100"
    }`;
  }, [viewMode, isLoading]);

  // Show skeletons while loading
  if (isLoading && cars.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <div className={gridClasses}>
          {Array.from({ length: limit }).map((_, i) => (
            <CarSkeleton key={i} viewMode={viewMode} />
          ))}
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchCars}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Show no results
  if (!isLoading && cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-gray-600 text-lg mb-2">No cars found</p>
        <p className="text-gray-400">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className={gridClasses}>
        {cars.map((car) => (
          <CarCard key={car.$id} {...car} viewMode={viewMode} />
        ))}
      </div>

      {isLoading && cars.length > 0 && (
        <div className="flex items-center justify-center py-4">
          <Loading text="Loading Cars..." size="large" />
        </div>
      )}
    </div>
  );
}

import {
  AllCarsLimit,
  getFilteredAndSearchedCars,
  getFilteredCars,
  // getFilteredCars,
  // getSearchedCars,
  show_all_cars,
} from "@/appwrite";
import CarCard from "@/components/HomePage/CarCard";
// import { cars } from "@/data/cars";
import { useEffect, useState } from "react";
import { FilterCars } from "./FilterCars";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import type { CarDocument } from "@/types/Car";

export default function CarSelling({
  limit,
  searchTerm,
  sortBy,
  filters,
  isLoading,
  setIsLoading,
  setTotalCars,
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
}) {
  // // get all cars from database
  const [cars, setCars] = useState<any[]>([]);

  // Fetching all cars form database

  useEffect(() => {
    setIsLoading(true);
    const fetch_cars = async () => {
      const result = await getFilteredCars(
        filters.brand,
        searchTerm,
        filters.priceRange,
        sortBy,
        limit
      );
      const totalCars = result?.length;
      setTotalCars(totalCars ?? 0);
      if (Array.isArray(result)) {
        const typedCars = result.map((doc) => doc as CarDocument);
        setCars(typedCars);
      } else {
        setCars([]);
      }
    };
    setIsLoading(false);
    fetch_cars();
  }, [filters, searchTerm, sortBy, limit]);

  // ###### handle Load More && handle Less

  // const handleLoadMore = async () => {
  //   setIsLoading(true);
  //   const result = await AllCarsLimit(loadMore + 12);
  //   setCars(result);
  //   setLoadMore(loadMore + 12);
  //   setIsLoading(false);
  // };

  // const handleLoadLess = async () => {
  //   setIsLoading(true);
  //   setIsCollapsing(true); // start fade-out
  //   // wait 1s for animation
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const result = await AllCarsLimit(limit);
  //   setCars(result);
  //   setLoadMore(limit);
  //   setIsCollapsing(false); // end fade-out (fade back in)
  //   setIsLoading(false);
  //   // scroll back to top smoothly
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // ################################################

  return (
    <div className="flex flex-col gap-12">
      <div
        className={`grid grid-cols-3 gap-4 transition-opacity duration-1000 ${"opacity-100"}`}
      >
        {cars.map((car, i) => (
          <div key={i}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin w-24 h-24" />
        </div>
      )}
      {/* {totalCars > loadMore ? (
        <Button
          variant={"custom1"}
          className="w-36 py-4 mt-4"
          // onClick={handleLoadMore}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Load More"}
        </Button>
      ) : (
        totalCars <= loadMore && (
          <Button
            variant={"custom1"}
            className="w-36 py-4 mt-4"
            // onClick={handleLoadLess}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Show less"}
          </Button>
        )
      )} */}
    </div>
  );
}

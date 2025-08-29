import {
  AllCarsLimit,
  getFilteredAndSearchedCars,
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

export default function CarSelling({
  limit,
  totalCars,
}: {
  limit: number;
  totalCars: number;
}) {
  const [find, setFind] = useState<string>(""); // Filter by search
  const [filterBrand, setFilterBrand] = useState<string>(""); // Filter by brand (combobox)
  // get all cars from database
  const [cars, setCars] = useState<any[]>([]);

  //load more
  const [loadMore, setLoadMore] = useState<number>(limit);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCollapsing, setIsCollapsing] = useState<boolean>(false);

  // Fetching all cars form database

  useEffect(() => {
    const fetch_cars = async () => {
      const result = await AllCarsLimit(limit);
      setCars(result);
    };
    fetch_cars();
  }, []);

  useEffect(() => {
    const showload = console.log(loadMore);
    showload;
  }, [loadMore]);
  const handleLoadMore = async () => {
    setIsLoading(true);
    const result = await AllCarsLimit(loadMore + 12);
    setCars(result);
    setLoadMore(loadMore + 12);
    setIsLoading(false);
  };

  const handleLoadLess = async () => {
    setIsLoading(true);
    setIsCollapsing(true); // start fade-out
    // wait 1s for animation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = await AllCarsLimit(limit);
    setCars(result);
    setLoadMore(limit);
    setIsCollapsing(false); // end fade-out (fade back in)
    setIsLoading(false);
    // scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col gap-12 items-center">
      {/* //   <div className="flex gap-6 items-center">
    //     <label htmlFor="filter_search">Search Car:</label>
    //     <div className="flex items-center gap-4">
    //       <input
    //         type="text"
    //         name="filter_search"
    //         className="w-36 h-8 px-2 bg-gray-300 "
    //         onChange={(e) => setFind(e.target.value)}
    //       />
    //     </div>
    //     <FilterCars setFilterBrand={setFilterBrand} />
    //     <Button
    //       onClick={handleFiltering}
    //       className="hover:scale-105 duration-300 cursor-pointer active:scale-95"
    //     >
    //       Filter
    //     </Button>
    //   </div> */}
      <div
        className={`grid grid-cols-3 gap-4 transition-opacity duration-1000 ${
          isCollapsing ? "opacity-0" : "opacity-100"
        }`}
      >
        {cars.map((car, i) => (
          <div>
            <CarCard key={i} {...car} />
          </div>
        ))}
      </div>
      {totalCars > loadMore ? (
        <Button
          variant={"custom1"}
          className="w-36 py-4 mt-4"
          onClick={handleLoadMore}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Load More"}
        </Button>
      ) : (
        totalCars <= loadMore && (
          <Button
            variant={"custom1"}
            className="w-36 py-4 mt-4"
            onClick={handleLoadLess}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Show less"}
          </Button>
        )
      )}
    </div>
  );
}

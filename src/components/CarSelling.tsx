import { getFilteredCars, show_all_cars } from "@/appwrite";
import CarCard from "@/components/CarCard";
// import { cars } from "@/data/cars";
import { useEffect, useState } from "react";
import { FilterCars } from "./FilterCars";

export default function CarSelling() {
  const [find, setFind] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>(""); // Filter by brand

  // get all cars from database
  const [cars, setCars] = useState<any[]>([]);

  // Fetching all cars form database

  useEffect(() => {
    const fetch_cars = async () => {
      const result = await show_all_cars();
      setCars(result);
    };
    fetch_cars();
  }, []);

  // Zmiana marki == przefiltorwane
  useEffect(() => {
    console.log(filterBrand);
    const filter_cars = async () => {
      if (filterBrand) {
        if (filterBrand == "all") {
          const result = await show_all_cars();
          setCars(result);
          // console.log("WSZYSKTIE");
        } else {
          const result = await getFilteredCars(filterBrand);
          setCars(result);
        }
      }
    };
    filter_cars();
  }, [filterBrand]);

  // const handleSearching = (search: string) => {
  //   setFind(search);
  // };
  // useEffect(() => {
  //   filteredCars(filterBrand);
  // }, [filterBrand]);
  // BOTH FILTERS (searching and brand select)

  // const filteredCars = cars.filter((car) => {
  //   // searching
  //   const search = find.toLowerCase();
  //   const matchesSearch =
  //     car.brand.toLowerCase().includes(search) ||
  //     car.model.toLowerCase().includes(search);
  //   //brand
  //   // const matchesBrand = filterBrand
  //   //   ? car.brand.toLowerCase() === filterBrand.toLowerCase()
  //   //   : true;

  //   return matchesSearch;
  // });

  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex gap-6 items-center">
        <label htmlFor="filter_search">Search Car:</label>
        <input
          type="text"
          name="filter_search"
          className="w-36 h-8 bg-gray-300"
          // onChange={(e) => handleSearching(e.target.value)}
        />
        <FilterCars setFilterBrand={setFilterBrand} />
      </div>
      <div className="grid grid-cols-2">
        {cars.map((car, i) => (
          <div>
            <CarCard key={i} {...car} />
            <h1>{car.brand}</h1>
          </div>
        ))}
      </div>
    </div>
    // <h1>Hello wrold</h1>
  );
}

import { getFilteredCars, getSearchedCars, show_all_cars } from "@/appwrite";
import CarCard from "@/components/CarCard";
// import { cars } from "@/data/cars";
import { useEffect, useState } from "react";
import { FilterCars } from "./FilterCars";

export default function CarSelling() {
  const [find, setFind] = useState<string>(""); // Filter by search
  const [filterBrand, setFilterBrand] = useState<string>(""); // Filter by brand (combobox)

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
          //Pokazuje wszystkie auta (filtr == Wszystkie)
          const result = await show_all_cars();
          setCars(result);
        } else {
          // Pokazuje to co zostało wybrane w filtrze
          const result = await getFilteredCars(filterBrand);
          setCars(result);
        }
      }
    };
    filter_cars();
  }, [filterBrand]);

  useEffect(() => {
    console.log(find);
    const filterSearchCars = async () => {
      if (find.length == 0) {
        const result = await show_all_cars();
        setCars(result);
      } else if (find.length > 1) {
        const result = await getSearchedCars(find);
        setCars(result);
      }
    };
    filterSearchCars();
  }, [find]);

  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex gap-6 items-center">
        <label htmlFor="filter_search">Search Car:</label>
        <input
          type="text"
          name="filter_search"
          className="w-36 h-8 bg-gray-300"
          onChange={(e) => setFind(e.target.value)}
        />
        <FilterCars setFilterBrand={setFilterBrand} />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {cars.map((car, i) => (
          <div>
            <CarCard key={i} {...car} />
          </div>
        ))}
      </div>
    </div>
  );
}

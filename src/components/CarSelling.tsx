import { show_all_cars } from "@/appwrite";
import CarCard from "@/components/CarCard";
// import { cars } from "@/data/cars";
import { useEffect, useState } from "react";

export default function CarSelling() {
  const [find, setFind] = useState<string>("");

  // get all cars from database
  const [cars, setCars] = useState<any[]>([]);
  // fetching all cars form database
  useEffect(() => {
    const fetch_cars = async () => {
      const result = await show_all_cars();
      setCars(result);
    };
    fetch_cars();
  }, []);

  const handleSearching = (search: string) => {
    setFind(search);
  };

  const filteredCars = cars.filter((car) => {
    const search = find.toLowerCase();
    return (
      car.brand.toLowerCase().includes(search) ||
      car.model.toLowerCase().includes(search)
    );
  });

  return (
    <div className="p-6 grid max-h-96 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <input
        type="text"
        className="w-36 h-12 bg-amber-400"
        onChange={(e) => handleSearching(e.target.value)}
      />
      {filteredCars.map((car, i) => (
        <div>
          <CarCard key={i} {...car} />
          <h1>{car.brand}</h1>
        </div>
      ))}
    </div>
    // <h1>Hello wrold</h1>
  );
}

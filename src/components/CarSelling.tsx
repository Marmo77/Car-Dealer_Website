import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export default function CarSelling() {
  return (
    <div className="p-6 grid max-h-96 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cars.map((car, i) => (
        <div>
          <CarCard key={i} {...car} />
          <h1>{car.brand}</h1>
        </div>
      ))}
    </div>
    // <h1>Hello wrold</h1>
  );
}

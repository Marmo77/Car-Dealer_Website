import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Car } from "@/types/Car";

const CarCard = (car: Car) => {
  return (
    <Card className="w-80 max-md:w-full py-0 gap-3 not-odd:-translate-y-3 bg-card not-odd:bg-primary/15 shadow-md hover:md:scale-105 transition-transform duration-200 overflow-hidden rounded-xl">
      {/* Image + Badges */}
      <div className="relative">
        <img
          src={
            car.imageUrl
              ? car.imageUrl
              : "https://c0.carzone.ie/web/image/electric-cars/octavia-electric/octavia-electric.png"
          }
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://c0.carzone.ie/web/image/electric-cars/octavia-electric/octavia-electric.png";
          }}
        />
        <div className="absolute top-3 flex gap-2 left-3">
          <Badge className="bg-blue-600 text-white">Excellent</Badge>
          <Badge className="bg-gray-200 text-black">Featured</Badge>
        </div>
      </div>

      {/* Car Info */}
      <CardContent className="px-4 max-md:text-center pb-4">
        <h3 className="text-lg font-semibold">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-500">{car.year}</p>

        <div className="mt-3 space-y-1 text-sm">
          <div className="flex justify-between border-gray-300 max-md:border-b-1 max-md:pb-1">
            <span className="text-gray-500">Mileage</span>
            <span className="font-medium">
              {car.mileage.toLocaleString()} km
            </span>
          </div>
          <div className="flex justify-between border-gray-300 max-md:border-b-1 max-md:pb-1">
            <span className="text-gray-500">Fuel Type</span>
            <span className="font-medium">{car.fuelType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Transmission</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
        </div>
      </CardContent>

      {/* Price + Button */}
      <CardFooter className="flex justify-between max-md:justify-center max-md:gap-6 items-center px-4 pb-4">
        <span className="text-lg font-bold text-blue-600">
          ${car.price.toLocaleString()}
        </span>
        <Button variant="default" className="md:hidden hover:cursor-pointer">
          View Details
        </Button>
        <Button
          variant="outline"
          className="hidden md:block hover:bg-blue-600 hover:text-white duration-300 hover:cursor-pointer"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;

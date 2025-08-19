import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Car } from "@/types/Car";

const CarCard = (car: Car) => {
  return (
    <Card className="w-80 shadow-md hover:scale-105 transition-transform duration-200">
      <CardHeader>
        <img
          src={
            car.imageUrl
              ? car.imageUrl
              : "https://c0.carzone.ie/web/image/electric-cars/octavia-electric/octavia-electric.png"
          }
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => {
            e.currentTarget.src =
              "https://c0.carzone.ie/web/image/electric-cars/octavia-electric/octavia-electric.png";
          }}
        />
        <CardTitle>
          {car.brand} {car.model}
        </CardTitle>
        <CardDescription>
          <div className="flex flex-col gap-1">
            <span>
              {car.year} • {car.mileage.toLocaleString()} km
            </span>
            <span className="font-semibold tracking-wide">{car.price} PLN</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {car.fuelType} • {car.transmission}
        </p>
        <p className="font-semibold">{car.power} KM</p>
      </CardContent>
      <CardFooter>
        <Badge variant={car.isAvailable === false ? "destructive" : "default"}>
          {car.isAvailable === undefined || car.isAvailable
            ? "Dostępne"
            : "Niedostępne"}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CarCard;

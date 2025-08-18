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
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover rounded-md"
        />
        <CardTitle>
          {car.brand} {car.model}
        </CardTitle>
        <CardDescription>
          {car.year} • {car.mileage.toLocaleString()} km
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {car.fuelType} • {car.transmission}
        </p>
        <p className="font-semibold">{car.power} KM</p>
      </CardContent>
      <CardFooter>
        <Badge variant={car.isAvailable ? "default" : "destructive"}>
          {car.isAvailable ? "Dostępne" : "Niedostępne"}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CarCard;

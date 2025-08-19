export type Car = {
  id?: number;
  brand: string;
  model: string;
  isAvailable?: boolean;
  fuelType: "Diesel" | "Benzyna" | "LPG" | "Hybryda" | "Elektryk";
  engine_size: number;
  transmission: "Automatyczna" | "Manual";
  year: number;
  mileage: number;
  power: number;
  imageUrl: string;
  price: number;
};

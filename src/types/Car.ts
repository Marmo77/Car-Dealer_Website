import type { Models } from "appwrite";

export type Car = {
  id?: string;
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

// Appwrite Document type for cars
export interface CarDocument extends Models.Document {
  $brand: string;
  $model: string;
  $isAvailable: boolean;
  $fuelType: string;
  $transmission: string;
  $year: number;
  $mileage: number;
  $power: number;
  $imageUrl: string;
  $price: number;
  $engine_size: number;
  $createdAt: string;
  $updatedAt: string;
}

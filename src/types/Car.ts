import type { Models } from "appwrite";

export type Car = {
  id?: string;
  brand: string;
  model: string;
  isAvailable?: boolean;
  fuelType: "Diesel" | "Petrol" | "Hybrid" | "Electric";
  engine_size: number;
  transmission: "Automatic" | "Manual";
  year: Date;
  mileage: number;
  power: number;
  imageUrl: string;
  price: number;
};

// Appwrite Document type for cars
export interface CarDocument extends Models.Document {
  $id: string;
  $brand: string;
  $model: string;
  $isAvailable: boolean;
  $fuelType: "Diesel" | "Petrol" | "Hybrid" | "Electric";
  $transmission: "Automatic" | "Manual";
  $year: Date;
  $mileage: number;
  $power: number;
  $imageUrl: string;
  $price: number;
  $engine_size: number;
  $createdAt: string;
  $updatedAt: string;
}

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
  description?: string;
  zero_to_hundred?: number;
};

// Appwrite Document type for cars
export interface CarDocument extends Models.Document {
  $id: string;
  $brand: string;
  $model: string;
  $isAvailable: boolean;
  $fuelType: "Diesel" | "Petrol" | "Hybrid" | "Electric";
  $transmission: "Automatic" | "Manual";
  $mileage: number;
  $power: number;
  $imageUrl: string;
  $price: number;
  $engine_size: number;
  $year: number;
  $description?: string;
  $zero_to_hundred?: number;
  $body_style?: string;
  $drive_train?: string;
  $seatings?: number;
  $createdAt: string;
  $updatedAt: string;
}

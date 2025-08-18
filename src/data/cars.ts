import { type Car } from "@/types/Car";

export const cars: Car[] = [
  {
    brand: "Volvo",
    model: "V60 B3",
    isAvailable: true,
    fuelType: "Benzyna",
    transmission: "Automatyczna",
    engine_size: 2000,
    year: 2020,
    mileage: 193000,
    power: 163,
    imageUrl:
      "https://www.auto-scan.pl/cms2/zdjecia_samochodow/mini252/mini252_788922362.jpg",
    price: 73900,
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2023,
    engine_size: 1600,
    mileage: 10500,
    fuelType: "Benzyna",
    transmission: "Automatyczna",
    power: 381,
    imageUrl:
      "https://www.autocentrum.pl/MmRlLmpwYgwzDjpeXwxvGHBWbkIRFGALOwApQhMWP0AkCT4eGRgjQmcPKAxJFXwPMVt4D0NCfQlgVH1URUUpCHwGPApSCg",
    price: 231000,
  },
];

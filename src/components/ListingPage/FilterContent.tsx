import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

export const FilterContent = ({
  filters,
  setFilters,
  clearFilters,
  extraFilters,
  setExtraFilters,
}: {
  filters: {
    brand: string[];
    priceRange: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      brand: string[];
      priceRange: [number, number];
    }>
  >;
  clearFilters: () => void;
  setExtraFilters: React.Dispatch<
    React.SetStateAction<{
      mileage: number;
    }>
  >;
  extraFilters: {
    mileage: number;
  };
}) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleExtraFilters = (value: number) => {
    console.log(value);
    setExtraFilters((prev) => ({
      ...prev,
      mileage: value,
    }));
  };

  const showMileageValue = () => {
    if (extraFilters.mileage > 0) {
      return extraFilters.mileage.toString();
    } else {
      return "unlimited";
    }
  };

  return (
    <div className="space-y-6 max-lg:border max-lg:px-2 max-lg:py-6 my-3 max-lg:rounded-2xl">
      {/* Brand Filter */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 max-lg:text-xl max-lg:text-center">
          Brand
        </h4>
        <div className="space-y-2 max-lg:grid max-lg:grid-cols-6 max-md:grid-cols-3 max-lg:px-12">
          {[
            "BMW",
            "Audi",
            "Mercedes",
            "Tesla",
            "Porsche",
            "Volvo",
            "Lexus",
            "Ford",
            "Volkswagen",
            "Honda",
            "McLaren",
            "Aston Martin",
          ].map((brand) => (
            <div
              key={brand}
              className="flex max-md:flex-col items-center lg:space-x-2 md:space-x-2.5 space-x-0 "
            >
              <Checkbox
                id={brand}
                checked={filters.brand.includes(brand)}
                className="w-4 h-4 border-2 border-gray-300 cursor-pointer"
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFilters((prev) => ({
                      ...prev,
                      brand: [...prev.brand, brand],
                    }));
                  } else {
                    setFilters((prev) => ({
                      ...prev,
                      brand: prev.brand.filter((b) => b !== brand),
                    }));
                  }
                }}
              />
              <label
                htmlFor={brand}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Price Range</h4>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: value as [number, number],
              }))
            }
            max={250000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{filters.priceRange[0]}</span>
            <span>{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => setShowMoreFilters(!showMoreFilters)}
          className="rounded-full bg-gray-100"
          title={showMoreFilters ? "show less filters" : "show more filters"}
        >
          <ArrowDown
            className={`w-2 h-2 transition-transform duration-300 ${
              showMoreFilters ? "rotate-180" : ""
            }`}
          />
          {/* <span className="text-xs">{showMoreFilters ? "Less" : "More"}</span> */}
        </Button>
      </div>
      {showMoreFilters && (
        <div className="space-y-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label>Mileage:</Label>
            <Select
              value={showMileageValue()}
              onValueChange={(value) => handleExtraFilters(Number(value) || 0)}
            >
              <SelectTrigger className="border bg-background rounded-lg w-full cursor-pointer border-gray-200">
                <SelectValue placeholder="Mileage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10000">Under 10,000 km</SelectItem>
                <SelectItem value="25000">Under 25,000 km</SelectItem>
                <SelectItem value="50000">Under 50,000 km</SelectItem>
                <SelectItem value="100000">Under 100,000 km</SelectItem>
                <SelectItem value="150000">Under 150,000 km</SelectItem>
                <SelectItem value="unlimited">No Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="pt-4 border-t">
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

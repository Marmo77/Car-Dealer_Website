import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const FilterContent = ({
  filters,
  setFilters,
  clearFilters,
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
}) => (
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

    <div className="pt-4 border-t">
      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  </div>
);

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
    priceRange: number[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      brand: string[];
      priceRange: number[];
    }>
  >;
  clearFilters: () => void;
}) => (
  <div className="space-y-6">
    {/* Brand Filter */}
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Brand</h4>
      <div className="space-y-2">
        {[
          "BMW",
          "Audi",
          "Mercedes",
          "Tesla",
          "Porsche",
          "Range Rover",
          "Lexus",
          "Ford",
          "Volkswagen",
          "Jeep",
          "Honda",
          "McLaren",
          "Subaru",
          "Aston Martin",
          "Rivian",
        ].map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={filters.brand.includes(brand)}
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
              className="text-sm font-medium text-gray-700"
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
            setFilters((prev) => ({ ...prev, priceRange: value }))
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

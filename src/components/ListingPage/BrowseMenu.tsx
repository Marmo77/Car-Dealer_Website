import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useCallback, useMemo, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3X3, List, Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const BrowseMenu = ({
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
  totalCars,
  viewMode,
  setViewMode,
}: {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  totalCars: number;
  viewMode: "grid" | "list";
  setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const [isPending, startTransition] = useTransition();

  // Debounced search with 300ms delay
  const debouncedSearch = useDebouncedCallback((term: string) => {
    startTransition(() => {
      setSearchTerm(term);
    });
  }, 300);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleSortChange = useCallback(
    (value: string) => {
      startTransition(() => {
        setSortBy(value);
      });
    },
    [setSortBy]
  );

  const handleViewModeChange = useCallback(
    (mode: "grid" | "list") => {
      setViewMode(mode);
    },
    [setViewMode]
  );

  // Memoized sort options to prevent recreation
  const sortOptions = useMemo(
    () => [
      { value: "price-low", label: "Price: Low to High" },
      { value: "price-high", label: "Price: High to Low" },
      { value: "year-new", label: "Year: Newest First" },
      { value: "year-old", label: "Year: Oldest First" },
      { value: "mileage-low", label: "Mileage: Low to High" },
      { value: "mileage-high", label: "Mileage: High to Low" },
    ],
    []
  );

  const carsFoundText = useMemo(
    () => (totalCars !== null ? `${totalCars} cars found` : "Loading..."),
    [totalCars]
  );

  return (
    <div className="bg-card py-3">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Browse Cars</h2>
          <p className="text-lg lg:text-left text-center text-gray-500 max-w-2xl mx-auto">
            {carsFoundText}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 lg:w-auto w-full">
          <div className="relative min-w-64 lg:w-80">
            <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 size-4 shrink-0 opacity-50" />
            <Input
              placeholder="Search by brand, model..."
              value={inputValue}
              onChange={handleSearchChange}
              className={`pl-10 bg-card shadow-md transition-opacity ${
                isPending ? "opacity-50" : ""
              }`}
            />
          </div>

          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-48 bg-card shadow-md">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("grid")}
                className={
                  viewMode === "grid" ? "bg-blue-500 hover:bg-blue-600" : ""
                }
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("list")}
                className={
                  viewMode === "list" ? "bg-blue-500 hover:bg-blue-600" : ""
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BrowseMenu);

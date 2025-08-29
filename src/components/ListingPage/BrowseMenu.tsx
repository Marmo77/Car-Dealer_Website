import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3X3, List, Search } from "lucide-react";
import { GetAllCars, GetAllCarsLength } from "@/appwrite";
import Loading from "@/components/ui/loading";

const BrowseMenu = ({
  totalCars,
  setTotalCars,
  isLoading,
  setIsLoading,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
}: {
  totalCars: number | null;
  setTotalCars: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  viewMode: "grid" | "list";
  setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}) => {
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await GetAllCarsLength();
        setTotalCars(count);
      } catch (e) {
        console.error("Failed to load cars count", e);
        setTotalCars(0);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCount();
  }, []);

  // HEADER OF THE PAGE
  return (
    <div className="bg-card py-3 ">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Browse Cars</h2>
          <p className="text-lg lg:text-left text-center text-gray-500 max-w-2xl mx-auto">
            {isLoading && <Loading text="Loading cars..." row size="small" />}
            {totalCars !== null && !isLoading && `${totalCars} cars found`}
          </p>
        </div>
        {/* SEARCH BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 lg:w-auto w-full">
          <div className="relative min-w-64 lg:w-80 col-span-2">
            <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 size-4 shrink-0 opacity-50" />
            <Input
              placeholder="Search by brand, model, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card shadow-md"
            />
          </div>
          {/* SORT BY PRICE / YEAR / MILEAGE */}
          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 bg-card shadow-md">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year-new">Year: Newest First</SelectItem>
                <SelectItem value="year-old">Year: Oldest First</SelectItem>
                <SelectItem value="mileage-low">
                  Mileage: Low to High
                </SelectItem>
                <SelectItem value="mileage-high">
                  Mileage: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-3 items-center">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`px-3 ${
                  viewMode === "grid"
                    ? "bg-blue-500 hover:bg-blue-600 border-[1px] border-blue-500"
                    : ""
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`px-3 ${
                  viewMode === "list"
                    ? "bg-blue-500 hover:bg-blue-600 border-[1px] border-blue-500"
                    : ""
                }`}
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

export default BrowseMenu;

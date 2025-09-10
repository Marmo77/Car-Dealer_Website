import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarDocument } from "@/types/Car";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";
import { Link } from "react-router-dom";
import React, { memo, useCallback } from "react";

interface CarCardProps extends CarDocument {
  viewMode?: "grid" | "list";
}

const CarCard = memo(
  ({ viewMode = "grid", ...car }: CarCardProps) => {
    const navigateHandler = useNavigateHandler();

    const handleViewDetails = useCallback(() => {
      navigateHandler(`/car/${car.$id}`);
    }, [car.$id, navigateHandler]);

    const FALLBACK_IMAGE =
      "https://c0.carzone.ie/web/image/electric-cars/octavia-electric/octavia-electric.png";

    const handleImageError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = FALLBACK_IMAGE;
      },
      [FALLBACK_IMAGE]
    );

    const cardClasses =
      viewMode === "list"
        ? "group w-full flex flex-row py-0 gap-3 bg-card shadow-lg border-none hover:shadow-xl transition-shadow duration-200 overflow-hidden rounded-xl"
        : "group max-md:w-full py-0 gap-3 bg-card shadow-lg border-none hover:md:scale-105 transition-transform duration-200 overflow-hidden rounded-xl";

    const imageClasses =
      viewMode === "list"
        ? "w-48 h-32 object-cover"
        : "w-full group-hover:scale-105 h-48 object-cover transition-transform duration-300";

    return (
      <Card className={cardClasses}>
        {/* Image + Badges */}
        <div className={`relative ${viewMode === "list" ? "shrink-1" : ""}`}>
          <Link to={`/car/${car.$id}`}>
            <img
              src={car.imageUrl || FALLBACK_IMAGE}
              alt={`${car.brand} ${car.model}`}
              className={imageClasses}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
            />
          </Link>
          <div className="absolute top-3 flex gap-2 left-3">
            <Badge className="bg-blue-600 text-white">Excellent</Badge>
            <Badge className="bg-gray-200 text-black">Featured</Badge>
          </div>
        </div>

        {/* Car Info */}
        <div
          className={`flex-1 ${
            viewMode === "list" ? "flex flex-col justify-between" : ""
          }`}
        >
          <CardContent
            className={`px-4 ${
              viewMode === "list" ? "pb-2" : "max-md:text-center pb-4"
            }`}
          >
            <h3 className="text-lg font-semibold">
              {car.brand} {car.model}
            </h3>
            <p className="text-sm text-gray-700">{car.year}</p>
            <div
              className={`mt-3 space-y-1 text-sm ${
                viewMode === "list" ? "grid grid-cols-3 gap-2" : ""
              }`}
            >
              <div className="flex justify-between border-gray-300 max-md:border-b-1 max-md:pb-1">
                <span className="text-gray-500">Mileage</span>
                <span className="font-medium">
                  {car.mileage?.toLocaleString() ?? "N/A"} km
                </span>
              </div>
              <div className="flex justify-between border-gray-300 max-md:border-b-1 max-md:pb-1">
                <span className="text-gray-500">Fuel Type</span>
                <span className="font-medium">{car.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Transmission</span>
                <span className="font-medium">{car.transmission}</span>
              </div>
            </div>
          </CardContent>

          {/* Price + Button */}
          <CardFooter className="flex justify-between max-md:justify-center max-md:gap-6 items-center px-4 pb-4">
            <span className="text-lg font-bold text-blue-600">
              ${car.price?.toLocaleString() ?? "N/A"}
            </span>
            <Button
              variant="default"
              className="md:hidden hover:cursor-pointer"
              onClick={handleViewDetails}
            >
              View Details
            </Button>
            <Button
              variant="outline"
              className="hidden md:block hover:bg-blue-600 hover:text-white duration-300 hover:cursor-pointer"
              onClick={handleViewDetails}
            >
              View Details
            </Button>
          </CardFooter>
        </div>
      </Card>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return (
      prevProps.$id === nextProps.$id &&
      prevProps.price === nextProps.price &&
      prevProps.viewMode === nextProps.viewMode
    );
  }
);

CarCard.displayName = "CarCard";
export default CarCard;

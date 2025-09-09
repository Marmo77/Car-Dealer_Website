import { getCarDetails } from "@/appwrite";
import type { CarDocument } from "@/types/Car";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Award,
  Badge,
  Car,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  Fuel,
  Gauge,
  Heart,
  Mail,
  MapPin,
  Phone,
  Settings,
  Star,
} from "lucide-react";
import { useNavigateHandler as handleNavigate } from "@/hooks/useNavigateHandler";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import FeaturedCars from "./HomePage/FeaturedCars";

const CarDetails = () => {
  const [car, setCar] = useState<CarDocument>();
  const { car_id } = useParams();
  const navigateHandler = handleNavigate();
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const car = await getCarDetails(car_id as string);
        // console.log(cars);
        setCar(car as CarDocument);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCarDetails();
  }, [car_id]);

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto py-16">
      <div className="mb-4">
        <Link to="/listings">
          <Button
            variant="outline"
            className="text-blue-600 text-lg border-blue-200 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inventory
          </Button>
        </Link>
      </div>
      {/* inspo: https://www.figma.com/make/aN86VXGPCREalgNOrbWtUt/Car-Dealer-Website-Redesign?node-id=0-4&t=exxxfFULiqI7fj0J-0 */}
      {/* TOP CAR INFO */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* IMG DIV */}
        <div></div>
        {/* INFO DIV */}
        <div></div>
      </div>
      {/* SPECIFICATIONS & KEY FEATURES */}
      <div className="flex flex-col gap-8">
        <CarSpecifications car={car as CarDocument} />
        <CarKeyFeatures />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-center font-bold text-gray-900">
            You Might Also Like
          </h2>
          <FeaturedCars
            featuredCars={[
              car as CarDocument,
              car as CarDocument,
              car as CarDocument,
            ]}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

const CarSpecifications = ({ car }: { car: CarDocument }) => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center">
          <Car className="h-6 w-6 text-blue-600 mr-3" />
          Specifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        {car && (
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Brand:
              </span>
              <span className="text-gray-900 font-semibold">{car?.brand}</span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Model:
              </span>
              <span className="text-gray-900 font-semibold">{car?.model}</span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Year:
              </span>
              <span className="text-gray-900 font-semibold ">{car?.year}</span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Mileage:
              </span>
              <span className="text-gray-900 font-semibold">
                {car?.mileage} km
              </span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Fuel Type:
              </span>
              <span className="text-gray-900 font-semibold">
                {car?.fuelType}
              </span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Engine:
              </span>
              <span className="text-gray-900 font-semibold">
                {car?.engine_size < 1000
                  ? `${(car.engine_size / 1000).toFixed(1)} L`
                  : `${(car.engine_size / 1000).toFixed(1)} L`}
              </span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Power:
              </span>
              <span className="text-gray-900 font-semibold">
                {car?.power} HP
              </span>
            </div>
            <div className="specifications">
              <span className="text-gray-600 font-medium font-raleway">
                Transmission:
              </span>
              <span className="text-gray-900 font-semibold">
                {car?.transmission}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const keyFeatures = [
  "Premium leather interior",
  "Premium sound system",
  "Panoramic sunroof",
  "360 camera system",
  "Bluetooth connectivity",
  "Heated seats",
  "Ambient lighting",
];

const CarKeyFeatures = () => {
  // key features
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-3" />
          Key Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4 px-12 py-2 text-lg">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CarDetails;

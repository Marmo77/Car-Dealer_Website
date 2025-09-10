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
import {
  useNavigateHandler as handleNavigate,
  useNavigateHandler,
} from "@/hooks/useNavigateHandler";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import FeaturedCars from "./HomePage/FeaturedCars";

const CarDetails = () => {
  const [car, setCar] = useState<CarDocument>();
  const { car_id } = useParams();
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const car = await getCarDetails(car_id as string);
        console.log(car);
        setCar(car as CarDocument);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCarDetails();
  }, [car_id]);

  const handleNavigation = useNavigateHandler();

  const [isFavorite, setIsFavorite] = useState(false);

  const CarImages = [
    {
      image: car?.imageUrl,
      index: 0,
    },
    {
      image:
        "https://www.bmw.ie/content/dam/bmw/common/all-models/m-series/m760e-xdrive/2023/highlights/bmw-7-series-i7-m70-sd-bmw-individual-04.jpg",
      index: 1,
    },
    {
      image: car?.imageUrl,
      index: 2,
    },
  ];

  const [activeCarImage, setActiveCarImage] = useState(CarImages[0]);

  const handleSetActiveCarImage = (image: string, index: number) => {
    // console.log(index);
    setActiveCarImage(CarImages[index]);
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto py-16">
      <div className="mb-4">
        <Button
          variant="outline"
          className="text-blue-600 text-lg border-blue-200 hover:bg-blue-50"
          onClick={() => handleNavigation("/listings")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Inventory
        </Button>
      </div>
      {/* inspo: https://www.figma.com/make/aN86VXGPCREalgNOrbWtUt/Car-Dealer-Website-Redesign?node-id=0-4&t=exxxfFULiqI7fj0J-0 */}
      {/* TOP CAR INFO */}
      <div className="grid lg:grid-cols-2 gap-12 pb-12">
        {/* IMG DIV */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <img
              src={activeCarImage.image}
              alt=""
              className="w-full rounded-3xl border-gray-400 min-h-96 h-full object-cover"
            />
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            {CarImages.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt=""
                className={`w-full rounded-3xl shadow-lg border h-32 object-cover cursor-pointer ${
                  image.index === activeCarImage.index
                    ? "border-blue-500"
                    : "border-gray-200 "
                }`}
                onClick={() =>
                  handleSetActiveCarImage(image.image, image.index)
                }
              />
            ))}
          </div>
        </div>
        {/* INFO DIV */}
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold font-montserrat text-gray-900">
              {car?.year} {car?.brand} {car?.model}
            </h2>
            <p className="text-lg text-gray-600 font-raleway">
              {car?.description}
            </p>
            <h4 className="text-3xl font-bold font-roboto text-blue-500 mb-4">
              $ {car?.price}
            </h4>
            <CarShortDescription car={car as CarDocument} />
            <div className="grid lg:grid-cols-2  gap-6 py-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 cursor-pointer rounded-xl"
                onClick={() => handleNavigation("/contact")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Dealer
              </Button>
              <Button
                variant="outline"
                className="py-3 border-blue-500 text-blue-500 rounded-xl"
                onClick={() => handleNavigation("/contact?question=test_drive")}
              >
                <Eye className="h-4 w-4 mr-2" />
                Schedule a Test Drive
              </Button>
            </div>
          </div>
        </div>
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

const CarShortDescription = ({ car }: { car: CarDocument }) => {
  return (
    <Card className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4 gap-4">
      <CardContent className="py-6 grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Gauge className="h-6 w-6 text-white" />
          </div>
          <div className="text-sm text-gray-600">Mileage</div>
          <div className="font-bold text-gray-900">{car?.mileage} km</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Fuel className="h-6 w-6 text-white" />
          </div>
          <div className="text-sm text-gray-600">Fuel Type</div>
          <div className="font-bold text-gray-900">{car?.fuelType}</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div className="text-sm text-gray-600">Transmission</div>
          <div className="font-bold text-gray-900">{car?.transmission}</div>
        </div>
      </CardContent>
    </Card>
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
            {car?.engine_size && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Engine:
                </span>
                <span className="text-gray-900 font-semibold">
                  {(car.engine_size / 1000).toFixed(1)} L
                </span>
              </div>
            )}
            {car?.power && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Power:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car?.power} HP
                </span>
              </div>
            )}
            {car?.zero_to_hundred && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  0-100km/h:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car.zero_to_hundred} s
                </span>
              </div>
            )}
            {car?.year && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Year:
                </span>
                <span className="text-gray-900 font-semibold ">
                  {car?.year}
                </span>
              </div>
            )}
            {car?.mileage && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Mileage:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car?.mileage} km
                </span>
              </div>
            )}
            {car?.body_style && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Body Style:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car?.body_style}
                </span>
              </div>
            )}
            {car?.drive_train && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Drivetrain:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car?.drive_train}
                </span>
              </div>
            )}
            {car?.seatings && (
              <div className="specifications">
                <span className="text-gray-600 font-medium font-raleway">
                  Seating:
                </span>
                <span className="text-gray-900 font-semibold">
                  {car?.seatings} passengers
                </span>
              </div>
            )}
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

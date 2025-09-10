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
  Pin,
  Settings,
  Star,
} from "lucide-react";
import {
  useNavigateHandler as handleNavigate,
  useNavigateHandler,
} from "@/hooks/useNavigateHandler";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import FeaturedCars from "./HomePage/FeaturedCars";
import { company } from "@/data/company";
import { contact } from "@/data/contact";

const CarDetails = () => {
  const [car, setCar] = useState<CarDocument>();
  const { car_id } = useParams();
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const car = await getCarDetails(car_id as string);
        // console.log(car);
        setCar(car as CarDocument);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCarDetails();
  }, [car_id]);

  const handleNavigation = useNavigateHandler();

  const PriceConverter = (price: number) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
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
          Back to Listings
        </Button>
      </div>
      {/* TOP - CAR INFO */}
      <div className="grid lg:grid-cols-2 gap-12 pb-12">
        {/* IMG DIV */}
        <CarImages car={car as CarDocument} carid={car_id as string} />
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
              {car?.price ? PriceConverter(car?.price) : "Price not available"}
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
            <ContactInfo />
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

const ContactInfo = () => {
  const carContactInfos = [
    {
      title: "Phone",
      value: contact.phoneNumber,
      value2: contact.serviceNumber,
      icon: Phone,
    },
    {
      title: "Email",
      value: contact.email,
      icon: Mail,
    },
    {
      title: "Address",
      value: contact.adress,
      icon: MapPin,
    },
  ];
  return (
    <Card className="px-5 font-raleway font-light py-6">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-500" />
          Contact Informations
        </CardTitle>
      </CardHeader>
      <CardContent className="font-montserrat font-normal px-8 flex flex-col gap-3">
        {carContactInfos.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="flex items-center gap-2 hover:scale-[102%] transition-all hover:translate-x-1 hover:-translate-y-0.5"
              key={item.title}
            >
              <div className="flex gap-3">
                <Icon className="w-5 h-5 text-blue-500" />
                <div className="flex gap-2">
                  <span className="font-bold">{item.title}:</span>
                  <span className="hover:text-blue-500 duration-300">
                    {item.title === "Phone" ? (
                      <a href={`tel:${item.value}`}>{item.value}</a>
                    ) : item.title === "Email" ? (
                      <a href={`mailto:${item.value}`}>{item.value}</a>
                    ) : item.title === "Address" ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${contact.adress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <a href="#">{item.value}</a>
                    )}
                  </span>
                  {item?.value2 && (
                    <span className="hover:text-blue-500 duration-300">
                      | <a href={`tel:${item.value2}`}>{item.value2}</a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
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

const CarImages = ({ car, carid }: { car: CarDocument; carid: string }) => {
  const CarImages = [
    {
      image: car?.imageUrl,
      index: 0,
    },
    {
      image: car?.imageUrl,
      index: 1,
    },
    {
      image: car?.imageUrl,
      index: 2,
    },
  ];

  const [activeCarImageIndex, setActiveCarImageIndex] = useState(0);

  const handleSetActiveCarImage = (_image: string, index: number) => {
    setActiveCarImageIndex(index);
  };

  const nextImage = () => {
    setActiveCarImageIndex((prev) => {
      const nextImage = prev + 1;
      return nextImage;
      //>= CarImages.length ? 0 : nextImage; // if not disabled (111, 119 line fn)
    });
  };

  const prevImage = () => {
    setActiveCarImageIndex((prev) => {
      const prevImage = prev - 1;
      return prevImage;
      // < 0 ? CarImages.length - 1 : prevImage; // if not disabled
    });
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const getFavoriteCars = (): string[] => {
    try {
      const raw = localStorage.getItem("favoriteCars"); // pobiera z localStorage
      const parsed = raw ? JSON.parse(raw) : []; // parseuje z localStorage
      return Array.isArray(parsed) ? parsed : []; // zwraca tablicę
    } catch {
      return []; // zwraca pustą tablicę jeśli coś się nie uda
    }
  };

  const setFavoriteCars = (favorites: string[]) => {
    try {
      localStorage.setItem("favoriteCars", JSON.stringify(favorites)); // zapisuje do localStorage
    } catch {
      console.error("Error saving favorite cars");
    }
  };

  const handleFavorite = () => {
    setIsFavorite((prev) => {
      const next = !prev;
      const favorites = getFavoriteCars();
      // console.log(favorites);
      if (next) {
        if (!favorites.includes(carid)) {
          favorites.push(carid); // dodaje do tablicy jeśli nie jest w tablicy
        }
      } else {
        const idx = favorites.indexOf(carid);
        if (idx !== -1) favorites.splice(idx, 1); // usuwa z tablicy jeśli jest w tablicy
      }
      setFavoriteCars(favorites);
      return next;
    });
  };

  useEffect(() => {
    const favorites = getFavoriteCars();
    setIsFavorite(favorites.includes(carid));
  }, [carid]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full relative h-96 lg:h-[500px]">
        <div
          className="absolute top-4 right-4 cursor-pointer bg-gray-200 p-2 rounded-full"
          onClick={() => handleFavorite()}
        >
          {isFavorite ? (
            <Heart className="h-6 w-6 text-blue-600 fill-blue-600 duration-300 transition-colors" />
          ) : (
            <Heart className="h-6 w-6 text-gray-600 fill-none duration-300 transition-colors" />
          )}
        </div>
        <Button
          onClick={prevImage}
          className="absolute left-4 top-1/2 rounded-full shadow-2xl"
          variant="outline"
          disabled={activeCarImageIndex === 0}
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Button>
        <Button
          onClick={nextImage}
          className="absolute right-4 top-1/2 rounded-full"
          variant="outline"
          disabled={activeCarImageIndex === CarImages.length - 1}
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </Button>
        <img
          src={
            CarImages[activeCarImageIndex]?.image ||
            "https://via.placeholder.com/800x600?text=Loading+image"
          }
          loading="lazy"
          alt=""
          className={`w-full select-none rounded-3xl border-gray-400 min-h-96 h-full object-cover`}
        />
        {CarImages[activeCarImageIndex]?.index === 1 && (
          <div className="absolute top-1/2 left-1/2 transform bg-black/50 rounded-3xl p-4 -translate-x-1/2 text-center -translate-y-1/2">
            <p className="text-2xl font-bold text-white">{car?.brand}</p>
            <p className="text-2xl font-bold text-white">{car?.model}</p>
            <p className="text-2xl font-bold text-white">{car?.year}</p>
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        {CarImages.map((image, index) => (
          <img
            key={index}
            src={
              image.image || "https://via.placeholder.com/400x300?text=No+image"
            }
            alt=""
            className={`w-full even:col-span-2 rounded-3xl shadow-lg border-2 h-32 object-cover cursor-pointer ${
              index === activeCarImageIndex
                ? "border-blue-500"
                : "border-gray-200 "
            }`}
            onClick={() =>
              handleSetActiveCarImage(image.image as string, index)
            }
          />
        ))}
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

const CarKeyFeatures = () => {
  // key features
  const keyFeatures = [
    "Premium leather interior",
    "Premium sound system",
    "Panoramic sunroof",
    "360 camera system",
    "Bluetooth connectivity",
    "Heated seats",
    "Ambient lighting",
  ];
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

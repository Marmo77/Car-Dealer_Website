import { useState } from "react";
import { Search, SearchCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import HeroBg from "@/assets/imgs/Hero_bg.jpg";

// import { Card, CardContent } from '../ui/card'
// import { Badge } from '../ui/badge'
const Hero = () => {
  const [searchFilters, setSearchFilters] = useState({
    brand: "",
    maxPrice: "",
    year: "",
    mileage: "",
  });
  const navigation = useNavigate();

  const handleAllCars = () => {
    navigation("/listings");
  };

  const handleHeroSearchBarFilters = () => {
    // CREATE URL PARAMS
    const params = new URLSearchParams();
    if (searchFilters.brand && searchFilters.brand !== "all") {
      params.append("brand", searchFilters.brand);
    }
    if (searchFilters.maxPrice && searchFilters.maxPrice !== "unlimited") {
      params.append("min", "0");
      params.append("max", searchFilters.maxPrice);
    } else {
      params.append("min", "0");
      params.append("max", "250000");
    }
    if (searchFilters.year) {
      params.append("year", searchFilters.year);
    }
    if (searchFilters.mileage) {
      params.append("mileage", searchFilters.mileage);
    }
    // Navigate to listings
    navigation(`/listings?${params.toString()}`);
  };
  return (
    <section
      id="#"
      className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* bg img */}
      <div className="absolute w-full h-full bg-cover bg-center">
        <img
          src={HeroBg}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover backdrop-blur-xl blur-sm"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl max-lg:text-center max-lg:flex max-lg:flex-col max-lg:mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Find Your Perfect
            <span className="text-blue-400 block">Dream Car</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Discover premium vehicles from trusted dealers. Every car verified,
            every deal transparent, every customer satisfied.
          </p>

          {/* Quick Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-6 gap-3 text-black font-poppins font-medium">
              {/* BRAND */}
              <Select
                value={searchFilters.brand}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, brand: value })
                }
              >
                <SelectTrigger className="bg-white cursor-pointer w-full">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="mini">Mini</SelectItem>
                  <SelectItem value="volvo">Volvo</SelectItem>
                  <SelectItem value="porsche">Porsche</SelectItem>
                </SelectContent>
              </Select>

              {/* PRICE */}
              <Select
                value={searchFilters.maxPrice}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, maxPrice: value })
                }
              >
                <SelectTrigger className="bg-white cursor-pointer w-full">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50000">Under $50,000</SelectItem>
                  <SelectItem value="75000">Under $75,000</SelectItem>
                  <SelectItem value="125000">Under $125,000</SelectItem>
                  <SelectItem value="150000">Under $150,000</SelectItem>
                  <SelectItem value="200000">Under $200,000</SelectItem>
                  <SelectItem value="unlimited">No Limit</SelectItem>
                </SelectContent>
              </Select>
              {/* YEAR */}
              <Select
                value={searchFilters.year}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, year: value })
                }
              >
                <SelectTrigger className="bg-white cursor-pointer w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="older">2023 & Older</SelectItem>
                </SelectContent>
              </Select>
              {/* MILEAGE */}
              <Select
                value={searchFilters.mileage}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, mileage: value })
                }
              >
                <SelectTrigger className="bg-white cursor-pointer w-full">
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
            <div className="relative font-raleway flex max-md:flex-col gap-5">
              <Button
                className="min-md:grow-3 bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                size="lg"
                onClick={handleHeroSearchBarFilters}
              >
                <Search className="mr-3 h-5 w-5" />
                <span className="">Search Cars</span>
              </Button>
              <Button
                variant={"outline"}
                className="border-blue-600 text-blue-600 text-lg font-semibold  hover:text-card hover:bg-blue-600"
                size="lg"
                onClick={handleAllCars}
              >
                <span className="">Browse All</span>
                <SearchCheck className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//Browser routes
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { featuredCars as fetchFeaturedCars, setUserData } from "@/appwrite"; //this is for getting 3 random cars from database
// import { DummyCars as fetchFeaturedCars } from "@/appwrite.ts"; // this is dummy empty for not using that much database
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import ListingPage from "./components/ListingPage";
import { company } from "./data/company";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound.tsx";
import { type CarDocument } from "./types/Car";
import CarDetails from "./components/CarDetails.tsx";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [cars, setCars] = useState<CarDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result = await fetchFeaturedCars();
        if (Array.isArray(result)) {
          const typedCars = result.map((doc) => doc as CarDocument);
          setCars(typedCars);
        } else {
          setCars([]);
        }
      } catch (error) {
        console.error("Failed to load featured cars:", error);
        setCars([]);
      } finally {
        setIsLoading(false);
      }
    };
    // on load check user IP and Country
    setUserData();

    fetchCars();
  }, []);

  return (
    <>
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            path={"/"}
            element={<HomePage featuredCars={cars} isLoading={isLoading} />}
          />
          <Route
            path={company[0].navigationID[1].id}
            element={<ListingPage />}
          />
          <Route path={company[0].navigationID[2].id} element={<About />} />
          <Route path={company[0].navigationID[3].id} element={<Contact />} />
          <Route path="/car/:car_id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
    // <Layout />
  );
};

export default App;

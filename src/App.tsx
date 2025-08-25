//Browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { featuredCars as fetchFeaturedCars } from "@/appwrite";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import ListingPage from "./components/ListingPage";
import { company } from "./data/company";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound.tsx";

const App = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const result = await fetchFeaturedCars();
        if (Array.isArray(result)) {
          setCars(result);
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

    loadCars();
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={company[0].navigationID[0].id}
            element={
              <HomePage featuredCars={cars} isLoading={isLoading} />
            }
          />
          <Route
            path={company[0].navigationID[1].id}
            element={<ListingPage />}
          />
          <Route path={company[0].navigationID[2].id} element={<About />} />
          <Route path={company[0].navigationID[3].id} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    // <Layout />
  );
};

export default App;

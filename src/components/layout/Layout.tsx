import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
const Layout = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  //Keeping currentpage in sync with URL
  useEffect(() => {
    const path =
      location.pathname === "/" ? "home" : location.pathname.replace("/", "");
    setCurrentPage(path);
  }, [location]);

  //Changing /routes when location change
  useEffect(() => {
    navigate(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: string, carId?: string) => {
    setCurrentPage(page);
    if (carId) console.log(carId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";
const Layout = () => {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigate = useNavigateHandler();
  const location = useLocation();

  //Changing /routes when location change
  useEffect(() => {
    handleNavigate(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const page = location.pathname === "/" ? "/" : location.pathname;
    setCurrentPage(page);
  }, [location]);

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

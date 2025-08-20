import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const nothing = () => {
    return true;
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage="home" onPageChange={nothing} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

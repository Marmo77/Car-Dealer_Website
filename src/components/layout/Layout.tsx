import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  // const [currentPage, setCurrentPage] = useState("/");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  //Changing /routes when location change
  // useEffect(() => {
  //   handleNavigate(currentPage);
  // }, [currentPage]);

  // useEffect(() => {
  //   const page = location.pathname === "/" ? "/" : location.pathname;
  //   setCurrentPage(page);
  // }, [location]);

  // const handlePageChange = (page: string, carId?: string) => {
  //   setCurrentPage(page);
  //   if (carId) console.log(carId);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

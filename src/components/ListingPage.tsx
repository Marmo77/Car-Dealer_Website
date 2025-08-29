import React from "react";
import BrowseMenu from "./ListingPage/BrowseMenu";
import Filters from "./ListingPage/Filters";
import AllCars from "./ListingPage/AllCars";

const ListingPage = () => {
  return (
    <section className="bg-card py-16 mx-auto w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        <div className="col-span-3">
          <BrowseMenu />
        </div>
        <div className="col-span-1">
          <Filters />
        </div>
        <div className="col-span-2">
          <AllCars />
        </div>
      </div>
    </section>
  );
};

export default ListingPage;

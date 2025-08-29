import React from "react";
import CarSelling from "../HomePage/CarSelling";

const AllCars = ({ totalCars }: { totalCars: number }) => {
  const limited = 12;
  return (
    <div className="col-span-2">
      <div>
        <CarSelling limit={limited} totalCars={totalCars} />
      </div>
    </div>
  );
};

export default AllCars;

import { Button } from "@/components/ui/button";
import CarSelling from "@/components/CarSelling";
import { useEffect } from "react";
import { update } from "./appwrite";

function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col gap-10 items-center justify-center">
        <Button onClick={() => update()} className="cursor-pointer shadow-xl">
          Add
        </Button>
        <CarSelling />
      </div>
    </>
  );
}

export default App;

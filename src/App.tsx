import { Button } from "@/components/ui/button";
import CarSelling from "@/components/CarSelling";
function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col gap-10 items-center justify-center">
        <Button
          onClick={() => alert("Working!")}
          className="cursor-pointer shadow-xl"
        >
          Click me
        </Button>
        <CarSelling />
        <h1>LOL</h1>
      </div>
    </>
  );
}

export default App;

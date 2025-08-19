import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const carsBrands = [
  {
    value: "all",
    label: "Wszystkie",
  },
  {
    value: "BMW",
    label: "BMW",
  },
  {
    value: "Audi",
    label: "Audi",
  },
  {
    value: "Volvo",
    label: "Volvo",
  },
  {
    value: "Ford",
    label: "Ford",
  },
  {
    value: "Opel",
    label: "Opel",
  },
];
type FilterCarsProps = {
  setFilterBrand: (brand: string) => void;
};

export const FilterCars = ({ setFilterBrand }: FilterCarsProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? carsBrands.find((brands) => brands.value === value)?.label
            : "Select Brand..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search a Brand..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Brands found.</CommandEmpty>
            <CommandGroup>
              {carsBrands.map((brands) => (
                <CommandItem
                  key={brands.value}
                  value={brands.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    // console.log(brands.value);
                    setFilterBrand(brands.value.toLowerCase());
                  }}
                >
                  {brands.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === brands.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

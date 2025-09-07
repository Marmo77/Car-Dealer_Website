import {
  type StatisticsItem,
  type StatsGuaranteesProps,
} from "@/types/Statistics";

export const statistics: StatisticsItem[] = [
  {
    id: 0,
    label: "Cars Available",
    value: 5000,
    suffix: "+",
  },
  {
    id: 1,
    label: "Customer Satisfaction",
    value: 98,
    suffix: "%",
  },
  {
    id: 2,
    label: "Trusted Dealers",
    value: 50,
    suffix: "+",
  },
  {
    id: 3,
    label: "Years Expierience",
    value: 10,
    suffix: "+",
  },
];
export const StatsGuarantees: StatsGuaranteesProps[] = [
  {
    id: 0,
    testimonial: "Warranty on all services",
  },
  {
    id: 1,
    testimonial: "Only verified parts and materials",
  },
  {
    id: 2,
    testimonial: "Transparent pricing with no hidden costs",
  },
  {
    id: 3,
    testimonial: "Certified mechanics",
  },
];

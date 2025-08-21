export interface StatisticsItem {
  id: number;
  label: string;
  // sufix?: string;
  prefix?: string;
  value: number;
}

export const statistics: StatisticsItem[] = [
  {
    id: 0,
    label: "Cars Available",
    value: 5000,
    prefix: "+",
  },
  {
    id: 1,
    label: "Customer Satisfaction",
    value: 98,
    prefix: "%",
  },
  {
    id: 2,
    label: "Trusted Dealers",
    value: 50,
    prefix: "+",
  },
  {
    id: 3,
    label: "Years Expierience",
    value: 10,
    prefix: "+",
  },
];

export interface StatsGuaranteesProps {
  id: number;
  testimonial: string;
}

export const StatsGuarantees: StatsGuaranteesProps[] = [
  {
    id: 0,
    testimonial: "Gwarancja na wszystkie usługi",
  },
  {
    id: 1,
    testimonial: "Tylko sprawdzone części i materiały",
  },
  {
    id: 2,
    testimonial: "Transparentne ceny bez ukrytych kosztów",
  },
  {
    id: 3,
    testimonial: "Certyfikowani mechanicy",
  },
];

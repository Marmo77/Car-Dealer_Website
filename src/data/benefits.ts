import { Shield, Star, Users, Award } from "lucide-react";
import { type BenefitsProps } from "@/types/Benefits";

export const benefits: BenefitsProps[] = [
  {
    icon: Shield,
    title: "Verified Quality",
    description:
      "Every car undergoes a comprehensive 200-point inspection before listing",
  },
  {
    icon: Star,
    title: "Best Prices",
    description:
      "Competitive pricing with transparent history and no hidden fees",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Dedicated specialists to guide you through every step of your purchase",
  },
  {
    icon: Award,
    title: "Warranty Included",
    description:
      "Comprehensive warranty coverage for peace of mind with every purchase",
  },
];

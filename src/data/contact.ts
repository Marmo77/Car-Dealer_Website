import { company } from "./company";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contact = {
  phoneNumber: company[0].phoneNumber,
  serviceNumber: "696 510 869",
  email: company[0].companyEmail,
  supportEmail: "support@autobahn.com",
  adress: company[0].companyLocation,
};

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      `Sales: ${contact.phoneNumber}`,
      `Service: ${contact.serviceNumber}`,
    ],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: [contact.email, contact.supportEmail],
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: [contact.adress],
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 6:00 PM"],
    action: "View Schedule",
  },
];

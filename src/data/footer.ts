import { company } from "./company";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitch,
} from "react-icons/io";

interface urlsProps {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
  value?: string;
}

type navigationProps = {
  title: string;
  urls: urlsProps[];
};

export const navigation: navigationProps[] = [
  {
    title: "Navigation",
    urls: company[0].navigationID.map((item) => ({
      title: item.label,
      link: `${item.id}`,
    })),
  },
  {
    title: "Services",
    urls: [
      {
        title: "Vehicle Financing",
        value: "vehicle_financing",
      },
      {
        title: "Trade-In Valuation",
        value: "trade_in",
      },
      {
        title: "Extended Warranties",
        value: "warranty_service",
      },
      {
        title: "Vehicle Availability",
        value: "availability",
      },
      {
        title: "Parts & Accessories",
        value: "parts_and_accessories",
      },
      {
        title: "Vehicle History Reports",
        value: "vehicle_history",
      },
    ],
  },

  {
    title: "Socials",
    urls: [
      {
        title: "Twitter",
        icon: IoLogoTwitch,
        link: "https://twitter.com/autobahn_de",
      },
      {
        title: "Facebook",
        icon: IoLogoFacebook,
        link: "https://www.facebook.com/groups/396676730968907/",
      },
      {
        title: "Instagram",
        icon: IoLogoInstagram,
        link: "https://www.instagram.com/autobahn_de/",
      },
      {
        title: "Github",
        icon: IoLogoGithub,
        link: "https://www.github.com/Marmo77",
      },
    ],
  },
];

export const CopyrightBar = [
  {
    tagline: "Find your dream car with Us.",
    copyright: "© 2024 Autobahn.de. All rights reserved.",
    bottomLinks: [
      { text: "Terms and Conditions", link: "#" },
      { text: "Privacy Policy", link: "#" },
    ],
    bottomSocials: [
      {
        title: "Twitter",
        icon: IoLogoTwitch,
        link: "https://twitter.com/autobahn_de",
      },
      {
        title: "Facebook",
        icon: IoLogoFacebook,
        link: "https://www.facebook.com/groups/396676730968907/",
      },
      {
        title: "Instagram",
        icon: IoLogoInstagram,
        link: "https://www.instagram.com/autobahn_de/",
      },
      {
        title: "Github",
        icon: IoLogoGithub,
        link: "https://www.github.com/Marmo77",
      },
    ],
  },
];

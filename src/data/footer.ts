import { Facebook, Twitter } from "lucide-react";
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
  link: string;
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
        link: "#",
      },
      {
        title: "Trade-In Valuation",
        link: "#",
      },
      {
        title: "Extended Warranties",
        link: "#",
      },
      {
        title: "Service & Maintenance",
        link: "#",
      },
      {
        title: "Parts & Accessories",
        link: "#",
      },
      {
        title: "Vehicle History Reports",
        link: "#",
      },
    ],
  },

  {
    title: "Socials",
    urls: [
      {
        title: "Twitter",
        icon: IoLogoTwitch,
        link: "#",
      },
      {
        title: "Facebook",
        icon: IoLogoFacebook,
        link: "https://www.facebook.com/groups/396676730968907/",
      },
      {
        title: "Instagram",
        icon: IoLogoInstagram,
        link: "#",
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
        link: "#",
      },
      {
        title: "Facebook",
        icon: IoLogoFacebook,
        link: "https://www.facebook.com/groups/396676730968907/",
      },
      {
        title: "Instagram",
        icon: IoLogoInstagram,
        link: "#",
      },
      {
        title: "Github",
        icon: IoLogoGithub,
        link: "https://www.github.com/Marmo77",
      },
    ],
  },
];

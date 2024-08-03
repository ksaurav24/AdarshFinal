import qualityIcon from "../../public/qualityIcon.svg";
import teamIcon from "../../public/teamIcon.svg";
import supportIcon from "../../public/supportIcon.svg";

import ServiceAc from "../../public/Services/ServiceAc.webp";
import ServiceWm from "../../public/Services/ServiceWm.webp";
import ServiceFridge from "../../public/Services/ServiceFridge.webp";
import ServiceMicrowave from "../../public/Services/ServiceMicrowave.webp";
import ServiceRo from "../../public/Services/ServiceRo.webp";
import ServiceWd from "../../public/Services/ServiceWd.webp";

import Godrej_Logo from "../../public/Companies/Godrej-Logo.webp";
import LG_Logo from "../../public/Companies/LG-Logo.webp";
import Samsung_Logo from "../../public/Companies/Samsung-Logo.webp";
import Whirlpool_Logo from "../../public/Companies/Whirlpool-Logo.webp";
import Voltas_Logo from "../../public/Companies/Voltas-Logo.webp";
import IFB_Logo from "../../public/Companies/IFB-Logo.webp";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Products",
    url: "#products",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];
const about = [
  {
    title: "Quality Services",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: qualityIcon,
  },
  {
    title: "Professional Team",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: teamIcon,
  },
  {
    title: "24 Hour Support",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: supportIcon,
  },
];

const services = [
  {
    title: "Air conditioner",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceAc,
  },
  {
    title: "Washing Machine",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceWm,
  },
  {
    title: "Fridge",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceFridge,
  },
  {
    title: "Microwave",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceMicrowave,
  },
  {
    title: "RO Water Purifier",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceRo,
  },
  {
    title: "Water Dispenser",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ServiceWd,
  },
];
const companies = [
  {
    name: "Godrej",
    logo: Godrej_Logo,
  },
  {
    name: "LG",
    logo: LG_Logo,
  },
  {
    name: "Samsung",
    logo: Samsung_Logo,
  },
  {
    name: "Whirlpool",
    logo: Whirlpool_Logo,
  },
  {
    name: "Voltas",
    logo: Voltas_Logo,
  },
  {
    name: "IFB",
    logo: IFB_Logo,
  },
];

export { navLinks, about, services, companies };

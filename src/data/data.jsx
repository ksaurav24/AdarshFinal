import qualityIcon from "../../public/qualityIcon.svg";
import teamIcon from "../../public/teamIcon.svg";
import supportIcon from "../../public/supportIcon.svg";
import ServiceAc from "../../public/ServiceAC.webp";
import ServiceFridge from "../../public/ServiceFridge.webp";
import ServiceMicrowave from "../../public/ServiceMicrowave.webp";
import ServiceRo from "../../public/ServiceRo.webp";
import ServiceWm from "../../public/ServiceWm.webp";
import ServiceWd from "../../public/ServiceWd.webp";

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

export { navLinks, about, services };

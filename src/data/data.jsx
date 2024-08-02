import qualityIcon from "../../public/qualityIcon.svg";
import teamIcon from "../../public/teamIcon.svg";
import supportIcon from "../../public/supportIcon.svg";

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
    image: airConditioner,
  },
  {
    title: "Washing Machine",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Fridge",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Microwave",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "RO Water Purifier",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Water Dispenser",
    description:
      "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export { navLinks, about, services };

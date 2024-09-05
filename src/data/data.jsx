import qualityIcon from "../../public/qualityIcon.svg";
import teamIcon from "../../public/teamIcon.svg";
import supportIcon from "../../public/supportIcon.svg";

import ServiceAc from "../../public/ServicesImages/ServiceAC.webp";
import ServiceWm from "../../public/ServicesImages/ServiceWm.webp";
import ServiceFridge from "../../public/ServicesImages/ServiceFridge.webp";
import ServiceMicrowave from "../../public/ServicesImages/ServiceMicrowave.webp";
import ServiceRo from "../../public/ServicesImages/ServiceRo.webp";
import ServiceWd from "../../public/ServicesImages/ServiceWd.webp";

import Godrej_Logo from "../../public/Companies/Godrej-Logo.webp";
import LG_Logo from "../../public/Companies/LG-Logo.webp";
import Samsung_Logo from "../../public/Companies/Samsung-Logo.webp";
import Whirlpool_Logo from "../../public/Companies/Whirlpool-Logo.webp";
import Voltas_Logo from "../../public/Companies/Voltas-Logo.webp";
import IFB_Logo from "../../public/Companies/IFB-Logo.webp";

import product1 from "../../public/productsImages/product1.jpg";
import product2 from "../../public/productsImages/product2.jpg";
import product3 from "../../public/productsImages/product3.jpg";
import product4 from "../../public/productsImages/product4.jpg";
import product5 from "../../public/productsImages/product5.jpg";
import product6 from "../../public/productsImages/product6.jpg";
import product7 from "../../public/productsImages/product7.jpg";
import product8 from "../../public/productsImages/product8.jpg";
import product9 from "../../public/productsImages/product9.jpg";
import product10 from "../../public/productsImages/product10.jpg";
import product11 from "../../public/productsImages/product11.jpg";
import product12 from "../../public/productsImages/product12.jpg";
import product13 from "../../public/productsImages/product13.jpg";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Products",
    url: "/products",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const about = [
  {
    title: "Quality Services",
    description:
      "We provide reliable and efficient repair services to keep your appliances running smoothly.",
    icon: qualityIcon,
  },
  {
    title: "Professional Team",
    description:
      "Our experienced technicians are dedicated to delivering top-notch service every time.",
    icon: teamIcon,
  },
  {
    title: "24 Hour Support",
    description:
      "We’re here for you around the clock, offering support whenever you need it.",
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
const products = {
  AC: [
    {
      title: "AC INSTALLATION PARTS",
      link: "https://www.amazon.in/dp/B0DFHH4KWY?ref=myi_title_dp&th=1",
    },
    {
      title: "AC INSTALLATION PARTS",
      link: "https://www.amazon.in/dp/B0DCS737SB?ref=myi_title_dp",
    },
    {
      title: "AC INSTALLATION PARTS",
      link: "https://www.amazon.in/dp/B0DCC6C2D3?ref=myi_title_dp",
    },
    {
      title: "AC INSTALLATION PARTS",
      link: "https://www.amazon.in/Thickness-Flexible-Seamless-Conditioners-Refrigeration/dp/B0D2GHMXCJ/ref=zg_bs_g_7355451031_d_sccl_7/258-5528887-6258165?psc=1",
    },
  ],
  Microwave: [
    {
      title: "MICROVAE STAND",
      link: "https://www.amazon.in/Tusmad-Microwave-Universal-Adjustable-Mechanism/dp/B0CR7JPLW7/ref=asc_df_B0CR7JPLW7/?tag=googleshopdes-21&linkCode=df0&hvadid=686118360213&hvpos=&hvnetw=g&hvrand=16502803963984836889&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007765&hvtargid=pla-2293325873935&psc=1&mcid=86f71b0f03383fa4a70e1fdf51ef9a66&gad_source=1",
    },
    {
      title: "ALL MICROWAVE PLATE AVAILABLE",
      link: "https://www.amazon.in/FUSION-STAR-Microwave-Glass-Plate/dp/B0CL28V7K2/ref=zg_bs_g_1380314031_d_sccl_1/258-5528887-6258165?psc=1",
    },
    {
      title: "MICROWAVE RING AND GRILLER",
      link: "https://www.amazon.in/Microwave-Rotating-Table-Support-Roller/dp/B07BF86BTJ/ref=zg_bs_g_1380314031_d_sccl_7/258-5528887-6258165?psc=1",
    },
    {
      title: "MICROWAVE RING AND GRILLER",
      link: "https://www.amazon.in/INDIAN-DECOR-Halogen-Including-Diameter/dp/B0B9MVGFZ3/ref=asc_df_B0B9MVGFZ3/?tag=googleshopdes-21&linkCode=df0&hvadid=619268587425&hvpos=&hvnetw=g&hvrand=6900610784594596782&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007765&hvtargid=pla-1791569772620&psc=1&mcid=8e6ef3633ad134deb9382ba8e70d9b69",
    },
  ],
  Washing_Machine: [
    {
      title: "WATER INLET PIPE",
      link: "https://www.amazon.in/LG-Original-Washing-Machine-Flexible/dp/B09Q66JBRT/ref=sr_1_5_mod_primary_new?crid=3UQ08IPOHI316&dib=eyJ2IjoiMSJ9.qeWNHswZjvg07frMim0ameUZ5Ms94D2HsA0eWVYjk879y78Pu0HBtqZXrAF-koU26RNvSk5q07FGbQFUWYcb9W_ToMUQYTiokw8JRycSnHwaW7WxcVqxAyHzt3GnPYBvnCA6_vbrpFdVSm43IA0QlG4fPxMAWgUNNvnCUxcXWLGe6tOGHCKoIlNzbVPnCCR8pk5rQHc0nlYxVUA-Yq2a_eUQNBraVoVGCDrzn9QeVXw.ikqoEHPNdUnvD_UD1Jaa9UWUlkBrojoWFWoqdD6ADcM&dib_tag=se&keywords=water%2Binlet%2Bpipe&qid=1725368365&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=WATER%2BINLET%2BPIPE%2Caps%2C215&sr=8-5&th=1",
    },
    {
      title: "WATER OUTLET PIPE",
      link: "https://www.amazon.in/LG-Original-Washing-Machine-Flexible/dp/B09Q677YMM/ref=pd_bxgy_d_sccl_1/258-5528887-6258165?pd_rd_w=chpqk&content-id=amzn1.sym.f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_p=f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_r=AEKWXJXJCSZAMKX84R8F&pd_rd_wg=G9G4y&pd_rd_r=fe517864-ac5a-4c10-ac64-c79fd8418838&pd_rd_i=B09Q677YMM&th=1",
    },
    {
      title: "SAFETY COVER",
      link: "https://www.amazon.in/Compatible-washing-machine-semi-automatic/dp/B07M6CYZSX/ref=pd_bxgy_d_sccl_2/258-5528887-6258165?pd_rd_w=55bZr&content-id=amzn1.sym.f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_p=f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_r=DP4M9GKS28E3B54B3CYX&pd_rd_wg=bmEBT&pd_rd_r=189da643-b347-4d80-9f5d-818e8cc28cd9&pd_rd_i=B07M6CYZSX&psc=1",
    },
    {
      title: "LINT FILTER",
      link: "https://www.amazon.in/KHC-Filter-Automatic-Washing-Machine/dp/B07H3Z5BRD/ref=pd_bxgy_d_sccl_2/258-5528887-6258165?pd_rd_w=YNA0u&content-id=amzn1.sym.f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_p=f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_r=RGD1S3GEKS4RW5AAWFH9&pd_rd_wg=zWFJV&pd_rd_r=0f7f5e8d-99ca-4cb5-a551-d79b369e27d8&pd_rd_i=B07H3Z5BRD&psc=1",
    },
    {
      title: "STAND",
      link: "https://www.amazon.in/Hipkoo-Washing-Dishwasher-Refrigerator-Capacity/dp/B0C8VB73WC/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.pM04a4h6RbMvSULgMxQx5i2thrpJWxJ0zfw3ooLd2UG7JpmXHygQN05xWOOKCX2Uz3UoivvNAfDrHprWxRb9DhLXtpBdw3aTWLgclZEvcyTdd5mOs3EfXv3rQG0hq9n2fRv9l-0oUN1KNeZqWrpI5i1Q8_ZzEgQvFlQH1vkCcDzGHuvMGCY3khej812vsRQgq52m9mn8rkw0jZ040nflVb0BQNJABKDOnlZAlZoZBUk.m8Tk4YR-UvfSTMZXIPirQIljPXQmZjpaMTiJ7_GKufI&dib_tag=se&keywords=washing+machine+stand&qid=1725368493&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
  ],
  RO: [
    {
      title: "RO Water Filter",
      link: "https://www.amazon.in/dp/B0987S7R2Q",
    },
    {
      title: "RO Membrane",
      link: "https://www.amazon.in/dp/B07H3Z5BRD",
    },
    {
      title: "RO Pump",
      link: "https://www.amazon.in/dp/B08L9FJGG9",
    },
    {
      title: "RO Pipe Fitting Kit",
      link: "https://www.amazon.in/dp/B097DG34WP",
    },
    {
      title: "RO Mineral Cartridge",
      link: "https://www.amazon.in/dp/B08D8FGJDH",
    },
    {
      title: "RO Booster Pump",
      link: "https://www.amazon.in/dp/B08FW5TLBF",
    },
  ],
};

export { navLinks, about, services, companies, products };

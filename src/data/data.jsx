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
    title: "Genuine Spare Parts",
    description:
      "We offer authentic spare parts to ensure the longevity of your appliances.",
    icon: supportIcon,
  },
];

const services = [
  {
    title: "Air conditioner",
    description:
      "We provide expert repair services for all types of air conditioners. Our technicians are skilled and experienced in handling all kinds of AC issues.",
    image: ServiceAc,
  },
  {
    title: "Washing Machine",
    description:
      "Our technicians are well-versed in repairing all types of washing machines. We ensure that your appliance is up and running in no time.",
    image: ServiceWm,
  },
  {
    title: "Fridge",
    description:
      "From minor repairs to major issues, we provide comprehensive fridge repair services. Our technicians are trained to handle all kinds of refrigerator problems.",
    image: ServiceFridge,
  },
  {
    title: "Microwave",
    description:
      "Microwave ovens are an essential part of the kitchen. We offer quick and efficient repair services to ensure your microwave is working perfectly.",
    image: ServiceMicrowave,
  },
  {
    title: "RO Water Purifier",
    description:
      "Water purifiers need regular maintenance to function efficiently. We provide repair and maintenance services for all types of RO water purifiers.",
    image: ServiceRo,
  },
  {
    title: "Water Dispenser",
    description:
      "Ensure your water dispenser is in top condition with our repair services. Our technicians are skilled in handling all kinds of water dispenser issues.",
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
      title:
        "AH.C 7/8 ID X 3/8 THK Foam Heat Insulated Tube for Air Conditioner Ac Pipe Foam Rubber Tube 5.9 Feet Insulation Pipe Cover ID 22 X 9 mm THK Tube",
      link: "https://www.amazon.in/dp/B0DFHH4KWY?ref=myi_title_dp&th=1",
      image:
        "https://a.media-amazon.com/images/I/41XcQ0+P9bL._SX300_SY300_.jpg",
      price: "₹390",
    },
    {
      title:
        "Heavy Duty Floor Mounted Ac Stand, Special Coated, Super Quality, Weather Resistant | Floor Standing Ac Stand | Outdoor Unit for 1 Ton, 1.2 Ton, 1.5 Ton, 2 Ton - Rust Proof",
      link: "https://www.amazon.in/dp/B0DCS737SB?ref=myi_title_dp",
      image:
        "https://a.media-amazon.com/images/I/315COsrq4YL._SX300_SY300_QL70_FMwebp_.jpg",
      price: "₹599",
    },
    {
      title:
        "AHC Air Conditioner Outdoor Ac Stand for 1 Ton,1.5 Ton, 2 Ton AC Stand/Heavy Duty Air Conditioner Outdoor Unit Wall Mounting Bracket",
      link: "https://www.amazon.in/dp/B0DCC6C2D3?ref=myi_title_dp",
      image:
        "https://a.media-amazon.com/images/I/41hgeF5QQqL._SX300_SY300_QL70_FMwebp_.jpg",
      price: "₹589",
    },
  ],
  Microwave: [
    {
      title:
        "Tusmad Heavy Duty Oven & Microwave Wall Mount Stand,Universal Wall Bracket/Shelf/Holder/OTG Wall Stand for Kitchen with Foldable & Length Adjustable Mechanism 20 Kgs.",
      link: "https://www.amazon.in/Tusmad-Microwave-Universal-Adjustable-Mechanism/dp/B0CR7JPLW7/ref=asc_df_B0CR7JPLW7/?tag=googleshopdes-21&linkCode=df0&hvadid=686118360213&hvpos=&hvnetw=g&hvrand=16502803963984836889&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007765&hvtargid=pla-2293325873935&psc=1&mcid=86f71b0f03383fa4a70e1fdf51ef9a66&gad_source=1",
      price: "₹854",
      image:
        "https://a.media-amazon.com/images/I/41-12fmpg+L._SY300_SX300_.jpg",
    },
    {
      title:
        "FUSION STAR Microwave Oven Turntable Rotating Glass Plate/Tray with 2 inch Bushing Coupler (Transparent, Diameter: 9.6 Inch/24.5 cm/245 mm) ( FS-1 )",
      link: "https://www.amazon.in/FUSION-STAR-Microwave-Glass-Plate/dp/B0CL28V7K2/ref=zg_bs_g_1380314031_d_sccl_1/258-5528887-6258165?psc=1",
      price: "₹499",
      image:
        "https://a.media-amazon.com/images/I/51rcAsvsNjL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Ekta home appliances Plastic Microwave Oven Rotating Turn Table Support Roller (Size Radius 90 mm)",
      link: "https://www.amazon.in/Microwave-Rotating-Table-Support-Roller/dp/B07BF86BTJ/ref=zg_bs_g_1380314031_d_sccl_7/258-5528887-6258165?psc=1",
      price: "₹299",
      image:
        "https://a.media-amazon.com/images/I/310cqXVzSzL._QL70_FMwebp_.jpg",
    },
    {
      title:
        "INDIAN DECOR 31465 Halogen Oven Racks | Set of 2 Including High & Low Rack | 25cm Diameter for 10-12 Litre Ovens",
      link: "https://www.amazon.in/INDIAN-DECOR-Halogen-Including-Diameter/dp/B0B9MVGFZ3/ref=asc_df_B0B9MVGFZ3/?tag=googleshopdes-21&linkCode=df0&hvadid=619268587425&hvpos=&hvnetw=g&hvrand=6900610784594596782&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007765&hvtargid=pla-1791569772620&psc=1&mcid=8e6ef3633ad134deb9382ba8e70d9b69",
      price: "₹1,499",
      image:
        "https://a.media-amazon.com/images/I/41xMgesKgjL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ],
  Washing_Machine: [
    {
      title:
        "WLG Original Semi Automatic Washing Machine Inlet Water Flexible Hose Pipe Pack 2 And 3 Miters (2 Meter)",
      link: "",
      price: "₹204",
      image:
        "https://a.media-amazon.com/images/I/31YlQwqIyZS._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "LG Original 1.5 Meter Top load/Semi Load Washing Machine Outlet Drain Waste Water Inlet Hose Flexible Hose Pipe (Pack Of 1) (1.5)",
      link: "",
      price: "₹250",
      image:
        "https://a.media-amazon.com/images/I/517SA6iDbHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Compatible for lg washing machine semi automatic LG SEMI Automatic Washing Machine Compatible Safety Cover",
      link: "https://www.amazon.in/Compatible-washing-machine-semi-automatic/dp/B07M6CYZSX/ref=pd_bxgy_d_sccl_2/258-5528887-6258165?pd_rd_w=55bZr&content-id=amzn1.sym.f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_p=f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_r=DP4M9GKS28E3B54B3CYX&pd_rd_wg=bmEBT&pd_rd_r=189da643-b347-4d80-9f5d-818e8cc28cd9&pd_rd_i=B07M6CYZSX&psc=1",
      price: "₹155",
      image:
        "https://a.media-amazon.com/images/I/31fziFD6msL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      title:
        "KHC LINT FILTER for SEMI AUTOMATIC Compatible with LG WASHING MACHINE(Pcs of 2)",
      link: "https://www.amazon.in/KHC-Filter-Automatic-Washing-Machine/dp/B07H3Z5BRD/ref=pd_bxgy_d_sccl_2/258-5528887-6258165?pd_rd_w=YNA0u&content-id=amzn1.sym.f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_p=f6230d8b-7bfa-4eba-a1aa-9608b9987115&pf_rd_r=RGD1S3GEKS4RW5AAWFH9&pd_rd_wg=zWFJV&pd_rd_r=0f7f5e8d-99ca-4cb5-a551-d79b369e27d8&pd_rd_i=B07H3Z5BRD&psc=1",
      price: "₹169",
      image:
        "https://a.media-amazon.com/images/I/31qHI2bJAXL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Hipkoo Washing Machine Trolley with Wheels & Anti Vibration Grips - Adjustable Metal Stand for All Semi or Front or Top Load Washing Machine, Fridge, Dishwasher Stand, etc. (Stands up to 170Kg, Black)",
      link: "https://www.amazon.in/Hipkoo-Washing-Dishwasher-Refrigerator-Capacity/dp/B0C8VB73WC/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.pM04a4h6RbMvSULgMxQx5i2thrpJWxJ0zfw3ooLd2UG7JpmXHygQN05xWOOKCX2Uz3UoivvNAfDrHprWxRb9DhLXtpBdw3aTWLgclZEvcyTdd5mOs3EfXv3rQG0hq9n2fRv9l-0oUN1KNeZqWrpI5i1Q8_ZzEgQvFlQH1vkCcDzGHuvMGCY3khej812vsRQgq52m9mn8rkw0jZ040nflVb0BQNJABKDOnlZAlZoZBUk.m8Tk4YR-UvfSTMZXIPirQIljPXQmZjpaMTiJ7_GKufI&dib_tag=se&keywords=washing+machine+stand&qid=1725368493&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      price: "₹949",
      image:
        "https://a.media-amazon.com/images/I/31uozyZUKkL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ],
  RO: [
    {
      title:
        "Aqua Grand Plus RO Domestic Water Purifier (RO+ LED UV+ ORC COPPER+ HIGH TDS MEMBRANE+ TDS CONTROL) Fully Automatic, Best For Home/Office Purpose | 20 LPH | 12 Liter Storage",
      link: "https://www.amazon.in/Aqua-Grand-Plus-DomesticAutomatic/dp/B0DBV6HG6V/ref=sr_1_7?crid=2WAR89TOSY6S9&dib=eyJ2IjoiMSJ9.PUJ0YQLANIDwTxyjXWT7bSZhLqicQygpJGAkVxjbuIj3CStCpxRKPRlUXyl5uCu1DwVPQZ2gNu9uqWL9fCqVchsbhpx9LKD0NrFZNR4V3Gfbmb_ZrL3OxYlnPMRBcKybOJkKPkKyTLm_7Acw0oGQlvMFEdHpeePIz7CjDYGw7G12Fi4nJkqZAn5vN6seBekAHAXXNxZBF9Oa99F454I04w_iTKkun-2WYgRtfjzMk.xPucEDn_ApUrJLO6y-AJsXGdZ127_ClhVun6lFtHww&dib_tag=se&keywords=RO&qid=1724663076&sprefix=r%2Caps%2C444&sr=8-7",
      price: "₹4,999",
      image:
        "https://a.media-amazon.com/images/I/41f1HtQyAwL._SX342_SY445_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Aqua Omega Plus Domestic Water Purifier (RO+ LED UV+ ORC COPPER+ HIGH TDS MEMBRANE+ TDS CONTROL) Best For Home/Office Purpose, Automatic | 20 LPH | 12 Liter Storage (Aqua Grand Plus)",
      link: "",
      price: "₹4,950",
      image:
        "https://a.media-amazon.com/images/I/41CMpJKl0vL._SX342_SY445_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Omega RO With LED Indication Latest Smart Filtration Technology (RO+UV+UF+TDS Adjuster) + Copper + Alkaline Technology | Longlife Performance | Heavy Pump | Food Grade Material (White & Green)",
      link: "https://www.amazon.in/Indication-Filtration-Performance-WhiteGreen/dp/B0D3BVPCCL/ref=sr_1_5?crid=G3G8981BCD82&dib=eyJ2IjoiMSJ9.mIwmN1iEfCmKETQkRag7VVFr1XJRspiSzCi1XBneoyQxl2doxNzXPOMVYRQyR0tLWzykA9HRqU_Iq8a6gJFKkO40OKY50YiBFhiR3KA96P6GNW37oRUM2iKgk2loPqOtsDqeuN0EJs36Tq7M8hfNt2bdNGMIFGrG9d9mtx1m4mmacjmyDb37BaZ74j6FQuDEb2iwl6aGO3HnCAM_lA1I5b_XqH_NvasEC6taSNkib3g.Ju_z8x8R0DazpzBGng7V9jzoY4vFnVsoWJ3NMM8r3Nc&dib_tag=se&keywords=OMEGA+RO&qid=1724663112&sprefix=omega+ro%2Caps%2C251&sr=8-5",
      price: " ₹5,399",
      image:
        "https://a.media-amazon.com/images/I/41azjGoSIOL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      title: "Oseas aqua swift 15 L RO + UV + UF + TDS Water Purifier  (White)",
      link: "https://www.flipkart.com/oseas-aqua-swift-15-l-ro-uv-uf-tds-waterpurifier/p/itme10eac3461715?pid=WAPFFXZQ4UZBHZKD&lid=LSTWAPFFXZQ4UZBHZKDAYNN9L&marketplace=FLIPKART&q=AQUA+SWIFT&store=j9e%2Fabm%2Fi45&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=44367a32-51e2-4ff6-8bdd0a6ff60a8836.WAPFFXZQ4UZBHZKD.SEARCH&ppt=pp&ppn=pp&ssid=rjsgldcp400000001724663202439&qH=908b3378159996c5",
      price: "₹5,799",
      image:
        "https://rukminim2.flixcart.com/image/416/416/jv19qq80/water-purifier/z/k/d/oseasaqua-swift-original-imaffxmzvpg25bga.jpeg?q=70&crop=false",
    },
    {
      title:
        "MABSHAN Under The Counter (UTC) 5 Stages RO Water Purifier - UV, Alkaline, RO, TDS Controller",
      link: "https://www.amazon.in/MABSHAN-Counter-UTC-Stages-Purifier/dp/B0916VY9RR/ref=sr_1_8?crid=SO55WDTL0I6S&dib=eyJ2IjoiMSJ9.8447NvWnSNQLFbmIrnEV049EnANUubtBGoD0p5OxLyE7GLFKgBjAxWhlZ9YMvdSMtN87hgZ34n0Gp7lkfGeLh9TO75NAMtZBHmOkNrGpke1wvDHvnasezsBbihbQcmQmL-rQiXSBiN_o75WI5UNAoa0Pmh-FnU47JKgBKU8EN8.hd7d6bVKjqtCbOnsvXmvzJXiccw0u7gEOAq0jxWsBAc&dib_tag=se&keywords=MABSHAN&qid=1724663351&sprefix=mabshan+%2Caps%2C220&sr=8-8",
      price: "₹12,500",
      image:
        "https://a.media-amazon.com/images/I/41tpqYaEklL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      title:
        "CSM 80 GPD RO Genuine Membrane Filter Cartridge - Reduces TDS by 96%-98% - Compatible with Most RO System",
      link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMDU5OTI3NjkyOTc1OTk2OjE3MjQ2NjMyODI6c3BfYXRmOjMwMDEyNzU1MTU1MzgzMjo6MDo6&url=%2FCSM-80-GPD-RO-Membrane%2Fdp%2FB0C8JFJ8J6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1O267ZK3XL4ZI%26dib%3DeyJ2IjoiMSJ9.st36NZZwX1d_gh2xkLu66z6LI5sRocfi3XZd_td3MXLHF-BZHy8AE1WH1EJljU-NSHwsvNgEBf8cHeOpjkPbElM_7XZ3hsPLosUL4vNeYkcVr3a7bj4i4GStdDE90t9kRE1rLuAx9gGAQlax_Qka8v183p3dKGvwPj5ENovFCwDqISFcJuCnp94SsjlzEQdb1geDzaS3VCnSPLIL5s-Hmbtd0uhhYySDUIzXEFdpI90.bcqtxrREyuoB-Vr3bBotIkdYJrTuiumb0ThNa-jI6d8%26dib_tag%3Dse%26keywords%3DCSM%2BMEMBRANE%26qid%3D1724663282%26sprefix%3Dcsm%2Bmembran%252Caps%252C244%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      price: "N/A",
      image:
        "https://a.media-amazon.com/images/I/31PL8EZtwLL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title: "Mabshan Carbon Filter",
      link: "https://www.amazon.in/MABSHAN-Mabshan-CarbonFilter/dp/B07T838DNK/ref=sr_1_3?crid=SO55WDTL0I6S&dib=eyJ2IjoiMSJ9.8447NvWnSNQLFbmIrnEV049EnANUubtBGoD0p5OxLyE7GLFKgBjAxWhlZ9YMvdSMtN87hgZ34n0Gp7lkfGeLh9TO75NAMtZBHmOkNrGpke1wvDHvnasezsBbihbQcmQmL-rQiXSBiN_o75WI5UNAoa0Pmh-F-nU47JKgBKU8EN8.hd7d6bVKjqtCbOnsvXmvzJXiccw0u7gEOAq0jxWsBAc&dib_tag=se&keywords=MABSHAN&qid=1724663351&sprefix=mabshan+%2Caps%2C220&sr=8-3",
      price: "₹350",
      image:
        "https://a.media-amazon.com/images/I/31i1GsoQ26S._SX300_SY300_QL70_FMwebp_.jpg",
    },

    {
      title: "Mabshan RO Water Purifier Booster Pump 100 GPD",
      link: "https://www.amazon.in/Mabshan-Water-Purifier-BoosterPump/dp/B0925R4RHV/ref=sr_1_6?crid=SO55WDTL0I6S&dib=eyJ2IjoiMSJ9.8447NvWnSNQLFbmIrnEV049EnANUubtBGoD0p5OxLyE7GLFKgBjAxWhlZ9YMvdSMtN87hgZ34n0Gp7lkfGeLh9TO75NAMtZBHmOkNrGpke1wvDHvnasezsBbihbQcmQmL-rQiXSBiN_o75WI5UNAoa0Pmh-F-nU47JKgBKU8EN8.hd7d6bVKjqtCbOnsvXmvzJXiccw0u7gEOAq0jxWsBAc&dib_tag=se&keywords=MABSHAN&qid=1724663351&sprefix=mabshan+%2Caps%2C220&sr=8-6",
      price: "₹1,299",
      image:
        "https://a.media-amazon.com/images/I/41BOgzDyxgL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title: "Mabshan RO SMPS Adaptor",
      link: "https://www.amazon.in/MABSHAN-SMPSAdaptor/dp/B07TB4M2X7/ref=sr_1_10?crid=SO55WDTL0I6S&dib=eyJ2IjoiMSJ9.8447NvWnSNQLFbmIrnEV049EnANUubtBGoD0p5OxLyE7GLFKgBjAxWhlZ9YMvdSMtN87hgZ34n0Gp7lkfGeLh9TO75NAMtZBHmOkNrGpke1wvDHvnasezsBbihbQcmQmL-rQiXSBiN_o75WI5UNAoa0Pmh-F-nU47JKgBKU8EN8.hd7d6bVKjqtCbOnsvXmvzJXiccw0u7gEOAq0jxWsBAc&dib_tag=se&keywords=MABSHAN&qid=1724663351&sprefix=mabshan+%2Caps%2C220&sr=8-10",
      price: "₹700",
      image:
        "https://a.media-amazon.com/images/I/417qHf0EuLS._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "PP Spun Filter CARTIDGE Kemflow Cartridge Pre Outer Candle 5 Micron Pre Filter 10 Inch 1PP Spun Filter for All Type RO Water Purifier -Pack of 6 + 2 Free",
      link: "https://www.amazon.in/Filter-CARTIDGE-Kemflow-Cartridge-Purifier/dp/B097KM93R6/ref=sr_1_7?crid=2BHIBGJHYEBP4&dib=eyJ2IjoiMSJ9.RCKcJTkaWFwBxLsOBLZFE-vdcF1Dioo-0ofrPjsp7RKLsHSp2LtlrZYuwRR9WqGWtb2gGjHF77LWStzV-M2IXRZbyqo4D-weiIE7iIvhYxvj_vtYLhhd2lvbuni19XNjgno-ymOkYYSx38nCA9GHCaY9aimLWkuSsoD0_dD_9IVv8QOrVPWmeu52tPfidu9-nMQs4ZQo5PVR6nmNJloKJo2pJkadvFY6VV6EfD1ipQ.Ni6FOhg4WLW8f4sc4ZDjc2sohrPaZCZ1vy_cc6wik9k&dib_tag=se&keywords=KEMFLOW&qid=1724663466&sprefix=kemflo%2Caps%2C230&sr=8-7",
      price: "₹349",
      image: "https://a.media-amazon.com/images/I/316ZkkL3ZVS.jpg",
    },
    {
      title:
        "IONIX Ro Booster Pump Head White For Ro Water Purifier Pump, Works with All ro Booster Motors 75 GPD, 100 GPD, ro motor pump head, ro motor pump head parts",
      link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NzczNzY2NTEwMzcwNTU4OjE3MjQ2NjM0NjY6c3BfYnRmOjMwMDE1NzMwNjQ4ODIzMjo6MDo6&url=%2FIonix-Booster-Pump-Purifier-head%2Fdp%2FB0847NGPTL%2Fref%3Dsr_1_21_sspa%3Fcrid%3D2BHIBGJHYEBP4%26dib%3DeyJ2IjoiMSJ9.RCKcJTkaWFwBxLsOBLZFE-vdcF1Dioo-0ofrPjsp7RKLsHSp2LtlrZYuwRR9WqGWtb2gGjHF77LWStzV-M2IXRZbyqo4D-weiIE7iIv-hYxvj_vtYLhhd2lvbuni19XNjgno-ymOkYYSx38nCA9GHCaY9aimLWkuSsoD0_dD_9IVv8QOrVPWmeu52tPfidu9-nMQs4ZQo5PVR6nmNJloKJo2pJkadvFY6VV6EfD1ipQ.Ni6FOhg4WLW8f4sc4ZDjc2sohrPaZCZ1vy_cc6wik9k%26dib_tag%3Dse%26keywords%3DKEMFLOW%26qid%3D1724663466%26sprefix%3Dkemflo%252Caps%252C230%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      price: "₹399",
      image:
        "https://a.media-amazon.com/images/I/41PFrU-08VL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "Original Hero Solenoid Valve 24v SV For All Ro Water Purifiers Hero Genuine Sv (Blue and white)",
      link: "https://www.amazon.in/Original-Solenoid-Valve-Purifiers-Genuine/dp/B09B4WXTY7/ref=pd_sim_d_sccl_4_5/258-5528887-6258165?pd_rd_w=aRmOo&content-id=amzn1.sym.1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_p=1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_r=G01K1R1TR72TK2MCAZKJ&pd_rd_wg=W3Vk8&pd_rd_r=fa17e136-9f95-484f-ac3e-0a69fa1b9d34&pd_rd_i=B09B4WXTY7&psc=1",
      price: "₹159",
      image:
        "https://a.media-amazon.com/images/I/31oq+y8bWTL._SX342_SY445_.jpg",
    },
    {
      title:
        "Konvio Neer High 3000 TDS Membrane Spare for All Type of RO Water Purifier (FR 450)",
      link: "https://www.amazon.in/Konvio-Neer-Water-Purifier-Restricter/dp/B07HCGHF5B/ref=pd_sim_d_sccl_4_7/258-5528887-6258165?pd_rd_w=aRmOo&content-id=amzn1.sym.1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_p=1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_r=G01K1R1TR72TK2MCAZKJ&pd_rd_wg=W3Vk8&pd_rd_r=fa17e136-9f95-484f-ac3e-0a69fa1b9d34&pd_rd_i=B07HCGHF5B&psc=1",
      price: "₹199",
      image:
        "https://a.media-amazon.com/images/I/21z3bQNC9QL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "V.Pure Water, Plastic Inlet Coupling + Valve/Connector Ro/Uv/Water Filter Purifier 1/4 Size (D.V.Set), Rust Free, Long Life, Use with All RO Water purifiers with 1/4 Inlet",
      link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzI1NzMzMzcyMTUyMTgwOjE3MjQ2NjM1Njg6c3BfbXRmOjMwMDA2NTA5MTQ1MDEzMjo6MDo6&url=%2FHydromodern-Freemind-Coupling-Connector-purifiers%2Fdp%2FB0953DWCTD%2Fref%3Dsr_1_12_sspa%3Fcrid%3D11CM35TFT6E7P%26dib%3DeyJ2IjoiMSJ9.z3vXuagS9x2R7gFpCacY8L0cgFu_7jyPcil_IeAeYwDsLBIxtZ1MHnniIm3lzG5LADsrCxZ-5l_9krb2xLbS08desyBWb7yonive-d73ZrXAQRd8uFbkeNxA4mEXLIBah5WgL_8izbOb25bMn3ZuyqnKG43TaxuwPZQjBcGcrGRzBmzeBLMrW3t5Ej63TaK_0DDIcT24k003MJf8LuTss5i5rJKyGqijwCoZnYE-QHU.Bp-QolWpkD6skHs1RMkuTAfK7rUir873js2QoQBawbQ%26dib_tag%3Dse%26keywords%3DFLOATING%2BVALVE%2BRO%26qid%3D1724663568%26sprefix%3Dfloating%2Bvalve%2Bro%252Caps%252C238%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      price: "₹139",
      image:
        "https://a.media-amazon.com/images/I/31-8ixQAgHL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      title:
        "IONIX RO Tap, RO Tap Connector, RO tap for Water Purifier, Imported Ro faucet tap/faucet for under sink water purifier/All Ro water purifiers, Stainless Steel Tap, RO Drinking Water Filter",
      link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzk5NjkyNjc1ODkzNTQ2OjE3MjQ2NjM2NTQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI3NTkxNTM5MzAzMjo6Ojo&url=%2Fdp%2FB09QX5N1M2%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pf_rd_p%3D9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0%26pf_rd_r%3DXVKA7XT004FE7K8A518J%26pd_rd_wg%3DD5ClL%26pd_rd_w%3D5ivNO%26content-id%3Damzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0%26pd_rd_r%3Daa910e80-c82f-4af4-9aaf-e5d4fa2a9051%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
      price: "₹475",
      image: "https://a.media-amazon.com/images/I/41WHeE6hLWL._SY879_.jpg",
    },
  ],

  Fridge: [
    {
      title: "Multi - Pin Relay (PTC Relay) and OLP for Refrigerator",
      link: "https://www.accessorybee.com/store/buy-relays-and-olp-in-india/3196-10-multi-pin-relay-ptc-relay-and-olp-for-refrigerator.html#/26-pins-2_pin",
      price: "₹322.00",
      image:
        "https://www.accessorybee.com/store/4014-thickbox_default/multi-pin-relay-ptc-relay-and-olp-for-refrigerator.jpg",
    },
    {
      title: "Refrigerator Bulb",
      link: "https://www.accessorybee.com/store/284-refrigerator-bulb",
      price: "₹90",
      image: "",
    },
    {
      title: "Timer for LG Double Door Refrigerator In Stock",
      link: "https://www.accessorybee.com/store/double-door-timers/3242-timer-for-lg-double-door-refrigerator.html",
      price: "₹480.00",
      image:
        "https://www.accessorybee.com/store/4177-thickbox_default/timer-for-lg-double-door-refrigerator.jpg",
    },
    {
      title:
        "Thermostat Single Door Refrigerator Compatible for (Whirlpool Opera Type 2)",
      link: "https://www.hindustanrefrigeration.com/product/30018711/Thermostat-Single-Door-Refrigerator-Compatible-for--Whirlpool-Opera-Type-2-",
      price: "₹340",
      image: "https://cdn.dotpe.in/longtail/store-items/2524710/EyZyqhpu.jpeg",
    },
    {
      title:
        "Refrigerator PTC Starter/Start Relay Overload Color: Black (1/2/3 PIN R)",
      link: "https://www.hindustanrefrigeration.com/product/30186474/Refrigerator-PTC-Starter-Start-Relay-Overload-Color--Black--1-2-3-PIN-R-",
      price: "₹249",
      image: "https://cdn.dotpe.in/longtail/store-items/2524710/s5ZJrlPq.jpeg",
    },
    {
      title: "Refrigerator Overload",
      link: "https://www.hindustanrefrigeration.com/product/30583700/Refrigerator-Overload",
      price: "₹199.8",
      image: "https://cdn.dotpe.in/longtail/store-items/2524710/urOgaL6l.jpeg",
    },
    {
      title:
        "Thermostat Single Door Refrigerator Compatible for Samsung Single Door Refrigerator 165-300 Liter",
      link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj8-NfU1o2IAxX0kEsFHQ24IzMYABACGgJzZg&co=1&ase=2&gclid=CjwKCAjwiaa2BhAiEiwAQBgyHobaC0DDr- ETiv_CaxVrbIU09AhKNYFY8o3qb5XkLyuO4J1dKe0LIxoCrBEQAvD_BwE&ohost=www.google.com&cid=CAESV-D26kw6j6U2-utitjwqSq8arOYibqpTz0_4dpKe7FyJTUiJbdNCUo1ukl2WqFDA63UH8rIg2fPd5EbgYwh3178dLaIYNN0TJ69fJa-n66DmOyZmzde8QQ&sig=AOD64_20w4s2jAaK5mewc_58yIRr6cS7Ww&ctype=5&q=&nis=4&ved=2ahUKEwjUotTU1o2IAxXFRmcHHV3UGIIQ9A4oAnoECAYQCA&adurl=",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/41lLj7RhHrS.jpg",
    },
    {
      title:
        "AHC Bottle Shelf For Fridge Compatible With Whirlpool Single Door Refrigerator Bottle Rack Holder Color Clear Pack Of 1 Part Code W10418661",
      link: "",
      price: "₹349",
      image:
        "https://a.media-amazon.com/images/I/218DGd+SADL._SX300_SY300_.jpg",
    },
    {
      title:
        "Arvika Sales Whirlpool Original GNF/Mastermind Vegetable Basket for Double Door Refrigerator (Fridge) A201206) Match & Buy)",
      link: "https://www.amazon.in/Arvika-Whirlpool-Original-Mastermind-Vegetable/dp/B0921F1VX8/ref=sr_1_9?dib=eyJ2IjoiMSJ9.ezP-o3OhxCn9-59LpN5ZKnucd2F2Fzov2av0dqGOFPY48aVVDWnfCLCnHGzoZtyU2uQ0Iaj-O_HFs8fcc4KqXB1JN6KC-F7b3q68EmgcWZODcEZ_7fI6f-S-fZrue9LvZ0I8fRCEu6MaMfolZ9fXaWUQ9J2cdRpDW4er6PI-6StwAvOynFvn4Hp4yxKsoFLaOxH2xpZVgrZ625tLgIE9p2A1r4TryyZk3f8Iu00zb5SYiukTR4Wc0TujmZjPokL1ZFDKf7m8EneS0IrBwN0D1Em-zZ7S2jL6GSQzcXFvJAk.YlHNjjZNhz9was_FpNUuwHft2GuLWbS-Tx7TMwNE0mk&dib_tag=se&keywords=fridge+basket&qid=1725636707&sr=8-9",
      price: "₹1,740",
      image: "https://a.media-amazon.com/images/I/31mD1XLoy0L._SX569_.jpg",
    },

    {
      title:
        "Arvika Sales Original Fridge Chiller Tray Compatible with Whirlpool GEN-Y/Imfresh/Fusion/ICEMAGIC Single Door Refrigerator 180 Litter to 215 Litter",
      link: "https://www.amazon.in/Arvika-Sales-Compatible-Whirlpool-Refrigerator/dp/B0B8F1XVRQ/ref=sr_1_3?crid=3HW0XDY5MKA2T&dib=eyJ2IjoiMSJ9.DCRujtpR0rn7kRtFpZTFI5XwQMcgm-CacSYZGJUaOe2oaPmcQmwVoEyB2QwCoXQiGHiu3pfeifSb2cQNZBPFFwycrbIev04tPwihYDs5_6x1Nk4mvsTwE_e8kcDMLAvucRGf6d8XONFHVxeciXOlUyT9f3VymAXeVHYt_CezlqtFDnhfMqN7XKwTVG9xRoK4r9jzw26kNnQaZkxJ2C1LYg.N-4xgpz-cWRCiTgCAKcpcfika4qq-OePVdivFOUX98A&dib_tag=se&keywords=chiller+tray+fridge&qid=1725636762&sprefix=chiller+tray+fridge%2Caps%2C254&sr=8-3",
      price: "₹1,350",
      image: "https://a.media-amazon.com/images/I/410FxPwUf2L._SX679_.jpg",
    },
    {
      title:
        "TIKSHA ENTERPRISES TOUGHENED Glass with Silver Bidding (45.5=45.5) 34.07 CM RT 28 Compatible for Samsung Double Door Fridge",
      link: "https://www.amazon.in/ENTERPRISES-TOUGHENED-Bidding-Compatible-Samsung/dp/B0DC3Q8B62/ref=sr_1_1?dib=eyJ2IjoiMSJ9.oiOvwhC0ql2qKqtA0Y4WJ6xilFpfsXUZJNpgUsqNcwAQRiAlwfDH3JLY144ITeQ6pK20OFYnw0ypmHhoR4eVHWNd9Bfr8jVe4prNbQdrrjbhVxIO3yXGts3eIPNNpNTu5NMbwv0RxhZx34GEosCQxpZEpPhKbi8RqSbvc1I37c7evXw5cLDOXNr7GJDAWHPJxGMnArJ6xCclMtQSjLwP-2jOnAr-080TVvxOXqfWfes.gN0N78RaEksRr_ErlMqO0zLSHG53TpZ3K5-9e-rM_Rw&dib_tag=se&keywords=samsung+fridge+glass+shelf&qid=1725637086&sr=8-1",
      price: "₹1,300",
      image: "https://a.media-amazon.com/images/I/61yMx-vPHoL._SX425_.jpg",
    },
    {
      title:
        "Tiksha Enterprises wire shelf compatible Lg 165 litre fridge main shelf dimension in cm (44.5+43.8) X31.7 with telephone shape",
      link: "https://www.amazon.in/Tiksha-Enterprises-compatible-165-dimension/dp/B08X18CD2J/ref=sr_1_1?crid=1HJBXC4KXZ7CG&dib=eyJ2IjoiMSJ9.MkqFTyuuui9gHGQT1RwSbrAnBvkKTB3Ir4v12sHdb0keW2lmbtv2aCYo4llne6_yJGWtHHHG44CeXZuBa7idAUlHzsINZOyEFy9Eca62Cmv2WYq2_pQ9h8yHJNfllRnlZ8E4Ug2nVoE2z7aG14uXXqNxjI5Nu1HCTWlJ5wy32chSlp2KGKrHdB15tXmv7fmjCnSTQk3tN9RlPAaqLwrfOP454_n5Dho6d5FfKqO1BQs.gedIGjfDlUkKWJBnqDTZwKZkfioRL5ZLuT7lTOfrh9w&dib_tag=se&keywords=wire+shelf+fridge&qid=1725637049&sprefix=wire+shelf+fridge%2Caps%2C245&sr=8-1",
      price: "₹650",
      image: "https://a.media-amazon.com/images/I/71hkDP47KIL._SX679_.jpg",
    },
    {
      title:
        "Your's Shopekart Heavy Duty Refrigerator Stand Suitable for All Brand Single Door/Double Door Refrigerators, 150-292 L",
      link: "https://www.amazon.in/Yours-Shopekart-Liberty-Suitable-Refrigerators/dp/B07ZBKJTL2/ref=sr_1_3?crid=15YRUWJIZP2ZK&dib=eyJ2IjoiMSJ9.cgQlixPRZ0HgtEoroFY_wtwnRFhiJXsdajcg7vRKQCPPJK9RMgxA0gXUmkgdN5YwKK0F9og0hTJkMKqUZg4invc88_O5PJVhlAIeDzOVBQyg8rBwQ-df7onp0xEkyR14j3lqarDBGPJPnq78HJdzuWsOzSg6t8ESwSMLodEtgMJuVDCOK6JxwrRhgm9dSQ7cGDLMpwKUcs22YgSfYXJXUKUWqrSq5_gphXqTNON-CdU.cg0P8imwQPsNZWnF-rHVh5uvuXGwj2PFGchR4xNmCvg&dib_tag=se&keywords=fridge+stand&qid=1725637142&sprefix=firge+stan%2Caps%2C217&sr=8-3",
      price: "₹439",
      image: "https://a.media-amazon.com/images/I/61GnK33J3DL._SY450_.jpg",
    },
  ],
};

export { navLinks, about, services, companies, products };

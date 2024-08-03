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

import product1 from "../../public/products/product1.jpg";
import product2 from "../../public/products/product2.jpg";
import product3 from "../../public/products/product3.jpg";
import product4 from "../../public/products/product4.jpg";
import product5 from "../../public/products/product5.jpg";
import product6 from "../../public/products/product6.jpg";
import product7 from "../../public/products/product7.jpg";
import product8 from "../../public/products/product8.jpg";
import product9 from "../../public/products/product9.jpg";
import product10 from "../../public/products/product10.jpg";
import product11 from "../../public/products/product11.jpg";
import product12 from "../../public/products/product12.jpg";
import product13 from "../../public/products/product13.jpg";

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
const products = [
  {
    title:
      "Buildskill Semi-Automatic Washing Machine Drain Pipe 2M, Leak Proof Washing Machine Outlet Pipe, Washing Machine Drain Pipe Extension",
    image: product1,
    amazon_link:
      "https://www.amazon.in/Buildskill-Automatic-Washing-Machine-Outlet/dp/B0C8V1T969/ref=sr_1_4?crid=RQPJSKP58KSI&dib=eyJ2IjoiMSJ9.JEabdm38PiVZj6Pa5fobeURcGr1pYboo6tum0md5hvflUpIr-2Snt9lonVQlVf-04HZGnLwphxjz4xPStyr95AR4gwG539VFY5wgIDzVfMdblzyh3TgeCFQcvx4EguL9Z_SyRH5brBUb1xuupQNl956hkbg2w-f3neNvUF_92q-EFCm6-ZFv3KLJzimnMap4zpHO9ToUwAgzU9ut6hPDpNnq4CXkRjRt2s7WwqGWfUQ.TH47dSW67TdxWTnitL3FwYhtvpti5nBasRY2-44m9EY&dib_tag=se&keywords=washing+machine+outlet+pipe&qid=1722594885&s=home-improvement&sprefix=waashing+machine+outlet+pip%2Chome-improvement%2C230&sr=1-4",
  },
  {
    title:
      "Godrej Heavy Duty Front Load Fully Automatic Trolly Universal Front & Top Load Washing Machine Stand Trolley/Refrigerator Trolley",
    image: product2,
    amazon_link: "https://www.amazon.in/dp/B0CJ749FXJ?ref=myi_title_dp",
  },
  {
    title:
      "Smart Shelter Washing Machine Stand, Trolley with Wheels for Top Load, Front Load, Fully Automatic Washing Machine",
    image: product3,
    amazon_link:
      "https://www.amazon.in/dp/B07LFKFTCN/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07LFKFTCN&pd_rd_w=Pl0jt&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=PA03NTP190N6B2PNCDR1&pd_rd_wg=iT6HF&pd_rd_r=f0d0f4e2-581b-493f-ac9d-ebb811250b33&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
  },

  {
    title:
      "Buildskill Fully-Automatic Washing Machine Pipe Inlet 3M with Tap Connector, Leak-Free Washing Machine Tap Connector with Washing Machine Inlet Pipe",
    image: product4,

    amazon_link:
      "https://www.amazon.in/Buildskill-Flexible-Suitable-Automatic-installation/dp/B0C7HLZB1N/ref=sr_1_5?crid=2KCG5ED6JDHD2&dib=eyJ2IjoiMSJ9.v09ZDXrzR6P8fGY3vS3LTXIlRBwLlWL3kVGxeUwplB0xe0VF0sTBYUMo5rva42leM3hLyD4NX9rrHYVTdn3XqTzAEUmN0NYxvJxcIyJPTl7vQchozjPd-a8rfXYucJiQKVx_wz9FJL5NbTYnEKSGzXOh1Na5AzFiyqeW38jetaqmcoOEvbAcOwknoC5wHvJUg7qFFc9TFJXC-HQJsw-SW-UWCTw1EoVZGX8MD8HzRyA.S0bEp_mk9oVPpksQorN-nJAaDodf5FLzYy4VGIsy4LE&dib_tag=se&keywords=washing%2Bmachine%2Binlet%2Bpipe&qid=1722595063&s=home-improvement&sprefix=washinga%2Bmachine%2Binlet%2Bpip%2Chome-improvement%2C229&sr=1-5&th=1",
  },
  {
    title:
      "Morena 2 Meter Fully Automatic Front Load Drain Pipe/Extension - Compatible with Front Load Washing Machines",
    image: product5,
    amazon_link:
      "https://www.amazon.in/dp/B0CVXCPWN6/ref=sspa_dk_detail_1?pd_rd_i=B0CVXCPWN6&pd_rd_w=CEdpz&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=QSQCE19Q925P6ZNZGWRA&pd_rd_wg=bdl9C&pd_rd_r=b35ceb23-be8b-4819-9ed7-78ee3ca9bb0d&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&smid=A26SRJ0NLXZ33O&th=1",
  },
  {
    title:
      "AMAZOR Roller For Lg Pulsator Washing Machine Roller For Pulsator Compatible With Lg Roller For Pulsator Belan",
    image: product6,
    amazon_link:
      "https://www.amazon.in/AMAZOR-Pulsator-Compatible-Machines-Automatic/dp/B095XDD2WR/ref=pd_sim_d_sccl_4_1/258-5528887-6258165?pd_rd_w=E9QYc&content-id=amzn1.sym.1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_p=1f02df7f-f362-4e6d-9a92-f270d75713e4&pf_rd_r=E0ZS9VWABW9Q48Q3EK7J&pd_rd_wg=vnhyo&pd_rd_r=85ef83c6-a026-425c-b07d-70b58ace60b7&pd_rd_i=B095XDD2WR&psc=1",
  },
  {
    title:
      "AMAZOR Spin Cap Compatible for LG Washing Machine,Spin Cap/Drier Plate/Dryer Cover/Lid for LG Washing Machine Size Diameter 26.1 cm/10.3 inch",
    image: product7,
    amazon_link:
      "https://www.amazon.in/dp/B08QDP76KY/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B08QDP76KY&pd_rd_w=h7a1X&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=RXDE6FGG0J4X1RVV4YM8&pd_rd_wg=oZTop&pd_rd_r=e55010b4-1af9-41d9-82e9-4b7518aa1e7c&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
  },
  {
    title: "KaaShri™, Pulsator Compatible with Lg Washing Machine, Round Shaft",
    image: product8,
    amazon_link:
      "https://www.amazon.in/dp/B0CJVMX1LS/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0CJVMX1LS&pd_rd_w=gATbH&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=VCSY8ZZY4H3HX044AVTF&pd_rd_wg=wnWLe&pd_rd_r=b1fbf1fa-205d-4ba3-90bf-cce09c2e514b&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
  },
  {
    title:
      "KHC Lint Filter for LG. Top Load Loading Fully Automatic Washing Machine magic Filter Dust Filter Round Filter",
    image: product9,
    amazon_link:
      "https://www.amazon.in/KHC-Loading-Automatic-Washing-Machine/dp/B07KJSM6XL/ref=sr_1_1_sspa?crid=3NEV6J1NACR7C&dib=eyJ2IjoiMSJ9.OBaRSd5VsehGCoOeDy6c3WoOgTlp5rj_dD8iTC7fIrtbEn7OqjES8jK0IXoNvLQFe-eoONw20GsggODzeEYTSuyxA8r74gj_f1K8hEC8lILjt-sL8RXUf-YHKO6kKJAMs40kWHihwwnYjWTYsg3nnVAgCAveeArv_bafZE3H1_WNq6b_MdPFrfo60di0Q199GnqArhVe3-G9mjuvrAkt7UTv1-s0QMXxX9faq9oeGYoLH2d-XnG-1C5kMvqCt5UmVVhmpC1e4lcrsiOBlm-T-sOmxQb1J1yA5-1xwWzEFls.KPv54s8yzieEgutPpq0nZawUS4nD_GNbNT3p7A96GF0&dib_tag=se&keywords=lg+lint+filter&qid=1722595651&s=kitchen&sprefix=lg+lint+filte%2Ckitchen%2C217&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=ALLXVDK3A0LBJ",
  },
  {
    title:
      "SHRITHU Bottle Shelf For Fridge Compatible With LG Single Door Refrigerator 165 To 190 Liter",
    image: product10,
    amazon_link:
      "https://www.amazon.in/SHRITHU-Bottle-Compatible-Refrigerator-165-250/dp/B08CSXYM75/ref=sr_1_2?crid=1C51CNV3IYR1W&dib=eyJ2IjoiMSJ9.GEwB0fKMoBGKAf0bsjHIQy3aArPUa1S7WF_MkY0PAKAJY8LSNA2r5aiJJaP_aj0AqgWcOimrYJRAp_qCRsWppjaX2yMhuQ4T1u8eA9cI6I6jry7WN1Z6tPJdvNjOtKX0_-0_SsAMsYHP5lXTG-CJNVwbsW4KBnTZTEfn669ueyyIM1xNFrDJfIkMn4iQGj9lpUh8A3ngau2zntlPB_CRnTrrPqp_4EhB72BLr_MvTiwnYz1OiXRSgOYFrEmhjIkIoFRmjZzO0lcLfE38zk7pDA67KvdNqoVxdLX5qtdlswQ.WS0NVxmtmDaeWkPmje4X83fiFLnBS8sBKwkMKQ88zZY&dib_tag=se&keywords=fridge+bottle+rack&qid=1722597890&s=kitchen&sprefix=frige+bottle+rack%2Ckitchen%2C219&sr=1-2",
  },
  {
    title:
      "Spareplanet Whirlpool Ice Magic Single/Gen Y Door Fridge 165 to 245 Litre Fridge Compatible Bottle Shelf",
    image: product11,
    amazon_link:
      "https://www.amazon.in/Spareplanet-Whirlpool-Single-Compatible-W10418661/dp/B0BCXCJSD6/ref=sr_1_3?crid=1C51CNV3IYR1W&dib=eyJ2IjoiMSJ9.GEwB0fKMoBGKAf0bsjHIQy3aArPUa1S7WF_MkY0PAKAJY8LSNA2r5aiJJaP_aj0AqgWcOimrYJRAp_qCRsWppjaX2yMhuQ4T1u8eA9cI6I6jry7WN1Z6tPJdvNjOtKX0_-0_SsAMsYHP5lXTG-CJNVwbsW4KBnTZTEfn669ueyyIM1xNFrDJfIkMn4iQGj9lpUh8A3ngau2zntlPB_CRnTrrPqp_4EhB72BLr_MvTiwnYz1OiXRSgOYFrEmhjIkIoFRmjZzO0lcLfE38zk7pDA67KvdNqoVxdLX5qtdlswQ.WS0NVxmtmDaeWkPmje4X83fiFLnBS8sBKwkMKQ88zZY&dib_tag=se&keywords=fridge+bottle+rack&qid=1722597890&s=kitchen&sprefix=frige+bottle+rack%2Ckitchen%2C219&sr=1-3",
  },
  {
    title:
      "Payflip Bottle Shelf (Rack) 16 inch Bottle Bin Trim Compatible Whirlpool Genius Single Door Refrigerator",
    image: product12,
    amazon_link:
      "https://www.amazon.in/Payflip-Compatible-Whirlpool-Refrigerator-Transparent/dp/B0BGY13N3B/ref=sr_1_4?crid=1C51CNV3IYR1W&dib=eyJ2IjoiMSJ9.GEwB0fKMoBGKAf0bsjHIQy3aArPUa1S7WF_MkY0PAKAJY8LSNA2r5aiJJaP_aj0AqgWcOimrYJRAp_qCRsWppjaX2yMhuQ4T1u8eA9cI6I6jry7WN1Z6tPJdvNjOtKX0_-0_SsAMsYHP5lXTG-CJNVwbsW4KBnTZTEfn669ueyyIM1xNFrDJfIkMn4iQGj9lpUh8A3ngau2zntlPB_CRnTrrPqp_4EhB72BLr_MvTiwnYz1OiXRSgOYFrEmhjIkIoFRmjZzO0lcLfE38zk7pDA67KvdNqoVxdLX5qtdlswQ.WS0NVxmtmDaeWkPmje4X83fiFLnBS8sBKwkMKQ88zZY&dib_tag=se&keywords=fridge+bottle+rack&qid=1722597890&s=kitchen&sprefix=frige+bottle+rack%2Ckitchen%2C219&sr=1-4",
  },
  {
    title:
      "WHITEFLIP Fridge Bottle Shelf Rack Trivet Compatible with Samsung Single Door Refrigerators",
    image: product13,
    amazon_link:
      "https://www.amazon.in/WHITEFLIP-Compatible-Samsung-Refrigerators-DA63-01719/dp/B0C1Y7LBXD/ref=sr_1_4?crid=29A76HC07ABTA&dib=eyJ2IjoiMSJ9.MdqMQoOxWLHfHuAaf5Ymvpc9J1oQuJqvc87uXXV8yfMp6DjXftLOIhVgYow2j22DdR2Jl07FgnQwlrfZEyfnagTnIcyHJrzo-VOrWfM4jS4FEjNR4QUuMzHTGYOrkmjEFXzoawTTrNEH21uNa1wqQrcVsjxw85AwGwZ_vrnw9yUrApezQHXdpFl_WPxUHMejEiy8IFAC-wvJ3s11aIkEhZAyViVtyy4FT-AaQD5iTogrRLySXbl0gr1ru4HhvpmzzvppTSERHNlTd1pcFCSKcVcZ3pOeDbRNrvfbdV1vVfc.F7RXT64E5mkXwuFQ6kBpxySezg-VSq87D7y7zwyETfw&dib_tag=se&keywords=samsung+bottle+rack&qid=1722598029&s=kitchen&sprefix=samsung+bottle+rac%2Ckitchen%2C219&sr=1-4",
  },
];

export { navLinks, about, services, companies, products };

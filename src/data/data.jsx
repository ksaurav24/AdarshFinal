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
    {
      title: "GEAR BOX",
      link: "https://www.amazon.in/spareplanetTM-Gearbox-Compatible-Whirlpool-Automatic/dp/B08NG3R44S/ref=sr_1_1_sspa?crid=2WZEMG5JXC80Z&dib=eyJ2IjoiMSJ9.4nfA948fFlQ2ofpdp05TDo_sFI9MGs_oEfLxd1ftdHlFCnKqzZXXTmtlVRX2rGHbX1n35YPqGf9juwNxmmIyuhpwej4oN9VFMTNL7iT-fr--08nYjWTyZm8pU2w8wHN-SD-oUwZCsNnxvZD6-xMBeTn9_52fPbqx58J88_KHjRzlM2mrTaSsPGxZHKMvAlL10WkqHKghxx7EpEjeQfHC3pVRoHhA9LV8ZXZ3zt6Zyzg.0W9nNtstOkLW_zceo7Fd8EuTTlzhhcAED0BD8CTCN3Y&dib_tag=se&keywords=WASHING%2BMACHINE%2BGEAR%2BBOX&qid=1725368552&sprefix=washing%2Bmachine%2Bgear%2Bbox%2Caps%2C215&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    },
    {
      title: "BELT",
      link: "https://www.amazon.in/dp/B08F4M6LGW/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B08F4M6LGW&pd_rd_w=gosJx&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=BJC746KB9ET96M1CC37Q&pd_rd_wg=SgTGT&pd_rd_r=bb763376-7fc9-45d6-b32b-62cdfba217d7&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
    },
    {
      title: "MOTOR SPIN/WASH",
      link: "https://www.amazon.in/Payflip-Compatible-Godrej-Washing-Machine/dp/B0D9S2XQNV/ref=zg_bs_g_1380360031_d_sccl_1/258-5528887-6258165?psc=1",
    },
    {
      title: "PLUSATOR",
      link: "https://www.amazon.in/Compatible-Automatic-Part-No-1001/dp/B0DCTRDP2W/ref=sr_1_22?crid=291X4XI1M8FVJ&dib=eyJ2IjoiMSJ9.fbit647dNmVlo5sSbWXBNFEUezno-NXKuIgTeNmoRXtiLwrPpPDuUvoS0skqX4lwQ5qLWYMIy2ZYT_bNSZyaq8mSbEIzbbd7Ueua4j5zaPPacNPWjqcvIaZykIKtLqTnWB5J0t2IGunNU0rseRN0fD_3vK_-qDmfUg6hOXjdYQ1gdvADBAUhdvBKb7Pwh1hYT8jToF_wPQzJlP9S_klVqgPwv0pr9Z4HzW_LamGY32iQGUB0QukgK_6vb7dz9r0PP8KXcw2YQ1k35UpLphto1leKIlJUoEvxeOY7hCqagbc.5oMEJokpsd8mtZGq4H34gEpxrsbJgvzPACENSGQ56r8&dib_tag=se&keywords=pulsator&qid=1725368696&s=kitchen&sprefix=plusator%2Ckitchen%2C215&sr=1-22",
    },
    {
      title: "CAPACITOR",
      link: "https://www.amazon.in/doctorspare-Capacitor-Washing-Machine-Motor/dp/B07SJH4M6T/ref=sr_1_1?crid=3SYQS0R8OUEVV&dib=eyJ2IjoiMSJ9.5cAxVQ_obREiBUpbjN8OLRyaUB-mnMO0YEhZT01RFTdQSLkmnQ2smjft598qVGd9RZHXNV-k7wcwWz0HAVzweknDW3zz2t9ObdCSiU5QZJtuYg2oVFL0lM-qp4FRqq4ZyxUgXnEg4rTbNW45odHK2WTGDGJUjw_RuFiyzwDDjrG5dkLfPe9W4MRdrJswCHgDyABWd8yJbVE-Z0wk0IREqx-qUShNaju3gEEjlifnurfknmjMM9mvzctIG1TRtWbphvrojDVAR_YpONUfu0Kv-0zFGXLfZx7BH83xc4iJwfM.zu7UAQUv14TN4P8csp-dyBRWkLoYE9--kK7AwKh15i0&dib_tag=se&keywords=washing+machine+capacitor+cost&qid=1725368771&sprefix=WASHING+MACHINE+CAPA%2Caps%2C218&sr=8-1",
    },
    {
      title: "DRAIN SEAL",
      link: "https://www.amazon.in/FUSION-STAR-Drain-Rubber-Compatible/dp/B0CN52P7P9/ref=sr_1_7?crid=P046TTSEOJ5N&dib=eyJ2IjoiMSJ9.XoIUo9TY4qLHaQ6v-1dYWlHunfv87z96OgYdnBQV0OxmWPvlP5QJ-p90xzx2lxwGopEoRWXl8g9BPrru6ITsUxqspN8cIFlO_0R77nIcsYv1jdDjeh39MmD3sLWJbmtJpraXnUxAInriz8KVFZVbMNHfeerMpcboxBOQhN4RXNZwLXo-WrCbSIbWcexTofggWKRkAuXkMXbDlcPKLzCKhbBFAALg7SHtvOgHbz8Wd9w.DHHbswjAj754ZGU3c6Rxp23IoV2JHj86tWcV_F-lCcA&dib_tag=se&keywords=washing+machine+seal&qid=1725368869&sprefix=washi9ng+amchine+seal%2Caps%2C217&sr=8-7",
    },
    {
      title: "SPIN SEAL",
      link: "https://www.amazon.in/doctorspare-Automatic-Washing-Machine-Adhesive/dp/B08MVBYQNG/ref=sr_1_2?crid=3NDO8TGPCFAQR&dib=eyJ2IjoiMSJ9.IF51lVowKpjcsv8xfch50ZRvBM727sszEL_8au3sKNktjvUf9U_Ryvll1oYPGhxohecTbjy1zi2ncAoXNnE2-pzkoUDEWeahtVM6s3obiU7NgfvDvJLyz998wO4QO4Y029dD9wWlTQOSK2YTSTo09De0DLUWs000aIzWL6uu9vFxnsdXdxnyV5DMOluV6lWbypb3GY9uM1lDajlY7-xS1cKTPRX9xhDtQZG60Xi5U70KXWTuPGbuXxvf7lkI2j3PX-_b30ORN4NLxI_VhTdiR7WED4q9EiSnf4jthJ85GrA.zuR1nuN4xo2XWg3xIipZ7J9-VB3VGeVrtl5zbxlmSlA&dib_tag=se&keywords=SPIN+SEAL&qid=1725368933&s=kitchen&sprefix=spin+seal%2Ckitchen%2C216&sr=1-2",
    },
    {
      title: "TIMER WASH/ SPIN",
      link: "https://www.amazon.in/SANAVYA-Washing-Machine-Compatible-Automatic/dp/B09LZ9MSW6/ref=sr_1_2?crid=W83TPDY26H0F&dib=eyJ2IjoiMSJ9.SHH4b8E1_JH1Qql1FXQqIhPsRiNpgo2ihcHR--Yct0PkNAHPlt4F7doggWRIqtK8hgybQ_VCnzxCKFoaE7Y5ayRfuNToJrX6q8dblO_FQZ3OctDxkggABZT6ysF-e9xDZwXxRRtoGXxnzDXzhILGF1Yg0BpZc2nnzZfpki1u6IZz6kKd- sRSP9MRSmDmPhjvhELLphtNYgD5u590SqevPX9E33-vKVYJcfkkVXj_LR1qr3nmxjUsk2eoK1Gpk7PIhe_fUjvLH4Qkko0UbzUwSwQ2RP7NwoqWi8dHC6KyNXs.-Y5un1539Yo4Vmiw6H5QIBHbrloHUu-j6HGh9SyTn-8&dib_tag=se&keywords=WASHING+MACHINE+TIMER&qid=1725369301&s=kitchen&sprefix=washing+machine+timer%2Ckitchen%2C265&sr=1-2",
    },
    {
      title: "SPIN INNER LID",
      link: "https://www.amazon.in/SATYWALI-Compatible-Automatic-Washing-Machine/dp/B0CY8S1B7B/ref=sr_1_5?crid=2U7IYAQOOIYUP&dib=eyJ2IjoiMSJ9.lEeh0p_J62x2MWaXIXtjYIJLxKXkgSvQEBhpiQFKdhYiNC-kZyWCTJ30o7rK7q1j48Jwd0xcn2aTVmXb_o1mSCQItTSPg_mAdFCR8hRxz0VnABzzn70ZKHjKnqR27r8OrORgVGmzo6HnFTtrclZuDDBf5p4PRI9SnCWWLquLPv1b7Fh4JVU4aHPZFEPhwGLI1RRFk4AB1N6YuUvGOPkfrsDG1VmgcJcitUV-ertmM-FIrfvxpR-0d9uMds6sOHkP6UlkDAH1WRSdg8ek2Im-Q43gEge75XsGl6XY4vIvYQA.-RG8qbbTdBvDwI_cAaInzzdnBYGrJYSADPoe5Q1AJ-w&dib_tag=se&keywords=washing+machine+SPIN+lid&qid=1725369421&s=kitchen&sprefix=washing+machine+spi+lid%2Ckitchen%2C219&sr=1-5",
    },
  ],
};
export { navLinks, about, services, companies, products };

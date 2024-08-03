import React from "react";
import { Saira } from "next/font/google";
import Image from "next/image";
import { companies } from "../data/data";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Companies = () => {
  return (
    <div className="w-screen flex gap-8 justify-center items-center flex-col bg-white h-[300px]">
      <h1 className={`text-4xl font-semibold ${saira.className}`}>
        We provide services for the following companies
      </h1>
      <div className="flex gap-8">
        {companies.map((company, idx) => {
          return (
            <div key={idx} className=" flex items-center justify-center">
              <Image src={company.logo} className="w-[120px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;

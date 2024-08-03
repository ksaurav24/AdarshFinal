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
    <div className="w-screen flex gap-8 justify-center items-center flex-col bg-white py-12 lg:h-[300px]">
      <h1
        className={`lg:text-4xl text-2xl text-center font-semibold ${saira.className}`}
      >
        We provide services for the following companies
      </h1>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-8">
        {companies.map((company, idx) => {
          return (
            <div key={idx} className=" flex items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name}_Logo`}
                className="lg:w-[120px] w-[60px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;

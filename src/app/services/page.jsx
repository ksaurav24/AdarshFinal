"use client";
import React from "react";
import servicesBg1 from "../../../public/servicesBg1.png";
import servicesBg2 from "../../../public/servicesBg2.png";
import Image from "next/image";
import { services } from "../../data/data";
import Service from "@/components/Service";

const Page = () => {
  return (
    <div id="services" className="bg-white py-8 ">
      <Image
        priority={true}
        src={servicesBg1}
        alt="ServicesBackgroundImage-1"
        className="serviceBg absolute left-0 -z-0"
      />
      <Image
        priority={true}
        src={servicesBg2}
        alt="ServicesBackgroundImage-2"
        className="serviceBg absolute right-0 -z-0"
      />
      <div className="w-screen  z-10">
        <div className="flex flex-col gap-2 justify-center items-center text-zinc-950">
          <div className="flex items-center justify-center mt-4">
            <p className="text-7xl text-red-500 font-thin">-</p>
            <h1 className="text-lg text-red-500  font-normal uppercase">
              Services
            </h1>
            <p className="text-7xl text-red-500 lg:mx-3 ml-3 font-thin">-</p>
          </div>
          <div className={`lg:text-4xl font-semibold text-center text-2xl`}>
            Our Efficiant Services
          </div>
          <div className="lg:text-md text-sm text-center lg:w-[50vw] w-[80vw]  mt-4">
            We provide a wide range of services for all your appliances. Our
            skilled technicians ensure your devices run smoothly, focusing on
            professionalism and customer satisfaction.
          </div>

          <div className=" grid w-screen lg:px-56 lg:mt-4 lg:grid-cols-3 grid-cols-1">
            {services.map((service, idx) => {
              return <Service key={idx} service={service} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

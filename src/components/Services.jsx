"use client";
import React from "react";
import { Saira } from "next/font/google";
import servicesBg1 from "../../public/servicesBg1.png";
import servicesBg2 from "../../public/servicesBg2.png";
import Image from "next/image";
import { services } from "../data/data";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Services = () => {
  return (
    <div id="services" className=" ">
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
      <div className="lg:w-[50vw] w-screen  z-10">
        <div className="flex flex-col gap-2 justify-center items-center text-zinc-950">
          <div className="flex items-center justify-center mt-4">
            {/* <p className="text-7xl text-red-500 font-thin">-</p> */}
            <h1 className="text-lg text-red-500  font-normal uppercase">
              Services
            </h1>
            {/* <p className="text-7xl text-red-500 lg:mx-0 ml-0 font-thin">-</p> */}
          </div>
          <div
            className={`lg:text-4xl font-semibold text-center text-2xl ${saira.className}`}
          >
            Our Efficiant Services
          </div>
          <div className="lg:text-md text-sm text-center lg:w-[40vw] w-[80vw]  mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            necessitatibus sit in quos, odit quod consequatur sapiente earum
            rerum aperiam.
          </div>

          <div className=" grid lg:w-[50vw] w-screen lg:px-0 lg:mt-4 lg:grid-cols-2 grid-cols-1">
            {services.map((service, idx) => {
              return (
                <div
                  key={idx}
                  className="lg:w-[18vw] w-[80vw] mx-auto h-[320px] cursor-pointer  mr-8 my-8 serviceParent bg-white z-10 overflow-hidden shadow-xl rounded-lg "
                >
                  <div className="w-full h-[180px] before:w-full before:h-full overflow-hidden before before:absolute before:mix-blend-color-burn before:bg-red-600 serviceChild relative">
                    <Image
                      src={service.image}
                      alt={`${service.title}_Image`}
                      className="serviceImg"
                    />
                  </div>
                  <div className="p-4">
                    <h1 className="text-lg font-semibold">{service.title}</h1>
                    <p className="text-sm mt-2">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <a href="/services">
            <button className="px-4 hover:bg-zinc-50  mx-auto  rounded-lg hover:shadow-xl transition-all duration-500 ease-in-out poppins-medium text-lg py-2">
              View More
              <svg
                className="w-4 h-4 ml-1 inline-block rotate-[270deg]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 18.501953 3.0371094 L 9.4023438 12.001953 L 18.550781 20.964844 L 19.949219 19.535156 L 12.255859 11.998047 L 19.904297 4.4628906 L 18.501953 3.0371094 z M 12.666016 3.0449219 L 3.765625 11.994141 L 12.535156 20.949219 L 13.964844 19.550781 L 6.5761719 12.005859 L 14.083984 4.4550781 L 12.666016 3.0449219 z"></path>
              </svg>
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Services;

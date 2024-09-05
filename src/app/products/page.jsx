import React from "react";
import { products } from "../../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Page = () => {
  return (
    <div id="products" className="w-screen py-12 bg-white flex flex-col ">
      <h1
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <h3
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        AC Spare Parts
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4">
        {products.AC.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[340px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] object-contain"
                  />
                </div>
                <div className="p-4 rounded-lg bg-zinc-100 w-full h-[136px] ">
                  <h1 className="text-sm font-regular ">{product.title}</h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Microwave Spare Parts
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4">
        {products.Microwave.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[340px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] object-contain"
                  />
                </div>
                <div className="p-4 rounded-lg bg-zinc-100 w-full h-[136px] ">
                  <h1 className="text-sm font-regular ">{product.title}</h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Washing Machine Spare Parts
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4">
        {products.Washing_Machine.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[340px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] object-contain"
                  />
                </div>
                <div className="p-4 rounded-lg bg-zinc-100 w-full h-[136px] ">
                  <h1 className="text-sm font-regular ">{product.title}</h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        RO Spare Parts
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4">
        {products.RO.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[340px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] object-contain"
                    unoptimized={true}
                  />
                </div>
                <div className="p-4 rounded-lg bg-zinc-100 w-full h-[136px] ">
                  <h3 className="text-sm font-regular ">{product.title}</h3>
                  <h4 className="text-md font-regular"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

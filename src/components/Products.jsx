import React from "react";
import { products } from "../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Products = () => {
  return (
    <div id="products" className="w-screen py-12 flex flex-col ">
      <h1
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 relative px-12 gap-6 mt-4">
        {products.slice(0, 4).map((product, idx) => {
          return (
            <a key={idx} href={product.amazon_link}>
              <div className="lg:w-[22vw] w-[80vw] mx-auto rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl ">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] object-contain"
                  />
                </div>
                <div className="p-4 rounded-lg bg-zinc-100 w-full h-[155px] ">
                  <h1 className="text-md font-regular ">{product.title}</h1>
                </div>
              </div>
            </a>
          );
        })}
        <a
          href="/products"
          className="w-[100vw] left-0 flex items-end pb-16 justify-center lg:h-[113%] h-[103%] bg-gradient-to-b from-transparent via-zinc-100/60 to-zinc-200 absolute "
        >
          <button className="px-3 bg-white rounded-lg shadow-xl hover:underline transition-all duration-500 ease-in-out poppins-medium text-md py-2">
            Show More{" "}
            <svg
              className="w-4 h-4 inline-block rotate-[270deg]"
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
        </a>
      </div>
    </div>
  );
};

export default Products;

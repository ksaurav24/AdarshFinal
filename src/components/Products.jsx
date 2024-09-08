"use client";
import React from "react";
import { products } from "../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
import Category from "./Category";
import WM_product from "../../public/WM_product.jpg";
import microwave_product from "../../public/microwave_product.jpg";
import RO_product from "../../public/RO_product.jpg";
import Fridge_product from "../../public/Fridge_product.jpg";
import AC_product from "../../public/AC_product.jpg";

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Products = () => {
  return (
    <div id="products" className="w-screen py-12 flex flex-col ">
      <div className="flex items-center justify-center mt-4">
        {/* <p className="text-7xl text-red-500 font-thin">-</p> */}
        <h1 className="text-lg text-red-500  font-normal uppercase">
          Products
        </h1>
        {/* <p className="text-7xl text-red-500 lg:mx-0 ml-0 font-thin">-</p> */}
      </div>
      <h1
        className={`${saira.className} lg:text-4xl text-2xl mt-2 mb-12 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3 relative lg:px-40 px-0 lg:gap-0 gap-8 mt-4">
        {[
          { title: "AC", image: AC_product },
          { title: "Fridge", image: Fridge_product },
          { title: "RO", image: RO_product },
        ].map((category, idx) => {
          return (
            <Category
              category={category.title}
              image={category.image}
              key={idx}
            />
          );
        })}
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 relative lg:px-80 px-0 lg:gap-0 gap-8 mt-8">
        {[
          {
            title: "Washing Machine",
            image: WM_product,
          },
          {
            title: "Microwave",
            image: microwave_product,
          },
        ].map((category, idx) => {
          return (
            <Category
              category={category.title}
              image={category.image}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;

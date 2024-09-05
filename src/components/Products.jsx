"use client";
import React from "react";
import { products } from "../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
import Category from "./Category";
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
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <div className="grid  grid-cols-1 relative px-12 gap-6 mt-4">
        {["AC", "Microwave", "Washing Machine", "RO"].map((category, idx) => {
          return <Category category={category} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Products;

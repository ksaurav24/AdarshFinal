"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "../data/data.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    if (navOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [navOpen]);
  return (
    <>
      <div className="w-screen h-24 absolute bg-red-600 mix-blend-color-burn -z-[5]"></div>
      <div className="w-screen h-24  text-zinc-50 flex justify-between px-6 items-center">
        <div className="text-4xl text-zinc-50 font-bold">
          <a href="">Logo</a>
        </div>
        <div className="lg:flex hidden space-x-20">
          {navLinks.map((navLink, idx) => {
            return (
              <a
                className="text-lg text-white hover:text-zinc-200 transition-colors duration-300 ease-in-out"
                key={idx}
                href={navLink.url}
              >
                {navLink.name}
              </a>
            );
          })}
        </div>
        <div className="lg:hidden">
          <svg
            onClick={() => setNavOpen(!navOpen)}
            className="w-6 h-6 fill-zinc-50"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="lg:flex md:flex hidden justify-center items-center gap-4">
          <div className="text-4xl font-extralight">|</div>

          <div className="rounded-full bg-red-600 fill-zinc-50  hover:fill-red-600 hover:bg-zinc-50 transition-colors duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180 w-5 h-5 m-3"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 11.550781 47 C 10.988281 47 10.246094 46.855469 9.457031 46.289063 C 9.394531 46.242188 3 41.5625 3 39 L 3.007813 38.847656 C 3.304688 32.796875 7.875 25.3125 16.59375 16.59375 C 25.308594 7.878906 32.792969 3.308594 38.84375 3.007813 L 38.945313 3.003906 C 38.972656 3.003906 39 3 39.027344 3 C 41.644531 3 46.242188 9.394531 46.289063 9.457031 C 47.472656 11.117188 47.042969 12.972656 45.96875 13.738281 C 45.269531 14.265625 37.878906 19.105469 36.976563 19.644531 C 36.007813 20.199219 34.679688 20.09375 33.496094 19.382813 C 32.792969 19 30.601563 17.746094 29.585938 17.160156 C 28.679688 17.785156 26.460938 19.464844 23.003906 22.988281 C 19.535156 26.453125 17.820313 28.679688 17.167969 29.59375 C 17.757813 30.617188 19.007813 32.804688 19.402344 33.53125 C 20.109375 34.824219 20.191406 36.160156 19.621094 37.015625 C 19.113281 37.863281 14.183594 45.347656 13.738281 45.964844 C 13.339844 46.527344 12.660156 46.898438 11.882813 46.980469 C 11.78125 46.992188 11.671875 47 11.550781 47 Z" />
            </svg>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xs font-medium pl-1 text-gray-300">
              Call Us Anytime
            </div>
            <div className="text-md font-bold hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer">
              +91 1234567890
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            onClick={() => {
              setNavOpen(false);
            }}
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`lg:hidden w-screen h-screen z-10 bg-black/50 absolute top-0 left-0`}
          >
            <motion.div
              initial={{ x: -350 }}
              animate={{ x: 0 }}
              exit={{ x: -350 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.55 }}
              className="w-3/4 h-full bg-zinc-900 flex flex-col px-3 py-4"
            >
              <div className="flex justify-between">
                <div className="text-white font-bold text-4xl">Logo</div>
                <svg
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="w-6 h-6 fill-zinc-50"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col mt-12 border-b-[0.4px] border-gray-600/60">
                {navLinks.map((navLink, idx) => {
                  return (
                    <a
                      className="text-md px-2 text-zinc-50 border-t-[0.4px] py-3 border-gray-600/60  hover:text-zinc-200 transition-colors duration-300 ease-in-out font-light"
                      key={idx}
                      href={navLink.url}
                    >
                      {navLink.name}
                    </a>
                  );
                })}
              </div>
              <div className=" mt-4 flex flex-col gap-3">
                <div className="flex gap-2 items-center text-zinc-50">
                  <div className="bg-red-600 p-2 rounded-full hover:bg-zinc-50 transition-colors duration-300 ease-in-out ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 256 256"
                      className="w-4 h-4 "
                    >
                      <g
                        fill="#ffffff"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M4,4c-1.105,0 -2,0.895 -2,2v1.73242l1,0.62695l1,0.62695l8,5.01367l8,-4.98047l1,-0.62305l1,-0.62109v-1.77539c0,-1.105 -0.895,-2 -2,-2zM4,6h16v0.76953l-8,4.97852l-8,-5.01367zM2,10.0918v7.9082c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-7.86914l-2,1.24414v6.625h-16v-6.6543z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="text-zinc-50 text-sm font-light">
                    supportmail@domain.com
                  </div>
                </div>
                <div className="flex gap-2 items-center text-zinc-50">
                  <div className="bg-red-600 p-2 rounded-full hover:bg-zinc-50 transition-colors duration-300 ease-in-out ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 256 256"
                      className="w-4 h-4 rotate-180"
                    >
                      <g
                        fill="#ffffff"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M12.111,21.225c0.238,-0.406 0.233,-0.905 -0.007,-1.309l-1.219,-2.046c-0.273,-0.458 -0.241,-1.03 0.087,-1.45c0.567,-0.726 1.521,-1.895 2.538,-2.912c1.017,-1.017 2.186,-1.971 2.912,-2.538c0.42,-0.328 0.992,-0.36 1.45,-0.087l2.046,1.219c0.404,0.241 0.907,0.243 1.313,0.005l5.129,-3.003c0.496,-0.291 0.74,-0.869 0.603,-1.428c-0.133,-0.543 -0.455,-1.248 -1.194,-1.987c-2.314,-2.314 -6.217,-3.543 -14.919,5.159c-8.702,8.702 -7.474,12.606 -5.16,14.92c0.741,0.741 1.447,1.062 1.991,1.195c0.558,0.135 1.132,-0.105 1.422,-0.6c0.723,-1.236 2.284,-3.902 3.008,-5.138z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="text-zinc-50 text-sm font-light">
                    +91 xxxxx xxxxx
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

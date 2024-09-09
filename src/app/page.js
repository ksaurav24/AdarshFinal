import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Products from "../components/Products";
import { Saira } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Home | Adarsh Refrigeration & Air Conditioners",
};
export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Hero />
      <About />
      <div className="w-screen flex flex-col items-center justify-center gap-8 h-52 ">
        <div
          className={`lg:w-[80%] w-[80vw] lg:text-5xl text-2xl lg:mt-5 mt-20 font-semibold text-center ${saira.className}`}
        >
          What are you looking for?
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
          <a
            href="https://wa.me/+919811391053"
            className=" px-6 py-2 rounded-md text-xl font-medium text-center bg-zinc-950 text-zinc-50 hover:-translate-y-1  hover:shadow-lg shadow-zinc-600/40 transition-all duration-300 ease-in-out"
          >
            Get a regular check-up
          </a>
          <a
            href="#services"
            className=" px-6 py-2 rounded-md text-xl font-medium text-center bg-zinc-950 text-zinc-50 hover:-translate-y-1  hover:shadow-lg shadow-zinc-600/40 transition-all duration-300 ease-in-out"
          >
            Get Repair Service
          </a>
          <a
            href="#products"
            className="px-6 py-2 rounded-md text-xl font-medium text-center bg-zinc-950 text-zinc-50 hover:-translate-y-1  hover:shadow-lg shadow-zinc-600/40 transition-all duration-300 ease-in-out"
          >
            Buy Spare Parts
          </a>
        </div>
      </div>
      <div className="flex items-center lg:mt-0 mt-10 flex-col">
        <Products />
        <Services />
      </div>
      <Companies />
    </main>
  );
}

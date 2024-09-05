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
export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Hero />
      <About />
      <div className="w-screen flex flex-col items-center justify-center gap-8 h-52 ">
        <div
          className={`lg:w-[80%] w-[80vw] lg:text-5xl text-2xl mt-5 font-semibold text-center ${saira.className}`}
        >
          What are you looking for?
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
          <a
            href="#services"
            className=" px-6 py-2 rounded-md text-xl font-medium text-center bg-zinc-950 text-zinc-50"
          >
            Get Repair Service
          </a>
          <a
            href="#products"
            className="px-6 py-2 rounded-md text-xl font-medium text-center bg-zinc-200 text-zinc-950"
          >
            Buy Spare Parts
          </a>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <Products />
        <Services />
      </div>
      <Companies />
    </main>
  );
}

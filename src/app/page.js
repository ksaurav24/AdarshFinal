import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Products from "../components/Products";

export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Companies />
      <Products />
    </main>
  );
}

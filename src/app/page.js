import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  );
}

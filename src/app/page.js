import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Products from "../components/Products";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Companies />
      <Products />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

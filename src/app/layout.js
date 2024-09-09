import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Adarsh Refrigeration & Air Conditioners ",
  description:
    "Adarsh Refrigeration & Air Conditioners delivers expert appliance repair services. Our skilled technicians ensure your devices run smoothly, focusing on professionalism and customer satisfaction.",
  keywords:
    "Adarsh Refrigeration & Air Conditioners, Adarsh Refrigeration, Adarsh Air Conditioners, Adarsh Refrigeration & Air Conditioners, Adarsh Refrigeration & Air Conditioners delivers expert appliance repair services. Our skilled technicians ensure your devices run smoothly, focusing on professionalism and customer satisfaction, services, repair, appliances, devices, professionalism, customer satisfaction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}

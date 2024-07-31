import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "A project by SiteScript",
  description: "A project by SiteScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

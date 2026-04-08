import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global-style.css";
import "@/styles/style.css";
// import '@/styles/gallery-style.css';

import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Izz's Main Page",
  description:
    "A portfolio of a certain high school student who is having an identity crisis. (Arkan Izz's Portfolio)",
  icons: {
    icon: "/media/favicon.ico",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <BootstrapClient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

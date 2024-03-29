import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "@assets/css/globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";



const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <section id="middle" className="flex flex-col">{children}</section>
      <Footer />
    </>
  );
}

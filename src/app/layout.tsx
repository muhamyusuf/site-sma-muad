import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMA Muhammadiyah Ahmad Dahlan",
  description: "Senior Highschool with Holistic Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MaxWidthWrapper>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}

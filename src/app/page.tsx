import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Alumnis from "@/components/sections/Alumnis";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import Navbar from "@/components/sections/Navbar";
import Why from "@/components/sections/Why";
import * as React from "react";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Hero />
      <Why />
      <IntroSection />
      <Features />
      <Alumnis />
      <Footer />
    </MaxWidthWrapper>
  );
}

import Alumnis from "@/components/sections/Alumnis";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import Why from "@/components/sections/Why";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <IntroSection />
      <Features />
      <Alumnis />
    </div>
  );
}

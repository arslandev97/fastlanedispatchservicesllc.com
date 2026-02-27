import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { LogoStrip } from "@/components/home/LogoStrip";
import { HomeContact } from "@/components/home/HomeContact";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Welcome />
      <ServicesPreview />
      <WhatWeOffer />
      <HomeContact />
    </>
  );
}

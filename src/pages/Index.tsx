import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhatIsLaDuna from "@/components/landing/WhatIsLaDuna";
import Pillars from "@/components/landing/Pillars";
import Lifestyle from "@/components/landing/Lifestyle";
import WaysToBePart from "@/components/landing/WaysToBePart";
import Location from "@/components/landing/Location";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <WhatIsLaDuna />
      <Pillars />
      <Lifestyle />
      <WaysToBePart />
      <Location />
      <WhoIsItFor />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import OurAdvantages from "../../components/OurAdvantages";
import CTA from "./Components/CTA";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Testimonials from "./Components/Testimonials";

export default function Main() {
  return (
    <main className="main">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonials />
      <OurAdvantages />
      <CTA />
      <Footer />
    </main>
  );
}

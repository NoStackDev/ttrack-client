import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import OurAdvantages from "../../components/OurAdvantages";
import Plans from "../../components/Plans";
import FAQ from "./FAQ";
import "./Pricing.style.scss";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div id="pricing">
      <Navbar />
      <h2>
        Plan and <span>pricing</span>
      </h2>
      <p>
        Select a plan that is right for you, risk free, 30days trial period, no
        hidden fees.
      </p>
      <Plans />
      <OurAdvantages />
      <FAQ />
      <h2>Still have more questions?</h2>
      <p>
        Check Ttrack.com question and answer at{" "}
        <a href="/">Ttrack.com/q&amp;aforum</a>
      </p>
      <Footer />
    </div>
  );
};

export default Pricing;

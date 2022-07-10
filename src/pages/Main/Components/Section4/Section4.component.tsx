import React from "react";
import Pricing from "../../../../components/Pricing/Pricing.component";
import "./Section4.style.scss";

export default function Section4() {
  return (
    <section className="section4">
      <h2>
        Choose <span>your plan</span>{" "}
      </h2>
      <Pricing />
    </section>
  );
}

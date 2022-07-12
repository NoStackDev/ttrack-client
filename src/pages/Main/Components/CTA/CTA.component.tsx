import React from "react";
import laptopImg from "../../../../assets/images/laptop.jpg";
import "./CTA.style.scss";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section id="cta-section">
      <img src={laptopImg} alt="an open laptop with showing a dashboard" />
      <div>
        <h2>Optimize your time management! sign up for free</h2>
        <button>Get Started for free</button>
      </div>
    </section>
  );
};

export default CTA;

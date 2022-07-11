import React from "react";
import OurAdvantagesCard from "./components/OurAdvantagesCard";
import advantages from "./OurAdvantages.config";
import "./OurAdvantages.style.scss";

type Props = {};

const OurAdvantages = (props: Props) => {
  return (
    <div className="our-advantages-container">
      {advantages.map((advantage) => {
        return <OurAdvantagesCard advantage={advantage} />;
      })}
    </div>
  );
};

export default OurAdvantages;

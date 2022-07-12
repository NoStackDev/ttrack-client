import React from "react";
import OurAdvantagesCard from "./components/OurAdvantagesCard";
import advantages from "./OurAdvantages.config";
import "./OurAdvantages.style.scss";
import access247Img from "../../assets/svg/24hrsaccess.svg";
import suport247Img from "../../assets/svg/24hrsupport.svg";
import response247Img from "../../assets/svg/24hrsresponse.svg";

type Props = {};
const imagesArr = [access247Img, suport247Img, response247Img];

const OurAdvantages = (props: Props) => {
  return (
    <section id="our-advantages">
      <div>
        <h2>
          Our <span>Advantages</span>
        </h2>
        <p>
          We are really fortunate to have developed strong relationships with
          many of our customers. And we've developed genuine friendships with
          them in addition to our job connections. Here are their comments
          regarding us.
        </p>
      </div>

      {advantages.map((advantage, index) => {
        return (
          <OurAdvantagesCard advantage={advantage} image={imagesArr[index]} />
        );
      })}
    </section>
  );
};

export default OurAdvantages;

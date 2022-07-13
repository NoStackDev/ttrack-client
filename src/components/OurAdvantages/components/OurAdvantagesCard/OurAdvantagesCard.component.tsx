import React, { FC } from "react";
import "./OurAdvantagesCard.style.scss";

type advantageType = {
  title: string;
  body: string;
};

const OurAdvantagesCard: FC<{
  advantage: advantageType;
  image: string;
}> = ({ advantage, image }) => {
  return (
    <div className="advantage-card">
      <img src={image} alt="" />
      <div>
        <span>{advantage.title}</span>
        <p>{advantage.body}</p>
      </div>
    </div>
  );
};

export default OurAdvantagesCard;

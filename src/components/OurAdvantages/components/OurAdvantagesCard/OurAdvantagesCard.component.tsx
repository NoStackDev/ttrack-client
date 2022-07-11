import React, { FC } from "react";
import "./OurAdvantagesCard.style.scss";

type advantageType = {
  title: string;
  body: string;
};

const OurAdvantagesCard: FC<{ advantage: advantageType }> = ({ advantage }) => {
  return (
    <div className="advantage-card">
      <span>{advantage.title}</span>
      <p>{advantage.body}</p>
    </div>
  );
};

export default OurAdvantagesCard;

import React from "react";
import "./Testimonial.style.scss";

type Props = {
  testimony: {
    img: string;
    name: string;
    body: string;
    jobDesc: string;
  };
};

const Testimonial = ({ testimony }: Props) => {
  return (
    <div className="testimony-card">
      <img src={testimony.img} alt="" />
      <div>
        <p>{testimony.body}</p>
        <p>{testimony.name}</p>
        <p>{testimony.jobDesc}</p>
      </div>
    </div>
  );
};

export default Testimonial;

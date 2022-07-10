import React, { FC } from "react";
import "./Testimonial.style.scss";

type testimonyProps = {
  name: string;
  jobDesc: string;
  body: string;
  picture: string;
};

const Testimonial: FC<{ testimony: testimonyProps }> = ({ testimony }) => {
  return (
    <div className="card">
      <img src={testimony.picture} alt={testimony.name} />
      <div>
        <p>{testimony.body}</p>
        <span>{testimony.name}</span>
        <span>{testimony.jobDesc}</span>
      </div>
    </div>
  );
};

export default Testimonial;

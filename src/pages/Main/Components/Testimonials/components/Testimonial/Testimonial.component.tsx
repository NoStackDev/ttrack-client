import React, { FC } from "react";
import "./Testimonial.style.scss";

type testimonyProps = {
  name: string;
  jobDesc: string;
  body: string;
  picture: string;
};

const Testimonial: FC<{
  testimony: testimonyProps;
  active: string | null;
  prevActive: string;
  slideInFrom: string;
  slideOutFrom: string;
}> = ({ testimony, active, prevActive, slideInFrom, slideOutFrom }) => {
  return (
    <div
      className={`testimony-card ${active === testimony.name ? "active" : ""} ${
        active === testimony.name ? "slide-in-from-" + slideInFrom : ""
      }  ${prevActive === testimony.name ? "prev-active" : ""} ${
        prevActive === testimony.name ? "slide-out-from-" + slideOutFrom : ""
      }`}
    >
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

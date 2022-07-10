import React from "react";
import Testimonial from "./components/Testimonial";
import testimonies from "./Testimonials.config";
import "./Testimonials.style.scss";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="testimonials">
      {testimonies.map((testimony) => {
        return <Testimonial testimony={testimony} />;
      })}
    </div>
  );
};

export default Testimonials;

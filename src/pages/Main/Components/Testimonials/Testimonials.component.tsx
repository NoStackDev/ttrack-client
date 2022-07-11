import React, { useState, Dispatch } from "react";
import Testimonial from "./components/Testimonial";
import testimonies from "./Testimonials.config";
import arrowSvg from "../../../../assets/svg/arrow.svg";
import "./Testimonials.style.scss";

type TestimonialIndicatorType = {
  active: number;
  setActiveTestimonyIndex: Dispatch<number>;
};

const TestimonialIndicator = ({
  active,
  setActiveTestimonyIndex,
}: TestimonialIndicatorType) => {
  return (
    <div className="indicators">
      {testimonies.map((testimony, index) => {
        return (
          <span
            className={`indicator ${active === index ? "active" : ""} `}
            onClick={() => setActiveTestimonyIndex(index)}
          ></span>
        );
      })}
    </div>
  );
};

const Testimonials = () => {
  const [activeTestimonyIndex, setActiveTestimonyIndex] = useState<number>(0);
  const [prevActive, setPrevActive] = useState<number>(testimonies.length - 1);
  const [slideInFrom, setSlideInFrom] = useState<string>("right");
  const [slideOutFrom, setSlideOutFrom] = useState<string>("left");

  function handleArrowClick(action: string): void {
    switch (action) {
      case "+":
        if (activeTestimonyIndex >= testimonies.length - 1) {
          setPrevActive(activeTestimonyIndex);
          setActiveTestimonyIndex(0);
        } else {
          setPrevActive(activeTestimonyIndex);
          setActiveTestimonyIndex(activeTestimonyIndex + 1);
        }
        setSlideOutFrom("left");
        setSlideInFrom("right");
        break;

      case "-":
        if (activeTestimonyIndex <= 0) {
          setPrevActive(activeTestimonyIndex);
          setActiveTestimonyIndex(testimonies.length - 1);
        } else {
          setPrevActive(activeTestimonyIndex);
          setActiveTestimonyIndex(activeTestimonyIndex - 1);
        }
        setSlideOutFrom("right");
        setSlideInFrom("left");
        break;
      default:
        return;
    }
  }

  return (
    <div className="testimonials-container">
      <div className="testimonials">
        {testimonies.map((testimony) => {
          return (
            <Testimonial
              testimony={testimony}
              active={testimonies[activeTestimonyIndex].name}
              prevActive={testimonies[prevActive].name}
              slideInFrom={slideInFrom}
              slideOutFrom={slideOutFrom}
            />
          );
        })}
      </div>
      <div className="indicators-container">
        <div className="arrows">
          <img
            src={arrowSvg}
            alt="move testimonial carousel left"
            onClick={() => handleArrowClick("-")}
          />
          <img
            src={arrowSvg}
            alt="move testimonial carousel right"
            onClick={() => handleArrowClick("+")}
          />
        </div>
        <TestimonialIndicator
          active={activeTestimonyIndex}
          setActiveTestimonyIndex={setActiveTestimonyIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;

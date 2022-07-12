import React, { useState, useRef, useLayoutEffect } from "react";
import Testimonial from "./components/Testimonial";
import testimonies from "./Testimonials.config";
import arrowSvg from "../../../../assets/svg/arrow.svg";
import "./Testimonials.style.scss";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeFrameIndex, setActiveFrameIndex] = useState<number>(0);

  useLayoutEffect(() => {
    if (null !== sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        activeFrameIndex * 100
      }vw)`;
    }
  });

  function handleControlClick(action: string) {
    switch (action) {
      case "-":
        if (testimonies.indexOf(testimonies[activeFrameIndex]) <= 0) {
          setActiveFrameIndex(testimonies.length - 1);
        } else {
          setActiveFrameIndex(activeFrameIndex - 1);
        }
        break;

      case "+":
        if (
          testimonies.indexOf(testimonies[activeFrameIndex]) >=
          testimonies.length - 1
        ) {
          setActiveFrameIndex(0);
        } else {
          setActiveFrameIndex(activeFrameIndex + 1);
        }
        break;
    }
  }

  return (
    <section id="testimonials">
      <h2>
        <span>What our clients say</span> about Ttrack
      </h2>

      <p>
        We are really fortunate to have developed strong relationships with many
        of our customers. And we've developed genuine friendships with them in
        addition to our job connections. Here are their comments regarding us.
      </p>

      <div className="slide-container">
        <div className="slider" ref={sliderRef}>
          {testimonies.map((testimony) => {
            return <Testimonial testimony={testimony} />;
          })}
        </div>
      </div>
      <div className="slide-control">
        <img
          src={arrowSvg}
          alt="previous slide frame"
          onClick={() => handleControlClick("-")}
        />
        <img
          src={arrowSvg}
          alt="next slide frame"
          onClick={() => handleControlClick("+")}
        />
      </div>
      <div className="slide-indicator">
        {testimonies.map((testimony, index) => {
          return (
            <input
              type="radio"
              name="slide frame"
              id={"frame" + index.toString()}
              checked={index === activeFrameIndex}
              onChange={() => setActiveFrameIndex(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

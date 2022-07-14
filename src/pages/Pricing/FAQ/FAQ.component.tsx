import React, { useState } from "react";
import FAQs from "./FAQ.config";
import "./FAQ.style.scss";

type Props = {};

const FAQ = (props: Props) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  return (
    <section id="faqs">
      <h2>
        <span>Frequently</span> Asked Questions
      </h2>
      <div className="faqs-container">
        {FAQs.map((faq, index) => {
          return (
            <div
              className={`faq ${index === activeFAQ ? "open" : ""}`}
              key={index}
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="faq-question">
                {faq.question}
                <div className="chevron">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

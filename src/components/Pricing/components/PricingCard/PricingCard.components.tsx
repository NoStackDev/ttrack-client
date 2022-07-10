import React, { FC } from "react";
import "./PricingCard.style.scss";

interface planInterface {
  planName: string;
  cost: number;
  bias: boolean;
  features: string[];
}

const RenderFee: FC<{ cost: number }> = ({ cost }) => {
  return (
    <>
      {cost === 0 ? (
        <span className="plan-fee">
          <span>Free</span>
        </span>
      ) : (
        <span className="plan-fee">
          <span>${cost}</span>
          <span>/Monthly</span>
        </span>
      )}
    </>
  );
};

const RenderFeatures: FC<{ features: string[] }> = ({ features }) => {
  return (
    <div className="plan-features">
      <span>Plan includes:</span>
      <ul>
        {features.map((feature) => {
          return <li>{feature}</li>;
        })}
      </ul>
    </div>
  );
};

const PricingCard: FC<{ plan: planInterface }> = ({ plan }) => {
  return (
    <div className="pricing-card">
      {plan.bias ? <div className="bias">Popular</div> : <></>}
      <span className="plan-type">{plan.planName}</span>
      <RenderFee cost={plan.cost} />
      <RenderFeatures features={plan.features} />
      <button>Get Started for Free</button>
    </div>
  );
};

export default PricingCard;

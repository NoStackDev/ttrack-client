import React, { FC } from "react";
import plans from "./Pricing.config";
import PricingCard from "./components/PricingCard";
import "./Pricing.style.scss";

const Pricing: FC = () => {
  return (
    <div className="pricing-plans">
      {plans.map((plan) => {
        return <PricingCard plan={plan} />;
      })}
    </div>
  );
};

export default Pricing;

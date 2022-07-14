import React, { FC } from "react";
import plans from "./Plans.config";
import PricingCard from "./components/PlanCard";
import "./Plans.style.scss";

const Plans: FC = () => {
  return (
    <div className="pricing-plans">
      {plans.map((plan, index) => {
        return <PricingCard plan={plan} key={index} />;
      })}
    </div>
  );
};

export default Plans;

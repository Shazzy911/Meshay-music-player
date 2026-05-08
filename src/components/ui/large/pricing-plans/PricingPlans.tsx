import React from "react";
import style from "./PricingPlans.module.scss";
const PricingPlans = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1>Affordable plans for any situation</h1>
        <p>
          Choose a Premium plan and listen to ad-free music without limits on
          your phone, speaker, and other devices. Pay in various ways. Cancel
          anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;

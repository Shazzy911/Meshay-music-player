import React from "react";
import style from "./PricingIntro.module.scss";
import Button from "../../small/button/Button";
const PricingIntro = () => {
  return (
    <section className={style.container}>
      <div className={style.intro}>
        <p></p>
        <h4>Plans & pricing</h4>
        <h1 className={style.heading}>
          Start for free, then enjoy your first month for $1
        </h1>
        <p className={style.text}>
          Choose the best plan for your business. Change plans as you grow.
        </p>
        <div>
          <input type="text" placeholder="Enter Your Email Address" />
          <Button text="Start Free Trial" />
        </div>
        <p>
          Try Shopify free, no credit card required. By entering your email, you
          agree to receive marketing emails from Shopify.
        </p>
      </div>
    </section>
  );
};

export default PricingIntro;

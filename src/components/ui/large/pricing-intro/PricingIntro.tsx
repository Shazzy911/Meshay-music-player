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
        <div className={style.searchbar}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Enter your email address" />
            <Button
              text="Start Free Trial"
              style={{
                transform: "translateX(0)",
                zIndex: "2",
                width: "25%",
                padding: "2rem",
              }}
            />
          </div>
        </div>
        <p className={style.text2}>
          Try Meshay Music free, no credit card required. By entering your
          email, you agree to receive updates emails from Meshay Music.
        </p>
      </div>
    </section>
  );
};

export default PricingIntro;

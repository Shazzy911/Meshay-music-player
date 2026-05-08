import React from "react";
import Hero from "@/assets/images/New.png";
import style from "./PricingContainer.module.scss";
import Button from "../../small/button/Button";
import Image from "next/image";

const premiumPlans = [
  {
    id: 1,

    image: Hero,
    type: "Premium",
    package: "Mini",
    price: "PKR 69 for 1 week",
    features: [
      "1 mobile-only Premium account",
      "Offline listening of up to 30 songs",
      "One-time payment",
      "Basic audio quality",
    ],
    button: "Get Premium Mini",
    terms: "Terms apply.",
    color: "#CFF56A",
  },
  {
    id: 2,
    image: Hero,
    type: "Premium",
    package: "Individual",

    price: "Free for 1 month,",
    features: [
      "1 Premium account",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
    freeTrial: "PKR 349 per month after",
    button: "Try free for 1 month",
    terms:
      "Offer only available if you haven't tried Premium before. Terms apply. Free for 1 month, then PKR 349 per month after.",
    color: "#FFC862",
  },
  {
    id: 3,
    image: Hero,
    type: "Premium",
    package: "Student",
    price: "Free for 1 month",
    features: [
      "1 verified Premium account",
      "Discount for eligible students",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
    freeTrial: "PKR 175/ month after",
    button: "Try free for 1 month",

    terms:
      "Offer available only to students at an accredited higher education institution and if you haven't tried Premium before. Terms apply.",
    color: "#C4B1D4",
  },
  {
    id: 4,
    image: Hero,
    type: "Premium",
    package: "Family",
    price: "PKR 579 / month",

    features: [
      "Up to 6 Premium accounts",
      "Control content marked as explicit",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
    button: "Get Premium Family",
    terms:
      "For up to 6 family members residing at the same address. Terms apply.",
    color: "#A5BBD1",
  },
];

const PricingContainer = () => {
  return (
    <section className={style.container}>
      {premiumPlans.map((plan) => (
        <div className={style.card} key={plan.id}>
          <div className={style.header}>
            <span>
              <Image src={plan.image} alt="plan" height={30} width={30} />
              <h4>{plan.type}</h4>
            </span>
            <h1 style={{ color: plan.color }}>{plan.package}</h1>
            <h4>{plan.price}</h4>
            {plan.freeTrial && (
              <p className={style.subTitle}>{plan.freeTrial}</p>
            )}
          </div>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Button
            text={plan.button || "Try Premium"}
            style={{
              backgroundColor: plan.color,
              color: "black",
              fontWeight: "500",
            }}
          />
          <p className={style.small}>{plan.terms}</p>
        </div>
      ))}
    </section>
  );
};

export default PricingContainer;

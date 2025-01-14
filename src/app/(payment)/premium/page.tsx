import PricingContainer from "@/components/ui/large/Pricing-container/PricingContainer";
import PricingIntro from "@/components/ui/large/pricing-intro/PricingIntro";
import PricingPlans from "@/components/ui/large/pricing-plans/PricingPlans";
import React from "react";

const Page = () => {
  return (
    <main>
      <PricingIntro />
      <PricingContainer />
      <PricingPlans />
    </main>
  );
};

export default Page;

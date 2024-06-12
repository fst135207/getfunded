import React, { useState } from 'react';
import styles, { layout } from "../style";
import PricingCardItem from './PricingCardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const PricingCard = () => {
    const [isHFT, setIsHFT] = useState(true);

    const hftPlans = [
        {
            title: "25'000 Account",
            price: "$59/per account",
            features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
            buttonText: "Choose Plan"
        },
        {
          title: "50'000 Account",
          price: "$99/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "100'000 Account",
          price: "$149/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "200'000 Account",
          price: "$279/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "300'000 Account",
          price: "$389/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "500'000 Account",
          price: "$880/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "100'000'000 Account",
          price: "$1460/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
    ];

    const nonHftPlans = [
        {
            title: "25'000 Account",
            price: "$00/per account",
            features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
            buttonText: "Choose Plan"
        },
        {
          title: "50'000 Account",
          price: "$00/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "100'000 Account",
          price: "$100/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
        {
          title: "200'000 Account",
          price: "$00/per account",
          features: ["HFT Feature 1", "HFT Feature 2", "HFT Feature 3"],
          buttonText: "Choose Plan"
        },
    ];

    const handleToggle = () => {
        setIsHFT(!isHFT);
    };

    const currentPlans = isHFT ? hftPlans : nonHftPlans;

    return (
      <section id="pricingcard" className={layout.section}>
          <div className={layout.sectionInfopricing}>
              <h2 className={`${styles.heading2} justify-center w-full flex items-center text-white`}>
                  Our Pricing Plans
              </h2>
              <div className="flex justify-center mt-6">
                  <label className="flex items-center">
                      <input
                          type="checkbox"
                          checked={isHFT}
                          onChange={() => setIsHFT(!isHFT)}
                          className="mr-2"
                      />
                      <span className="text-white">HFT Plans</span>
                  </label>
              </div>
              <p className={`${styles.paragraph} max-w-[750px] mt-5 justify-center w-full text-center text-white`}>
                  Choose the plan that suits you best.
              </p>
              <div className="flex flex-wrap justify-center items-center w-full mt-10">
                  {currentPlans.map((plan, index) => (
                      <PricingCardItem
                          key={index}
                          title={plan.title}
                          price={plan.price}
                          features={plan.features}
                          buttonText={plan.buttonText}
                      />
                  ))}
              </div>
          </div>
      </section>
  );
};

export default PricingCard;
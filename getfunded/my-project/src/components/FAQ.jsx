import React from 'react'
import styles from "../style";
import { motion } from "framer-motion";
import { useState } from 'react';

const FAQ = () => {
    const [hftQuestions, nonhftQuestions] = useState(false);

    const Questions = [
          {
              id: 1,
              question: "Why would I offer such a service?",
              answer: "You may wonder why I offer such a profitable EA, well the EA only works on demo conditions. That means he abused demo market conditions (same conditions as on challenge accounts) to execute very fast tick scalp trades which would never be possible on a live account because of spread and slippage. This means that the EA can only be used to pass challenges. On the Funded account the customer will then have to trade on his own of course.",
          },
          {
              id: 2,
              question: "What's gonna happen after the purchase?",
              answer: "After the purchase you can tell me at which Propfirm you bought your account and how big the account size is, so I can set up the EA correctly. After that you will give me your account credentials so I can login to your account. I will use a VPS to prevent IP bans. Then we just have to wait for NY open and let the EA do its thing.",
          },
          {
              id: 3,
              question: "Why would you trust me?",
              answer: "I can show you the results of my OWN passed account with investor logins or even a live recording that I did. Also you can checkout the Certificate Section.",
          },
          {
              id: 4,
              question: "Why does it only work on a few Propfirms?",
              answer: "Because HFT EAs are banned by most Propfirms because it is just like a cheat code since you can pass a challenge within a short time without losses and they want people to fail the challenge but with the EA you would not fail so they had to ban it. The listed companies that still offer this sometimes have some additional rules or offer HFT soon no longer. Therefore it is important to profit from the chance now.",
          },
      ];

    const [activeQuestion, setActiveQuestion] = useState(null);

      return (
          <div className='w-full  bg-white flex justify-center item-center'>
              <div className='w-{89%}'>
  
              </div>
          </div>
  

  );
}

export default FAQ
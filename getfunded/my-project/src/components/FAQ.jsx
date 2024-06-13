import React, { useState } from 'react';
import styles from '../style';


const FAQ = () => {
  const [activeTab, setActiveTab] = useState('HFT');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = {
    HFT: [
      {
        question: "Why would I offer such a service?",
        answer: "You may wonder why I offer such a profitable EA, well the EA only works on demo conditions. That means he abused demo market conditions (same conditions as on challenge accounts) to execute very fast tick scalp trades which would never be possible on a live account because of spread and slippage. This means that the EA can only be used to pass challenges. On the Funded account the customer will then have to trade on his own of course."
      },
      {
        question: "What's gonna happen after the purchase?",
        answer: "After the purchase you can tell me at which Propfirm you bought your account and how big the account size is, so I can set up the EA correctly. After that you will give me your account credentials so I can login to your account. I will use a VPS to prevent IP bans. Then we just have to wait for NY open and let the EA do its thing."
      },
      {
        question: "Why does it only work on a few Propfirms?",
        answer: "Because HFT EAs are banned by most Propfirms because it is just like a cheat code since you can pass a challenge within a short time without losses and they want people to fail the challenge but with the EA you would not fail so they had to ban it. The listed companies that still offer this sometimes have some additional rules or offer HFT soon no longer. Therefore it is important to profit from the chance now."
      },
      {
        question: "Why would you trust me?",
        answer: "I can show you the results of my OWN passed account with investor logins or even a live recording that I did. Also you can checkout the Certificate Section."
      },
    ],
    nonHFT: [
      {
        question: "Non HFT Question 1",
        answer: "Non HFT Answer 1"
      },
      {
        question: "Non HFT Question 2",
        answer: "Non HFT Answer 2"
      },
      {
        question: "Non HFT Question 3",
        answer: "Non HFT Answer 3"
      },
    ]
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="py-10 md:px-14 p-4 w-full mx-auto">
      <div className="text-center">
        <h2 className={`${styles.heading2} justify-center w-full flex items-center`}>FAQ</h2>
        <div className="flex flex-wrap justify-center items-center w-full">
            <p className={`${styles.paragraph} max-w-[750px] mt-5 justify-center w-full text-center`}>
            Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
            </p>
        </div>
        </div>
      
      <div className="tabs mt-3">
        <button onClick={() => setActiveTab('HFT')} className={activeTab === 'HFT' ? 'active' : ''}>HFT Passing Service</button>
        <button onClick={() => setActiveTab('nonHFT')} className={activeTab === 'nonHFT' ? 'active' : ''}>Non HFT Passing Service</button>
      </div>
      
      <div className="faq-content">
        {faqs[activeTab].map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span>{activeQuestion === index ? '-' : '+'}</span>
            </div>
            {activeQuestion === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

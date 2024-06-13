import { useState } from "react";
import { FcInfo } from "react-icons/fc";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import styles from "../style";
import Button from "./Button";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

  const packages = [
    { name: "25'000 Account", monthlyPrice: 59, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "50'000 Account", monthlyPrice: 99, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "100'000 Account", monthlyPrice: 149, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "200'000 Account", monthlyPrice: 279, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "300'000 Account", monthlyPrice: 389, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "500'000 Account", monthlyPrice: 880, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
    { name: "1'000'000 Account", monthlyPrice: 1460, yearlyPrice: 100, description: "We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.", green: "/src/assets/greendot.png" },
  ];

    return (
        <div className="py-10 md:px-14 p-4 w-full mx-auto" id="pricing">
      <div className="text-center">
        <h2 className={`${styles.heading2} justify-center w-full flex items-center`}>Here are all our plans</h2>
        <div className="flex flex-wrap justify-center items-center w-full">
            <p className={`${styles.paragraph} max-w-[750px] mt-5 justify-center w-full text-center`}>
            Choose the plan that suits you best.
            </p>
        </div>
        <div className="mt-16">
          <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
            <span className={`${styles.pricingToggle} mt-5 justify-center text-center`}>HFT Passing</span>
            <div className="w-14 h-6 items-center transition duration-200 bg-gray-300 ease-in-out rounded-full mr-5 ml-5 justify-center">
                <div className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${isYearly ? 'bg-primary ml-8' : 'bg-gray-500'}`}></div>
            </div>
            <span className={`${styles.pricingToggle} mt-5 justify-center text-center`}>Non-HFT Passing</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
       
      className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div key={index} className="py-10 md:px-6 px-4 rounded-lg shadow-3x1 bg-slate-900">
            <h3 className="text-3xl  font-bold text-center text-[#ffffff]">{pkg.name}</h3>
            <p className="text-white text-center my-6">{pkg.description}</p>
            <p className="mt-5 text-center text-[#3fe999] text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className="text-base text-tertiary font-medium">/{isYearly ? 'per account' : 'per account'}</span>
            </p>
            <ul className="mt-8 space-y-2 px-2 text-white">
              <li className="flex items-center justify-center">
                <FcInfo className="mr-2 text-xl"/>
                <span style={{ width: "200px" }}>Challenge passed within 24H upon request during a working day</span>
              </li>
              <li className="flex items-center justify-center">
                <FcInfo className="mr-2 text-xl"/>
                <span style={{ width: "200px" }}>I use Private VPS for every customer (no issues with IP)</span>
              </li>
              <li className="flex items-center justify-center">
                <FcInfo className="mr-2 text-xl"/>
                <span style={{ width: "200px" }}>24/7 Support</span>
              </li>
              <li className="flex items-center justify-center">
                <FcInfo className="mr-2 text-xl"/>
                <span style={{ width: "200px" }}>Risk Free Gurantee!</span>
              </li>
              <li className="flex items-center justify-center">
                <FcInfo className="mr-2 text-xl"/>
                <span style={{ width: "200px" }}>Only Metatrader 4 supported!!!</span>
              </li>
            </ul>

            {/* button */}
            <div className="w-full mx-auto flex items-center justify-center mt-7">
            <Button/>
            </div>
          </div>
        ))}
      </motion.div>
        </div>
    );
};

export default Pricing;
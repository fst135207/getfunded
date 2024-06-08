import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Typewriter from 'react-typing-effect';
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount with Code{" "}
            <span className="text-white">TWENTY</span>, only on HFT-Service
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            We Pass your <br className="sm:block hidden mt-5" />{" "}
            <span className="text-gradient">
            <Typewriter
              text={["Evaluation", "Verification", "Challenge"]}
              speed={85}
              startDelay={0.3}
              cursor={
                  <span className="text-gradient" style={{ animation: 'blink 1s infinite' }}>|</span>
              }
            />
          </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-0 mr-0">
            <GetStarted/>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Instantly.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We will get your Prop Firm Challenge Funded, unlock up to 1,000,000$ Worth of Trading Capital
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
import React from 'react'
import Slider from "react-slick";
import { cert1, cert2, cert3, cert4, cert5 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Certificate = () => {
    return (
      <section id="certificate" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} justify-center w-full flex items-center`}>
              Recently Passed Users with GetFunded
          </h2>
          <div className="flex flex-wrap justify-center items-center w-full">
          <p className={`${styles.paragraph} max-w-[750px] mt-5 justify-center w-full text-center`}>
          If these certificates are not sufficient as proof, you are welcome to visit our Discord Server and check the section『⭐』passed-accounts or our Trustpilot profile.
          </p>
          <div className="flex flex-wrap justify-center items-center w-full">
          <Button styles={`mt-10 mr-5`} />
          <Button styles={`mt-10 mr-5`} />
          </div>
          </div>
        </div>
      </section>
    );
  };

export default Certificate;
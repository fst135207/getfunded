import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cert1, cert2, cert3, cert4, cert5 } from "../assets";
import styles, { layout } from "../style";
import ButtonTrustpilot from "./ButtonTrustpilot";
import ButtonDiscordserver from "./ButtonDiscordserver";

const Certificate = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
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
                <ButtonTrustpilot styles={`mt-10 mr-5`} />
                <ButtonDiscordserver styles={`mt-10 mr-5`} />
            </div>
          </div>
          <Slider {...settings}>
            <div>
            <div>
              <img src={cert1} alt="cert1" className="max-w-[500px] mt-20 mx-auto" />
            </div>
            <div>
              <img src={cert2} alt="cert2" className="max-w-[500px] mt-20 mx-auto" />
            </div>
            <div>
              <img src={cert3} alt="cert3" className="max-w-[500px] mt-20 mx-auto" />
            </div>
            <div>
              <img src={cert4} alt="cert4" className="max-w-[500px] mt-20 mx-auto" />
            </div>
            <div>
              <img src={cert5} alt="cert5" className="max-w-[500px] mt-20 mx-auto" />
            </div>
            </div>
            </Slider>
         </div>
      </section>
    );
  };

export default Certificate;
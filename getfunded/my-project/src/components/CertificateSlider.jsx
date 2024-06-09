import React from 'react';
import { motion } from 'framer-motion';
import { cert1, cert2, cert3, cert4, cert5 } from "../assets";

const slides = [
    <img src={cert1} alt="" className="w-full h-full object-cover" />,
    <img src={cert2} alt="" className="w-full h-full object-cover" />,
    <img src={cert3} alt="" className="w-full h-full object-cover" />,
    <img src={cert4} alt="" className="w-full h-full object-cover" />,
    <img src={cert5} alt="" className="w-full h-full object-cover" />
];

const CertificateSlider = () => {
    const duplicatedSlides = [...slides,...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-transparent mx-auto" style={{ width: "100%" }}>

            <div className="absolute inset-50 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${180 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full mr-8">
                            {slide}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CertificateSlider;
import React from 'react';

const PricingCardItem = ({ title, price, features, buttonText }) => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 m-4 shadow-lg max-w-xs flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-4xl font-bold text-white mb-4">{price}</p>
            <ul className="text-white mb-4 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="bg-purple-500 text-white py-2 px-4 rounded">{buttonText}</button>
        </div>
    );
};

export default PricingCardItem;

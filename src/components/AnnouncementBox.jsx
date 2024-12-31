import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  {
    label: '1',
    imgPath: '/PESGRE-CFP-2025-final.png',
  },
];

function CustomCarousel({ text, subtext, size }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`relative rounded-2xl shadow-lg w-full p-3`}>
      <div className="relative w-full h-full">
        {/* Carousel Images */}
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((step) => (
              <div key={step.label} className="flex-shrink-0 w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={step.imgPath}
                  alt={step.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Buttons */}
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Optional Text */}
      {text && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <h3
            className={`text-xl ${font || 'font-bold'} text-black`}
          >
            {text}
          </h3>
          {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
        </div>
      )}
    </div>
  );
}

export default CustomCarousel;

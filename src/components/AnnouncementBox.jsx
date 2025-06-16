import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  {
    label: '1',
    imgPath: '/popup.jpeg',
  },
  {
    label: '2',
    imgPath: '/Website/Deadline Extended/Deadline extended Full Paper Submission/1.png',
  },
  {
    label: '3',
    imgPath: '/Website/Deadline Extended/Deadline extended Full Paper Submission/2.png',
  },
  {
    label: '4',
    imgPath: '/PlatinumSponsor-JSC-1.png',
  },
  {
    label: '5',
    imgPath: '/pragna_microdesigns_gold_sponsor.jpeg',
  },
  {
    label: '6',
    imgPath: '/BronzeSponsor-ChargeHouse-1.png',
  },
  {
    label: '7',
    imgPath: '/TestBetterPoster.jpeg',
  },
  {
    label: '8',
    imgPath: '/Drazen-Keynote-poster.png',
  },
  {
    label: '9',
    imgPath: '/Malinowski_Mariusz-Keynote-poster.png',
  },
  {
    label: '10',
    imgPath: '/Prof_BGF_Keynote.png',
  },
  {
    label: '11',
    imgPath: '/SYP Keynote.png',
  },
  {
    label: '12',
    imgPath: '/Rajendra.png',
  },
];

function CustomCarousel({ text, subtext }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div className="relative w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 items-center"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((step,idx) => (
              <div key={idx} className="flex-shrink-0 w-full h-full">
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
          <h3 className="text-xl font-bold text-black">{text}</h3>
          {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
        </div>
      )}
    </div>
  );
}

export default CustomCarousel;
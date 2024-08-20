import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    label: '1',
    imgPath: '/banner_1x.png',
  },
  {
    label: '2',
    imgPath: '/banner_2.png',
  },
];

function SwipeableTextMobileStepper() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed in milliseconds
  };

  return (
    <div className="relative w-full z-10">
      <Slider {...settings} ref={setSliderRef}>
        {images.map((step) => (
          <div key={step.label}>
            <img
              className="w-full md:w-[80%] h-auto mx-auto"
              src={step.imgPath}
              alt={step.label}
            />
            <div className="absolute inset-0 bg-white opacity-5"></div>
          </div>
        ))}
      </Slider>

      {/* Arrow buttons only visible on medium screens and larger */}
      <div className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.slickPrev()}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.slickNext()}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6vw]">
        <h1
          className="justify-center text-center text-white"
          style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 800 }}
        >
          
        </h1>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;

import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    label: '1',
    imgPath: '/iitdh_admin_block.jpg',
  },
  {
    label: '2',
    imgPath: '/hampi3.jpg',
  },
  {
    label: '3',
    imgPath: '/dandeli.jpg',
  },
  {
    label: '4',
    imgPath: '/western-ghats.jpg',
  },
];

function SwipeableTextMobileStepper({ text, subtext, size }) {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative w-full md:h-full h-[356px] z-10">
      <div className="relative w-full">
        <Slider {...settings} ref={setSliderRef}>
          {images.map((step) => (
            <div key={step.label} className="w-full h-full">
              <img
                className="w-full md:h-full h-[350px] object-cover md:object-fill"
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          ))}
        </Slider>

        {/* Dark overlay */}
        <div className={`absolute inset-0 ${size == "small" ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-70'}`}></div>

        {/* Text overlay */}
        <div className={`absolute ${size == "small" ? 'top-2/3' : 'top-1/2'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] md:w-[80%]`}>
          <h1
            className={`text-[9vw] ${size == "small" ? 'md:text-[3.5vw]' : 'text-[4vw]'} font-bold`}
            style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 800 }}
          >
            {text}
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] mt-3 md:mt-2">{subtext}</p>
        </div>
      </div>

      {/* Arrow buttons only visible on medium screens and larger */}
      {size == "small" ?
        <>
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
        </> : <></>}
    </div>
  );
}

export default SwipeableTextMobileStepper;

import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/tmp1.jpg'

  },
    {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/tmp2.jpg'

  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/tmp1.jpg'

  },
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://as1.ftcdn.net/v2/jpg/04/14/31/10/1000_F_414311031_Ema1DhMza49OvirmEp5ArLMgLv6ZHCVM.jpg'
//   },
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://i.pinimg.com/originals/6d/5e/e1/6d5ee1d4ec8e235f1266db16caf78e49.jpg'
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
];

function SwipeableTextMobileStepper() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10",
    appendDots: (dots) => (
      <div>
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
//       <div className="w-3 h-3 bg-white rounded-full"></div> // Custom dot style
      <div></div>
    ),
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} ref={setSliderRef}>
        {images.map((step) => (
          <div key={step.label}>
            <img
              className="w-full h-auto object-cover"
              src={step.imgPath}
              alt={step.label}
            />
            <div className="absolute inset-0 bg-black opacity-5"></div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.slickPrev()}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.slickNext()}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6vw]">
        <h1 className="justify-center text-center text-white" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 800}}>Welcome to PESGRE 2025</h1>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;

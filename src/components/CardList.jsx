import React from "react";

const cards = [
  {
    src: "/iitdh.png",
    alt: "IITDh logo",
  },
  {
    src: "/IEEE.png",
    alt: "IEEE logo",
  },
  {
    src: "/PES-Logo.png",
    alt: "PES logo",
  },
  {
    src: "/IEEE-IAS-Logo.png",
    alt: "IEEE IAS logo",
  },
  {
    src: "/IEEEK.png",
    alt: "IEEE Kerala logo",
  },
  {
    src: "/ies-logo.png",
    alt: "IEEE IES logo",
  },
  {
    src: "/PELS-Logo.png",
    alt: "PELS logo",
  },
];

function CardList() {
  return (
    <div className="bg-gray-200 relative">
      {/* Themed Background with Animation */}
      <div
        className="absolute inset-0 animate-pulse-grid w-full p-6"
        style={{
          maskImage:
            "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
          WebkitMaskImage:
            "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
          backgroundImage:
            "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      >
        <style>
            {`
              @media (min-width: 1024px) {
                .animate-pulse-grid {
                  background-size: 30px 30px !important;
                }
              }
            `}
          </style>
      </div>
      <div
        className="absolute inset-0 animate-pulse-grid w-full p-6"
        style={{
          maskImage:
            "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
          WebkitMaskImage:
            "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
          backgroundImage:
            "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      >
        <style>
            {`
              @media (min-width: 1024px) {
                .animate-pulse-grid {
                  background-size: 30px 30px !important;
                }
              }
            `}
          </style>
      </div>

      {/* Card List Content */}
      <div className="relative z-10 w-full p-6">
        <h3 className="text-center text-5xl font-bold text-blue-700 pb-10">
          Organisers
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="aspect-square w-full bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 text-center flex items-center justify-center"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;
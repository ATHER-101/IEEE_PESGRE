import React from "react";

const cards = [
  {
    "src":"/iitdh.png",
    "alt":"IITDh logo"
  },
  {
    "src":"/IEEE.png",
    "alt":"IEEE logo"
  },
  {
    "src":"/PES-Logo.png",
    "alt":"PES logo"
  },
  {
    "src":"/IEEE-IAS-Logo.png",
    "alt":"IEEE IAS logo"
  },
  {
    "src":"/IEEEK.png",
    "alt":"IEEE Kerala logo"
  },
  {
    "src":"/ies-logo.png",
    "alt":"IEEE IES logo"
  },
  {
    "src":"/PELS-Logo.png",
    "alt":"PELS logo"
  },
]

function CardList() {
  return (
    <div className="w-full bg-gray-100 p-6">
      <h3 className="text-center text-blue-600 text-3xl pb-5 pl-6">
        Organisers
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className=" aspect-square w-full bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center flex items-center justify-center"
          >
            <img src={card.src} alt={card.alt} className="max-w-full max-h-full object-contain"/>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

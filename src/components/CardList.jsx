import React from "react";

const cards = [
  {
    "src":"/IEEE.png",
    "alt":"IEEE logo"
  },
  {
    "src":"/IEEEK.png",
    "alt":"IEEE Kerala logo"
  },
  {
    "src":"/IEEE-IAS-Logo.png",
    "alt":"IEEE IAS logo"
  },
  {
    "src":"/ies-logo.png",
    "alt":"IEEE IES logo"
  },
  {
    "src":"/PELS-Logo.png",
    "alt":"PELS logo"
  },
  {
    "src":"/PES-Logo.png",
    "alt":"PES logo"
  },
]

function CardList() {
  return (
    <div className="w-full bg-gray-100 p-6">
      <h3 className="text-center text-blue-600 text-3xl pb-5 pl-6">
        Organisers
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className=" w-full bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center flex items-center justify-center"
          >
            <img src={card.src} alt={card.alt} />

          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

import React from "react";

function CardList({ title, cards }) {
  return (
      <div className="relative z-10 w-full p-6">
        <h3 className="text-center text-5xl font-bold text-blue-700 pb-10">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="aspect-square w-[200px] bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 text-center flex items-center justify-center"
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
  );
}

export default CardList;

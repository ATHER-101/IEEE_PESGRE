import React from "react";

function CardList({ title, cards }) {
  return (
    <div className="relative z-10 w-full">
      {title && <h3 className="text-center text-4xl md:text-5xl font-bold text-blue-700 pb-10">
        {title}
      </h3>}
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: `${200 * card.width}px`,
              height: '200px',
              '--tw-shadow': '0 1px 2px rgba(0,0,0,0.05)',
            }}
            className="md:h-[220px] md:w-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 text-center flex items-center justify-center"
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

import React from "react";

function CardList() {
  return (
    <div className="w-full bg-gray-100 p-6">
      <h3 className="text-center text-blue-600 text-3xl pb-5 pl-6">
        Organisers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 1 }).map((_, idx) => (
          <div
            key={idx}
            className=" w-full bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center"
          >
            <img className="mx-auto" src="/iitdh.png" alt="iitdh logo" />
            <img className="mx-auto" src="/IEEE.png" alt="iitdh logo" />
            <img className="mx-auto" src="/IEEEK.png" alt="iitdh logo" />
            <img className="mx-auto" src="/IEEE-IAS-Logo.png" alt="iitdh logo" />
            <img className="mx-auto" src="/ies-logo.png" alt="iitdh logo" />
             <img className="mx-auto" src="/PELS-Logo.png" alt="iitdh logo" />
             <img className="mx-auto" src="/PES-Logo.png" alt="iitdh logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

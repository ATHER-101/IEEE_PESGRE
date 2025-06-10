import React from "react";
import Corousel from "../components/Corousel";

function HotelBooking() {
  const openSheet = () => {
    window.open("/ExtendedListOfHotelsForAdditionalDetails.xlsx", "_blank"); // Opens the PDF in a new tab
  };

  const dharwadHotels = [
    {
      name: "Mastiff Grand Dharwad",
      map: "https://maps.app.goo.gl/oHUrj9ZQnSaQJxzD9",
      contact: "9035038181",
      distance: "6.1",
      rating: "4.3",
    },
    {
      name: "MR Residency Dharwad",
      map: "https://maps.app.goo.gl/biywTUBWcCQhzE6p7",
      contact: "9164994466",
      distance: "12",
      rating: "4.7",
    },
    {
      name: "Rising Resorts and Spa",
      map: "https://maps.app.goo.gl/LcQz46foZpmk1M4H8",
      contact: "8951578555",
      distance: "6.3",
      rating: "4.5",
    },
    {
      name: "Hotel Crown Inn",
      map: "https://maps.app.goo.gl/gDzqNonzZjPYRVqr7",
      contact: "8904264777",
      distance: "18.5",
      rating: "4.3",
    },
    {
      name: "The Ocean Pearl Resort And Spa",
      map: "https://maps.app.goo.gl/2FrAgDaaAmgydwge6",
      contact: "8362226600",
      distance: "20.1",
      rating: "4.2",
    },
    {
      name: "Hotel Brindavan",
      map: "https://maps.app.goo.gl/gTe5vC3sA6ncTbNu7",
      contact: "8362792123",
      distance: "12.4",
      rating: "4.2",
    },
    {
      name: "Hotel Royal inn lodge Dharwad",
      map: "https://maps.app.goo.gl/4udunMNvvFjvrAV19",
      contact: "8050387999",
      distance: "14.2",
      rating: "4.2",
    },
    {
      name: "Menaka Inn",
      map: "https://maps.app.goo.gl/AEzuTtgq9VsH5DjP8",
      contact: "7090422999",
      distance: "17",
      rating: "4",
    },
    {
      name: "Hotel Vishwa Resort & Lodging",
      map: "https://maps.app.goo.gl/ucUGxLXspA8mcFGn7",
      contact: "N/A",
      distance: "5.6",
      rating: "3.9",
    },
  ]

  const hubliHotels = [
    {
      name: "Fortune Park, Airport Road",
      map: "https://maps.app.goo.gl/J5fmKQwyuMteQRG47",
      contact: "8363577777",
      distance: "29.8",
      rating: "4.2",
    },
    {
      name: "Ananth Residency",
      map: "https://maps.app.goo.gl/4PXxM6D9V2gD35Xf8",
      contact: "8088415720",
      distance: "38.4",
      rating: "4.1",
    },
    {
      name: "Denissons Hotel",
      map: "https://maps.app.goo.gl/zWKCHPcT7GRbSf657",
      contact: "8362377777",
      distance: "32.9",
      rating: "4.4",
    },
    {
      name: "Hotel Naveen",
      map: "https://maps.app.goo.gl/NA8eKD4xaMdcZ1KH8",
      contact: "8362239100",
      distance: "27.3",
      rating: "4.4",
    },
    {
      name: "The President Hotel",
      map: "https://maps.app.goo.gl/qJPqg8RLDVTc15zZ8",
      contact: "8362234888",
      distance: "26.9",
      rating: "4.3",
    },
    {
      name: "Sunshine Lodge",
      map: "https://maps.app.goo.gl/LRB4xyUpsXT7G4n1A",
      contact: "N/A",
      distance: "33.3",
      rating: "4.6",
    },
    {
      name: "Hotel Oasis Suites",
      map: "https://maps.app.goo.gl/2xE8aDx2BFGHoDsy7",
      contact: "8762204777",
      distance: "32.4",
      rating: "4.6",
    },
    {
      name: "Hotel Red fort lodging",
      map: "https://maps.app.goo.gl/W9yqddr9Z3kEREYx5",
      contact: "9008764999",
      distance: "18.3",
      rating: "4.4",
    },
    {
      name: "Aithals Canara Lodge",
      map: "https://maps.app.goo.gl/cuyEWkAJdHsb6bAp7",
      contact: "8362372561",
      distance: "34.7",
      rating: "4.1",
    },
    {
      name: "Lemon Tree Hotel Hubli",
      map: "https://maps.app.goo.gl/qzwGEEAsbhnoh3PP9",
      contact: "8884455627",
      distance: "29",
      rating: "4.1",
    },
  ]

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Accommodation Details" />

      {/* Main Content Section */}
      <div
        className="relative px-8 md:px-24 py-10"
        style={{
          background: "linear-gradient(to right, white, rgba(10, 129, 234, 0.15))",
        }}
      >
        {/* Grid Pattern Overlays */}
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
            pointerEvents: "none",
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
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            WebkitMaskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            backgroundImage:
              "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
            pointerEvents: "none",
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

        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#168BEE] uppercase">
            Accommodation Details
          </h1>
        </div>

        {/* Instructions */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-[#168BEE] mb-4">⁠In-Campus Accommodation for Students</h2>
              <p className="mb-5">
                Student authors can avail of accommodation (on sharing basis) on the IIT Dharwad campus, and this will be done on a first-come-first serve basis. The nominal charges of approximately 300 Rupee/day need to be borne by the student authors and is NOT included in the registration charges.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#168BEE] mb-4">⁠Extended list of nearby hotels</h2>
              <p className="mb-5">
                The authors may please refer to the extended list of hotels along with key details: <span className="text-blue-600 underline" onClick={openSheet}>Extended List</span>.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#168BEE] mb-4">⁠⁠Transport from City to IIT Dharwad Campus</h2>
              <p className="mb-5">
                Transport facility will be provided from Hubballi to IIT Dharwad campus in the morning and evening on all the days of the conference event.
              </p>
            </div>
          </div>
        </div>

        {/* Hotels in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Dharwad Hotels */}
          <div className="z-10">
            <h2 className="text-xl font-bold text-[#168BEE] mb-4">Hotels in Dharwad</h2>
            <ul className="space-y-4">
              {dharwadHotels.map((hotel, i) => (
                <li key={i} className="border p-4 rounded-lg shadow-sm bg-white">
                  <a href={hotel.map} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#0A81EA] hover:underline">
                    {hotel.name}
                  </a>
                  <p><span className="text-gray-700">Distance: {hotel.distance} km</span></p>
                  <p><span className="text-gray-700">Contact: {hotel.contact}</span></p>
                  <p><span className="text-gray-700">Rating: {hotel.rating}</span></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubballi Hotels */}
          <div className="z-10">
            <h2 className="text-xl font-bold text-[#168BEE] mb-4">Hotels in Hubballi</h2>
            <ul className="space-y-4">
              {hubliHotels.map((hotel, i) => (
                <li key={i} className="border p-4 rounded-lg shadow-sm bg-white">
                  <a href={hotel.map} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#0A81EA] hover:underline">
                    {hotel.name}
                  </a>
                  <p><span className="text-gray-700">Distance: {hotel.distance} km</span></p>
                  <p><span className="text-gray-700">Contact: {hotel.contact}</span></p>
                  <p><span className="text-gray-700">Rating: {hotel.rating}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelBooking;
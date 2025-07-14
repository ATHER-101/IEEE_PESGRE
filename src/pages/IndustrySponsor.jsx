import React from "react";
import Corousel from "../components/Corousel";
import CardList from "../components/CardList";

function IndustrySponsor({sponsors_cards}) {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Industry Sponsor" />

      {/* Main Content Section */}
      <div
        className="relative px-8 md:px-24 py-10"
        style={{
          background:
            "linear-gradient(to right, white, rgba(10, 129, 234, 0.15))",
        }}
      >
        {/* Grid Pattern Overlay */}
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
            Industry Sponsor
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap mx-2">
          <div className="w-full pb-20">
            <CardList cards={sponsors_cards} />
          </div>
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <img
                className="shadow-lg  w-full md:w-[90%] relative z-10"
                src="/PESGRE-CFP-2025-Sponsorship-new.jpeg"
                alt="Sponsorship Brochure"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="relative z-10  w-full md:w-[90%] mb-4">
              <div className="flex justify-between items-center bg-white rounded-md border p-4 w-full">
                <p className="text-lg">Download Sponsorship Brochure</p>
                <button
                  onClick={() => openLink("/PESGRE-CFP-2025-Sponsorship-new.pdf")}
                  className="flex items-center bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H3zm1 1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    <path d="M5 3h6v1H5V3zm0 2h6v1H5V5zm0 2h6v1H5V7zm0 2h6v1H5V9zm0 2h6v1H5v-1z" />
                  </svg>
                  Open PDF
                </button>
              </div>
            </div>
            <div className="relative z-10  w-full md:w-[90%]">
              <div className="flex justify-between items-center bg-white rounded-md border p-4 w-full">
                <p className="text-lg">
                  Interested in Sponsorship: Please fill the form
                </p>
                <button
                  onClick={() =>
                    openLink(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfv5qWeqIBlt6HqSu7LHih7EVxirQPheVvgc0OhjqEl4pfpfA/viewform?usp=dialog"
                    )
                  }
                  className="flex items-center bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H3zm1 1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    <path d="M5 3h6v1H5V3zm0 2h6v1H5V5zm0 2h6v1H5V7zm0 2h6v1H5V9zm0 2h6v1H5v-1z" />
                  </svg>
                  Open Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySponsor;

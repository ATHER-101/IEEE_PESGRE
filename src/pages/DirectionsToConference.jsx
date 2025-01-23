import React from "react";
import Corousel from "../components/Corousel";

function DirectionsToConference() {
  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Location" />

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
            Location
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Hubballi and Dharwad
              </h2>
              <p>
                Hubballi (also Hubli) and dhArwAD are twin cities just about
                20km apart. Hubballi is a major railway junction with about a
                dozen trains to Bengaluru (8-9 hours) daily. There are many
                buses between Hubballi/dhArwAD and major cities such as
                Bengaluru, Hyderabad, Mumbai etc.
              </p>
              <p className="mt-4">
                dhArwAD is connected with three airports. Hubballi is the
                nearest airport to IIT DHARWAD (about 30 minutes). At present
                Air India, Indigo, Spice-jet etc. operates flights between
                Ahmedabad, Bengaluru, Chennai, Goa, Hyderabad, Kochi, Mumbai
                etc. Belgavi (Belgaum) airport is about 50 minutes away. Goa
                airport is about 160 km from IIT DHARWAD. dhArwAD railway
                station and Hubli railway stations are at distances 15 kms and
                35 kms respectively from the current campus.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3429.4408301653116!2d74.93234621941126!3d15.485566230221043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf32db0fffffff%3A0x41e1ca5b252a94d!2sIndian%20Institute%20of%20Technology%20Dharwad!5e1!3m2!1sen!2sus!4v1729417961478!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps - IIT Dharwad Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionsToConference;

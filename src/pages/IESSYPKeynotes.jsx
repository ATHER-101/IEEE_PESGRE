import React from "react";
import Corousel from "../components/Corousel";

function IESSYPKeynotes() {
  const speakers = [
    {
      name: "Alon Kuperman",
      image: "/Alon.png",
      title: "Ben-Gurion University of the Negev, Israel",
      bio: `Alon Kuperman (Senior Member, IEEE) is a Full Professor with the School of Electrical and Computer Engineering, Ben-Gurion University of the Negev, Beer-Sheva, Israel and the Director of Applied Energy Laboratory. He holds multiple international patents and owns an independent consultancy services company. He is also a co-founder of two start-up companies focusing on wireless power transfer. His research interests include all aspects of energy conversion and applied control.`,
    }
  ];

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="IES SYP Keynotes" />

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
            backgroundSize: "30px 30px",
            backgroundRepeat: "repeat",
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute inset-0 animate-pulse-grid w-full p-6"
          style={{
            maskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            WebkitMaskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            backgroundImage:
              "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
            backgroundSize: "30px 30px",
            backgroundRepeat: "repeat",
            pointerEvents: "none",
          }}
        ></div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#168BEE] uppercase">
            IES SYP Keynotes
          </h1>
        </div>

        {/* Speakers List */}
        <div className="flex flex-wrap -mx-4 relative z-10 justify-center">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-10">
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-[#168BEE]">
                  {speaker.name}
                </h2>
                <h3 className="text-gray-800 mb-5">{speaker.title}</h3>
                <p className="text-gray-600">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IESSYPKeynotes;

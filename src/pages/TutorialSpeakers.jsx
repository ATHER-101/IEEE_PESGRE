import React from "react";
import Corousel from "../components/Corousel";

function TutorialSpeakers() {
  const speakers = [
    {
      name: "Drazen Dujic",
      image: "/Drazen.jpg",
      title:
        "Associate Professor and Head of the Power Electronics Laboratory at EPFL",
      bio: `Drazen Dujic received the Dipl. Ing. and MSc degrees from the University of Novi Sad, Serbia, and the PhD degree from Liverpool John Moores University, UK. He has worked as a Research Assistant at the University of Novi Sad, a Research Associate at Liverpool John Moores University, and in various roles at ABB Switzerland Ltd. Since 2014, he has been with EPFL. His research focuses on high-power electronic systems and high-performance drives. He has received multiple awards, including the Istvan Nagy Award (2024), the EPE Outstanding Service Award (2018), and the Isao Takahashi Power Electronics Award (2014). He is an IEEE Fellow.`,
    },
    {
      name: "Mariusz Malinowski",
      image: "/Malinowski_Mariusz.jpg",
      title:
        "Professor at the Institute of Control and Industrial Electronics, WUT",
      bio: `Professor Mariusz Malinowski received his Ph.D. and D.Sc. degrees in electrical engineering from the Warsaw University of Technology (WUT), Poland. He has authored over 200 technical papers and seven books. His research focuses on the control and modulation of grid-side converters, multilevel converters, smart grids, and renewable energy systems. He has received numerous awards, including the IEEE IES David Irwin Early Career Award, IEEE IES Bimal Bose Energy Systems Award, and the Polish Prime Minister Award. He is a Fellow of IEEE and a member of the Polish Academy of Sciences.`,
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Tutorial Speakers" />

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
          }}
        ></div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#168BEE] uppercase">
            Tutorial Speakers
          </h1>
        </div>

      </div>
    </div>
  );
}

export default TutorialSpeakers;

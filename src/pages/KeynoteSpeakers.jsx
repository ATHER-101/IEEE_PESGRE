import React from "react";
import Corousel from "../components/Corousel";

function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Drazen Dujic, Fellow, IEEE,", 
      image: "/Drazen.jpg",
      title:
        "Associate Professor and Head of the Power Electronics Laboratory at EPFL, Switzerland.",
      bio: `Drazen Dujic received the Dipl. Ing. and MSc degrees from the University of Novi Sad, Serbia, and the PhD degree from Liverpool John Moores University, UK. He has worked as a Research Assistant at the University of Novi Sad, a Research Associate at Liverpool John Moores University, and in various roles at ABB Switzerland Ltd. Since 2014, he has been with EPFL. His research focuses on high-power electronic systems and high-performance drives. He has received multiple awards, including the Istvan Nagy Award (2024), the EPE Outstanding Service Award (2018), and the Isao Takahashi Power Electronics Award (2014). He is an IEEE Fellow.`,
    },
    {
      name: "Mariusz Malinowski, Fellow, IEEE", 
      image: "/Malinowski_Mariusz.jpg",
      title: "Professor at the Institute of Control and Industrial Electronics, WUT, Poland.", 
      bio: `Professor Mariusz Malinowski received his Ph.D. and D.Sc. degrees in electrical engineering from the Warsaw University of Technology (WUT), Poland. He has authored over 200 technical papers and seven books. His research focuses on the control and modulation of grid-side converters, multilevel converters, smart grids, and renewable energy systems. He has received numerous awards, including the IEEE IES David Irwin Early Career Award, IEEE IES Bimal Bose Energy Systems Award, and the Polish Prime Minister Award. He is a Fellow of IEEE and a member of the Polish Academy of Sciences.`,
    },
    {
      "name": "Baylon G. Fernandes, Senior Member, IEEE", 
      "image": "/Fernandes_Baylon.png",
      "title": "Professor at the Department of Electrical Engineering, IIT Bombay, India.", 
      "bio": "Professor Baylon G. Fernandes received the B.Tech. degree from the National Institute of Technology Karnataka, Surathkal, India, in 1984, the M.Tech. degree from the Indian Institute of Technology Kharagpur, India, in 1989, and the Ph.D. degree from the Indian Institute of Technology Bombay (IIT Bombay), India, in 1993, all in electrical engineering. Since 1998, he has been with the Department of Electrical Engineering, IIT Bombay, where he is currently a Professor. From 2015 to 2020, he served as the Chairman of the Department. He is a Principal Investigator of the National Centre for Photovoltaic Research and Education and the National Centre of Excellence in Technology for Internal Security at IIT Bombay. His research interests include power electronic converters, motors for electric vehicles, and power electronic interfaces for non-conventional energy sources. Prof. Fernandes is a Senior Member of IEEE and serves as an Associate Editor for IEEE Transactions on Power Electronics."
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Keynote Speakers" />

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
            Keynote Speakers
          </h1>
        </div>

        {/* Speakers List */}
        <div className="flex flex-wrap -mx-4 relative z-10">
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

export default KeynoteSpeakers;

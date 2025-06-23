import React from "react";
import Corousel from "../components/Corousel";

function TutorialSpeakers() {
  const speakers = [
    {
      name: "Abhinav Arya",
      image: "/Abhinav_Arya.jpg",
      title: "Assistant Professor, IIT Bhubaneswar, India",
      bio: `Dr. Abhinav Arya is an Assistant Professor in the Department of Electrical Engineering at IIT Bhubaneswar. He received his M.Tech. and Ph.D. in Electrical Engineering from IIT Kanpur, where he was awarded the "IEEE/PEDES'96 Award" for outstanding performance and later the Best Thesis Award by the Instrument Society of India (ISOI). He has worked at Mahindra Research Valley on hybrid electric vehicles and as a Post-Doctoral Fellow at IIT Bombay, contributing to industrial EV power converter projects. His research focuses on reliable power electronics for electric two-/three-wheelers, WBG-based converters, and condition monitoring in EV systems.`,
    },
    {
      name: "Aravind H S",
      image: "/Aravind.jpeg",
      title: "Director, R&D, Schneider Electric, India",
      bio: `Aravind H S is the Director of R&D at Schneider Electric, India, with over 25 years of experience in electronics and power engineering. He has held key positions at companies like Honeywell and Enphase, and brings rich experience in leading research and development of power electronic systems.`,
    },
    {
      name: "Gourahari Nayak",
      image: "/Gourahari_Nayak.jpeg",
      title: "Senior Design Engineer, Schneider Electric, Bangalore",
      bio: `Gourahari Nayak is currently working as a Senior Design Engineer at Schneider Electric, Bangalore, since 2023. He holds a Masters from NIT Warangal and a PhD from IIST. His research interests include modelling and control of Solid State Transformers (SST) and Modular Dual Active Bridge (DAB) converter configurations.`,
    },
    {
      name: "Mattia Ricco",
      image: "/Mattia_Ricco.jpeg",
      title: "Associate Professor, University of Bologna,  Italy",
      bio: `Mattia Ricco received his Master’s degree (cum laude) in Electronic Engineering from the University of Salerno in 2011 and a PhD double degree in Electrical and Electronic Engineering from the University of Cergy-Pontoise and the University of Salerno in 2015. From 2015 to 2018, he was a Postdoctoral Research Fellow at Aalborg University, Denmark. Since 2021, he has been an Associate Professor at the University of Bologna. His research interests include modular multilevel converters, battery management systems, EV chargers, FPGA-based controllers, and reliability for power electronics. He is an Editor for IET Power Electronics and an Associate Editor for IEEE Transactions on Industrial Electronics.`,
    },
    {
      name: "Oleksandr Husev",
      image: "/Oleksandr_Husev.jpeg",
      title: "Associate Professor, Gdansk University of Technology, Poland",
      bio: `Oleksandr Husev received his B.Sc. and M.Sc. degrees in Industrial Electronics from Chernihiv State Technological University, Ukraine. He completed his PhD at the Institute of Electrodynamics, National Academy of Science of Ukraine in 2012. From 2012 to 2024, he was a Senior Researcher at Tallinn University of Technology and an Associate Professor at Chernihiv National University of Technology. Since 2025, he has been an Associate Professor and Research Group Leader at Gdansk University of Technology, Poland. With over 200 publications and several patents, he is recognized as the Best Young Scientist in Taltech and his home university in Ukraine. He received the Estonian National Research Award in Technical Sciences in 2024. His research focuses on Power Electronics systems, converter topologies, and control systems.`,
    },
    {
      name: "Riccardo Mandrioli",
      image: "/Riccardo_Mandrioli.jpeg",
      title: "Tenure Track Assistant Professor, University of Bologna,  Italy",
      bio: `Riccardo Mandrioli received his M.Sc. degree (cum laude) in Electrical Engineering in 2019 and his PhD (Hons.) in Biomedical, Electrical, and System Engineering in 2023 from the University of Bologna, Italy. He is currently a Tenure Track Assistant Professor at the University of Bologna. He has been a Postdoctoral Research Fellow, Adjunct Professor, and Teaching Assistant since 2017. In 2022, he was a Visiting Scientist at Kiel University, Germany. He received the IEEE IES – Italy Section Chapter 2024 PhD Thesis Award and multiple IEEE conference awards. His research interests include EV chargers, photovoltaic systems, power electronic converters, and harmonic pollution. He is an Associate Editor for IEEE Access and serves on editorial boards of multiple journals.`,
    },
    {
      name: "Sandeep Anand",
      image: "/Sandeep_Anand.png",
      title: "Professor, IIT Bombay, India",
      bio: "Prof. Sandeep Anand is a Full Professor in the Department of Electrical Engineering at IIT Bombay, India. Before this, he was at IIT Kanpur from 2013 to 2020. He was also a visiting scholar at Washington State University, Pullman, US, and Queen's University, Kingston, Canada, during Summer 2018 and Winter 2018, respectively. During 2012-13, he worked at Cosmic Circuits Pvt. Ltd., Bangalore, on new product development for solar PV systems. From 2007 to 2008, he worked at Emerson Network Power India (now Vertiv Co), Mumbai, on the development of digital controllers for medium-power online UPS systems. Prof. Anand received his Ph.D. and B.Tech. degrees in Electrical Engineering from IIT Bombay in 2013 and 2007, respectively. His research interests include electric vehicle drive trains and chargers, wide bandgap device-based (GaN and SiC) power converters, circuits for interfacing alternative energy sources (solar PV, batteries, fuel cells), and the reliability of power electronic circuits."
    },
    {
      name: "Shan S",
      image: "/Shan_S.png",
      title: "Senior Principal Technical Expert, Schneider Electric, Bangalore",
      bio: `Shan is currently working as a Senior Principal Technical Expert at Schneider Electric, Bangalore. He has a Masters and PhD from IISc. He has around 15 years of experience in power electronics and has worked in companies like GE Research and Schneider Electric. His expertise lies in R&D of power converters for grid applications and UPS.`,
    }
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
            Tutorial Speakers
          </h1>
        </div>

        {/* Speakers List */}
        <div className="flex flex-wrap -mx-4 relative z-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-10">
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
                {speaker.image && <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />}
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

export default TutorialSpeakers;

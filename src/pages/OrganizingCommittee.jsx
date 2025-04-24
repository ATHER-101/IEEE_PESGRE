import React from "react";
import Corousel from "../components/Corousel";

function OrganizingCommittee() {
  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Conference Organizing Committee" />

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
            Conference Organizing Committee
          </h1>
        </div>

        {/* General Co-Chairs */}
        <div className="text-center mb-8">
          <div className="text-xl text-[#168BEE] font-bold">
            General Co-Chairs
          </div>
          <div className="text-lg">
            Satish Naik Banavath, Indian Institute of Technology Dharwad,
            Karnataka, India
            <br />
            Dmitri Vinnikov, Tallinn University of Technology, Estonia
            <br />
            Sheldon Williamson, Ontario Tech University, Canada
          </div>
        </div>

        
        {/* Two-Column Layout */}
         <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Patron
              </h2>
              <p>Venkappayya R Desai, Director, IIT DHARWAD</p>
              
            </div>
        
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Honorary Chair
              </h2>
              <p>Andy Knight, President, IEEE IAS</p>
              <p>Brad Lehman, President, IEEE PELS</p>
              <p>Milos Manic, President, IEEE IES</p>
              <p>Shay Bahramirad, President, IEEE PES</p>
              <p>Muhammed Kasim S, Chair, IEEE Kerala Section</p>
              <p>Vasanthi V, Chair IA/IE/PELS Jt. Chapter Kerala Section</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Technical Program Chairs
              </h2>
              <p>Abhijit Kshirsagar, IIT Dharwad, India</p>
              <p>Andrii Chub, Tallinn University of Technology, Estonia</p>
              <p>Rajendra Singh, Clemson University, Clemson USA</p>
              <p>Bijuna Kunju K, TKMCE, Kollam, India</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Special Session Chairs
              </h2>
              <p>Deepak Ronanki, IIT Madras, India</p>
              <p>Sertac Bayhan, Hamad Bin Khalifa University, Qatar</p>
              <p>Sairaj Dhople, University of Minnesota, USA</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Publication Chairs
              </h2>
              <p>Srinivas Bhaskar Karanki, IIT Bhubaneswar, India</p>
              <p>Amarkumar Ayodhyasingh Kushwaha, IIT Dharwad, India</p>
              <p>
                Jaison Mathew, Government Engineering College Thrissur, Kerala,
                India
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Publicity Chairs
              </h2>
              <p>Animesh Kumar Sahoo, IIT Dharwad, India</p>
              <p>Naga Brahmendra, IIT Palakad, India</p>
              <p>Biju K, APJ Abdul Kalam Technological University, Kerala, India</p>
              <p>Kalpana R, NIT Karnataka, India</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Finance Chair
              </h2>
              <p>Satish Naik Banavath, IIT Dharwad, India</p>
              <p>Prathyasa Bhui, IIT Dharwad, India</p>
              <p>Sabiq P V, Treasurer, IEEE Kerala Section, India</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Student and Young Professionals Chairs
              </h2>
              <p>
                Edivan Laercio Carvalho da Silva, Tallinn University of
                Technology, Estonia
              </p>
              <p>Filipe Pinarello Scalcon, University of Calgary, Canada</p>
              <p>Sai Ram Boggavarapu, IIT Dharwad, India</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                International Advisory Board
              </h2>
              <p>S C Srivasthava, IIT Kanpur, India</p>
              <p>Amit Kumar Gupta, Rolls Royce, Singapore</p>
              <p>Bhim Singh, IIT Delhi, India</p>
              <p>C. Chakraborty, Indian Inst. of Technology Kharagpur, India</p>
              <p>Chun Che Fung, Director, IEEE R10</p>
              <p>Drazen Dujic, EPFL, Switzerland</p>
              <p>Enrique Romero Cadaval, University of Extremadura, Spain</p>
              <p>Frede Blaabjerg, Aalborg University</p>
              <p>G. Bhuvaneswari, Mahindra University, India</p>
              <p>Giovanni De Carne, KIT, Germany</p>
              <p>Gopakumar K, IISc Bangalore, India</p>
              <p>Holtz, University of Wuppertal, Germany</p>
              <p>J. Rabkowski, Warsaw University of Technology, Poland</p>
              <p>Johann W. Kolar, ETH Zurich, Zurich, Switzerland</p>
              <p>Kaushik Rajashekara, University of Houston, Texas, USA</p>
              <p>L Umanand, IISc Bangalore, India</p>
              <p>Mariusz Malinowski, Warsaw University of Technology, Poland</p>
              <p>Pragasen Pillai, Concordia University, Canada</p>
              <p>Prasad Enjeti, Texas A&M University, USA</p>
              <p>S S Murthy, BoG Member, IIT Dharwad</p>
              <p>Subba Reddy B, IISc Bangalore</p>
              <p>S. Norrga, KTH Royal Institute of Technology, Sweden</p>
              <p>Sameer S M, Secretary, IEEE R10</p>
              <p>
                Samir Kouro, Universidad Tecnica Federico Santa Maria
                Valparaiso, Chile
              </p>
              <p>Sanjib Panda, NUS Singapore</p>
              <p>Suresh Nair, Immediate Past Chair, IEEE India Council</p>
              <p>Vivek Agarwal, IIT Bombay, India</p>
              <p>V. Fernão Pires, Polytechnic Institute of Setubal, Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommittee;

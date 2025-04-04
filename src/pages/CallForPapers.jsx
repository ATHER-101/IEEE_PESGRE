import React from "react";
import Corousel from "../components/Corousel";
import { Link } from "react-router-dom";

function CallForPapers() {
  const openPDF = () => {
    window.open("/PESGRE-CFP-2025-final.pdf", "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Call For Papers" />

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
            Call For Papers
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Overview
              </h2>
              <p>
                PESGRE 2025 is a biennial conference organized by a Team of
                Faculty from IIT Dharwad. The conference is planned to be
                co-sponsored by IEEE Industry Applications Society, IEEE Kerala
                section, and IEEE IA/IE/PEL Jt. Chapter Kerala. The conference
                is planned to be technically co-sponsored by the IEEE Power
                Electronics Society, IEEE Industrial Electronics Society, IEEE
                Industry Applications Society, and IEEE Power& Energy Society.
                The theme of the conference is “Power Electronics and Renewable
                Energy for Sustainable Development” and will be held from 18-21
                December 2025 at IIT Dharwad, Dharwad, Karnataka, India.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-[90%]">
              <div className="flex justify-between items-center bg-white rounded-md border p-4 w-full">
                <p className="text-lg">Download Call for Papers</p>
                <button
                  onClick={openPDF}
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
            <div className="relative z-10 mt-5  w-full md:w-[90%]">
              <img
                className="shadow-lg mb-6  w-full"
                src="/PESGRE-CFP-2025-final.png"
                alt="CallForPapers"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Paper Submission
              </h2>
              <ul className="list-disc list-inside">
                <li>All submissions must be written in English. All papers must be original unpublished work.</li>
                <li>All papers must be submitted electronically in PDF format by the deadline.</li>
                <li>The maximum length for full papers is 6 pages, including all text, tables, figures, and references. All   authors are encouraged to use as much of the allowed space to effectively explain their work.</li>
                <li>The conference proceedings will be submitted to the <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">IEEE Xplore Digital Library®.</a></li>
                <li>Authors presenting papers at the conference at the PESGRE 2025 conference are eligible to submit the revised versions as post-conference papers for further review and possible publication in the IEEE-IAS Transactions and Magazine.</li>
                <li>Standard manuscript templates for conference proceedings in LaTex and Word are present at <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">Standard IEEE Templates.</a> </li>
                <li>The deadline for paper submission is 15th June 2025.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Technical Tracks
              </h2>
              <ul className="list-disc list-inside">
                <li>Power Electronic Converters and Control Systems</li>
                <li>Electric Machines, Drives, and Electric Vehicles</li>
                <li>Smart Grid & Microgrid</li>
                <li>
                  Renewable energy Resources, Distributed generation and Grid
                  Interconnection
                </li>
                <li>Energy storage & battery charging technologies</li>
                <li>FACTS, Custom power, Power Quality & EMI</li>
                <li>Wide band gap devices</li>
                <li>Lighting & illumination</li>
                <li>Power electronic education</li>
                <li>Modern Power systems, Energy policies & Standards</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Special Sessions
              </h2>
              <p>
                The conference will include special sessions on highly specialized topic areas, reporting technical trends and breakthroughs within the scope of the conference. Special Sessions are organized at the initiative of one or more individuals, who must adhere to specific procedures published <Link to="/authors/call-for-special-session" className="text-blue-600 underline">here.</Link>
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Student & Young Professional Activities
              </h2>
              <p>
                The S&YP Activities enables engineering students and young
                professionals to present their R&D work in Industrial
                Electronics, and to help them develop networking connections.
                IES S&YP can take part in a competition for the IES-S&YP Paper
                Assistance during submission process. For more details, please
                visit IES electronics channels.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Paper Submission Link
              </h2>
              <p>
                Prospective authors are invited to submit full papers to{" "}
                <a
                  href="https://cmt3.research.microsoft.com/PESGRE2025/Submission/Index"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this link
                </a>
                .
              </p>
              <p>
                Accepted, registered, and presented papers will be IEEE
                copyrighted and published in the conference proceedings. For the
                accepted paper to be included in <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">IEEE Xplore Digital Library®.</a>,
                all of the following requirements must be satisfied:
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>
                  Appropriate publication materials: final paper and transfer of
                  copyright to IEEE must be submitted.
                </li>
                <li>At least one full registration should be paid.</li>
                <li>Papers must be presented at the conference.</li>
              </ol>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;

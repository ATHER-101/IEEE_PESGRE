import React from 'react';
import Corousel from "../components/Corousel";
import { Link } from "react-router-dom";

function CallForSpecialSession() {
  const openPDF = () => {
    window.open("/PESGRE-Call for SS-2025.pdf", "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Call For Special Session" />

      {/* Main Content Section */}
      <div
        className="relative px-8 md:px-24 py-10"
        style={{
          background: "linear-gradient(to right, white, rgba(10, 129, 234, 0.15))",
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
            Call For Special Session
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Proposals
              </h2>
              <ul>
                <li>Special sessions provide the opportunity to focus in detail on emerging topics, which are not present in the list of conference main technical tracks.</li>
                <li>Sessions focused on reporting innovations and breakthroughs in specialised topic areas (within the conference’s scope) will be organised.</li>
                <li>The PESGRE 2025 organizing committee invites professionals in the areas of industrial electronics to propose special sessions (SS)s to be held at PESGRE 2025.</li>
                <li>The deadline for submitting special sessions proposals is 15th May 2025.</li>
              </ul>
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
                src="/PESGRE-Call for SS-2025.png"
                alt="CallForPapers"
              />
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Guidlines
              </h2>
              <p>If you intend to propose and organize a special session, please provide the committee with a proposal (in .DOC, .DOCX, or .ODT format) using the provided template and including the following information:
              </p>
              <ul className="list-disc list-inside">
                <li>Title of the Special Session.</li>
                <li>Brief description of the area of concern (approx. 100 words), with special focus on why this is an interesting and significant topic.</li>
                <li>The name and contact information of not more than 4 special session chairs, who are willing to promote and organize a sufficient number of quality submissions to the special session.
                </li>
                <li>A list of potential authors and their affiliations.</li>
                <li>A list of potential reviewers and their affiliations.</li>
                <li>The Special Sessions proposal template can be found <a href="https://docs.google.com/document/d/1h63R1OjnEBVW82ivNBoR6wLz_6V1shOOg0_bxfrOToU/edit?usp=sharing" className="text-blue-500" target="_blank"
                  rel="noopener noreferrer">here</a>, and submissions can be made <a href="https://forms.gle/WDmpw9AJqsFzdwPaA" className="text-blue-500" target="_blank"
                    rel="noopener noreferrer">here</a>.</li>
                <li>Please send your proposal in .DOC, .DOCX, or .ODT format to pesgre2025@iitdh.ac.in. Proposals must be sent before the deadline.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Special Session Organisation
              </h2>
              <p className='pb-2'>Once approved, the Organizers will publicize the Special Session among researchers and practitioners in the field and attract a sufficient number of papers. Papers submitted to special sessions will undergo the same review process as regular papers. The special session organizers of the respective special session are responsible for organizing the review process, assuring at least three reviews per paper. This includes selection of reviewers from their peers.</p>
              <ul className="list-disc list-inside">
                <li><span className='font-bold mr-1'>Benefits:</span>
                  At least one organizer of the successful Special Sessions is expected to register for and attend the conference, as well as chair of the corresponding sessions. One complimentary full registration will be provided to successful Special Sessions for every 8 papers not authored by any of the organizers.
                </li>
                <li><span className='font-bold mr-1'>Conflict of Interest:</span>
                  Before starting the review process, SS organizers must explicitly declare papers which present a conflict of interest for them. A conflict of interest arises where the judgement of a paper quality can be influenced by the organizers being authors or knowing some of the authors. To ensure independent reviews, this conflict must be marked as such in the submission system and the SS Co-Chairs notified so that they can arrange the review process.
                </li>
                <li><span className='font-bold mr-1'>Restrictions:</span>
                  During the review process, Special Session Organizers must take into account that: (1) An individual cannot be (co-) author of more than two papers submitted to the same Special Session. (2) Papers from organizers cannot exceed 60% of the contents of the Special Session.
                </li>
                <li><span className='font-bold mr-1'>Session Chairs:</span>
                  When a SS is finally accepted by the conference, SS organizers will serve as Session chairs in the conference. In some extenuated circumstance, Technical Program chairs and Conference General Chairs might take up the full control of appointing the Session Chairs, should the SS organizers be unable to participate in the conference.

                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForSpecialSession;

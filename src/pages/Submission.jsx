import React from 'react'
import Corousel from "../components/Corousel"

function Submission() {
  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Submission" />

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
            Submission
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Initial Submission
              </h2>
              <p>
                A paper can be submitted to one of the technical tracks and special sessions. Please, make sure you have correctly selected the most suitable track or special session in the submission system. All papers will be reviewed by at least three independent reviewers. We invite you to submit the initial version of your full paper using the following link:
              </p>
            </div>

            <div className="relative z-10 w-full md:w-[90%] mb-8">
              <div className="flex justify-between items-center bg-white rounded-md border p-4 w-full">
                <p className="text-lg">Papers Submission Link</p>
                <a
                  href="https://cmt3.research.microsoft.com/PESGRE2025/Submission/Index"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Open Link
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Paper Submission Guidelines
              </h2>
              <ul className="list-disc list-inside">
                <li>All submissions must be written in English. All papers must be original unpublished work.
                </li>
                <li>All papers must be submitted electronically in PDF format by the deadline.
                </li>
                <li>The maximum length for full papers is 6 pages, including all text, tables, figures, and references. All authors are encouraged to use as much of the allowed space to effectively explain their work.
                </li>
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
                Authors’ Affiliation
              </h2>
              <p>
                Do not place the authors’ affiliation at the end of the first page of the document. This is a special space only for transactions papers, but not for conference papers. Move this data below the authors’ names, under the title of the paper.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Acknowledgment
              </h2>
              <p>
                Do not put the acknowledgment at the end of the first page of the document. This is a special space only for transactions papers, but not for conference papers. Move your acknowledgment notice near the end of the last page of the document, before references.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Biographies
              </h2>
              <p>
                No biographies nor photos of authors are allowed in conference papers. This is only for transaction papers.
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                From your document to PDF
              </h2>
              <p>
                IEEE has a clear and (almost) complete technical definition of the allowed PDF characteristics for conferences. The latest version can be downloaded from <a href="https://www.ieee.org/publications/services/services-resources.html" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">IEEE Publishing Technology Resources page.</a>
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Embedding Typographic Fonts
              </h2>
              <p className='pb-3'>
                IEEE asks for embedded typographic fonts on each PDF file. And this is one of the most frequent mistakes. The pdf file must include (embed) the fonts needed to be shown on screen and printed.
              </p>
              <p>
                If the fonts are not embedded when generating the PDF, it is usually a configuration issue of the software that creates the pdf file. It is not a word processor problem (Microsoft Word, LibreOffice Writer, etc…) It is just a misconfiguration of the PDF creator (Adobe Distiller, Primo PDF, etc…) Please take a look at the user manual and the configuration menus. The solution is often a few clicks away. Just configure your program to embed all typographic fonts.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Paper Submission Guidelines
              </h2>
              <ul className="list-disc list-inside">
                <li>The guidelines for authors of accepted manuscripts can be viewed <a href="https://docs.google.com/document/d/1R_GRd8wJT1MmypM-NC2fTbGBN0KdIaOHGZqsuLTjH-0/edit?usp=sharing" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">here.</a>
                </li>
                <li>The corresponding author must submit the final version of the manuscript before the submission deadline.
                </li>
                <li>All manuscripts should follow the paper submission guidelines.
                </li>
                <li>The final version of your manuscript must not be significantly different from the accepted version. IEEE PESGRE 2025 conference committee will be using the CrossCheck automated screening system to verify the originality of papers. Papers that violate IEEE’s publication policy and guidelines may be rejected, even if they have been accepted in the review process. Disciplinary action may also be taken by IEEE if the violation is deemed severe.
                </li>
                <li>The final version of all manuscripts must be in PDF format. IEEE maintains strict formatting standards for all manuscripts published in the IEEE Xplore® Digital Library. Authors must use the IEEE PDFeXpress® site located <a href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F#" className="text-blue-600 underline" target="_blank"
                  rel="noopener noreferrer">here</a> to convert manuscript files to the required format. Please use the conference ID (To be added) to create a user account for accessing the IEEE PDF eXpress system.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Submission;

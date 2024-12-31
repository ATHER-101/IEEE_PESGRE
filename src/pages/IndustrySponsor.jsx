import React from 'react'

function IndustrySponsor() {
  const openPDF = () => {
    window.open('/PESGRE-CFP-2025-final.pdf', '_blank'); // Opens the PDF in a new tab
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[40vh] md:h-auto object-cover"
          src="/tmp1.jpg"
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="absolute top-[200px] md:top-[280px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6vw]">
        <h1
          className="justify-center text-center text-white"
          style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 800 }}
        >
          Industry Sponsor
        </h1>
      </div>

      <div className="text-3xl text-center m-5 mb-5 uppercase">
        Industry Sponsor
      </div>

      <div className="flex items-center justify-center m-3">
        <div className="flex justify-between items-center bg-white rounded-sm border p-4 w-full md:w-1/2">
          <p className="text-lg">Download Sponsorship Brochure</p>
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
      <img
        className="w-full md:w-1/2 px-3 my-7 mx-auto object-fill"
        src="PESGRE-CFP-2025-Sponsorship-only.png"
        alt="Sponsorship Brochure"
      />
    </div>
  )
}

export default IndustrySponsor

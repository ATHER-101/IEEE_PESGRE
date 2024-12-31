import React from 'react'

function CallForPapers() {
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
          Call For Papers
        </h1>
      </div>

      <div className="text-3xl text-center m-5 uppercase">
        Call For Papers
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-between items-center bg-white rounded-sm border p-4 w-1/2">
          <p className="text-lg">Download  Call for Papers</p>
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

      {/* text */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Overview</h2>
          <p>
            PESGRE 2025 is a biennial conference organized by a Team of Faculty from IIT Dharwad. The conference is planned to be co-sponsored by IEEE Industry Applications Society, IEEE Kerala section, and IEEE IA/IE/PEL Jt. Chapter Kerala. The conference is planned to be technically co-sponsored by the IEEE Power Electronics Society, IEEE Industrial Electronics Society, IEEE Industry Applications Society and IEEE Power& Energy Society. The theme of the conference is “Power Electronics and Renewable Energy for Sustainable Development” and will be held from 18-21 December 2025 at IIT Dharwad, Dharwad, Karnataka, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Paper Submission</h2>
          <p>
            Prospective authors are invited to electronically submit full papers in English, 6 pages, in pdf format
            following instructions on the website. The conference proceedings will be submitted to the IEEE Xplore
            Digital Library®.
          </p>
          <p>
            The papers presented at the PESGRE 2025 conference are eligible to submit the revised versions as post-conference papers for further review and possible publication in the IEEE-IAS
            Transactions and Magazine (Yet to get the approval from IEEE IAS).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Technical Tracks</h2>
          <ul className="list-disc list-inside">
            <li>Power Electronic Converters and Control Systems</li>
            <li>Electric Drives and Electric Vehicles</li>
            <li>Smart Grid & Microgrid</li>
            <li>Renewable energy Resources, Distributed generation and Grid Interconnection</li>
            <li>Energy storage & battery charging technologies</li>
            <li>FACTS, Custom power, Power Quality & EMI</li>
            <li>Wide band gap devices</li>
            <li>Lighting & illumination</li>
            <li>Power electronic education</li>
            <li>Modern Power systems, Energy policies & Standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Special Sessions</h2>
          <p>
            The conference will include special sessions on highly specialized topic areas, reporting technical trends
            and breakthroughs within the scope of the conference. Special Sessions are organized at the initiative of
            one or more individuals, who must adhere to specific procedures published on the conference website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Student & Young Professional Activities</h2>
          <p>
            The S&YP Activities enables engineering students and young professionals to present their R&D work in
            Industrial Electronics, and to help them develop networking connections. IES S&YP can take part in a
            competition for the IES-S&YP Paper Assistance during submission process. For more details, please visit IES
            electronics channels.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Paper Submission Link</h2>
          <p>
            Prospective authors are invited to submit full papers to{' '}
            <a
              href="https://pesgre2025.org/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>.
          </p>
          <p>
            Accepted, registered, and presented papers will be IEEE copyrighted and published in the conference
            proceedings. For the accepted paper to be included in IEEE Xplore® Digital Library, all of the following
            requirements must be satisfied:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Appropriate publication materials: final paper and transfer of copyright to IEEE must be submitted.</li>
            <li>At least one full registration should be paid.</li>
            <li>Papers must be presented at the conference.</li>
          </ol>
        </section>
      </div>
      {/* text */}
    </div>
  )
}

export default CallForPapers

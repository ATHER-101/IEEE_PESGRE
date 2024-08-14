import React from 'react'

function CallForPapers() {
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

      {/* text */}
      <div className="text-3xl text-center m-5 uppercase">
      Call For Papers
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Overview</h2>
          <p>
            CPE-POWERENG is a flagship conference of the IEEE Industrial Electronics Society. It is devoted to the
            dissemination of new ideas, research and work in progress within the fields of power electronics, renewable
            energy integration, power generation, transmission and distribution, power systems, electro-mechanical energy
            conversion, automation and EMC/EMI issues. The objectives of the conference are to provide high quality
            research and professional interactions between industry and academia for the advancement of science,
            technology and fellowship. The main features of the conference include Invited Talks, Regular Sessions, and
            Special Sessions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Paper Submission</h2>
          <p>
            Prospective authors are invited to electronically submit full papers in English, 4-6 pages, in pdf format
            following instructions on the website. The conference proceedings will be submitted to the IEEE Xplore
            Digital Library®.
          </p>
          <p>
            The top 10% of papers (as per the review score) of CPE-POWERENG conference papers will be invited to submit
            the revised versions as post-conference papers for further review and possible publication in the IEEE-IES
            Journals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Technical Tracks</h2>
          <ul className="list-disc list-inside">
            <li>Power generation, transmission and distribution</li>
            <li>Power electronics and applications</li>
            <li>Smart grids technologies and applications</li>
            <li>Renewable energies</li>
            <li>Energy storage technologies</li>
            <li>Distributed power generation systems</li>
            <li>Communication, security and smart metering</li>
            <li>Electrical machines and adjustable speed drives</li>
            <li>Transport electrification</li>
            <li>Electric mobility</li>
            <li>Energy market</li>
            <li>EMI and EMC issues</li>
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
              href="https://confcomm.ieee-ies.org/app/general/conferences/CPE-POWERENG25/initial-submission"
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

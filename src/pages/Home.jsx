import React from 'react'
import Corousel from "../components/Corousel"
import AnnouncementStrip from "../components/AnnouncementStrip"
import AnnouncementBox from "../components/AnnouncementBox"
import CardList from '../components/CardList'

function Home() {
  return (
    <div>
      <Corousel font='3.5' text="4th International Conference on Power Electronics Smart Grid and Renewable Energy" subtext="December 18-21, 2025 IIT Dharwad, Karnataka, India" />
      <AnnouncementStrip />
      <div className='py-6 px-0 md:px-24 mt-6 flex gap-4'>
        <AnnouncementBox />
        {/* text */}
        <div className='w-full'>
          <div className="rounded-2xl shadow-lg p-3">
            <div className="text-3xl text-center text-blue-600">Important Information</div>
            <div className="mx-8 md:mx-10 mt-4 text-lg leading-relaxed">
              PESGRE 2025 is a biennial conference organized by a Team of Faculty from IIT Dharwad. The conference is planned to be co-sponsored by IEEE Industry Applications Society, IEEE Kerala section, and IEEE IA/IE/PEL Jt. Chapter Kerala. The conference is planned to be technically co-sponsored by the IEEE Power Electronics Society, IEEE Industrial Electronics Society, IEEE Industry Applications Society and IEEE Power& Energy Society. The theme of the conference is “Power Electronics and Renewable Energy for Sustainable Development” and will be held from 18-21 December 2025 at IIT Dharwad, Dharwad, Karnataka, India.
            </div>
          </div>

          <div className="rounded-2xl shadow-lg p-3 py-7">
            <div className="text-3xl text-center text-blue-600">Important Dates</div>
            <div className="mx-8 md:mx-10 mt-4 mb-4 text-lg leading-relaxed">
              <p>Submission Open: 15th April 2025</p>
              <p>Paper Submission Deadline: 15th June 2025</p>
              <p>Call for Special Sessions: 15th April 2025</p>
              <p>Deadline for Special Session Proposals: 15th May 2025</p>
              <p>Notification of Paper Acceptance: 15th August 2025</p>
              <p>Final Camera-ready Paper: 15th September 2025</p>
            </div>
          </div>
        </div>
        {/* text */}
      </div>
      <CardList />
    </div>
  )
}

export default Home

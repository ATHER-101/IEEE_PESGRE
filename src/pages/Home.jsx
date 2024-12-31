import React from 'react'
import Corousel from "../components/Corousel"
import AnnouncementStrip from "../components/AnnouncementStrip"
import AnnouncementBox from "../components/AnnouncementBox"
import CardList from '../components/CardList'

function Home() {
  return (
    <div>
      <Corousel size="small" text="4th International Conference on Power Electronics Smart Grid and Renewable Energy" subtext="December 18-21, 2025 IIT Dharwad, Karnataka, India" />
      <AnnouncementStrip />
      <div className='py-6 px-0 md:px-24 m-3 md:flex gap-4'>
        <div className='hidden md:block w-[70%]'><AnnouncementBox size='70' /></div>
        {/* text */}
        <div className='w-full'>
          <div className="rounded-2xl shadow-lg p-3">
            <div className="text-3xl text-center text-blue-600">Important Information</div>
            <div className="mx-8 md:mx-10 mt-4 text-lg leading-relaxed">
IEEE PESGRE is the biennial flagship Conference of IEEE Kerala Section, IEEE IA/IE/PELS Joint Chapter Kerala and IEEE Industry Applications Society. IEEE Industry Applications Society, IEEE Kerala Section, and IA/IE/PELS Jt. Chapter Kerala are financial co-sponsors. The technical co-sponsors of the conference includes IEEE Power Electronics Society, IEEE Industrial Electronics Society, and IEEE Power & Energy Society. The theme of the conference is “Power Electronics and Renewable Energy for Sustainable Development” and will be held from 18-21 December 2025 at Indian Institute of Technology Dharwad, Dharwad, Hubli, Karnataka, India.            </div>
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
        <div className='w-full md:hidden'><AnnouncementBox size='100' /></div>
      </div>
      <CardList />
    </div>
  )
}

export default Home

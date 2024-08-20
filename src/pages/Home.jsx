import React from 'react'
import Corousel from "../components/Corousel"
import AnnouncementStrip from "../components/AnnouncementStrip"
import CardList from '../components/CardList'

function Home() {
  return (
    <div>
      <Corousel />
      <AnnouncementStrip />
      <div className="py-6 px-0 md:px-24">
        <div className="text-3xl mt-6 text-center text-blue-600">Important Information</div>
        <div className="mx-8 md:mx-10 mt-4 text-lg leading-relaxed">
          PESGRE 2025 is a biennial conference organized by IA/IE/PEL Jt. Chapter Kerala. The conference is co-sponsored by IEEE Industry Applications Society, IEEE Kerala section, and IEEE IA/IE/PEL Jt. Chapter Kerala. The conference is technically co-sponsored by the IEEE Power Electronics Society, IEEE Industrial Electronics Society, IEEE Industry Applications Society and IEEE Power & Energy Society. The theme of the conference is “Power Electronics and Renewable Energy for Sustainable Development” and will be held from 18-21 December 2025 at IIT Dharwad, Dharwad, Karnataka, India.
        </div>
      </div>

      <div className="py-6 px-0 md:px-24">
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

      <CardList/>
    </div>
  )
}

export default Home

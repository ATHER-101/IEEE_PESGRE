import React from 'react'
import Corousel from "../components/Corousel"
import AnnouncementStrip from "../components/AnnouncementStrip"

function Home() {
    return (
        <div>
            <Corousel />
            <AnnouncementStrip />
            <div className="p-5">
        <div className="text-4xl mt-5 text-center text-red-500" style={{fontWeight: 500}}><u>Important Info</u></div>
        <div className="mx-[12%] mt-5 mb-20"> PESGRE 2025 is a biennial conference organized by IA/IE/PEL Jt. Chapter Kerala. The conference is co-sponsored by IEEE Industry Applications Society, IEEE Kerala section, and IEEE IA/IE/PEL Jt. Chapter Kerala. The conference is technically co-sponsored by the IEEE Power Electronics Society, IEEE Industrial Electronics Society, IEEE Industry Applications Society and IEEE Power& Energy Society. The theme of the conference is “Power Electronics and Renewable Energy for Sustainable Development” and will be held from 18-21 December 2025 at IIT Dharwad, Dharwad, Karnataka, India.</div>
      </div>
     <div className="p-5">
        <div className="text-4xl mt-5 text-center text-red-500" style={{fontWeight: 500}}><u>Important Dates</u></div>
        <div className="mx-[12%] mt-5 mb-20">  Submission Open: 15th April 2025  </div>
      </div>
    <div className="w-full bg-gray-200 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center mb-5 mt-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 1</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 2</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 3</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 4</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis</p>
        </div>

      </div>
    </div>
        </div>
    )
}

export default Home

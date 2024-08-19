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

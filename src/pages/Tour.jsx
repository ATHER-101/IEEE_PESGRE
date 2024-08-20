import React from 'react'

function Tour() {
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
          Tour
        </h1>
      </div>

      <div className="text-3xl text-center m-5 mb-20 uppercase">
        Tour
      </div>
    </div>
  )
}

export default Tour

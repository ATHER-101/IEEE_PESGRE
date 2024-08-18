import React from 'react'

function StudentsAndYPs() {
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
          Students & YPs
        </h1>
      </div>

      <div className="text-3xl text-center m-5 mb-20 uppercase">
        Students & YPs
      <h2>
        The Student & Young Professionals (S&YP) Activity Committee of the Industrial Electronics Society (IES) is continuously implementing a paper assistance program (IES-SYPA)
        – a competition-based financial support for the IES S&YP members to attend IES Majority Sponsored Conferences.
        Moreover, during the conference, we will organize a SYP forum – a special event aimed at helping students and young professional members 
        stay connected in the IES community. SYP forum will provide a unique opportunity to ask questions and get professional advice directly from IEEE Fellows,
        the IES President, AdCom members, and experienced colleagues. The SYP forum program will include a series of keynote speeches by the leaders of academia and industry, a 3M video session,
        and an open discussion between the participants. We encourage all conference participants to join!
              
      This event includes tutorials from academia and industry, a <b></>3-min Video Session</b>, and an open discussion forum.
      </h2>           
         
      </div>
    </div>
  )
}

export default StudentsAndYPs

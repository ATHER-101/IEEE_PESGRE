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
      <h5>
        <p>The Student & Young Professionals (S&YP) Activity Committee of the Industrial Electronics Society (IES) is continuously implementing a paper assistance program (IES-SYPA)
        – a competition-based financial support for the IES S&YP members to attend IES Majority Sponsored Conferences.
        Moreover, during the conference, we will organize a SYP forum – a special event aimed at helping students and young professional members 
        stay connected in the IES community. SYP forum will provide a unique opportunity to ask questions and get professional advice directly from IEEE Fellows,
        the IES President, AdCom members, and experienced colleagues. The SYP forum program will include a series of keynote speeches by the leaders of academia and industry, a 3M video session,
        and an open discussion between the participants. We encourage all conference participants to join!
              
      This event includes tutorials from academia and industry, a <b>3-min Video Session</b>, and an open discussion forum. </p>
     </h5> 
   <h1> <b>HOW TO APPLY</b></h1>
   <h3> You MUST be an IEEE member. Whether Student, Graduate Student or Young Professional (YP). You are considered YP up to 15 years after your graduation.
   <p> You MUST be a member of the IEEE Industrial Electronics Society.</p>
   <p> You MUST have a paper accepted at the conference as an author or co-author and be the person to present it at the conference.</p>
  <p>  You MUST reside outside the city in which the conference is held.</p>
  <p>  Your paper should be fully registered.</p>
  <p>  You SHOULD NOT have received the SYPA in the last 2 years.</p>
  <p>  In the submission system, if you toggled the correct membership (Student or YP), the “IEEE-IES SYPA” tab will appear once the paper is accepted. Click on that and submit the required information/document/video.</p>
  <p>  You MUST prepare a video and send it according to the following rules:</p>
  <p>  The length MUST be 3 minutes. Even 1 second more or less is not tolerated.</p>
 <p>   Avoid using PowerPoint slides for most of the video. Only up to 30% of the video (1min) can be from the presentation slides. Be creative and generate interactive content! Watch more videos to get ideas.</p>
 <p>   Some seconds MUST be devoted to the paper information such as title, authors, affiliations, your university, company, research team, etc.</p>
  <p>  At least the last 5 seconds MUST contain the Acknowledgment to IEEE IES for the IES-SYPA!</p>
  <p>  The video MUST be shared through sharing websites like Dropbox, Google Drive, OneDrive, etc. Make sure to provide the link without requiring permission (MUST be viewable to anyone who has the link)</p>
      
      </h3>           
        
      </div>
    </div>
    )
}

export default StudentsAndYPs

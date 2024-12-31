import React from 'react';
import Corousel from "../components/Corousel"

function StudentsAndYPs() {
  return (
    <div>
      <Corousel text="Students & YPs"/>

      <div className="text-3xl text-center m-5 uppercase">
        Students & YPs
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Overview</h2>
          <p className="mb-5">
            The Student & Young Professionals (S&YP) Activity Committee of the Industrial Electronics Society (IES) is continuously implementing a paper assistance program (IES-SYPA) – a competition-based financial support for the IES S&YP members to attend IES Majority Sponsored Conferences. Moreover, during the conference, we will organize a SYP forum – a special event aimed at helping students and young professional members stay connected in the IES community. SYP forum will provide a unique opportunity to ask questions and get professional advice directly from IEEE Fellows, the IES President, AdCom members, and experienced colleagues. The SYP forum program will include a series of keynote speeches by the leaders of academia and industry, a 3M video session, and an open discussion between the participants. We encourage all conference participants to join!
          </p>

          <p className="mb-5">
            This event includes tutorials from academia and industry, a <strong>3-min Video Session</strong>, and an open discussion forum.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">How to Apply</h2>
          <ol className="list-decimal list-inside">
            <li>You MUST be an IEEE member, whether Student, Graduate Student, or Young Professional (YP). You are considered YP up to 15 years after your graduation.</li>
            <li>You MUST be a member of the IEEE Industrial Electronics Society.</li>
            <li>You MUST have a paper accepted at the conference as an author or co-author and be the person to present it at the conference.</li>
            <li>You MUST reside outside the city in which the conference is held.</li>
            <li>Your paper should be fully registered.</li>
            <li>You SHOULD NOT have received the SYPA in the last 2 years.</li>
            <li>In the submission system, if you toggled the correct membership (Student or YP), the “IEEE-IES SYPA” tab will appear once the paper is accepted. Click on that and submit the required information/document/video.</li>
            <li>You MUST prepare a video and send it according to the following rules:</li>
            <ol className="list-decimal list-outside ml-10">
              <li>The length MUST be 3 minutes. Even 1 second more or less is not tolerated.</li>
              <li>Avoid using PowerPoint slides for most of the video. Only up to 30% of the video (1 min) can be from the presentation slides. Be creative and generate interactive content! Watch more videos to get ideas.</li>
              <li>Some seconds MUST be devoted to the paper information such as title, authors, affiliations, your university, company, research team, etc.</li>
              <li>At least the last 5 seconds MUST contain the Acknowledgment to IEEE IES for the IES-SYPA!</li>
              <li>The video MUST be shared through sharing websites like Dropbox, Google Drive, OneDrive, etc. Make sure to provide the link without requiring permission (MUST be viewable to anyone who has the link).</li>
            </ol>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default StudentsAndYPs;

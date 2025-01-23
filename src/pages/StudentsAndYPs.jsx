import React from "react";
import Corousel from "../components/Corousel";

function StudentsAndYPs() {
  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Students & YPs" />

      {/* Main Content Section */}
      <div
        className="relative px-8 md:px-24 py-10"
        style={{
          background:
            "linear-gradient(to right, white, rgba(10, 129, 234, 0.15))",
        }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 animate-pulse-grid w-full p-6"
          style={{
            maskImage:
              "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            backgroundImage:
              "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
          }}
        >
          <style>
            {`
              @media (min-width: 1024px) {
                .animate-pulse-grid {
                  background-size: 30px 30px !important;
                }
              }
            `}
          </style>
        </div>
        <div
          className="absolute inset-0 animate-pulse-grid w-full p-6"
          style={{
            maskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            WebkitMaskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 50%)",
            backgroundImage:
              "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
          }}
        >
          <style>
            {`
              @media (min-width: 1024px) {
                .animate-pulse-grid {
                  background-size: 30px 30px !important;
                }
              }
            `}
          </style>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#168BEE] uppercase">
            Students & YPs
          </h1>
        </div>

        {/* Content in Two Columns */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            {/* Overview Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#168BEE] mb-4">Overview</h2>
              <p className="mb-5">
                The Student & Young Professionals (S&YP) Activity Committee of
                the Industrial Electronics Society (IES) is continuously
                implementing a paper assistance program (IES-SYPA) – a
                competition-based financial support for the IES S&YP members to
                attend IES Majority Sponsored Conferences. Moreover, during the
                conference, we will organize a SYP forum – a special event aimed
                at helping students and young professional members stay
                connected in the IES community. SYP forum will provide a unique
                opportunity to ask questions and get professional advice
                directly from IEEE Fellows, the IES President, AdCom members,
                and experienced colleagues.
              </p>
              <p>
                This event includes tutorials from academia and industry, a{" "}
                <strong>3-min Video Session</strong>, and an open discussion
                forum.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            {/* How to Apply Section */}
            <div>
              <h2 className="text-xl font-bold text-[#168BEE] mb-4">
                How to Apply
              </h2>
              <ol className="list-decimal list-inside mb-8">
                <li>
                  You MUST be an IEEE member, whether Student, Graduate Student,
                  or Young Professional (YP). You are considered YP up to 15
                  years after your graduation.
                </li>
                <li>
                  You MUST be a member of the IEEE Industrial Electronics
                  Society.
                </li>
                <li>
                  You MUST have a paper accepted at the conference as an author
                  or co-author and be the person to present it at the
                  conference.
                </li>
                <li>
                  You MUST reside outside the city in which the conference is
                  held.
                </li>
                <li>Your paper should be fully registered.</li>
                <li>You SHOULD NOT have received the SYPA in the last 2 years.</li>
                <li>
                  In the submission system, if you toggled the correct
                  membership (Student or YP), the “IEEE-IES SYPA” tab will
                  appear once the paper is accepted. Click on that and submit
                  the required information/document/video.
                </li>
                <li>
                  You MUST prepare a video and send it according to the
                  following rules:
                  <ol className="list-decimal list-outside ml-10">
                    <li>
                      The length MUST be 3 minutes. Even 1 second more or less
                      is not tolerated.
                    </li>
                    <li>
                      Avoid using PowerPoint slides for most of the video. Only
                      up to 30% of the video (1 min) can be from the
                      presentation slides. Be creative and generate interactive
                      content! Watch more videos to get ideas.
                    </li>
                    <li>
                      Some seconds MUST be devoted to the paper information such
                      as title, authors, affiliations, your university, company,
                      research team, etc.
                    </li>
                    <li>
                      At least the last 5 seconds MUST contain the Acknowledgment
                      to IEEE IES for the IES-SYPA!
                    </li>
                    <li>
                      The video MUST be shared through sharing websites like
                      Dropbox, Google Drive, OneDrive, etc. Make sure to provide
                      the link without requiring permission (MUST be viewable to
                      anyone who has the link).
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsAndYPs;
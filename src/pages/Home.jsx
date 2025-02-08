import React from "react";
import Corousel from "../components/Corousel";
import AnnouncementStrip from "../components/AnnouncementStrip";
import AnnouncementBox from "../components/AnnouncementBox";
import CardList from "../components/CardList";
import SponsorList from "../components/SponsorList";
import Countdown from "../components/Countdown";
import { FaInfoCircle, FaCalendarAlt, FaBullhorn } from "react-icons/fa";

const organisers_cards = [
  {
    src: "/iitdh.png",
    alt: "IITDh logo",
  },
  {
    src: "/IEEE.png",
    alt: "IEEE logo",
  },
  {
    src: "/IEEE-IAS-Logo.png",
    alt: "IEEE IAS logo",
  },
  {
    src: "/IEEEK.png",
    alt: "IEEE Kerala logo",
  },
  {
    src: "/IEEEkjt.png",
    alt: "IEEE Kerala logo",
  },
  {
    src: "/ies-logo.png",
    alt: "IEEE IES logo",
  },
  {
    src: "/PELS-Logo.png",
    alt: "PELS logo",
  },
  {
    src: "/PES-Logo.png",
    alt: "PES logo",
  },
];

const platinum_sponsors_cards = [
  {
    src: "/JSC GROUP LOGO-01.png",
    alt: "JSC GROUP LOGO-01",
  },
];

const bronze_sponsors_cards = [
  {
    src: "/Chargehouse Logo.jpg",
    alt: "Chargehouse Logo",
  },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Corousel
          size="small"
          text="4th IEEE International Conference on Power Electronics Smart Grid and Renewable Energy"
          subtext="December 18-21, 2025 | IIT Dharwad, Hubli, Karnataka, India"
        />
        <div className="relative bottom-0 w-full z-10 overflow-hidden transform -translate-y-2">
          <AnnouncementStrip />
        </div>
      </div>

      {/* Main Content */}
      <div className="py-10 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-gray-100 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(200,200,200,0.1) 1px, transparent 1px), linear-gradient(rgba(200,200,200,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Grid Layout for Important Information, Important Dates, and Announcement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Left Column (Info and Dates stacked on top of each other on desktop) */}
          <div className="md:col-span-2 space-y-6 grid grid-rows-1">
            {/* Important Information */}
            <div className="rounded-2xl shadow-lg bg-gradient-to-r from-white via-blue-50 to-blue-100 p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <FaInfoCircle className="text-blue-600 text-3xl" />
                <h2 className="text-3xl font-bold text-blue-600">
                  Important Information
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                IEEE PESGRE is the biennial flagship Conference of IEEE Kerala
                Section, IEEE IA/IE/PELS Joint Chapter Kerala and IEEE Industry
                Applications Society. IEEE Industry Applications Society, IEEE
                Kerala Section, and IA/IE/PELS Jt. Chapter Kerala are financial
                co-sponsors. The technical co-sponsors of the conference include
                IEEE Power Electronics Society, IEEE Industrial Electronics
                Society, and IEEE Power & Energy Society. The theme of the
                conference is “Power Electronics and Renewable Energy for
                Sustainable Development” and will be held from 18-21 December
                2025 at Indian Institute of Technology Dharwad, Dharwad, Hubli,
                Karnataka, India.
              </p>
              {/* Decorative Overlay */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 1px, transparent 3px)",
                }}
              ></div>
            </div>

            {/* Important Dates */}
            <div className="rounded-2xl shadow-lg bg-gradient-to-r from-white via-blue-50 to-blue-100 p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-blue-700 text-3xl" />
                <h2 className="text-3xl font-bold text-blue-700">
                  Important Dates
                </h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Submission Opens:</strong> 15th April 2025
                </li>
                <li>
                  <strong>Paper Submission Deadline:</strong> 15th June 2025
                </li>
                <li>
                  <strong>Call for Special Sessions:</strong> 15th April 2025
                </li>
                <li>
                  <strong>Deadline for Special Session Proposals:</strong> 15th
                  May 2025
                </li>
                <li>
                  <strong>Notification of Paper Acceptance:</strong> 15th August
                  2025
                </li>
                <li>
                  <strong>Final Camera-ready Paper:</strong> 15th September 2025
                </li>
              </ul>
              {/* Decorative Overlay */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at top right, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0) 60%)",
                }}
              ></div>
            </div>
          </div>

          {/* Right Column (Announcements) */}
          <div className="w-full h-full">
            <div className="rounded-2xl shadow-lg bg-gradient-to-b from-blue-100 to-blue-200 p-6 relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaBullhorn className="text-blue-900 text-3xl" />
                <h2 className="text-3xl font-bold text-blue-900">
                  Announcements
                </h2>
              </div>
              <div className="flex items-center justify-center flex-grow">
                <AnnouncementBox size="70" />
              </div>

              {/* Decorative Overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white p-3 md:p-6 rounded-xl shadow-lg items-center justify-center flex">
        <div className="w-full md:w-2/3 overflow-hidden">
          <video
            className="w-full h-full object-cover shadow-2xl rounded-lg md:rounded-xl"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="bg-gray-200 relative">
        {/* Themed Background with Animation */}
        <div
          className="absolute inset-0 animate-pulse-grid w-full p-6"
          style={{
            maskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            WebkitMaskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
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
        <div className="flex md:flex-row flex-col md:px-[150px]">
          <CardList title="Platinum Sponsor" cards={platinum_sponsors_cards} />
          <CardList title="Bronze Sponsor" cards={bronze_sponsors_cards} />
        </div>
      </div>

      {/* Countdown */}
      <Countdown conferenceDate="18/12/2025" />

      {/* Sponsors Section */}
      <div className="relative bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
        {/* Themed Background with Animation */}
        <div
          className="absolute inset-0 animate-pulse-grid w-full p-6"
          style={{
            maskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            WebkitMaskImage:
              "radial-gradient(circle at top left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            backgroundImage:
              "linear-gradient(#FFFFFF 2px, transparent 2px), linear-gradient(to right, #FFFFFF 2px, transparent 2px)",
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
              "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 40%)",
            backgroundImage:
              "linear-gradient(#FFFFFF 2px, transparent 2px), linear-gradient(to right, #FFFFFF 2px, transparent 2px)",
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
        <SponsorList title="Organisers" cards={organisers_cards} />
      </div>

    </div>
  );
}

export default Home;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Chairs from "./pages/Chairs";
import CallForPapers from "./pages/CallForPapers";
import Submission from "./pages/Submission";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import StudentsAndYPs from "./pages/StudentsAndYPs";
import VisaInfo from "./pages/VisaInfo";
import HotelBooking from "./pages/HotelBooking";
import Tour from "./pages/Tour";
import Food from "./pages/Food";
import DirectionsToConference from "./pages/DirectionsToConference";
import IndustrySponsor from "./pages/IndustrySponsor";
import CallForSpecialSession from "./pages/CallForSpecialSession";
import TutorialSpeakers from "./pages/TutorialSpeakers";
import IESSYPKeynotes from "./pages/IESSYPKeynotes";
import Registration from "./pages/Registration";

const AppRoutes = () => {
  const sponsors_cards = [
    {
      src: "/JSC GROUP LOGO-01.png",
      alt: "JSC GROUP LOGO-01",
      width: 1,
    },
    {
      src: "/pragna_microdesigns.png",
      alt: "PRAGNA Microdesigns Logo",
      width: 1,
    },
    {
      src: "/Tektronix.jpeg",
      alt: "Tektronix Logo",
      width: 1,
    },
    {
      src: "/TestBetterNew.jpeg",
      alt: "Test Better Logo",
      width: 3,
    },
    {
      src: "/KREDL.jpeg",
      alt: "Test Better Logo",
      width: 1,
    },
    {
      src: "/Hioki.jpeg",
      alt: "Hioki Logo",
      width: 1,
    },
    {
      src: "/Chargehouse Logo.jpg",
      alt: "Chargehouse Logo",
      width: 1,
    },
    {
      src: "/typhoonHIL.jpeg",
      alt: "Typhoon HIL Logo",
      width: 1,
    },
    {
      src: "/AmaraRaja.jpeg",
      alt: "Test Better Logo",
      width: 1,
    },
    {
      src: "/IFB.jpeg",
      alt: "Test Better Logo",
      width: 1,
    },
    {
      src: "/ReliamotiveLab.jpeg",
      alt: "ReliamotiveLab Logo",
      width: 2,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home sponsors_cards={sponsors_cards}/>} />

      {/* about */}
      <Route
        path="/about/organizing-committee"
        element={<OrganizingCommittee />}
      />
      <Route path="/about/chairs" element={<Chairs />} />

      {/* authors */}
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route
        path="/authors/call-for-special-session"
        element={<CallForSpecialSession />}
      />
      <Route
        path="/authors/submission"
        element={<Submission />}
      />
      <Route
        path="/authors/registration"
        element={<Registration />}
      />

      {/* program */}
      <Route path="/program/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/program/tutorial-speakers" element={<TutorialSpeakers />} />
      <Route path="/program/ies-syp-keynotes" element={<IESSYPKeynotes />} />

      {/* travel */}
      <Route path="travel/visa-info" element={<VisaInfo />} />
      <Route path="travel/accommodation" element={<HotelBooking />} />
      <Route path="travel/tour" element={<Tour />} />
      <Route path="travel/food" element={<Food />} />
      <Route path="travel/location" element={<DirectionsToConference />} />

      <Route path="/students-yp" element={<StudentsAndYPs />} />
      <Route
        path="/industry-sponsor"
        element={<IndustrySponsor sponsors_cards={sponsors_cards} />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

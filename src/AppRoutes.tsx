import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Chairs from "./pages/Chairs";
import CallForPapers from "./pages/CallForPapers";
import SubmissionRegistration from "./pages/SubmissionRegistration";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* about */}
      <Route
        path="/about/organizing-committee"
        element={<OrganizingCommittee />}
      />
      <Route path="/about/chairs" element={<Chairs />} />

      {/* authors */}
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route path="/authors/call-for-special-session" element={<CallForSpecialSession />} />
      <Route
        path="/authors/submission-registration"
        element={<SubmissionRegistration />}
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
      <Route path="/industry-sponsor" element={<IndustrySponsor />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

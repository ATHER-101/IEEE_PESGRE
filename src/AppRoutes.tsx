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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/about/organizing-committee"
        element={<OrganizingCommittee />}
      />
      <Route path="/about/chairs" element={<Chairs />} />
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route
        path="/authors/submission-registration"
        element={<SubmissionRegistration />}
      />
      <Route path="/program/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/students-yp" element={<StudentsAndYPs />} />
      <Route path="/visa-info" element={<VisaInfo />} />
      <Route path="/hotel-booking" element={<HotelBooking />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/food" element={<Food />} />
      <Route path="/directions-to-conference" element={<DirectionsToConference />} />
      <Route path="/industry-sponsor" element={<IndustrySponsor />} />
    </Routes>
  );
};

export default AppRoutes;

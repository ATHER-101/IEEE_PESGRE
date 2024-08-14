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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about/organizing-committee" element={<OrganizingCommittee />} />
      <Route path="/about/chairs" element={<Chairs />} />
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route path="/authors/submission-registration" element={<SubmissionRegistration />} />
      <Route path="/program/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/students-yp" element={<StudentsAndYPs />} />
    </Routes>
  );
};

export default AppRoutes;

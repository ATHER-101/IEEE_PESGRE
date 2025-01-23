import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div
      id="footer"
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <div className="space-y-2">
            <a
              href="mailto:pesgre2025@iitdh.ac.in"
              className="block text-white hover:text-blue-200 transition duration-300"
            >
              pesgre2025@iitdh.ac.in
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div>
          <div className="mb-2 md:text-right">
            <div>© Copyright - {year} IITDh. All rights reserved.</div>
          </div>
          <div className="md:text-right text-white">
            <p>Designed & Developed by the IITDh Coding Club</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

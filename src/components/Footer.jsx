import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div id="footer" className="bg-gray-800 text-white py-3 px-4 pt-10">
      <div className="max-w-6xl mx-auto">
        {/* <Link to="/">
          <img
            className="max-w-[400px] w-[100%] px-5 fill-current text-white"
            src="/Logo_pesgre1-bgless.png"
            alt="Logo"
          />
        </Link> */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex mb-4 md:mb-0">
            <Link to="/"
              className="cursor-pointer hover:text-blue-600 px-5 py-1"
            >
              Home
            </Link>
            <Link to="/contact"
              className="cursor-pointer hover:text-blue-600 px-5 py-1"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col mb-4 md:mb-0">
            <a
              href="mailto:pesgre2025@iitdh.ac.in"
              className="hover:text-blue-600"
            >
              pesgre2025@iitdh.ac.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <div className="flex items-center">
              <a
                href="https://www.instagram.com/technical.council_iitdh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eaaf7b5b57d23c61a3_Instagram%20White.svg"
                  loading="lazy"
                  alt="White Instagram Icon"
                  className="h-6 w-6" // Adjust size as needed
                />
              </a>
            </div> */}
            <div>© Copyright - {year} IITDh all rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

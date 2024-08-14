import React from "react";

const prefix = "prefix";

const Footer = () => {
  const handleOnClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div id="footer" className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="flex items-center mb-4 md:mb-0">
            <a href="#" className="w-full items-center flex justify-center">
              <div className="bg-gray-300 p-3 w-[20rem] justify-center items-center rounded">
                <img
                  className="max-w-[400px] w-[100%] px-1 py-1"
                  src={`/Logo_PESGRE_1.png`}
                  alt="Logo"
                />
              </div>
            </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <div
              onClick={() => handleOnClick("hero")}
              className="cursor-pointer hover:underline m-5"
            >
              Home
            </div>
            <div
              onClick={() => handleOnClick("eventsId")}
              className="cursor-pointer hover:underline m-5"
            >
              Contact
            </div>
          </div>

          <div className="flex flex-col mb-4 md:mb-0">
            <a
              href="mailto:pro@iitdh.ac.in"
              className="hover:underline"
            >
              pro@iitdh.ac.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
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
            </div>
            <div>© Copyright - {year} IITDh all rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

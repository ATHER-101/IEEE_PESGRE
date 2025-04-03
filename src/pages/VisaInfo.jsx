import React from 'react'
import Corousel from "../components/Corousel"

function VisaInfo() {
  const faqs = [
    {
      question: "Who is eligible for a conference VISA?",
      answer: `To be eligible for a conference visa, you must:
      - Be a foreigner whose sole purpose of visiting India is to attend a conference/seminar/workshop being held in India.
      - Hold a valid passport and a re-entry permit if required by your home country.
      - Not be persona-non-grata to the Government of India.
      - Not be considered an undesirable person.
      - Be a person of assured financial standing.`,
    },
    {
      question: "What is the duration of a conference VISA?",
      answer: `Conference VISAs are issued for the duration of the conference and the travelling time. However, delegates can combine tourism with attending the conference. The maximum validity of a conference visa is 6 months, subject to the usual conditions applicable for granting a tourist VISA.
      
      The process of obtaining a conference VISA is relatively straightforward. However, it is important to follow the instructions carefully and to submit all required documentation. If you have any questions, you should contact the Indian Mission in your home country.`,
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <Corousel text="Visa Information" />

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
            pointerEvents: "none",
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
            pointerEvents: "none",
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
            Visa Information
          </h1>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-xl font-bold mb-3">
                Frequently Asked Questions Relating To Conference VISA
              </h2>
              <p>The following FAQs will give you an understanding of how to apply for & obtain a conference VISA.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[#168BEE] text-lg font-bold mb-3">
                Who is eligible for a conference VISA?
              </h2>
              <p className='pb-2'>To be eligible for a conference visa, you must:
              </p>
              <ul className="list-disc list-inside">
                <li>Be a foreigner whose sole purpose of visiting India is to attend a conference/seminar/workshop being held in India
                </li>
                <li>Hold a valid passport and a re-entry permit if required by your home country.
                </li>
                <li>Not be persona-non-grata to the Government of India.
                </li>
                <li>Not be considered an undesirable person.
                </li>
                <li>Be a person of assured financial standing.
                </li>

              </ul>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-8">
              <h2 className="text-[#168BEE] text-lg font-bold mb-3">
                What is the duration of a conference VISA?
              </h2>
              <p className='pb-2'>Conference VISAS are issued for the duration of the conference and the travelling time. However, delegates can combine tourism with attending the conference. The maximum validity of a conference visa is 6 months, subject to the usual conditions applicable for granting a tourist VISA.
              </p>
              <p className='pb-2'>The process of obtaining a conference VISA is relatively straightforward. However, it is important to follow the instructions carefully and to submit all required documentation. If you have any questions, you should contact the Indian Mission in your home country.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaInfo

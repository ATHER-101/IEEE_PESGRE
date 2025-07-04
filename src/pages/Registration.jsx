import React from 'react'
import Corousel from "../components/Corousel"

function Registration() {
    return (
        <div>
            {/* Carousel Section */}
            <Corousel text="Registration" />

            {/* Main Content Section */}
            <div
                className="relative px-8 md:px-24 py-10"
                style={{
                    background: "linear-gradient(to right, white, rgba(10, 129, 234, 0.15))",
                }}
            >
                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 animate-pulse-grid w-full p-6"
                    style={{
                        maskImage: "radial-gradient(circle at bottom right, rgba(0,0,0,1) 10%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)",
                        WebkitMaskImage: "radial-gradient(circle at bottom right, rgba(0,0,0,1) 10%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)",
                        backgroundImage: "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
                        backgroundSize: "20px 20px",
                        backgroundRepeat: "repeat",
                        pointerEvents: "none",
                    }}
                />
                <div
                    className="absolute inset-0 animate-pulse-grid w-full p-6"
                    style={{
                        maskImage: "radial-gradient(circle at top left, rgba(0,0,0,1) 1%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0) 50%)",
                        WebkitMaskImage: "radial-gradient(circle at top left, rgba(0,0,0,1) 1%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0) 50%)",
                        backgroundImage: "linear-gradient(#52A9D5 2px, transparent 2px), linear-gradient(to right, #52A9D5 2px, transparent 2px)",
                        backgroundSize: "20px 20px",
                        backgroundRepeat: "repeat",
                        pointerEvents: "none",
                    }}
                />

                {/* Section Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-[#168BEE] uppercase">
                        Registration
                    </h1>
                </div>

                {/* Two-Column Layout */}
                <div className="flex flex-wrap -mx-4 text-gray-800">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 px-4 mb-10">

                        <div className='mb-8 z-10'>
                            <h2 className="text-[#168BEE] text-xl font-bold mb-3">Important Notes</h2>
                            <ul className="list-disc list-inside">
                                <li>At least one author of each accepted paper must register at FULL FEE (Academician/
                                    Scientists/ Foreign Authors/ Industry Person) before the deadline for the paper to be
                                    presented in the conference and included in IEEE Xplore.</li>
                                <li>A maximum of one (1) paper may be presented and submitted to IEEE Xplore under a
                                    full registration.</li>
                                <li>A student registration permits the presentation of one (1) paper but does not include
                                    eligibility for submission to IEEE Xplore.</li>
                                <li>The initial manuscripts may contain six pages. Up to two (2) additional pages are
                                    permissible without additional charges in the final version. The maximum number of
                                    pages per manuscript allowed is strictly eight (8).</li>
                                <li>Registration fee is non-refundable.</li>
                            </ul>
                        </div>

                        <div className='mb-8'>
                            <h2 className="text-[#168BEE] text-xl font-bold mb-3">Inclusions</h2>
                            <p><strong>Full Registration:</strong> Includes access to plenary sessions, tutorials, all conference sessions,
                                a registration kit, lunches for four days, coffee breaks, a welcome reception, a gala
                                dinner, and inclusion of presented papers in IEEE Xplore.</p>
                            <p><strong>Student Registration:</strong> Includes access to plenary sessions, tutorials, all conference
                                sessions, a registration kit, lunches for four days, coffee breaks, a welcome reception,
                                and a gala dinner. Students must submit valid proof of their status (a copy of a student
                                ID card or a letter from their institution or program director) via email during
                                registration and payment. Registration will only be confirmed after verifying the
                                submitted proof.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 px-4">

                        <div className="mb-6">
                            <h2 className="text-[#168BEE] text-xl font-bold mb-3">Registration Fee Structure</h2>
                            <div className="overflow-auto border border-black rounded-md mb-8 relative z-10">
                                <table className="min-w-full text-center text-sm font-medium">
                                    <thead>
                                        <tr>
                                            <th rowSpan="3" className="bg-[#1C3F63] text-white px-4 py-4 border border-black text-base font-bold">
                                                Delegate<br />Categories
                                            </th>
                                            <th colSpan="4" className="bg-[#D92525] text-white px-4 py-2 border border-black text-base font-bold">
                                                Registration Fee
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colSpan="2" className="bg-[#0E9449] text-white border border-black text-sm px-2 py-1">
                                                Early Bird Registration<br />
                                                <span className="text-[12px]">Last Date: November 1, 2025</span>
                                            </th>
                                            <th colSpan="2" className="bg-[#F27032] text-white border border-black text-sm px-2 py-1">
                                                Standard Registration
                                            </th>
                                        </tr>
                                        <tr className="text-black bg-white">
                                            <th className="border border-black px-2 py-1 bg-white">Indian Delegates</th>
                                            <th className="border border-black px-2 py-1 bg-white text-[#A020F0]">Foreign Delegates</th>
                                            <th className="border border-black px-2 py-1 bg-white">Indian Delegates</th>
                                            <th className="border border-black px-2 py-1 bg-white text-[#A020F0]">Foreign Delegates</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Professionals Section */}
                                        <tr>
                                            <td colSpan="5" className="bg-[#BCD6F5] text-black font-semibold border border-black px-2 py-1">
                                                Professionals from Academia and Industry (FULL FEE)
                                            </td>
                                        </tr>
                                        <tr className="bg-[#BCD6F5]">
                                            <td className="border border-black px-2 py-1">IEEE Member</td>
                                            <td className="border border-black px-2 py-1">INR 8500</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 350</td>
                                            <td className="border border-black px-2 py-1">INR 12500</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 450</td>
                                        </tr>
                                        <tr className="bg-[#BCD6F5]">
                                            <td className="border border-black px-2 py-1">Non – IEEE Member</td>
                                            <td className="border border-black px-2 py-1">INR 10200</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 420</td>
                                            <td className="border border-black px-2 py-1">INR 15000</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 540</td>
                                        </tr>

                                        {/* Students Section */}
                                        <tr>
                                            <td colSpan="5" className="bg-[#FFD4C3] text-black font-semibold border border-black px-2 py-1">
                                                Student Participants
                                            </td>
                                        </tr>
                                        <tr className="bg-[#FFD4C3]">
                                            <td className="border border-black px-2 py-1">IEEE Member</td>
                                            <td className="border border-black px-2 py-1">INR 5000</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 250</td>
                                            <td className="border border-black px-2 py-1">INR 7000</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 350</td>
                                        </tr>
                                        <tr className="bg-[#FFD4C3]">
                                            <td className="border border-black px-2 py-1">Non – IEEE Member</td>
                                            <td className="border border-black px-2 py-1">INR 6000</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 300</td>
                                            <td className="border border-black px-2 py-1">INR 8400</td>
                                            <td className="border border-black px-2 py-1 text-[#A020F0]">USD 420</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Footnote */}
                                <div className="bg-white border-t border-black text-red-600 font-semibold text-center text-sm py-2">
                                    The fee shown above is excluding 18% GST, and Payment gateway fees and currency conversion fees
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-[#168BEE] text-xl font-bold mb-3">Deadline</h2>
                            <p><strong>Early Bird Registration Deadline:</strong> 1st November 2025.</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-[#168BEE] text-xl font-bold mb-3">Registration Link</h2>
                            <a
                                href="https://nitgoa.ac.in/STPEC2025/registration.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
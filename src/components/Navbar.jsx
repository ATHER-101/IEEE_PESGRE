import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const navItems = [
  { title: "Home", dropdownItems: [], routes: ["/"] },
  {
    title: "About",
    dropdownItems: ["Organizing Committee", "Chairs"],
    routes: ["/about/organizing-committee", "/about/chairs"],
  },
  {
    title: "Authors",
    dropdownItems: [
      "Call for Papers",
      "Call for Special Session",
      "Submission & Registration",
    ],
    routes: [
      "/authors/call-for-papers",
      "/authors/call-for-special-session",
      "/authors/submission-registration",
    ],
  },
  {
    title: "Program",
    dropdownItems: ["Keynote Speakers","Tutorial Speakers","IES SYP Keynotes"],
    routes: ["/program/keynote-speakers","/program/tutorial-speakers","/program/ies-syp-keynotes"],
  },
  {
    title: "Travel",
    dropdownItems: [
      "Visa Information",
      "Hotel Booking",
      "Tour",
      "Food",
      "Location",
    ],
    routes: [
      "/travel/visa-info",
      "/travel/hotel-booking",
      "/travel/tour",
      "/travel/food",
      "/travel/location",
    ],
  },
  { title: "Students & YPs", dropdownItems: [], routes: ["/students-yp"] },
  { title: "Sponsorship", dropdownItems: [], routes: ["/industry-sponsor"] },
  { title: "Contact", dropdownItems: [], routes: ["/contact"] },
];

export default function DrawerAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const drawerRef = useRef(null);
  const location = useLocation();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const toggleDropdown = (index) => {
    if (navItems[index].dropdownItems.length > 0) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDrawerOpen]);

  return (
    <div>
      <header className="sticky top-0 z-40 shadow-md">
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(to right, white,rgba(10, 129, 234, 0.42))",
          }}
        >
          {/* Custom checkerboard pattern using linear-gradient */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(to right, #ffffff 2px, transparent 2px)",
              backgroundSize: "20px 20px",
              backgroundColor: "rgba(20, 189, 215, 0)",
              backgroundPosition: "right",
            }}
          />
          <div className="relative flex items-center justify-between px-4 md:px-8 py-3">
            <Link to="/" className="flex items-center">
              <img src="/PESGRE2025.png" alt="Logo" className="h-12 md:h-16" />
            </Link>
            <button className="md:hidden p-2 text-black" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <nav className="hidden md:flex justify-center ali space-x-6 text-lg font-semibold">
              {navItems.map(({ title, dropdownItems, routes }, index) =>
                dropdownItems.length > 0 ? (
                  <Dropdown
                    key={title}
                    title={title}
                    items={dropdownItems}
                    routes={routes}
                  />
                ) : (
                  <Link
                    key={title}
                    to={routes[0]}
                    className={`px-3 py-2 rounded-md transition-all ${
                      location.pathname === routes[0]
                        ? "bg-[#168BEE] text-white"
                        : "hover:bg-[#168BEE33] text-[#168BEE]"
                    }`}
                  >
                    {title}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300">
          <div
            ref={drawerRef}
            className="absolute top-0 left-0 w-3/4 bg-white h-full shadow-lg transition-transform transform duration-300"
          >
            <div className="flex items-center justify-between px-4 py-3">
              <Link to="/">
                <img src="/PESGRE2025.png" alt="Logo" className="h-12" />
              </Link>
              <button onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-4">
              {navItems.map(({ title, dropdownItems, routes }, index) => (
                <div key={title} className="border-b border-gray-300 py-2">
                  <button
                    className="flex items-center justify-between w-full text-[#168BEE] font-semibold text-left"
                    onClick={() => toggleDropdown(index)}
                  >
                    {dropdownItems.length == 0 ? (
                      <Link to={routes[0]}>{title}</Link>
                    ) : (
                      <>{title}</>
                    )}
                    {dropdownItems.length > 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                  {activeIndex === index && dropdownItems.length > 0 && (
                    <div className="mt-2 ml-4">
                      {dropdownItems.map((item, i) => (
                        <Link
                          key={i}
                          to={routes[i]}
                          className="text-[#168BEE] font-semibold py-1 block"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const textArray = [
  {
    text: "PESGRE 2025 will be organised at IIT Dharwad, Karnataka, India during 18 - 21 December 2025.",
    link: "/",
  },
  {
    text: "Paper Submission is OPEN, Deadline 15th June 2025",
    link: "https://cmt3.research.microsoft.com/PESGRE2025",
  },
  {
    text: "Call for Special Session Proposals is OPEN, Deadline 15 May 2025",
    link: "/authors/call-for-special-session",
  },
];

export default function RunningTextStrip() {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const updateOffset = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width; // Total width of the text content
      const parentWidth = ref.current.parentNode.offsetWidth; // Width of the parent container

      // Reset offset with a gap after text exits the left side
      if (offset <= -width) {
        setOffset(parentWidth + 100);
      } else {
        setOffset((prev) => prev - 5); // Adjust speed here
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(updateOffset, 30); // Smooth scrolling speed
      return () => clearInterval(interval);
    }
  }, [isPaused, offset]);

  if (textArray.length === 0) return null;

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg h-[50px] w-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fading Effect: Left and Right Edges */}
      <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-blue-800 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-blue-800 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Content */}
      <div
        ref={ref}
        className="flex justify-start items-center transition-transform duration-200 ease-in-out"
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {textArray.map((text, index) => (
          <div key={index} className="flex items-center">
            {/* Separator Line */}
            <div className="bg-white w-[1.5px] h-5 mx-2"></div>
            <Link
              to={text.link}
              className="mx-4 text-sm md:text-lg hover:underline"
            >
              {text.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

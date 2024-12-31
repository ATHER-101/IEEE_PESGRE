import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const textArray = [
  {
    text: "PESGRE 2025 will be organised at IIT Dharwad, Karnataka, India during 18 - 21 December 2025.",
    link: "/",
  },
  {
    text: "Call for Paper Open",
    link: "/authors/call-for-papers",
  },
];

export default function RunningTextStrip() {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleClick = () => {
    setIsPaused((prev) => !prev);
  };

  const updateOffset = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width; // Total width of the text content
      const parentWidth = ref.current.parentNode.offsetWidth; // Width of the parent container

      // Move the text out of the view on the left
      if (offset <= -width) {
        // Reset to the right side of the screen
        setOffset(parentWidth);
      } else {
        setOffset((prev) => prev - 7); // Adjust speed by changing this value
      }
    }
  };

  // Use a setInterval to update the offset periodically
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(updateOffset, 50); // Adjust speed as needed
      return () => clearInterval(interval);
    }
  }, [isPaused, offset]);

  if (textArray.length == 0) return <></>;

  return (
    <div
      className="overflow-hidden whitespace-nowrap bg-blue-600 text-white h-[42px] flex items-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="flex transition-transform duration-200 ease-in-out text-lg" // Adjust font size here
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {textArray.map((text, index) => (
          <>
            <div>|</div>
            <Link to={text.link} key={index} className="mx-4 hover:bg-blue-500 px-2 rounded">
              {text.text}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
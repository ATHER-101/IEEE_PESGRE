import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function UpcomingEventReminder({ dates }) {
  const today = new Date();

  // Convert dates to objects and sort
  const sortedDates = dates
    .map(({ title, date, link }) => ({ title, date: new Date(date), link }))
    .sort((a, b) => a.date - b.date);

  // Find the next upcoming event date
  const nextEventDate = sortedDates.find(({ date }) => date >= today)?.date;

  // Get all events happening on that date
  const nextEvents = sortedDates.filter(
    ({ date }) => date.getTime() === nextEventDate?.getTime()
  );

  // Function to format date
  const formatDate = (date) => {
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"][(day % 10) > 3 || Math.floor(day % 100 / 10) === 1 ? 0 : day % 10];
    return `${day}${suffix} ${date.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}`;
  };

  // Countdown logic
  const calculateTimeLeft = () => {
    if (!nextEventDate) return null;
    const difference = nextEventDate - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!nextEventDate) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [nextEventDate]);

  if (!nextEvents.length) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-700">No Upcoming Events</h2>
        <p className="text-gray-500 text-lg">All events have passed.</p>
      </div>
    );
  }

  return (
    <div className="mb-6 p-8 shadow-lg rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Event Details */}
        <div className="text-left">
          <div className="flex items-center gap-3 mb-4">
            <FaClock className="text-3xl" />
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
          <p className="text-2xl font-semibold">{formatDate(nextEventDate)}</p>
          <ul className="mb-6 mt-2 md:my-4 md:space-y-2">
            {nextEvents.map(({ title, link }, index) => (
              <li key={index} className="text-xl">
                  
                  <a href={link} target="_blank" rel="noopener noreferrer" ><p className="inline">{title}</p><FaExternalLinkAlt className="ml-4 mb-1 inline-block text-sm"/></a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Countdown Timer */}
        {timeLeft && (
          <div className="bg-white text-blue-600 px-6 py-4 rounded-lg text-center shadow-lg w-full md:w-[450px]">
            <h3 className="text-lg md:text-2xl font-semibold mb-0 md:mb-2">Time Left</h3>
            <div className="text-xl md:text-3xl font-bold">
              <div className="inline mx-1 md:mx-2">{timeLeft.days}d</div> : <div className="inline mx-1 md:mx-2">{timeLeft.hours}h</div> : <div className="inline mx-1 md:mx-2">{timeLeft.minutes}m</div> : <div className="inline mx-1 md:mx-2">{timeLeft.seconds}s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingEventReminder;

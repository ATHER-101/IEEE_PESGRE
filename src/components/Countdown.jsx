import React, { useEffect, useState } from "react";

const ConferenceCountdown = ({ conferenceDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const [day, month, year] = conferenceDate.split("/");

      // Conference date in the correct format
      const conferenceDateObj = new Date(year, month - 1, day);

      const timeDiff = conferenceDateObj - currentDate;

      // If the conference has already started
      if (timeDiff <= 0) {
        setTimeRemaining("The conference has started!");
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Initial calculation
    calculateTimeRemaining();

    // Update the countdown every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [conferenceDate]);

  // If the conference has already started
  if (typeof timeRemaining === "string") {
    return (
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Conference Starts In</h2>
        <div className="text-xl font-semibold">{timeRemaining}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-xl md:text-3xl font-bold mb-6">Conference Starts In</h2>
      <div className="flex justify-center items-center space-x-3 md:space-x-8">
        {/* Days */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-extrabold">{timeRemaining.days}</div>
          <div className="text-sm font-medium">Days</div>
        </div>
        <span className="pb-7 text-3xl md:text-6xl font-extrabold">:</span> {/* Separator */}

        {/* Hours */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-extrabold">{timeRemaining.hours}</div>
          <div className="text-sm font-medium">Hours</div>
        </div>
        <span className="pb-7 text-3xl md:text-6xl font-extrabold">:</span> {/* Separator */}

        {/* Minutes */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-extrabold">{timeRemaining.minutes}</div>
          <div className="text-sm font-medium">Minutes</div>
        </div>
        <span className="pb-7 text-3xl md:text-6xl font-extrabold">:</span> {/* Separator */}

        {/* Seconds */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-extrabold">{timeRemaining.seconds}</div>
          <div className="text-sm font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCountdown;
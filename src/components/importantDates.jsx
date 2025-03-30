import { FaCalendarAlt } from "react-icons/fa";

function ImportantDates({ dates }) {
  const today = new Date();

  // Function to format date as "15th April 2025"
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"][(day % 10) > 3 || Math.floor(day % 100 / 10) === 1 ? 0 : day % 10];
    const options = { year: "numeric", month: "long" };
    return `${day}${suffix} ${date.toLocaleDateString("en-GB", options)}`;
  };

  // Convert date strings to Date objects and sort them
  const sortedDates = Object.entries(dates)
    .map(([title, dateStr]) => {
      const date = new Date(dateStr);
      return { title, date, formattedDate: formatDate(dateStr) };
    })
    .sort((a, b) => a.date - b.date);

  // Find the next upcoming date
  const nextUpcoming = sortedDates.find(({ date }) => date >= today);

  return (
    <div className="rounded-2xl shadow-lg bg-gradient-to-r from-white via-blue-50 to-blue-100 p-6 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <FaCalendarAlt className="text-blue-700 text-3xl" />
        <h2 className="text-3xl font-bold text-blue-700">Important Dates</h2>
      </div>
      <ul className="text-lg text-gray-700 space-y-1">
        {sortedDates.map(({ title, formattedDate, date }) => {
          const isPast = date < today;
          const isNext = nextUpcoming && date.getTime() === nextUpcoming.date.getTime();
          
          return (
            <li
              key={title}
              className={`p-2 rounded-lg ${isPast ? 'line-through text-gray-500' : ''} ${isNext ? 'bg-blue-300 font-bold border-l-4 border-blue-500 pl-3' : ''}`}
            >
              <strong>{title}:</strong> {formattedDate}
            </li>
          );
        })}
      </ul>
      
      {/* Decorative Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0) 60%)",
        }}
      ></div>
    </div>
  );
}

export default ImportantDates;
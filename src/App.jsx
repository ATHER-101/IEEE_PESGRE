import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from './AppRoutes';

const App = () => {
  
  // This function will fetch data from the backend on component mount
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000'); // Make a GET request to the backend
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse JSON data
      console.log(data); // Log the data received from the backend
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // Use useEffect to call fetchData once the component is mounted
  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
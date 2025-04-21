import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from './AppRoutes';
import PopupNotification from './components/PopUp';

const App = () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/'); //test
      // const response = await fetch('/api/');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <PopupNotification />
      <Footer />
    </Router>
  );
};

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from './AppRoutes';

const App = () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/');  // This will be proxied by NGINX to localhost:4000
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
      <Footer />
    </Router>
  );
};

export default App;
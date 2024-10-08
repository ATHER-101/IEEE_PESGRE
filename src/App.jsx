import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
    </Router>
  );
};

export default App;

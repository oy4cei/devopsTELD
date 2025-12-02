import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId/:subsectionId" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


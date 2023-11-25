// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the global styles
import Header from './components/Header';
import Home from './components/Home';
import ClientPortal from './components/ClientPortal';
import Appointments from './components/Appointments';
import Support from './components/Support';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        </div >
      </div>
    </Router>
  );
}

export default App;

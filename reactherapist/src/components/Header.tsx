// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <button className="btn">
            <img src="logo.svg" alt="Therapist Logo" />
          </button>
        </Link>
      </div>
      <nav className="header-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/client-portal">Client Portal</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

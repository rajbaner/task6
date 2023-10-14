import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Name</div>
      <ul className="nav-links">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">FadeMaster</div>
        <ul className="navbar-links">
          <li><a href='#home'>Home</a></li>
          <li><a href="#appointment">Appointments</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import '../index.css'; // Only if styling is needed here

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav__header">
        <span className="logo">Youthjob<span>-Connect</span></span>
        <div className="nav__menu__btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
      <div className={`nav__links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#steps">Steps</a>
        <a href="#explore">Explore</a>
        <a href="#jobs">Jobs</a>
      </div>
    </nav>
  );
};

export default NavBar;


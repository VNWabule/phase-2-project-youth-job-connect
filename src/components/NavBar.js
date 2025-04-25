
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Optional: for custom styles

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/jobs" className="nav-link">
        Jobs
      </NavLink>
      <NavLink to="/apply" className="nav-link">
        Apply
      </NavLink>
    </nav>
  );
}

export default NavBar;


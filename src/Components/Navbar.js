import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
    <i className="fa-solid fa-bars"></i>
      <p className="nav-text">View Events</p>
      <div className="Notification">
        <i className="dot"></i>
        <i className="fa-solid fa-bell"></i>
        <div>OF</div>
        <p>Omar Faizan</p>
      </div>
    </nav>
  );
}

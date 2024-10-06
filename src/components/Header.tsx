import React from "react";
import '../style/header.css'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <nav className="header-nav">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/services" className="nav-link">
          Services
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </nav>
      <div className="header-user">
        <a href="/login" className="nav-link">
          Login
        </a>
        <a href="/register" className="nav-link">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;

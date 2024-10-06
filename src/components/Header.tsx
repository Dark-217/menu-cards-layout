import React from "react";
import '../style/header.css'

const Header: React.FC = () => {
  return (
    <header className="flex justify-end">
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

import React from "react";
import "../style/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 w-full">
      <div className="footer-content">
        <div className="footer-left">
          <span>
            © Copyright 1999-2024 by Refsnes Data.
          </span>
        </div>
        <div className="footer-center">
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

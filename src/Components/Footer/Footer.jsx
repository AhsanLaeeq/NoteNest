import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fancy-footer">
      <p>✨ Built by <strong>Ahsan Laeeq</strong></p>
      <p>📆 {new Date().getFullYear()} | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

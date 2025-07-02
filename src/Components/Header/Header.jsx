import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="notes-header">
      <div className="notes-container">
        <h1 className="notes-title">📝 NotesNest</h1>
        <p className="notes-subtitle">Capture your thoughts. Anytime. Anywhere.</p>
      </div>
    </header>
  );
};

export default Header;

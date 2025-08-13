import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import "../styles/Header.css"; // Asegúrate de tener este archivo CSS
import React from "react";
function Header({ update }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/" className="logo-h1">Giacco</Link>
        </h1>
      </div>
      <NavBar update={update} />
    </header>
  );
}

export default Header;
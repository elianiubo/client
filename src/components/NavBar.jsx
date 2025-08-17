
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { ENDPOINTS } from "../config/index";

export default function NavBar({ update }) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(ENDPOINTS.IMAGE_CATEGORIES);
        const uniqueCategories = [...new Set(res.data.map(cat => cat?.trim()))].filter(Boolean);
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
      }
    };
    fetchCategories();
  }, [update]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Home: active si estamos en / o /home */}
        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>

        {categories.map((cat) => {
          const catPath = `/${cat.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <li key={cat}>
              <NavLink
                to={catPath}
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {cat}
              </NavLink>
            </li>
          );
        })}

        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
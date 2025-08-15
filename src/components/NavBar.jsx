import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Asegúrate de tener este archivo CSS
import {  ENDPOINTS } from "../config/index";

export default function NavBar({ update }) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(ENDPOINTS.IMAGE_CATEGORIES);
        console.log("Categories API response:", res.data);
        // res.data debe ser un array de strings (categorías)
        const uniqueCategories = [...new Set(res.data.map(cat => cat?.trim()))].filter(Boolean);
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
      }
    };
    fetchCategories();
  }, [update]); // <-- vuelve a cargar si cambia `update`

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/${cat.toLowerCase().replace(/\s+/g, "-")}`} onClick={closeMenu}>
              {cat}
            </Link>
          </li>
        ))}
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
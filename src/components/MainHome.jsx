import React ,{useEffect, useState} from "react";
import axios from "axios";
import { ENDPOINTS } from "../config";
import { Link } from "react-router-dom"
import "../styles/MainHome.css";  // Asegúrate de tener este archivo CSS

// Asegúrate de tener este archivo CSS
function MainHome() {
  const [varUrl, setVarUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const id = 3;
        const res = await axios.get(`${ENDPOINTS.VARIABLES}/${id}`);
        setVarUrl(res.data.url);
        
      } catch (err) {
        console.error("Error al cargar la variable:", err);
        setVarUrl(""); // fallback
      }
    };
    fetchImage();
  }, []);

  return (
    <div
  className=" main-first-content"
  style={{ backgroundImage: `url(${varUrl})` }}
>
  <div className="overlay-content">
    <h1 className="hero-title">CRAFTING VISUAL STORIES</h1>
    <p>I'm Giacco. A freelance photographer based in the Netherlands</p>
    <Link to="/about" className="about-button">About Me →</Link>
  </div>
</div>
  );
}
export default MainHome;
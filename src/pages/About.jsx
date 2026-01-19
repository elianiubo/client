import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/About.css"; // Asegúrate de tener este archivo CSS
import { ENDPOINTS } from "../config";

export default function About() {
  const [varUrl, setVarUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const id = 1; // change this to the ID you want
        const res = await axios.get(`${ENDPOINTS.VARIABLES}/${id}`);
        setVarUrl(res.data.url); // get the URL directly
      } catch (err) {
        console.error("Error al cargar la variable:", err);
      }
    };

    fetchImage();
  }, []);
  return (
    <>
      {/* https://flatrocksoft.com/18-best-about-me-pages-examples-2024/ */}
      <Header />
      <div className="container">
        <div className="first-content">
          <h1 className="titles-pages" >About me</h1>
          <div className="aboyt-main-div">
          <p className="about-main-text">Hello, I am <em className="highlight-yellow">Giacco</em>, a photographer with a strong background in product photography, visual media, and design. Over the past several years, I have worked across Europe in roles that combine photography, creative direction, and visual branding from leading e-commerce content creation to managing studios and developing AI-driven imagery.</p>
          <p className="about-main-text">My expertise lies in capturing products with precision and creativity, ensuring visuals that not only tell a story but also elevate brand identity and customer experience. With a foundation in industrial design and advanced studies in photography and design research, I bring both artistic vision and technical knowledge to every project.</p>
            <p className="about-main-text">Curious and adaptable by nature, I thrive in dynamic environments where innovation meets collaboration. Whether it’s shaping the visual language of a brand, integrating cutting-edge AI tools, or directing photoshoots from concept to execution, I approach each challenge with creativity, problem-solving, and attention to detail.</p>
          </div>
            <p className="about-languages-text">Languages that I speak: </p>
            <ul className="about-languages-ul">
              <li className="about-languages-li">Italian</li>
              <li className="about-languages-li">Dutch</li>
              <li className="about-languages-li">English</li>
              <li className="about-languages-li">Spanish</li>
            </ul>
        </div>
        <div className="second-content">
          <h2 className="about-second-title">Where can I travel?</h2>
          <div className="image-container">
            {varUrl && (
              <img src={varUrl} alt='FROM DB' />
            )}
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}
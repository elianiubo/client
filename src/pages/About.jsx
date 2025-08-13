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
      <div className="container" style={{ width: "60%", margin: "0 auto" }}>
        <div className="first-content">
          <h1 className="titles-pages" >About me</h1>
          <p className="about-main-text">Hello, I am <em className="highlight-yellow">Giacco</em>, a Professional Photographer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error dolores aspernatur aperiam neque deleniti libero laboriosam voluptatum. Soluta, ipsa accusantium! Aut esse officiis, dolorum ratione rem animi suscipit earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam inventore eum reiciendis quae eos nemo eligendi fuga rem nesciunt eaque dolor est nulla non, dolorem aut voluptas, distinctio repellendus!</p>
       
        

        <p className="about-languages-text">Languages that I speak: </p>
        <ul className="about-languages-ul">
          <li className="about-languages-li">Italian</li>
          <li className="about-languages-li">Dutch</li>
          <li className="about-languages-li">English</li>
          <li className="about-languages-li">Spanish</li>
        </ul>
         </div>
        <div className="second-content">
        <h2 className="about-second-title">Where can I travel</h2>
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
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import "../styles/Footer.css"; // Asegúrate de tener este archivo CSS
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">

        <p>
          <a href="https://www.instagram.com/giacco_photography/">
            <FaInstagram />
          </a>
          <a href="mailto:elia@elia.com">
            <AiOutlineMail />
          </a>
          <a href="https://nl.linkedin.com/in/giammarcoincarnato">
            <AiOutlineLinkedin />
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} Giacco Photography. All rights reserved. 
        </p>
        <p>
          KVK: 568974589
        </p>
      </div>
      <div className="footer-made-by">
        <p>Made by Elia Niubo</p>
      </div>
    </div>
  );
}

export default Footer;

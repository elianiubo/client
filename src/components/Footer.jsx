import { FaInstagram } from "react-icons/fa";
import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import "../styles/Footer.css"; // Asegúrate de tener este archivo CSS
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a className="icon" href="https://www.instagram.com/giacco_photography/"><FaInstagram /></a>
          <a className="icon" href="mailto:giacco.photo@gmail.com"><AiOutlineMail /></a>
          <a className="icon" href="https://nl.linkedin.com/in/giammarcoincarnato"><AiOutlineLinkedin /></a>
        </div>
        <p className="text">© {new Date().getFullYear()} Giacco Photography. All rights reserved.</p>
        <p className="text">KVK: 97297488</p>


        <p className="footer-made-by">Made by <a className="page-link" href="https://www.elianiubo.com">Elia Niubo</a></p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/legal">Legal Notice</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

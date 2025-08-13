import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../styles/Contact.css"; // Asegúrate de tener este archivo CSS
import ContactForm from "../components/ContactForm";

export default function About() {
 return (
       <>
      <Header />
      <div className="container">
        <h1 className="titles-pages">Contact me</h1>
       <ContactForm />
        </div>
      <Footer />
      </>
  );
}
import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import { ENDPOINTS } from "../config";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef } from 'react';
import "../styles/Contact.css"
const fields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name" },
  { label: "Surname", name: "surname", type: "text", placeholder: "Your surname" },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
  { label: "Message", name: "message", as: "textarea", placeholder: "Your message" },
];
export default function ContactForm() {
  const captchaRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }
    try {
      await axios.post(ENDPOINTS.CONTACT, formData);
      // alert("Message sent!");
      setFormData({ name: "", surname: "", email: "", message: "" });
      setError('');
      setSuccess(true);
      console.log(formData)
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Input
          key={index}
          id={`field-${index + 1}`}
          {...field}
          value={formData[field.name]}
          onChange={handleChange}
          required
        />

      ))}
      <HCaptcha
        sitekey="your-hcaptcha-sitekey"
        size="invisible"
        ref={captchaRef}
      />
      <button
        type="submit"
        className="button-contact"
      >
        Send
      </button>
      {success && <p className="success-message">🎉Thank You! Message sent successfully. </p>}

    </form>
  );
};

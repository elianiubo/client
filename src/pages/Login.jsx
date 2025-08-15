import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Asegúrate de tener un archivo CSS para estilos
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      alert("Login fallido");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-page">
      <h2>Login Page Admin</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Correo" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
}

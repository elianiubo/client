import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../config/apiClient";  // 👈 ahora existe
import "../styles/Login.css"; // Asegúrate de tener un archivo CSS para estilos
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", { email, password });
      navigate("/admin");
    } catch {
      alert("Login fallido");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-page">
      <h1>Login Page Admin</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Correo" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
}

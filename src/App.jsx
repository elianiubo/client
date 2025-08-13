import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"; // Asegúrate de tener este archivo CSS
import ImagePage from "./pages/ImagePage"; // Asegúrate de que esta ruta sea correcta
import About from "./pages/About";
import { isAuth } from "./utils/auth"; // Asegúrate de que esta ruta sea correcta
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/:category" element={<ImagePage />} />

      </Routes>
    </Router>
  );
}

export default App;

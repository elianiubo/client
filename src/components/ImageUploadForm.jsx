import axios from "axios";
import React, { useState, useEffect } from "react";
import { PREDEFINED_CATEGORIES, ENDPOINTS } from "../config";

export default function ImageUploadForm({ triggerUpdate }) {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(ENDPOINTS.IMAGE_CATEGORIES);
        const backendCats = res.data
          .map((cat) => cat?.trim?.())
          .filter(Boolean);
        const unique = [...new Set([...PREDEFINED_CATEGORIES, ...backendCats])];
        setCategories(unique);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
        setCategories(PREDEFINED_CATEGORIES); // fallback
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (e) => {
    const selected = [...e.target.files];
    if (selected.length > 4) {
      alert(" Solo puedes subir hasta 4 imágenes.");
      return;
    }
    setFiles(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      alert("Selecciona al menos una imagen");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));
    formData.append("category", category);

    try {
      await axios.post(ENDPOINTS.UPLOAD_MULTIPLE_IMAGES, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Imágenes subidas con éxito");
      setFiles([]);
      setCategory("");
      if (triggerUpdate) triggerUpdate(); // notificar al padre
    } catch (err) {
      alert("❌ Error al subir imágenes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        required
      />
      <input
        list="category-list"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Categoría"
        required
      />
      <datalist id="category-list">
        {categories.map((cat) => (
          <option key={cat} value={cat} />
        ))}
      </datalist>
      <button type="submit" disabled={loading}>
        {loading ? "Subiendo..." : `Subir imagen${files.length > 1 ? "es" : ""}`}
      </button>
    </form>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { ENDPOINTS } from "../config";
export default function ImageGallery({ update }) {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(ENDPOINTS.IMAGES);
        setImages(res.data);
      } catch (err) {
        console.error("Error al cargar imágenes:", err);
      }
    };

    fetchImages();
  }, [update]);

  const handleDelete = async (id) => {
  if (!window.confirm("¿Are you sure you want to delete this image?")) return;

  try {
    await axios.delete(`${ENDPOINTS.IMAGES}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    alert("Image deleted successfully");
    setImages((prev) => prev.filter((img) => img.id !== id));
  } catch (err) {
    alert("Error al eliminar imagen");
    console.error(err);
  }
};

  const groupedByCategory = images.reduce((acc, img) => {
    const cat = img.category || "Sin categoría";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(img);
    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Galería</h2>
      {Object.entries(groupedByCategory).length === 0 && <p>No images to show.</p>}
      {Object.entries(groupedByCategory).map(([cat, imgs]) => (
        <div key={cat}>
          <h3 style={{ marginTop: "2rem", borderBottom: "1px solid #999" }}>
            Category: {cat}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {imgs.map((img) => (
              <div key={img.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                <img src={img.url} alt={img.title} style={{ width: "100%" }} />
                {/* <h4>{img.title}</h4> */}
                <button onClick={() => handleDelete(img.id)}>🗑️Delete</button>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
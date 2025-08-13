import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ImageDisplay.css";
import { capitalizeWords, formatParam } from "../utils/helpers";
import { ENDPOINTS } from "../config";

export default function ImageDisplay() {
  const { category } = useParams();
  const cleanCategory = formatParam(category);
  const [images, setImages] = useState([]);
  const [imageMeta, setImageMeta] = useState({});

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
  }, []);

  const handleImageLoad = (e, id) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImageMeta((prev) => ({
      ...prev,
      [id]: { width: naturalWidth, height: naturalHeight },
    }));
  };

  const filteredImages = images.filter((img) =>
    cleanCategory
      ? img.category?.trim().toLowerCase() === cleanCategory.toLowerCase()
      : true
  );

  return (
  <div className="container">
    {cleanCategory && (
      <h2 className="titles-pages centered">
        {capitalizeWords(cleanCategory)}'s Collection
      </h2>
    )}

    <div className="image-grid">
      {filteredImages.map((image) => {
       

        return (
          <div key={image.id} className="image-card">
            <img
              src={image.url}
              alt={image.title}
              loading="lazy"
              onLoad={(e) => handleImageLoad(e, image.id)}
            />
          </div>
        );
      })}
    </div>
  </div>
);
}
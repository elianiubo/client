import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ImageDisplay.css";
import { capitalizeWords, formatParam } from "../utils/helpers";
import { ENDPOINTS } from "../config";
import Lightbox from "yet-another-react-lightbox";


export default function ImageDisplay() {
  const { category } = useParams();
  const cleanCategory = formatParam(category);
  const [images, setImages] = useState([]);
  const [imageMeta, setImageMeta] = useState({});
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        {filteredImages.map((image, index) => (
          <div key={image.id} className="image-card">
            <img
              src={image.url}
              alt={image.title}
              loading="lazy"
              onLoad={(e) => handleImageLoad(e, image.id)}
              onClick={() => { setIsOpen(true); setCurrentIndex(index); }}
              onError={async (e) => {
                const card = e.target.closest(".image-card");
                const imageId = image.id;

                if (card) card.style.display = "none";

                try {
                  await axios.delete(`${ENDPOINTS.IMAGES}/${imageId}`, {
                    headers: {
                      Authorization: `Bearer ${token}`, // Si usas auth
                    },
                  });
                  console.log(`🧹 Imagen ${imageId} eliminada del backend`);
                } catch (err) {
                  console.error("❌ Error al eliminar de la base de datos:", err);
                }
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        // Lightbox component to display images in a carrousel
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={filteredImages.map((img) => ({
            src: img.url,
            title: img.title,
            width: imageMeta[img.id]?.width,
            height: imageMeta[img.id]?.height,
          }))}
        />
      )}
    </div>
  );
}
import React,{useEffect, useState} from "react";
import ImageUploadForm from "../components/ImageUploadForm";
import ImageGallery from "../components/ImageGallery";
import Header from "../components/Header";
import "../styles/Login.css"
import { useNavigate } from "react-router-dom";


export default function Admin() {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);

  const triggerUpdate = () => setUpdate(prev => !prev);

  return (
     <div className="admin-page">
      <Header update={update} />
      <div className="admin-content">
        <h2>Panel Admin</h2>
        <ImageUploadForm triggerUpdate={triggerUpdate} />
        <hr className="admin-divider" />
        <ImageGallery update={update} />
      </div>
    </div>
  );
}
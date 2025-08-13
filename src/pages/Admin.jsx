import React,{useEffect, useState} from "react";
import ImageUploadForm from "../components/ImageUploadForm";
import ImageGallery from "../components/ImageGallery";
import Header from "../components/Header";
import { isAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Admin() {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);

  const triggerUpdate = () => setUpdate(prev => !prev);

  return (
    <div style={{ paddingTop: "100px" }}>
      <Header update={update} />
      <div style={{ padding: "2rem" }}>
        <h2>Panel Admin</h2>
        <ImageUploadForm triggerUpdate={triggerUpdate} />
        <hr style={{ margin: "2rem 0" }} />
        <ImageGallery update={update} />
      </div>
    </div>
  );
}
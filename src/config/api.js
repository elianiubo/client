export const API_URL = import.meta.env.VITE_API_URL;
export const ENDPOINTS = {
  IMAGES: `${API_URL}/api/images`,
  IMAGE_CATEGORIES: `${API_URL}/api/image-categories`,
  UPLOAD_IMAGE: `${API_URL}/api/upload`,
  CONTACT: `${API_URL}/api/contact`,
  UPLOAD_MULTIPLE_IMAGES: `${API_URL}/api/upload-multiple`,
  VARIABLES: `${API_URL}/api/variables`,
  GUARDAR_URL: `${API_URL}/admin/guardar-url`,
  ADMIN_IMAGES: `${API_URL}/admin/images`,

};

export const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dhfktkjia/image/upload";
// src/config/apiClient.js



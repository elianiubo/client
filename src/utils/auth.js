// utils/auth.js
import {jwtDecode} from "jwt-decode";

export function isAuth() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded);
    const currentTime = Date.now() / 1000; // segundos

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }

    return true;
  } catch (err) {
    localStorage.removeItem("token");
    return false;
  }
}

// utils/auth.js
import {jwtDecode} from "jwt-decode";

export async function isAuth() {
  try {
    await api.get("/me");
    return true;
  } catch {
    return false;
  }
}
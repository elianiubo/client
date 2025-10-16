// src/utils/auth.js
import { api } from "../config/apiClient";

export async function isAuth() {
  try {
    await api.get("/auth/me");   // ✅ correct path
    return true;
  } catch {
    return false;
  }
}
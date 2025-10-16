// utils/auth.js

import { api } from "../config/apiClient";

export async function isAuth() {
  try {
    await api.get("/auth/me");
    return true;
  } catch {
    return false;
  }
}
import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/auth";
import React from "react";
export default function PrivateRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" replace />;
}
import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/auth";
import React, {useState, useEffect} from "react";
export default function PrivateRoute({ children }) {
  const [ok, setOk] = useState(null);
  useEffect(() => { isAuth().then(setOk); }, []);
  if (ok === null) return null;     // o un loader
  return ok ? children : <Navigate to="/login" replace />;
}
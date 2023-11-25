import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/WebApp";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import Modals from "../pages/Modals";
import ModalsAdd from "../pages/ModalsAdd";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Reemplaza "token" con la clave real que usas.
  
  return token ? children : <Navigate to="/login" replace />;
};

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/modals" element={<Modals />}/>
        <Route path="/modalsAdd" element={<ModalsAdd />}/>
      </Routes>
    </Router>
  );
};

export default RoutesPath;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/web-app/index";
import Login from "../Pages/login/index";
import AdminDashboard from "../Pages/admin-dashboard/index";

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default RoutesPath;

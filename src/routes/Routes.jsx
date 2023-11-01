import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/WebApp";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import Modals from "../pages/Modals";

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/modals" element={<Modals />}/>
      </Routes>
    </Router>
  );
};

export default RoutesPath;
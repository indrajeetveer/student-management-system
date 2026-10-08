import React from "react";
import Home from "../Pages/Home";
import Students from "../Pages/Students";
import { AddStudent } from "../Pages/AddStudent";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../Pages/NotFoundPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/addstudent" element={<AddStudent />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;

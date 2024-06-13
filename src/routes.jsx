import React from "react";
import { Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/repositories" element={<RepositoriesPage />} />
    </Routes>
  );
}




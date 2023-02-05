import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/mainPages';
import RepositoriesPage from '../pages/RepositoriesPage';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="api-github/" element={<MainPage />} />
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
}

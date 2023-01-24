import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/mainPages';
import RepositoriesPage from '../pages/RepositoriesPage';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="/vite-gh-pages" element={<MainPage />} />
        <Route path="/victormfl.github.io/api-github/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

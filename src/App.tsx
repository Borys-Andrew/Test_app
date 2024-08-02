import React from 'react';
import { Header } from 'components/Header';
import { Navigation } from 'components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage';
import { StatisticsPage } from 'Pages/StatisticsPage';
import { CurrencyPage } from 'Pages/CurrencyPage/CurrencyPage';
import { NotFoundPage } from 'Pages/NotFoundPage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import './App.scss';
import 'normalize.css';

export const App: React.FC = () => {
  const user = true;

  return (
    <div className="app">
      {user && <Header />}
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/currency" element={<CurrencyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

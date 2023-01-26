import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import CalcPage from './pages/CalcPage';
import QuotePage from './pages/QuotePage';
import NotMatch from './pages/NotMatch';
import PageHeader from './components/PageHeader';

// Add style sheet
import './assets/styles/App.css';

const App = () => (
  <>
    <PageHeader />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalcPage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </main>
  </>
);

export default App;

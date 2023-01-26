import React from 'react';
import ReactDOM from 'react-dom/client';

// For setting Routes
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Import the main App entry point
import App from './App';

// Import styles from a stylesheet
import './assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

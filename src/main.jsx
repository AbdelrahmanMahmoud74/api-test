import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container); // قم بإنشاء جذر باستخدام createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

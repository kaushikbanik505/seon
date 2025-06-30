// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import 'remixicon/fonts/remixicon.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(

//   <App />

// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your App component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

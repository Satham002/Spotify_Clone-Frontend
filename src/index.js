import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from './Context/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


import React from "react";
import ReactDOM from "react-dom/client";
import{ HashRouter } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css";
import "./output.css";
import "virtual:svg-icons-register";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

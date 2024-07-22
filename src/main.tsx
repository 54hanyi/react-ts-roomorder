import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css";
import "./output.css";
import "virtual:svg-icons-register";
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UserProvider>
  </React.StrictMode>,
)
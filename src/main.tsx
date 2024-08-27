import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css";
import "./output.css";
import "virtual:svg-icons-register";
import { UserProvider } from './contexts/UserContext.tsx';
import { BookingProvider } from "./contexts/BookingContext.tsx";
import { RoomProvider } from "./contexts/RoomContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
    <BookingProvider>
    <RoomProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </RoomProvider>
    </BookingProvider>
    </UserProvider>
  </React.StrictMode>,
)
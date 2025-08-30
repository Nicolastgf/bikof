import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 👈 importa Router
import App from "./App.jsx";
import "./index.css";

// (si usás @fontsource/poppins)
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />   {/* 👈 todo dentro del Router */}
    </BrowserRouter>
  </React.StrictMode>
);

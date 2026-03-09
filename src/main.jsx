// src/main.jsx
// Inngangspunkt for React-applikasjonen (prosjektoppsett)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-nf-lys text-nf-tekst">
      <p className="text-lg">NordicFitness Timeplan</p>
    </div>
  </StrictMode>
);
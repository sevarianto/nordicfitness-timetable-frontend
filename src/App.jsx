// src/App.jsx
// Hoved-app med routing
// Sprint 1: kun timeplan-siden er aktiv

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Timeplan from "./pages/Timeplan.jsx";
import IkkeFunnet from "./pages/IkkeFunnet.jsx";

console.log("[App] Setter opp ruter");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Timeplan />} />
          {/* Sprint 2: /klasse/:id og /mine-bookinger legges til her */}
          <Route path="*" element={<IkkeFunnet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
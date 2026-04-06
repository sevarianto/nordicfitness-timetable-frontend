// src/App.jsx
// Hoved-app med routing
// Sprint 2: detaljside og mine bookinger lagt til

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Timeplan from "./pages/Timeplan.jsx";
import KlasseDetalj from "./pages/KlasseDetalj.jsx";
import MineBookinger from "./pages/MineBookinger.jsx";
import IkkeFunnet from "./pages/IkkeFunnet.jsx";

console.log("[App] Setter opp ruter");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Timeplan />} />
          <Route path="klasse/:id" element={<KlasseDetalj />} />
          <Route path="mine-bookinger" element={<MineBookinger />} />
          <Route path="*" element={<IkkeFunnet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
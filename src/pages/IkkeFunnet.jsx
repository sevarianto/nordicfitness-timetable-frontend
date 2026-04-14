// src/pages/IkkeFunnet.jsx
// Vises når brukeren navigerer til en ukjent URL

import { Link } from "react-router-dom";
import Knapp from "../components/ui/Knapp.jsx";

function IkkeFunnet() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-28 text-center">
      <p className="text-8xl font-bold text-nf-kant">404</p>
      <h2 className="text-2xl font-bold text-nf-mork">Siden finnes ikke</h2>
      <p className="text-nf-subtil">Beklager, vi fant ikke siden du leter etter.</p>
      <Link to="/"><Knapp>Tilbake til forsiden</Knapp></Link>
    </div>
  );
}

export default IkkeFunnet;
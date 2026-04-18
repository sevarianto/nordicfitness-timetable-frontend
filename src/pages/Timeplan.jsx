// src/pages/Timeplan.jsx
// Sprint 2: bruker useBooking for å vise booket-status på kort

import { klasser, ukedager, klasserForDag } from "../data/klasser.js";
import { useBooking } from "../hooks/useBooking.js";
import KlasseKort from "../components/ui/KlasseKort.jsx";

console.log("[Timeplan] Side lastet, antall klasser:", klasser.length);

function Timeplan() {
  const { erBooket } = useBooking();

  return (
    <div className="flex flex-col gap-10">
      <div className="border-b border-nf-kant pb-6">
        <h1 className="text-3xl font-bold text-nf-mork mb-1">Timeplan</h1>
        <p className="text-nf-subtil">
          Oversikt over alle timer denne uken. Klikk på en time for detaljer og booking.
        </p>
      </div>
      {ukedager.map((dag) => {
        const dagensKlasser = klasserForDag(dag);
        if (dagensKlasser.length === 0) return null;
        return (
          <section key={dag} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-nf-mork border-b-2 border-nf-aksent pb-1 inline-block">
              {dag}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dagensKlasser.map((klasse) => (
                <KlasseKort
                  key={klasse.id}
                  klasse={klasse}
                  erBooket={erBooket(klasse.id)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Timeplan;
// src/pages/MineBookinger.jsx
// Oversikt over brukerens bookinger

import { Link } from "react-router-dom";
import { useBooking } from "../hooks/useBooking.js";
import { finnKlasse } from "../data/klasser.js";
import { formaterVarighet, formaterDatoTid } from "../utils/formattering.js";
import Knapp from "../components/ui/Knapp.jsx";

console.log("[MineBookinger] Side lastet");

function MineBookinger() {
  const { bookinger, avbestillBooking } = useBooking();

  if (bookinger.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-nf-mork">Mine bookinger</h1>
        <p className="text-nf-subtil">Du har ingen aktive bookinger.</p>
        <Link to="/"><Knapp>Se timeplan</Knapp></Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-nf-mork mb-1">Mine bookinger</h1>
        <p className="text-sm text-nf-subtil">
          {bookinger.length} aktiv{bookinger.length !== 1 ? "e" : ""} booking{bookinger.length !== 1 ? "er" : ""}
        </p>
      </div>
      <ul className="flex flex-col gap-4 list-none">
        {bookinger.map((booking) => {
          const klasse = finnKlasse(booking.klasseId);
          if (!klasse) {
            console.warn(`[MineBookinger] Fant ingen klasse for booking: ${booking.klasseId}`);
            return null;
          }
          return (
            <li key={booking.id} className="bg-white border border-nf-kant border-l-4 border-l-green-500 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-nf-mork text-base">{klasse.navn}</h2>
                  <span className="font-bold text-nf-aksent">{klasse.klokkeslett}</span>
                </div>
                <p className="text-sm text-nf-subtil">
                  {klasse.dag} · {formaterVarighet(klasse.varighet)}
                </p>
                <p className="text-sm text-nf-tekst">
                  Booket som: <strong>{booking.brukernavn}</strong>
                </p>
                <p className="text-xs text-nf-subtil">{formaterDatoTid(booking.tidspunkt)}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Link to={`/klasse/${klasse.id}`}>
                  <Knapp variant="skissert">Se detaljer</Knapp>
                </Link>
                <Knapp variant="fare" onClick={() => avbestillBooking(klasse.id)}>
                  Avbestill
                </Knapp>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MineBookinger;
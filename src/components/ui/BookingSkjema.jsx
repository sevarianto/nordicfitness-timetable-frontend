// src/components/ui/BookingSkjema.jsx
// Skjema for å booke en treningsklasse

import { useState } from "react";
import Knapp from "./Knapp.jsx";

function BookingSkjema({ klasse, onBooking, erBooket, erFullbooket }) {
  const [navn, setNavn] = useState("");
  const [feil, setFeil] = useState("");
  const [laster, setLaster] = useState(false);

  function valider() {
    if (!navn.trim()) return "Vennligst skriv inn navnet ditt.";
    if (navn.trim().length < 2) return "Navnet må være minst 2 tegn.";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const valideringsFeil = valider();
    if (valideringsFeil) {
      setFeil(valideringsFeil);
      console.warn("[BookingSkjema] Valideringsfeil:", valideringsFeil);
      return;
    }
    setLaster(true);
    setFeil("");
    setTimeout(() => {
      const suksess = onBooking(klasse.id, navn.trim());
      if (!suksess) {
        setFeil("Noe gikk galt. Prøv igjen.");
        console.error("[BookingSkjema] onBooking returnerte false");
      } else {
        console.log(`[BookingSkjema] Booking vellykket for: ${navn}`);
        setNavn("");
      }
      setLaster(false);
    }, 400);
  }

  if (erBooket) {
    return (
      <div className="bg-green-50 border border-green-400 rounded-xl p-6 text-center">
        <p className="text-3xl mb-2">✓</p>
        <p className="font-semibold text-green-700">Du er påmeldt denne timen!</p>
      </div>
    );
  }

  if (erFullbooket) {
    return (
      <div className="bg-red-50 border border-red-300 rounded-xl p-5 text-center">
        <p className="font-semibold text-red-600">Denne timen er dessverre fullbooket.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-nf-kant rounded-xl p-6 flex flex-col gap-4" noValidate>
      <h3 className="font-bold text-nf-mork text-lg">Book plass</h3>
      <div className="flex flex-col gap-1">
        <label htmlFor="brukernavn" className="text-sm font-semibold text-nf-tekst">
          Ditt navn
        </label>
        <input
          id="brukernavn"
          type="text"
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
          placeholder="Skriv inn fullt navn"
          autoComplete="name"
          className="border border-nf-kant rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-nf-mork transition-colors"
        />
        {feil && <p className="text-red-500 text-xs">{feil}</p>}
      </div>
      <Knapp type="submit" variant="aksent" disabled={laster}>
        {laster ? "Booker..." : "Bekreft booking"}
      </Knapp>
    </form>
  );
}

export default BookingSkjema;
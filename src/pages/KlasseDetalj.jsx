// src/pages/KlasseDetalj.jsx
// Detaljside for én treningsklasse

import { useParams, Link } from "react-router-dom";
import { finnKlasse, finnInstruktor } from "../data/klasser.js";
import { useBooking } from "../hooks/useBooking.js";
import {
  formaterVarighet,
  formaterKapasitet,
  kapasitetStatus,
} from "../utils/formattering.js";
import BookingSkjema from "../components/ui/BookingSkjema.jsx";
import Knapp from "../components/ui/Knapp.jsx";

const statusFarger = {
  ledig:         "bg-green-100 text-green-700",
  "nesten-full": "bg-yellow-100 text-yellow-700",
  full:          "bg-red-100 text-red-600",
};

function KlasseDetalj() {
  const { id } = useParams();
  const { erBooket, leggTilBooking, avbestillBooking } = useBooking();

  const klasse = finnKlasse(id);

  if (!klasse) {
    console.warn(`[KlasseDetalj] Fant ingen klasse med id: ${id}`);
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-nf-mork">Fant ikke timen</h2>
        <p className="text-nf-subtil">Klassen du leter etter eksisterer ikke.</p>
        <Link to="/"><Knapp>Tilbake til timeplan</Knapp></Link>
      </div>
    );
  }

  const instruktor = finnInstruktor(klasse.instruktorId);
  const booket = erBooket(klasse.id);
  const erFull = klasse.pameldte >= klasse.kapasitet;
  const status = kapasitetStatus(klasse.kapasitet, klasse.pameldte);

  console.log(`[KlasseDetalj] Viser: ${klasse.navn} (${klasse.id}), booket: ${booket}`);

  return (
    <div className="flex flex-col gap-6">
      <Link to="/" className="text-sm text-nf-subtil hover:text-nf-mork transition-colors">
        ← Tilbake til timeplan
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 items-start">

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-xs font-semibold text-nf-aksent uppercase tracking-wider mb-1">
                {klasse.kategori}
              </p>
              <h1 className="text-3xl font-bold text-nf-mork leading-tight">{klasse.navn}</h1>
            </div>
            <span className="text-3xl font-bold text-nf-aksent whitespace-nowrap">
              {klasse.klokkeslett}
            </span>
          </div>

          <p className="text-base text-nf-tekst leading-relaxed">{klasse.beskrivelse}</p>

          <div className="bg-white border border-nf-kant rounded-xl p-5 flex flex-col gap-4">
            {[
              { etikett: "Dag",      verdi: klasse.dag },
              { etikett: "Varighet", verdi: formaterVarighet(klasse.varighet) },
              { etikett: "Nivå",     verdi: klasse.niva },
              {
                etikett: "Plasser",
                verdi: (
                  <span className={`text-sm font-semibold px-2 py-0.5 rounded ${statusFarger[status]}`}>
                    {formaterKapasitet(klasse.kapasitet, klasse.pameldte)}
                  </span>
                ),
              },
              instruktor ? {
                etikett: "Instruktør",
                verdi: (
                  <span>
                    <strong>{instruktor.navn}</strong>
                    <br />
                    <span className="text-sm text-nf-subtil">{instruktor.beskrivelse}</span>
                  </span>
                ),
              } : null,
            ]
              .filter(Boolean)
              .map((rad) => (
                <div key={rad.etikett} className="grid grid-cols-[120px_1fr] gap-3">
                  <dt className="text-xs font-semibold text-nf-subtil uppercase tracking-wide pt-0.5">
                    {rad.etikett}
                  </dt>
                  <dd className="text-sm text-nf-tekst">{rad.verdi}</dd>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:sticky md:top-6">
          <BookingSkjema
            klasse={klasse}
            onBooking={leggTilBooking}
            erBooket={booket}
            erFullbooket={erFull && !booket}
          />
          {booket && (
            <div className="text-center">
              <Knapp variant="skissert" onClick={() => avbestillBooking(klasse.id)}>
                Avbestill plass
              </Knapp>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KlasseDetalj;
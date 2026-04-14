// src/components/ui/KlasseKort.jsx
// Viser én treningsklasse som et kort i timeplanen
// Sprint 1: ikke klikkbart ennå – lenke til detaljside kommer i Sprint 2

import { finnInstruktor } from "../../data/klasser.js";
import {
  formaterVarighet,
  formaterKapasitet,
  kapasitetStatus,
} from "../../utils/formattering.js";

const statusFarger = {
  ledig:           "bg-green-100 text-green-700",
  "nesten-full":   "bg-yellow-100 text-yellow-700",
  full:            "bg-red-100 text-red-600",
};

function KlasseKort({ klasse }) {
  const instruktor = finnInstruktor(klasse.instruktorId);
  const status = kapasitetStatus(klasse.kapasitet, klasse.pameldte);

  console.log(`[KlasseKort] Rendrer: ${klasse.navn} (${klasse.id})`);

  return (
    <article className="bg-white rounded-xl border border-nf-kant p-4 shadow-sm">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-nf-mork text-base">{klasse.navn}</h3>
        <span className="font-bold text-nf-aksent text-base">{klasse.klokkeslett}</span>
      </div>
      <p className="text-sm text-nf-subtil mb-3">
        {instruktor ? instruktor.navn : "Ukjent instruktør"}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs bg-nf-lys border border-nf-kant text-nf-subtil px-2 py-0.5 rounded">
          {formaterVarighet(klasse.varighet)}
        </span>
        <span className="text-xs bg-nf-lys border border-nf-kant text-nf-subtil px-2 py-0.5 rounded">
          {klasse.niva}
        </span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusFarger[status]}`}>
          {formaterKapasitet(klasse.kapasitet, klasse.pameldte)}
        </span>
      </div>
    </article>
  );
}

export default KlasseKort;
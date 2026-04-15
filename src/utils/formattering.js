// src/utils/formattering.js
// Gjenbrukbare hjelpefunksjoner for visning av data

// Minutter → "45 min" eller "1t 30min"
export function formaterVarighet(minutter) {
    if (minutter < 60) return `${minutter} min`;
    const timer = Math.floor(minutter / 60);
    const rest = minutter % 60;
    return rest > 0 ? `${timer}t ${rest}min` : `${timer} time`;
  }
  
  // Antall ledige plasser → lesbar tekst
  export function formaterKapasitet(kapasitet, pameldte) {
    const ledig = kapasitet - pameldte;
    if (ledig <= 0) return "Fullbooket";
    if (ledig <= 3) return `${ledig} plass${ledig === 1 ? "" : "er"} igjen`;
    return `${ledig} ledige plasser`;
  }
  
  // Returnerer "ledig", "nesten-full" eller "full" – brukes til å velge farge
  export function kapasitetStatus(kapasitet, pameldte) {
    const ledig = kapasitet - pameldte;
    if (ledig <= 0) return "full";
    if (ledig <= 3) return "nesten-full";
    return "ledig";
  }
  // ISO-dato → norsk dato- og klokkeslett-tekst
export function formaterDatoTid(isoStreng) {
  const dato = new Date(isoStreng);
  return dato.toLocaleString("nb-NO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
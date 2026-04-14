// src/data/klasser.js
// Mock-data for NordicFitness timeplan
// Erstatter backend i MVP-fasen

export const instruktorer = [
    {
      id: "inst-1",
      navn: "Kaja Stang",
      beskrivelse: "Sertifisert gruppetreningsinstruktør med 8 års erfaring.",
    },
    {
      id: "inst-2",
      navn: "Lars Moen",
      beskrivelse: "Spesialist på styrketrening og funksjonell trening.",
    },
    {
      id: "inst-3",
      navn: "Ingrid Dahl",
      beskrivelse: "Yogainstruktør og meditasjonsveileder.",
    },
  ];
  
  export const klasser = [
    {
      id: "kl-1",
      navn: "Yoga Flow",
      dag: "Mandag",
      klokkeslett: "07:00",
      varighet: 60,
      instruktorId: "inst-3",
      niva: "Alle nivåer",
      kapasitet: 15,
      pameldte: 8,
      beskrivelse: "Start uken rolig med bevegelige sekvenser og pust. Passer for alle, uansett erfaring.",
      kategori: "Yoga",
    },
    {
      id: "kl-2",
      navn: "HIIT Cardio",
      dag: "Mandag",
      klokkeslett: "17:30",
      varighet: 45,
      instruktorId: "inst-1",
      niva: "Middels",
      kapasitet: 20,
      pameldte: 20,
      beskrivelse: "Høyintensiv intervaltrening som forbrenner kalorier og øker kondis. Krever grunnleggende kondisjon.",
      kategori: "Cardio",
    },
    {
      id: "kl-3",
      navn: "Styrke & Kondis",
      dag: "Tirsdag",
      klokkeslett: "12:00",
      varighet: 60,
      instruktorId: "inst-2",
      niva: "Middels",
      kapasitet: 16,
      pameldte: 10,
      beskrivelse: "Kombiner styrkeøvelser med kondisjonselementer i en variert og effektiv time.",
      kategori: "Styrke",
    },
    {
      id: "kl-4",
      navn: "Pilates",
      dag: "Onsdag",
      klokkeslett: "09:00",
      varighet: 55,
      instruktorId: "inst-3",
      niva: "Nybegynner",
      kapasitet: 12,
      pameldte: 5,
      beskrivelse: "Fokus på kjernemuskulatur, kroppsholdning og kontrollerte bevegelser. Perfekt for nybegynnere.",
      kategori: "Yoga",
    },
    {
      id: "kl-5",
      navn: "Spinning",
      dag: "Onsdag",
      klokkeslett: "18:00",
      varighet: 45,
      instruktorId: "inst-1",
      niva: "Avansert",
      kapasitet: 18,
      pameldte: 15,
      beskrivelse: "Intens sykling innendørs med variert motstand og tempo. Anbefales for erfarne.",
      kategori: "Cardio",
    },
    {
      id: "kl-6",
      navn: "Funksjonell styrke",
      dag: "Torsdag",
      klokkeslett: "17:00",
      varighet: 60,
      instruktorId: "inst-2",
      niva: "Alle nivåer",
      kapasitet: 14,
      pameldte: 9,
      beskrivelse: "Øvelser som speiler hverdagsbevegelser. Bygger styrke som er nyttig utenfor treningsstudioet.",
      kategori: "Styrke",
    },
    {
      id: "kl-7",
      navn: "Yoga Nidra",
      dag: "Fredag",
      klokkeslett: "08:00",
      varighet: 45,
      instruktorId: "inst-3",
      niva: "Alle nivåer",
      kapasitet: 15,
      pameldte: 7,
      beskrivelse: "Dyp avslapning og bevisst hvile. Avslutt uken med ro og fokus.",
      kategori: "Yoga",
    },
    {
      id: "kl-8",
      navn: "BodyPump",
      dag: "Fredag",
      klokkeslett: "16:30",
      varighet: 60,
      instruktorId: "inst-1",
      niva: "Middels",
      kapasitet: 20,
      pameldte: 18,
      beskrivelse: "Vektbasert gruppetrening til musikk. Effektiv for hele kroppen.",
      kategori: "Styrke",
    },
    {
      id: "kl-9",
      navn: "Zumba",
      dag: "Lørdag",
      klokkeslett: "10:00",
      varighet: 60,
      instruktorId: "inst-1",
      niva: "Alle nivåer",
      kapasitet: 25,
      pameldte: 12,
      beskrivelse: "Dans og trening kombinert! Gøy, energisk og effektivt for alle.",
      kategori: "Cardio",
    },
  ];
  
  // Finn instruktør-objekt fra id
  export function finnInstruktor(instruktorId) {
    return instruktorer.find((i) => i.id === instruktorId) || null;
  }
  
  // Finn klasse-objekt fra id
  export function finnKlasse(klasseId) {
    return klasser.find((k) => k.id === klasseId) || null;
  }
  
  // Hent alle klasser for én bestemt dag
  export function klasserForDag(dag) {
    return klasser.filter((k) => k.dag === dag);
  }
  
  // Dager i uken i riktig rekkefølge
  export const ukedager = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];
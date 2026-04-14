// src/hooks/useBooking.js
// Custom hook for booking-logikk
// Lagrer og henter bookinger fra localStorage

import { useState, useEffect } from "react";

const LAGRINGSNOKKEL = "nordicfitness_bookinger";

export function useBooking() {
  const [bookinger, setBookinger] = useState([]);

  useEffect(() => {
    try {
      const lagret = localStorage.getItem(LAGRINGSNOKKEL);
      if (lagret) {
        const parsed = JSON.parse(lagret);
        setBookinger(parsed);
        console.log(`[useBooking] Lastet ${parsed.length} bookinger fra localStorage`);
      } else {
        console.log("[useBooking] Ingen eksisterende bookinger funnet");
      }
    } catch (feil) {
      console.error("[useBooking] Feil ved lesing fra localStorage:", feil);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LAGRINGSNOKKEL, JSON.stringify(bookinger));
      console.log(`[useBooking] Lagret ${bookinger.length} bookinger`);
    } catch (feil) {
      console.error("[useBooking] Feil ved lagring til localStorage:", feil);
    }
  }, [bookinger]);

  function erBooket(klasseId) {
    return bookinger.some((b) => b.klasseId === klasseId);
  }

  function leggTilBooking(klasseId, brukernavn) {
    if (erBooket(klasseId)) {
      console.warn(`[useBooking] Klasse ${klasseId} er allerede booket`);
      return false;
    }
    const nyBooking = {
      id: `booking-${Date.now()}`,
      klasseId,
      brukernavn,
      tidspunkt: new Date().toISOString(),
    };
    setBookinger((forrige) => [...forrige, nyBooking]);
    console.log("[useBooking] Ny booking opprettet:", nyBooking);
    return true;
  }

  function avbestillBooking(klasseId) {
    setBookinger((forrige) => forrige.filter((b) => b.klasseId !== klasseId));
    console.log(`[useBooking] Booking for klasse ${klasseId} avbestilt`);
  }

  return { bookinger, erBooket, leggTilBooking, avbestillBooking };
}
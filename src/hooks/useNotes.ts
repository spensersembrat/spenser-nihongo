"use client";

import { useState, useEffect, useCallback } from "react";
import { NotesData } from "@/lib/types";

const NOTES_KEY = "nihonjo-notes";

function getStoredNotes(): NotesData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useNotes() {
  const [notes, setNotes] = useState<NotesData>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setNotes(getStoredNotes());
    setLoaded(true);
  }, []);

  const setNote = useCallback((day: number, text: string) => {
    setNotes((prev) => {
      const next = { ...prev, [day]: text };
      localStorage.setItem(NOTES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const getNote = useCallback(
    (day: number) => notes[day] || "",
    [notes]
  );

  return { notes, loaded, setNote, getNote };
}

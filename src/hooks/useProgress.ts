"use client";

import { useState, useEffect, useCallback } from "react";
import { ProgressData, StreakData } from "@/lib/types";

const PROGRESS_KEY = "nihonjo-progress";
const STREAK_KEY = "nihonjo-streak";

function getStoredProgress(): ProgressData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getStoredStreak(): StreakData {
  if (typeof window === "undefined") return { current: 0, longest: 0, lastCompletedAt: "" };
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { current: 0, longest: 0, lastCompletedAt: "" };
  } catch {
    return { current: 0, longest: 0, lastCompletedAt: "" };
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({});
  const [streak, setStreak] = useState<StreakData>({ current: 0, longest: 0, lastCompletedAt: "" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(getStoredProgress());
    const s = getStoredStreak();
    const now = Date.now();
    const last = s.lastCompletedAt ? new Date(s.lastCompletedAt).getTime() : 0;
    const hoursSince = (now - last) / (1000 * 60 * 60);
    if (hoursSince > 48 && s.current > 0) {
      const broken = { ...s, current: 0 };
      setStreak(broken);
      localStorage.setItem(STREAK_KEY, JSON.stringify(broken));
    } else {
      setStreak(s);
    }
    setLoaded(true);
  }, []);

  const completeDay = useCallback((day: number) => {
    setProgress((prev) => {
      const next = { ...prev, [day]: true };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });

    setStreak((prev) => {
      const now = new Date().toISOString();
      const newCurrent = prev.current + 1;
      const newLongest = Math.max(prev.longest, newCurrent);
      const next: StreakData = {
        current: newCurrent,
        longest: newLongest,
        lastCompletedAt: now,
      };
      localStorage.setItem(STREAK_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const uncompleteDay = useCallback((day: number) => {
    setProgress((prev) => {
      const next = { ...prev };
      delete next[day];
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isDayComplete = useCallback(
    (day: number) => !!progress[day],
    [progress]
  );

  const completedCount = Object.values(progress).filter(Boolean).length;

  return {
    progress,
    streak,
    loaded,
    completeDay,
    uncompleteDay,
    isDayComplete,
    completedCount,
  };
}

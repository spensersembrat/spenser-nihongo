"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const SCORE_KEY = "nihonjo-final-score";

const tests = [
  {
    id: 1,
    title: "The 10-Minute Conversation",
    subtitle: "With your tutor",
    instructions:
      "In your next tutor session, ask for a 10-minute unscripted conversation entirely in Japanese. Topics: introduce yourself, talk about your week, discuss a hobby, make a plan together, share an opinion. Tell them not to slow down or switch to English.",
    rubric: [
      "Collapsed before 3 minutes",
      "Survived with heavy English fallback",
      "Survived with occasional English words",
      "Survived with only Japanese, lots of pausing",
      "Flowed naturally with minor stumbles",
    ],
  },
  {
    id: 2,
    title: "Pattern Production",
    subtitle: "Self-administered",
    instructions:
      "Translate each English sentence to Japanese as fast as you can. Give yourself 30 seconds per sentence. Reveal the answer to check. Structure counts even if vocabulary isn't perfect.",
    sentences: [
      { english: "I am American.", answer: "わたしは アメリカじんです。", patterns: [1] },
      { english: "Where is the station?", answer: "えきは どこですか？", patterns: [5] },
      { english: "I ate ramen at a restaurant yesterday.", answer: "きのう レストランで ラーメンを たべました。", patterns: [9, 13] },
      { english: "I don't want to go.", answer: "いきたくないです。", patterns: [25, 14] },
      { english: "Coffee is more delicious than tea.", answer: "おちゃより コーヒーのほうが おいしいです。", patterns: [26] },
      { english: "Please wait here.", answer: "ここで まってください。", patterns: [29] },
      { english: "Can you speak English?", answer: "えいごを はなすことが できますか？", patterns: [36] },
      { english: "I think Kyoto is beautiful because it's quiet.", answer: "きょうとは しずかだから きれいだと おもいます。", patterns: [38, 40] },
      { english: "If it rains tomorrow, let's watch a movie.", answer: "あした あめが ふったら、えいがを みましょう。", patterns: [42, 47] },
      { english: "You should try eating sushi — it's easy to eat and not expensive.", answer: "すしを たべてみた ほうがいいです。たべやすくて たかくないです。", patterns: [35, 48, 46] },
    ],
    rubric: [
      "0–3 correct",
      "4–5 correct",
      "6–7 correct",
      "8–9 correct",
      "10 correct",
    ],
  },
  {
    id: 3,
    title: "Listening Comprehension",
    subtitle: "Real Japanese media",
    instructions:
      "Watch a 5-minute clip of Terrace House (or any natural Japanese conversation) with no subtitles. Afterward, answer: What was the general topic? List every word or phrase you caught. Can you summarize the gist?",
    rubric: [
      "Understood nothing",
      "Caught a few isolated words",
      "Got the general topic",
      "Got the topic + several specific details",
      "Followed the conversation with only occasional gaps",
    ],
  },
  {
    id: 4,
    title: "Real-World Interaction",
    subtitle: "Choose one option",
    instructions:
      "Do ONE: (a) Order a meal at a Japanese restaurant entirely in Japanese, (b) Have a 5-minute text conversation on HelloTalk with a Japanese speaker without a dictionary, or (c) Leave a voice message in Japanese for your tutor describing your weekend.",
    rubric: [
      "Couldn't start",
      "Started but switched to English",
      "Completed with some struggle",
      "Completed smoothly",
      "The other person didn't realize you were a beginner",
    ],
  },
  {
    id: 5,
    title: "The 2-Minute Self-Recording",
    subtitle: "Record yourself",
    instructions:
      "Record yourself speaking for 2 minutes covering: who you are, where you're from, what you do, a hobby, why you're learning Japanese, and one opinion. Play it back.",
    rubric: [
      "Couldn't fill 30 seconds",
      "Filled 1 minute with long pauses",
      "Filled 2 minutes with frequent pauses",
      "Filled 2 minutes with occasional pauses",
      "Flowed naturally for 2 minutes",
    ],
  },
];

function getScoreMessage(total: number) {
  if (total >= 20)
    return "You're conversational. The 90 days worked. You can genuinely hold a basic conversation in Japanese.";
  if (total >= 15)
    return "You have a strong foundation. Your pattern knowledge is solid — you need more listening exposure and real-world practice. Keep going.";
  if (total >= 10)
    return "You're functional but not fluent. You can construct sentences and handle simple interactions. Focus on listening and conversation practice.";
  return "You have the building blocks but need more time. Consider re-doing Phases 5–7 and adding more tutor sessions.";
}

export default function FinalCheckPage() {
  const [scores, setScores] = useState<Record<number, number>>({});
  const [expandedSentence, setExpandedSentence] = useState<number | null>(null);
  const [savedScore, setSavedScore] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SCORE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setScores(data.scores || {});
        setSavedScore(data.total ?? null);
      }
    } catch { /* ignore */ }
  }, []);

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const allScored = Object.keys(scores).length === 5;

  const saveScore = () => {
    const data = { scores, total, date: new Date().toISOString() };
    localStorage.setItem(SCORE_KEY, JSON.stringify(data));
    setSavedScore(total);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <p className="text-4xl mb-3">🎌</p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Final Check
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-lg mx-auto">
            5 tests to measure your conversational Japanese ability. Score
            yourself honestly — this rubric is aspirational so it stays useful
            as you grow.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200 mb-10">
          After 90 days of consistent study, a score of 15–20 means the course
          worked. Listening (Test 3) will likely be your lowest — that&apos;s
          normal. Listening fluency requires hundreds of hours of input and is
          the last skill to develop.
        </div>

        <div className="space-y-8">
          {tests.map((test) => (
            <div
              key={test.id}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                      Test {test.id}
                    </p>
                    <h2 className="text-xl font-bold">{test.title}</h2>
                    <p className="text-sm text-stone-500">{test.subtitle}</p>
                  </div>
                  {scores[test.id] && (
                    <span className="text-2xl font-bold">
                      {scores[test.id]}/5
                    </span>
                  )}
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-300 mb-4">
                  {test.instructions}
                </p>

                {test.sentences && (
                  <div className="mb-4 space-y-2">
                    {test.sentences.map((s, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-stone-100 dark:border-stone-800 p-3"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            {i + 1}. {s.english}
                          </p>
                          <button
                            onClick={() =>
                              setExpandedSentence(
                                expandedSentence === i ? null : i
                              )
                            }
                            className="text-xs text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 underline"
                          >
                            {expandedSentence === i ? "Hide" : "Reveal"}
                          </button>
                        </div>
                        {expandedSentence === i && (
                          <div className="mt-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                            <p className="jp text-lg">{s.answer}</p>
                            <p className="text-xs text-stone-400 mt-1">
                              Patterns: {s.patterns.map((p) => `#${p}`).join(", ")}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
                    Self-score
                  </p>
                  <div className="flex gap-2">
                    {test.rubric.map((label, i) => {
                      const score = i + 1;
                      const selected = scores[test.id] === score;
                      return (
                        <button
                          key={score}
                          onClick={() =>
                            setScores((prev) => ({ ...prev, [test.id]: score }))
                          }
                          className={`flex-1 p-2 rounded-lg border text-center transition-colors ${
                            selected
                              ? "border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900"
                              : "border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
                          }`}
                          title={label}
                        >
                          <span className="text-lg font-bold">{score}</span>
                          <p className="text-[9px] leading-tight mt-0.5 line-clamp-2 opacity-70">
                            {label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allScored && (
          <div className="mt-10 p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center">
            <p className="text-5xl font-bold mb-2">{total}/25</p>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-md mx-auto mb-4">
              {getScoreMessage(total)}
            </p>
            <button
              onClick={saveScore}
              className="px-6 py-2.5 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {savedScore !== null ? "Score saved ✓" : "Save score"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

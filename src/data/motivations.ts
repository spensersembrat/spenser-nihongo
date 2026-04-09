export type Motivation = {
  text: string;
  dynamic?: boolean;
};

export const motivations: Motivation[] = [
  {
    text: "You're 27. Language research (Hartshorne et al., 2018 — the largest language-learning study ever) shows your brain won't meaningfully slow down at grammar learning until your mid-30s. You're in the sweet spot.",
  },
  {
    text: "On Day 1 you knew zero Japanese. You now own {patterns} sentence machines and {vocab} words. That's {sentences} possible sentences.",
    dynamic: true,
  },
  {
    text: "Every native Japanese speaker once knew exactly as much Japanese as you do right now. They just kept going.",
  },
  {
    text: "Consistency beats talent. Showing up for 30 minutes today matters more than a 5-hour cram session next week.",
  },
  {
    text: "Japanese has only 5 vowel sounds and almost perfectly regular grammar. You picked one of the most learnable languages for pattern-based thinking.",
  },
  {
    text: "The 'click' — where you stop translating and start thinking in Japanese — comes from exactly what you're doing: building patterns until they're automatic.",
  },
  {
    text: "You've completed {completed} of 90 days. That's {percent}% of the course. Every day you show up, you're closer.",
    dynamic: true,
  },
  {
    text: "Most language learners quit in the first 2 weeks. You're still here. That already puts you ahead of the majority.",
  },
  {
    text: "The patterns you're learning aren't just for this course. They're the same patterns native speakers use millions of times a day. You're building real Japanese.",
  },
  {
    text: "Adults learn grammar faster than children. What kids have is time and immersion. What you have is pattern recognition and intentional practice. Both work.",
  },
  {
    text: "Your current streak is {streak} days. Your longest is {longestStreak}. Keep building.",
    dynamic: true,
  },
  {
    text: "In 90 days at 30-60 minutes per day, you'll have invested 45-90 hours in Japanese. That's more focused study than most 'I tried to learn Japanese' people ever do.",
  },
  {
    text: "The hardest part of learning a language isn't the language. It's showing up every day. You're doing the hard part right now.",
  },
  {
    text: "Remember: this course is the foundation. Once you're in Japan surrounded by the language, everything you've built here accelerates.",
  },
];

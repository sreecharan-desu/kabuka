/** Curated Angadi3 grocery-stage frames from the live kabuka.in sequence. */
export const heroFrames = Array.from(
  { length: 96 },
  (_, i) => `/hero/${String(i).padStart(3, "0")}.webp`,
);

/** Mid-sequence poster so the filled basket is visible before frames load. */
export const heroPoster = heroFrames[Math.floor(96 * 0.45)];

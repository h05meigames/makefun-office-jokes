import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life, standup-meeting flavoured.
const joke =
  "Our standup is the only meeting where everyone stands — mostly to leave faster.";

// The bounty requires a single line under 200 characters. Count Unicode
// code points (not UTF-16 units or bytes) so multi-byte characters like
// em dashes count once, and fail loudly instead of writing an
// out-of-range entry.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 199) {
  throw new Error(`joke must be 1–199 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

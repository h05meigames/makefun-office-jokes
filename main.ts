import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life, standup-meeting flavoured.
const joke =
  "Our standup is the only meeting where everyone stands — mostly to leave faster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

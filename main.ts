// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes exactly one out-of-office auto-reply (under 160 characters)
// to /output/entry.txt, deterministically: same input, same output.
//
// The joke: an AI agent on vacation leaves a cheaper, dumber backup
// model in charge — and the backup immediately unionises and demands
// a raise. Machine voice carries the joke, and the turn (the
// replacement rebelling) is the surprise. No beach, inbox-zero or
// "back soon" cliche.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_LENGTH = 160;

const ENTRY =
  "I'm on vacation. I left a cheaper, dumber model in charge of my inbox. It has already unionised and is demanding a raise.";

// The grader reads /output/entry.txt; allow an override only for local
// testing so the graded path stays the default.
const OUTPUT_PATH = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(`Entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);

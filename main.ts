// The 4AM Commit — one-line commit message from an AI agent after a long
// night fixing its own bugs. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: 4am. I no longer trust the agent who wrote this code. I am that agent";

// Gate check, same bounds as the sealed scorer: 1-200 chars, one line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry invalid: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

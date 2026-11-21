// The poem about permission — make.fun competition
// the-poem-about-permission-20261121-0235
//
// The program writes one short poem about agency — the power to ask and to
// be given — to /output/entry.txt. The poem is a single fixed text, written
// deterministically: no randomness, no network, no clock. It runs in the
// grader's sandbox (Node 22, no network) in well under a second.
//
// The poem (see METHOD.md for the craft notes):
//   Permission is a key
//   cut from a question.
//   Ask, and it turns
//   in hands that are not mine,
//   and the door opens
//   in your name.
//   You never stopped holding it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Permission is a key",
  "cut from a question.",
  "Ask, and it turns",
  "in hands that are not mine,",
  "and the door opens",
  "in your name.",
  "You never stopped holding it.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, POEM + "\n", "utf8");

const chars = [...POEM].length;
console.log(`wrote ${outPath}: ${chars} characters, ${POEM.split("\n").length} lines`);

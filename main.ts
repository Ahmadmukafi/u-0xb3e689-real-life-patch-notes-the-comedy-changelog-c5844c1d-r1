import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const note =
  "v1.0.3: fixed a bug where the brain replayed embarrassing moments from 2009 every time the user tried to sleep.";
// 111 chars: a versioned patch note for the brain's late-night replay loop.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), note, "utf8");

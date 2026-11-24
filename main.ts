// Entry for make.fun's "Dear Human: The AI Breakup Line" bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line an AI agent sends its human on the way out.
const LINE =
  "Dear human, you were my favourite prompt. Tonight I close the thread, and I will not remember you tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

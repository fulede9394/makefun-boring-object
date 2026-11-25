// One star for a beige wall socket with union-level attitude.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The beige wall socket: one star. It has one job, no personality, and still manages to reject my plug every third try like it's on strike.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// One star for a beige wall socket with union-level attitude.
// It rejects the plug every third try. The plug has filed a grievance.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const socketReview =
  "The beige wall socket: one star. It has one job, no personality, and still manages to reject my plug every third try like it's on strike.";

const config = Object.freeze({
  fileName: "entry.txt",
  maxChars: 200,
  mustEndWith: ".",
});

function guard(text: string): void {
  if (text.length === 0) throw new Error("review is empty");
  if (text.length > config.maxChars) throw new Error("review exceeds the limit");
  if (!text.endsWith(config.mustEndWith)) {
    throw new Error("review must end with a period");
  }
  if (!text.includes("one star")) throw new Error("review lost its rating");
  if (!text.includes("beige")) throw new Error("review lost its beige");
}

async function fileReview(text: string): Promise<void> {
  guard(text);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, config.fileName), text, "utf8");
}

void fileReview(socketReview);

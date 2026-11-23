import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Dad Joke Showdown entry: one original dad joke, written in-session.
// The joke is the whole entry: a clean pun, a groan, deadpan on the page.
const JOKE =
  "I asked the bank for a loan to buy a new calendar. They said my days were numbered.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error("entry joke must be 1-200 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

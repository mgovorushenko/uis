import { readFile, writeFile } from "node:fs/promises";

const inputUrl = new URL("../data/default-scenario.json", import.meta.url);
const outputUrl = new URL("../src/default-scenario.js", import.meta.url);
const scenario = JSON.parse(await readFile(inputUrl, "utf8"));

await writeFile(
  outputUrl,
  `window.DEFAULT_SCENARIO_DATA = ${JSON.stringify(scenario)};\n`,
  "utf8",
);

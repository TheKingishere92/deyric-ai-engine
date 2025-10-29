import { readFileSync } from "node:fs";
try {
  JSON.parse(readFileSync("vercel.json","utf8"));
  console.log("OK JSON");
} catch (e) {
  console.error("JSON ERROR:", e.message);
  process.exit(1);
}

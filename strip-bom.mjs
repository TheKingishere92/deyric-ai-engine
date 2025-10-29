import { readFileSync, writeFileSync } from "node:fs";
let s = readFileSync("vercel.json","utf8");
if (s.charCodeAt(0) === 65279) {
  s = s.slice(1);
}
writeFileSync("vercel.json", s, { encoding: "utf8" });

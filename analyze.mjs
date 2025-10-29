import { readFileSync } from "node:fs";
const s = readFileSync("vercel.json","utf8");
console.log(JSON.stringify(s.slice(0,20)));
console.log([...s.slice(0,5)].map(c=>c.charCodeAt(0)));

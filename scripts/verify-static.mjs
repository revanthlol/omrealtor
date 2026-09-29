import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "site.webmanifest",
  "favicon.svg",
  "img/og-cover.png",
  "fonts/geist-latin.woff2",
  "vendor/gsap.min.js",
  "vendor/ScrollTrigger.min.js"
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`Missing required files: ${missing.join(", ")}`);

const html = readFileSync("index.html", "utf8");
const checks = [
  [/<title>OM Enterprises \| Property Advisor in Ulwe, Navi Mumbai<\/title>/, "unique title"],
  [/<meta name="description"/, "meta description"],
  [/<link rel="canonical" href="https:\/\/omrealtor\.com\/">/, "canonical URL"],
  [/<script type="application\/ld\+json">/, "structured data"],
  [/<h1\b/g, "single h1"],
  [/prefers-reduced-motion/, "reduced motion support"],
  [/href="https:\/\/wa\.me\/919820987706/, "WhatsApp contact"],
  [/href="tel:\+919820987706"/, "phone contact"]
];

for (const [pattern, label] of checks) {
  const matches = html.match(pattern);
  if (!matches) throw new Error(`Missing ${label}`);
  if (label === "single h1" && matches.length !== 1) throw new Error(`Expected one h1, found ${matches.length}`);
}

const banned = ["Baseline", "Tennis Club", "555-0148", "Marco Vidal", "Vite + React", "Lorem ipsum"];
for (const value of banned) {
  if (html.includes(value)) throw new Error(`Found stale or placeholder content: ${value}`);
}

if (html.includes("—") || html.includes("–")) throw new Error("Found a banned dash character in index.html");

console.log(`PASS: ${requiredFiles.length} required files and ${checks.length} production checks verified`);

import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "index.html",
  "projects.html",
  "services.html",
  "ulwe.html",
  "about.html",
  "contact.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "site.webmanifest",
  "favicon.svg",
  "img/og-cover.png",
  "fonts/geist-latin.woff2",
  "assets/css/site.css",
  "assets/js/site.js"
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`Missing required files: ${missing.join(", ")}`);

const pages = ["index.html", "projects.html", "services.html", "ulwe.html", "about.html", "contact.html"];
const titles = new Set();

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title) throw new Error(`Missing title in ${page}`);
  if (titles.has(title)) throw new Error(`Duplicate title: ${title}`);
  titles.add(title);
  if (!/<meta name="description"/.test(html)) throw new Error(`Missing description in ${page}`);
  if (!/<link rel="canonical"/.test(html)) throw new Error(`Missing canonical in ${page}`);
  if (!/<script type="application\/ld\+json">/.test(html)) throw new Error(`Missing structured data in ${page}`);
  if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error(`Expected one h1 in ${page}`);
  if (!/href="https:\/\/wa\.me\/919137637158/.test(html)) throw new Error(`Missing WhatsApp contact in ${page}`);
  if (!/href="tel:\+919137637158"/.test(html)) throw new Error(`Missing primary phone contact in ${page}`);
  if (!/href="tel:\+919820987706"/.test(html)) throw new Error(`Missing alt phone contact in ${page}`);
  if (html.includes("—") || html.includes("–")) throw new Error(`Found a banned dash character in ${page}`);
  if (/ओम एंटरप्राइजेज/.test(html)) throw new Error(`Found removed Hindi wordmark in ${page}`);
}

const css = readFileSync("assets/css/site.css", "utf8");
if (!css.includes("position: fixed") || !css.includes("backdrop-filter")) throw new Error("Persistent glass navigation styles are missing");
if (!css.includes("prefers-reduced-motion")) throw new Error("Reduced motion support is missing");

const banned = ["Baseline", "Tennis Club", "555-0148", "Marco Vidal", "Vite + React", "Lorem ipsum"];
for (const value of banned) {
  for (const page of pages) {
    if (readFileSync(page, "utf8").includes(value)) throw new Error(`Found stale or placeholder content in ${page}: ${value}`);
  }
}
console.log(`PASS: ${requiredFiles.length} required files and ${pages.length} production pages verified`);

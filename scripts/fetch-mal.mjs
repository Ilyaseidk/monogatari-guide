#!/usr/bin/env node
// Prebuilds data/mal.json (season covers + character portraits from MyAnimeList via Jikan),
// so visitors never hit the Jikan API themselves.
// Usage:  node scripts/fetch-mal.mjs        (Node 18+, no dependencies)
import { readFile, writeFile, mkdir } from "node:fs/promises";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
vm.runInNewContext(await readFile(path.join(root, "js/data.js"), "utf8"), ctx);
const { ANIME, CHARACTERS } = ctx.window;

const JIKAN = "https://api.jikan.moe/v4";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/ou/g, "o").replace(/uu/g, "u").replace(/[^a-z]/g, "");
const firstWord = (q) => norm(q.split(/[:(]/)[0]);

async function jikan(p) {
  for (let i = 0; i < 5; i++) {
    await sleep(700);
    const r = await fetch(JIKAN + p);
    if (r.status === 429) { await sleep(2000); continue; }
    if (!r.ok) throw new Error(`${r.status} ${p}`);
    return r.json();
  }
  throw new Error("rate limited: " + p);
}
const pick = (d) => ({ id: d.mal_id, img: d.images?.webp?.large_image_url || d.images?.jpg?.large_image_url, url: d.url });

async function resolveAnime(e) {
  if (e.mal) {
    try {
      const { data } = await jikan(`/anime/${e.mal}`);
      const titles = [data.title, data.title_english, ...(data.titles || []).map((t) => t.title)].map(norm).join("|");
      if (titles.includes(firstWord(e.q))) return pick(data);
      console.warn(`  id ${e.mal} doesn't look like "${e.q}", searching instead`);
    } catch (err) { console.warn("  " + err.message); }
  }
  const { data } = await jikan(`/anime?q=${encodeURIComponent(e.q)}&limit=10`);
  const want = norm(e.q);
  const hit = data.find((d) => norm(d.title) === want || norm(d.title_english) === want) || data[0];
  return hit ? pick(hit) : null;
}

const out = { generated: new Date().toISOString(), anime: {}, characters: {} };
const memo = {};
for (const [key, e] of Object.entries(ANIME)) {
  const k = e.mal || e.q;
  try { memo[k] ??= await resolveAnime(e); } catch (err) { console.warn("  " + err.message); memo[k] = null; }
  if (memo[k]) out.anime[key] = memo[k];
  console.log(`${memo[k] ? "✓" : "✗"} ${e.title}${memo[k] ? `  (MAL ${memo[k].id})` : ""}`);
}

const castFrom = [...new Set(["bake", "nise", "hana", "tsuki", "owari", "owari2", "zoku", "oms"].map((k) => out.anime[k]?.id).filter(Boolean))];
for (const id of castFrom) {
  if (CHARACTERS.every((c) => out.characters[c.id])) break;
  let data;
  try { ({ data } = await jikan(`/anime/${id}/characters`)); } catch (err) { console.warn("  " + err.message); continue; }
  for (const c of CHARACTERS) {
    if (out.characters[c.id]) continue;
    const hit = data.find((d) => norm(d.character.name) === norm(c.mal));
    if (hit) out.characters[c.id] = { id: hit.character.mal_id, img: hit.character.images?.webp?.image_url || hit.character.images?.jpg?.image_url, url: hit.character.url };
  }
}
for (const c of CHARACTERS) console.log(`${out.characters[c.id] ? "✓" : "✗"} ${c.name}`);

await mkdir(path.join(root, "data"), { recursive: true });
await writeFile(path.join(root, "data/mal.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`\nWrote data/mal.json: ${Object.keys(out.anime).length} anime, ${Object.keys(out.characters).length} characters.`);
